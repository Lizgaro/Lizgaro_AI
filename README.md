# Портфолио Артёма Лизгаро

MVP русскоязычного портфолио-сайта в стиле `Dark AI Operator + Neon Lime + Editorial Portfolio`.

Текущая версия усиливает позиционирование вокруг монетизации личного бренда, продукта или бизнеса:
сайт, Telegram-бот, воронка продаж, AI-маркетинг, контент и SEO/GEO.

## Запуск

Команды одинаково подходят для PowerShell, Command Prompt и Warp.

```powershell
npm install
npm run dev
```

После запуска открой:

```txt
http://localhost:3000
```

Если порт `3000` занят, Next.js предложит другой порт.

## Проверка

```powershell
npm run lint
npm run build
```

`npm run lint` сейчас запускает TypeScript-проверку через `tsc --noEmit`.

## Где менять контент

Основные тексты вынесены в `data/`:

- `data/site.ts` — имя, hero, SEO, контакты, соцсети.
- `data/navigation.ts` — навигация.
- `data/services.ts` — услуги.
- `data/projects.ts` — проекты и честные статусы.
- `data/skills.ts` — навыки.
- `data/offers.ts` — форматы работы.
- `data/faq.ts` — FAQ.

## Блог и Journal

Подготовлена архитектура:

- `content/blog/_draft-example.md` — пример статьи со статусом `draft`.
- `app/blog` — публичный блог.
- `app/journal` — LiveOS Journal.
- `app/sitemap.ts`, `app/robots.ts`, `app/rss.xml/route.ts`, `app/llms.txt/route.ts` — SEO/GEO база.

Важно: статьи со статусом `draft` не выводятся публично.

## Контакты

Все основные CTA ведут в Telegram:

```txt
https://t.me/Artem_Liz
```
