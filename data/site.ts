export const siteConfig = {
  name: "Артём Лизгаро",
  displayName: "АРТЁМ ЛИЗГАРО",
  role: "AI-маркетолог, builder и growth-оператор",
  location: "Владивосток / Россия / СНГ",
  siteUrl: "https://my-workspace-lyart.vercel.app",
  updatedAt: "2026-05-15",
  fallbackCtaHref: "https://t.me/Artem_Liz",
  media: {
    ogImage: "/og/artem-lizgaro-home.svg",
    ogAlt: "Артём Лизгаро: сайты, Telegram-боты, AI-маркетинг, Life OS и рост проектов"
  },
  contacts: {
    telegram: "https://t.me/Artem_Liz",
    email: "lizgaro13@gmail.com"
  },
  socials: [
    { label: "Telegram", href: "https://t.me/Artem_Liz" },
    { label: "Email", href: "mailto:lizgaro13@gmail.com" },
    { label: "X / Twitter", href: "" },
    { label: "Instagram / Threads", href: "" },
    { label: "GitHub", href: "" }
  ],
  hero: {
    label: "Артём Лизгаро / AI-маркетинг / сайты / боты / рост",
    title: "От идеи к сайту, боту, трафику и продажам.",
    description:
      "Помогаю фаундерам, экспертам и малому бизнесу упаковать идею, собрать оффер, сайт, Telegram-бот или воронку - чтобы человек понял ценность и сделал следующий шаг.",
    support:
      "Можно прийти с сырой идеей, недособранным сайтом, блогом без системы или продуктом без понятного роста.",
    ctaPrimary: "Обсудить проект",
    ctaSecondary: "Смотреть проекты",
    tags: [
      "Сайты",
      "Telegram-боты",
      "Воронки",
      "AI-маркетинг",
      "Контент",
      "SEO/GEO",
      "Личный бренд",
      "Продукты"
    ],
    consoleSteps: ["Идея", "Оффер", "Сайт / бот", "Контент", "Заявки"],
    entryPoints: [
      {
        title: "Проекты",
        description: "Что строю сейчас и какие связки уже пробовал.",
        href: "#projects"
      },
      {
        title: "Продукты",
        description: "Life OS, личный AI-мозг и ОС роста.",
        href: "#life-os"
      },
      {
        title: "Блог",
        description: "Разборы про AI, маркетинг, сайты, ботов и рост.",
        href: "/blog"
      },
      {
        title: "Разбор",
        description: "Выбрать первый шаг: оффер, сайт, бот, контент или воронка.",
        href: "#contact"
      }
    ]
  },
  about: {
    title: "Я соединяю упаковку, AI и маркетинг в понятный первый шаг.",
    paragraphs: [
      "Помогаю личным брендам, продуктам и малому бизнесу понять, что они продают, кому это нужно и какой инструмент усилит проект первым.",
      "Это может быть разбор монетизации, сайт, Telegram-бот, AI-инструмент, простая воронка или контент-система.",
      "Мой фокус - не усложнить проект, а собрать рабочую связку, которую можно показать людям, проверить и улучшать."
    ],
    signal: "Вижу суть, убираю лишнее, собираю рабочую систему."
  },
  seo: {
    title: "Артём Лизгаро - сайты, Telegram-боты, AI-маркетинг и монетизация",
    description:
      "Артём Лизгаро помогает личным брендам, продуктам и бизнесам упаковывать идею в систему монетизации: сайт, Telegram-бот, воронка, AI-маркетинг, контент и SEO/GEO.",
    keywords: [
      "Артём Лизгаро",
      "монетизация личного бренда",
      "создание сайтов",
      "Telegram боты",
      "воронки продаж",
      "AI маркетинг",
      "SEO",
      "GEO",
      "контент-система",
      "AI MVP",
      "личный бренд",
      "Владивосток"
    ]
  }
};

export type SiteConfig = typeof siteConfig;
