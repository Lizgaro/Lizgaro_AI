export const skills = [
  {
    category: "AI / Automation",
    items: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Codex",
      "AI-кодинг",
      "Telegram-боты",
      "парсеры",
      "workflow-дизайн"
    ]
  },
  {
    category: "Marketing / Growth",
    items: [
      "воронки",
      "офферы",
      "SEO",
      "GEO",
      "соцсети",
      "партнёрки",
      "инфлюенсеры",
      "revenue share"
    ]
  },
  {
    category: "Product",
    items: [
      "MVP",
      "SaaS-концепты",
      "пользовательский сценарий",
      "упаковка",
      "лендинги",
      "валидация"
    ]
  },
  {
    category: "Content",
    items: [
      "Telegram",
      "X",
      "статьи",
      "подкасты",
      "Reels/Shorts",
      "контент-системы",
      "builder journey"
    ]
  },
  {
    category: "Operations",
    items: [
      "RevOps",
      "GrowthOps",
      "процессы",
      "аналитика",
      "связка отделов",
      "приоритизация"
    ]
  }
];

export type SkillGroup = (typeof skills)[number];
