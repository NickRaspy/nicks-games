import { botToken, telegram, updates } from './telegram.ts';

async function main() {
  const url = URL.parse(process.argv[2] ?? '');
  if (url?.protocol !== 'https:' || url.username || url.password || url.pathname !== '/api/telegram') {
    throw new Error('Укажи адрес вебхука: npm run webhook -- https://<проект>.vercel.app/api/telegram');
  }
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET ?? '';
  if (!/^[A-Za-z0-9_-]{1,256}$/.test(secret)) {
    throw new Error('Укажи в .env тот же TELEGRAM_WEBHOOK_SECRET, что и в Vercel.');
  }

  await telegram(botToken(), 'setWebhook', {
    url: url.href,
    secret_token: secret,
    allowed_updates: updates,
  });
  console.log('Вебхук установлен. Отправь /start боту в Telegram.');
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : 'Не удалось установить вебхук.');
  process.exitCode = 1;
});
