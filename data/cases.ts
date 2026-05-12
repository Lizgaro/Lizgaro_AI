export const cases = [
  {
    title: "Ambassador Hub",
    status: "concept",
    description:
      "Партнёрская модель для роста AI/SaaS-продуктов: продукт, аудитория, инфлюенсер, оффер, воронка и revenue-share механика.",
    tags: ["AI/SaaS", "партнёрки", "воронка", "growth"]
  },
  {
    title: "Marineos / AI Beauty Try-On",
    status: "prototype direction",
    description:
      "Концепт AI-виджета для примерки маникюра, причёсок и образов до визита к мастеру или покупки услуги.",
    tags: ["AI MVP", "beauty", "визуальный продукт", "аудитория"]
  },
  {
    title: "Parser & Content Bots",
    status: "case direction",
    description:
      "Telegram-боты и парсеры для сбора постов, комментариев, новостей и подготовки контент-заготовок.",
    tags: ["Telegram", "парсинг", "контент", "автоматизация"]
  },
  {
    title: "SEO/GEO Growth System",
    status: "internal project",
    description:
      "Подход к органическому росту блога или сайта через карту спроса, ключевые слова, кластеры и AI-поиск.",
    tags: ["SEO", "GEO", "органика", "контент"]
  },
  {
    title: "Life OS / Personal AI Brain",
    status: "internal project",
    description:
      "Локальная база контекста, проектов, агентов и процессов, чтобы AI понимал цели, стиль работы и текущие задачи без хаоса.",
    tags: ["AI-система", "операционка", "контекст", "личная база"]
  }
];

export type CaseStudy = (typeof cases)[number];
