import { setTimeout } from 'node:timers/promises';
import { botToken, handleUpdate, telegram, updates } from './telegram.ts';
import type { Update } from './telegram.ts';

async function main() {
  const token = botToken();
  const bot = await telegram<{ username: string }>(token, 'getMe');
  const webhook = await telegram<{ url: string }>(token, 'getWebhookInfo');
  if (webhook.url) {
    throw new Error('У бота активен вебхук. Для локального запуска используй другого тестового бота или отключи вебхук.');
  }

  console.log(`Бот запущен. Отправь /start в https://t.me/${bot.username}`);
  let offset: number | undefined;
  for (;;) {
    try {
      const batch = await telegram<Update[]>(token, 'getUpdates', {
        offset,
        timeout: 25,
        allowed_updates: updates,
      }, 32_000);
      for (const update of batch) {
        await handleUpdate(token, update);
        offset = update.update_id + 1;
      }
    } catch (error) {
      console.error(error instanceof Error ? error.message : 'Ошибка обработки обновления.');
      await setTimeout(2000);
    }
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : 'Не удалось запустить бота.');
  process.exitCode = 1;
});
