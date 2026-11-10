# Игры Ника

`nicks_games.html` — хаб, `wordle.html` — Wordle.

В Telegram команда `/start` отправляет виджет со ссылкой на Wordle, а `/wordle` даёт кнопку запуска игры. Бот берёт публичный домен из `TELEGRAM_GAME_URL` или из `VERCEL_PROJECT_PRODUCTION_URL`, если в Vercel включены системные переменные. При локальном запуске бота укажи в `TELEGRAM_GAME_URL` публичный HTTPS-адрес опубликованного проекта.
