import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import '../data/guesses.js';
import '../data/wordle.js';

declare global {
  var nickWordle: {
    command(data: string): Promise<string>;
    copy: Record<'ru' | 'en', Record<string, string>>;
  };
}

export type Update = {
  update_id: number;
  inline_query?: { id: string; query: string };
  callback_query?: { id: string; game_short_name?: string };
  message?: {
    chat: { id: number; type: string };
    from?: { language_code?: string };
    text?: string;
  };
  widget_query?: {
    id: string;
    chat?: { type: string };
    data: string;
    type: { type: string };
  };
};

type TelegramResult<T> = { ok: true; result: T } | { ok: false; description?: string };

export const updates = ['message', 'widget_query', 'inline_query', 'callback_query'];

export function botToken(): string {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  if (!token || !/^\d+:[A-Za-z0-9_-]+$/.test(token)) {
    throw new Error('Укажи TELEGRAM_BOT_TOKEN в .env или в переменных окружения.');
  }
  return token;
}

export async function telegram<T>(
  token: string,
  method: string,
  payload: Record<string, unknown> = {},
  timeout = 8000,
): Promise<T> {
  let result: TelegramResult<T>;
  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(timeout),
    });
    result = await response.json() as TelegramResult<T>;
  } catch {
    throw new Error(`${method}: не удалось получить ответ от Telegram.`);
  }

  if (!result.ok) {
    const detail = (result.description ?? 'неизвестная ошибка').replaceAll(token, '[token]');
    throw new Error(`${method}: ${detail}`);
  }
  return result.result;
}

function publicUrl(value: string | undefined): URL | null {
  const url = URL.parse(value?.trim() ?? '');
  return url?.protocol === 'https:' && !url.username && !url.password
    && !url.searchParams.has('x-vercel-protection-bypass') ? url : null;
}

export async function handleUpdate(token: string, update: Update): Promise<void> {
  const inline = update.inline_query;
  const callback = update.callback_query;
  if (inline || callback) {
    const game = process.env.TELEGRAM_GAME_SHORT_NAME?.trim();
    const url = publicUrl(process.env.TELEGRAM_GAME_URL);
    const enabled = game && url;

    if (inline) {
      const matches = 'wordle'.startsWith(inline.query.trim().toLowerCase());
      await telegram(token, 'answerInlineQuery', {
        inline_query_id: inline.id,
        results: enabled && matches ? [{ type: 'game', id: game, game_short_name: game }] : [],
        cache_time: 0,
      });
    } else if (enabled && callback?.game_short_name === game) {
      await telegram(token, 'answerCallbackQuery', { callback_query_id: callback.id, url: url.href });
    }
    return;
  }

  const query = update.widget_query;
  if (query) {
    const data = query.chat?.type === 'private' && query.type.type === 'data'
      ? await globalThis.nickWordle.command(query.data)
      : '0';
    await telegram(token, 'answerWidgetQuery', { widget_query_id: query.id, data });
    return;
  }

  const message = update.message;
  if (message?.chat.type !== 'private') return;
  const command = /^\/(start|wordle)(?:\s|$)/i.exec(message.text ?? '')?.[1]?.toLowerCase();
  if (!command) return;
  const locale = /^ru(?:-|$)/i.test(message.from?.language_code ?? 'ru') ? 'ru' : 'en';
  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const site = publicUrl(process.env.TELEGRAM_GAME_URL)
    ?? publicUrl(productionHost && `https://${productionHost}`);
  if (!site) {
    await telegram(token, 'sendMessage', {
      chat_id: message.chat.id,
      text: locale === 'ru' ? 'Адрес игр пока не настроен.' : 'The games URL has not been configured yet.',
    });
    return;
  }

  const pageUrl = (file: string) => new URL(`/${file}?lang=${locale}`, site).href;
  if (command === 'wordle') {
    await telegram(token, 'sendMessage', {
      chat_id: message.chat.id,
      text: 'Wordle',
      reply_markup: {
        inline_keyboard: [[{
          text: globalThis.nickWordle.copy[locale].play,
          web_app: { url: pageUrl('wordle.html') },
        }]],
      },
    });
    return;
  }

  const html = readFileSync(join(process.cwd(), 'nicks_games.html'), 'utf8')
    .replace('href="./wordle.html"', `href="${pageUrl('wordle.html')}"`);
  await telegram(token, 'sendWidget', {
    chat_id: message.chat.id,
    html,
    width: 360,
    caption: globalThis.nickWordle.copy[locale].title,
    chat_data: locale,
  });
}
