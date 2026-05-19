# Сайт Артёма Лизгаро

MVP русскоязычного портфолио-сайта в стиле `Dark AI Operator + Neon Lime + Editorial Portfolio`.

Текущая версия строится только по master PRD:

```txt
docs/MASTER_PRD_Artem_Lizgaro_final_site_social.md
```

Главная логика: Артём помогает фаундерам, экспертам и проектам с аудиторией превратить внимание в заявки и деньги через понятный путь к действию.

## Запуск

Команды одинаково подходят для PowerShell, Command Prompt и Warp.

```powershell
cd C:\LA\life-os-v0.3\Lizgaro_site
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

- `docs/MASTER_PRD_Artem_Lizgaro_final_site_social.md` — главный PRD.
- `docs/agent_checkpoint.md` — текущий статус работы агента.
- `data/site.ts` — имя, hero, SEO, контакты, соцсети.
- `data/navigation.ts` — навигация.
- `data/services.ts` — услуги.
- `data/projects.ts` — проекты и честные статусы.
- `data/offers.ts` — форматы работы.
- `data/faq.ts` — FAQ.

## Блог

Подготовлена архитектура:

- `content/blog/_draft-example.md` — пример статьи со статусом `draft`.
- `app/blog` — публичный блог.
- `app/sitemap.ts`, `app/robots.ts`, `app/rss.xml/route.ts`, `app/llms.txt/route.ts` — SEO/GEO база.

Важно: статьи со статусом `draft` не выводятся публично.

Рекомендуемый поток для новых статей:

```txt
..\departments\content-seo\inbox
-> ..\departments\content-seo\ready-for-blog
-> content\blog
```

Файл в `content\blog` со статусом `published` становится публичным после успешной проверки сайта.

Базовый формат статьи:

```txt
лид -> суть -> где теряется человек -> сценарий решения -> связь с подходом -> действие -> вывод
```

Markdown-рендерер автоматически усиливает:

- первый абзац как лид;
- `##` как нумерованные секции;
- строки вида `**Маркер:** текст` как заметки;
- списки, шаги и цитаты как визуальные опоры.

## Контакты

Все основные CTA ведут в Telegram:

```txt
https://t.me/Artem_Liz
```
