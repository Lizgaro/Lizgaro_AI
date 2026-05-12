import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${siteConfig.name}

${siteConfig.seo.description}

## Основные разделы
- Главная: ${siteConfig.siteUrl}
- Блог: ${siteConfig.siteUrl}/blog
- LiveOS Journal: ${siteConfig.siteUrl}/journal
- RSS: ${siteConfig.siteUrl}/rss.xml
- Sitemap: ${siteConfig.siteUrl}/sitemap.xml

## Темы
- сайты и лендинги
- Telegram-боты и парсеры
- воронки продаж
- монетизация личного бренда
- AI-маркетинг и автоматизация
- SEO/GEO и контент-системы
- Life OS и личный AI-мозг
- LiveOS Journal, фазы, исследования и контент

## Контакт
Telegram: ${siteConfig.contacts.telegram}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
