import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${siteConfig.name}

${siteConfig.seo.description}

## Основные разделы
- Главная: ${siteConfig.siteUrl}
- Life OS: ${siteConfig.siteUrl}/projects/life-os
- Личная ОС роста: ${siteConfig.siteUrl}/projects/growth-os
- Блог: ${siteConfig.siteUrl}/blog
- RSS: ${siteConfig.siteUrl}/rss.xml
- Sitemap: ${siteConfig.siteUrl}/sitemap.xml

## Темы
- сайты и лендинги
- Telegram-боты и AI-инструменты
- воронки продаж
- монетизация личного бренда
- AI-маркетинг и автоматизация
- SEO/GEO и контент-системы
- Life OS и личный AI-мозг
- создание продуктов

## Контакт
Telegram: ${siteConfig.contacts.telegram}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
