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

export const updates = ['message', 'widget_query'];

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

export async function handleUpdate(token: string, update: Update): Promise<void> {
  const query = update.widget_query;
  if (query) {
    const data = query.chat?.type === 'private' && query.type.type === 'data'
      ? await globalThis.nickWordle.command(query.data)
      : '0';
    await telegram(token, 'answerWidgetQuery', { widget_query_id: query.id, data });
    return;
  }

  const message = update.message;
  if (message?.chat.type !== 'private' || !/^\/(start|wordle)(?:\s|$)/i.test(message.text ?? '')) return;

  const html = readFileSync(join(process.cwd(), 'wordle.html'), 'utf8')
    .replace(/<script src="\.\/data\/(?:guesses|wordle)\.js"><\/script>\r?\n/g, '')
    .replaceAll('\r\n', '\n')
    .replace(/^ +/gm, '');
  const locale = /^ru(?:-|$)/i.test(message.from?.language_code ?? 'ru') ? 'ru' : 'en';
  const text = globalThis.nickWordle.copy[locale];
  await telegram(token, 'sendWidget', {
    chat_id: message.chat.id,
    html,
    width: 360,
    caption: text.title,
    chat_data: JSON.stringify({ locale, text }),
    allow_queries: true,
  });
}
