# PORTFOLIO_CURRENT_STATUS.md

Дата: 2026-05-13
Проект: `C:\LA\life-os-v0.3\portfolio-site`

## Суть

Портфолио переведено из перегруженной внутренней системы в простую внешнюю витрину: услуги, проекты, блог, контакт. Текущий блок добавил контактную анкету, draft-статью Mari Nails, SEO/GEO-поля для статьи, лёгкую обложку и визуальную полировку.

## Уже сделано

- Создан главный PRD: `C:\LA\life-os-v0.3\PORTFOLIO_PRD_FULL_CODEX.md`.
- Создан `PORTFOLIO_SIMPLIFY_PRD.md` в проекте.
- Убраны публичные “Фазы” и большой Journal-блок.
- Навигация сведена к понятным пунктам.
- Hero сокращён и сфокусирован на монетизации.
- Проекты разделены на:
  - “Что развиваю сейчас”;
  - “Что уже делал”.
- Статусы проектов переписаны во внешний язык:
  - “Действующий проект”;
  - “Моя внутренняя система”;
  - “Продукт в разработке”;
  - “Маркетинговая модель”;
  - “Внутренний инструмент”;
  - “Упаковка направления”.
- Mari Nails выделен как главный действующий проект.
- Life OS переписан через боль, решение и пользу.
- Personal Growth OS подан как продукт в разработке.
- Блоговая архитектура готова:
  - `/blog`;
  - `/blog/[slug]`;
  - категории;
  - теги;
  - `content/blog`;
  - `lib/blog.ts`;
  - draft-файлы не публикуются.
- SEO/GEO основы готовы:
  - sitemap;
  - robots;
  - rss;
  - llms.txt;
  - metadata;
  - BlogPosting JSON-LD только для опубликованных статей.
- Заголовок проектов упрощён:
  - было: “Проекты без лишней внутренней кухни”;
  - стало: “Проекты и кейсы”.
- Добавлена рабочая почта: `lizgaro13@gmail.com`.
- Добавлена контактная анкета:
  - имя;
  - контакт;
  - цель обращения;
  - стадия проекта;
  - короткое сообщение;
  - fallback на Telegram/email.
- Создан API route `/api/contact`:
  - отправка заявки в Telegram через Bot API;
  - без хардкода токенов;
  - нужны env: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`.
- Добавлен `.env.example`.
- `.gitignore` обновлён так, чтобы `.env.example` попадал в git, а реальные `.env` оставались скрытыми.
- Создан draft-материал:
  - `content/blog/mari-nails-ai-beauty-try-on-case.md`;
  - статус `draft`;
  - SEO title/description;
  - category;
  - tags;
  - canonical;
  - ogImage;
  - внешние и внутренние ссылки.
- Draft-статья не публикуется и отдаёт 404 на публичном slug.
- Markdown-рендер улучшен:
  - ссылки;
  - bold;
  - inline code.
- Добавлена лёгкая SVG-обложка:
  - `public/blog/mari-nails-ai-beauty-try-on-og.svg`.
- Добавлены лёгкие hover/animation эффекты без тяжёлого 3D.
- Локально создан `.env.local` с Telegram-настройками. Файл игнорируется git и не попадёт в GitHub.
- Добавлены detail-страницы проектов:
  - `/projects/life-os`;
  - `/projects/growth-os`.
- Карточки Life OS и Личная ОС роста на главной стали короче и ведут на “Подробнее”.
- Внутренняя кухня вроде фаз, практических заметок и Journal наружу не вынесена.

## Уже проверено

- `npm run lint` - проходит.
- `npm run build` - проходит.
- `/` - 200 после перезапуска dev-сервера.
- `/blog` - 200.
- `/blog/mari-nails-ai-beauty-try-on-case` - 404, потому что статья draft.
- `/sitemap.xml` - 200.
- `/projects/life-os` - 200.
- `/projects/growth-os` - 200.
- `/llms.txt` - 200.
- `/api/contact` без env честно возвращает 503 и не падает.
- Запрещённые публичные слова типа “Фазы” и “LiveOS Journal” в `app/components/data/content/lib` не найдены.

## Осталось сделать

- Закоммитить и запушить текущий блок.
- На Vercel добавить env, если они ещё не добавлены:
  - `TELEGRAM_BOT_TOKEN`;
  - `TELEGRAM_CHAT_ID=504886626`.
- После env проверить реальную отправку заявки в Telegram.
- Позже, если Артём одобрит статью, сменить `status: "draft"` на `status: "published"` и проверить публичную страницу.

## Важные env для Vercel

```txt
TELEGRAM_BOT_TOKEN=<токен бота из BotFather>
TELEGRAM_CHAT_ID=504886626
```

Без этих переменных форма не сможет отправлять сообщение в Telegram, но ссылки Telegram/email останутся рабочими.

## GitHub

Репозиторий: `https://github.com/Lizgaro/Lizgaro_AI`

Последний известный push до текущего блока:

```txt
a977436 Simplify portfolio public positioning
```

Текущий блок ещё нужно закоммитить и запушить после code review.
