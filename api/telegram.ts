import { timingSafeEqual } from 'node:crypto';
import { botToken, handleUpdate } from '../src/telegram.ts';
import type { Update } from '../src/telegram.ts';

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== 'POST') {
      return new Response(null, { status: 405, headers: { Allow: 'POST' } });
    }

    const expected = Buffer.from(process.env.TELEGRAM_WEBHOOK_SECRET ?? '');
    if (!expected.length) return new Response(null, { status: 503 });
    const supplied = Buffer.from(request.headers.get('X-Telegram-Bot-Api-Secret-Token') ?? '');
    if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) {
      return new Response(null, { status: 403 });
    }

    let update: Update;
    try {
      update = await request.json() as Update;
      if (!Number.isInteger(update?.update_id)) return new Response(null, { status: 400 });
    } catch {
      return new Response(null, { status: 400 });
    }

    try {
      await handleUpdate(botToken(), update);
      return new Response(null, { status: 204 });
    } catch (error) {
      console.error(error instanceof Error ? error.message : 'Ошибка обработки обновления.');
      return new Response(null, { status: 502 });
    }
  },
};
