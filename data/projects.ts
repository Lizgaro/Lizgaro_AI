export type ProjectStatus = "active" | "paused" | "internal" | "research" | "media";

export type Project = {
  id: string;
  title: string;
  status: ProjectStatus;
  statusLabel: string;
  category: string;
  url?: string;
  shortDescription: string;
  problem?: string;
  solution?: string;
  valueForUser?: string;
  role?: string;
  tags: string[];
  ctaLabel?: string;
  ctaUrl?: string;
  secondaryCtaLabel?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "mari-nails",
    title: "Mari Nails / AI Beauty Try-On",
    status: "active",
    statusLabel: "Активный проект",
    category: "AI beauty / визуальная примерка / сайт / генерация образов",
    url: "https://mari-nails.vercel.app/",
    shortDescription:
      "AI-сайт для beauty-ниши, где клиент может заранее примерить стиль маникюра, выбрать готовый дизайн или сгенерировать свой вариант.",
    problem:
      "Клиенту сложно выбрать дизайн на месте, а мастеру приходится долго уточнять ожидания и визуальные референсы.",
    solution:
      "Mari Vision Lab / Mari AI Studio помогает смотреть готовые стили и использовать AI-генерацию до визита.",
    valueForUser:
      "Клиент приходит к мастеру с понятным визуальным направлением, а мастер быстрее понимает желание клиента.",
    role: "Упаковка идеи, сайт, AI-виджет, логика сценария и демонстрация beauty-tech направления.",
    tags: ["AI Beauty", "Nails", "Try-On", "Landing", "Beauty Tech", "AI Widget"],
    ctaLabel: "Посмотреть Mari Nails",
    ctaUrl: "https://mari-nails.vercel.app/",
    secondaryCtaLabel: "Хочу похожий AI-виджет",
    featured: true
  },
  {
    id: "ambassador-hub",
    title: "Ambassador Hub",
    status: "paused",
    statusLabel: "На паузе",
    category: "партнёрский рост / инфлюенсеры / revenue share / AI-продукты",
    url: "https://v0-ambassadorhub.vercel.app/",
    shortDescription:
      "Партнёрская growth-модель для AI-продуктов и инфлюенсеров: вместо разовых рекламных постов — совместная монетизация аудитории через продукт, воронку и revenue share.",
    problem:
      "У блогера есть аудитория, у продукта есть ценность, но между ними часто нет долгосрочной модели роста.",
    solution:
      "Модель соединяет AI-продукт, инфлюенсера, аудиторию и воронку в партнёрскую механику.",
    valueForUser:
      "Блогер получает продуктовую роль, продукт получает доверие и доступ к аудитории, аудитория получает полезное решение.",
    role: "Маркетинговая стратегия, лендинг, партнёрская логика и оффер.",
    tags: ["Influencer Marketing", "Revenue Share", "AI Products", "Funnels", "Partnerships", "Growth Strategy"],
    ctaLabel: "Посмотреть Ambassador Hub",
    ctaUrl: "https://v0-ambassadorhub.vercel.app/"
  },
  {
    id: "knowledge-base",
    title: "База знаний / Партнёры роста",
    status: "internal",
    statusLabel: "На паузе / внутренний проект",
    category: "knowledge base / партнёрская система / материалы роста",
    url: "https://baza-znaniy.vercel.app/",
    shortDescription:
      "Внутренняя база знаний для партнёров роста: материалы, инструкции, стратегии, расчёты и рабочие процессы, собранные в понятную структуру для команды и коллабораций.",
    problem: "Партнёрам и команде сложно держать материалы, инструкции и процессы в одном месте.",
    solution: "Структурированный внутренний сайт с разделами для обучения, экономики, команды, воронок и AI-инструментов.",
    valueForUser: "Меньше повторных объяснений, быстрее вход в контекст, понятнее рабочие процессы.",
    role: "Структура базы, информационная архитектура и упаковка материалов.",
    tags: ["Knowledge Base", "Growth Partners", "Team Materials", "Funnels", "AI Tools", "Operations"],
    ctaLabel: "Посмотреть базу",
    ctaUrl: "https://baza-znaniy.vercel.app/"
  },
  {
    id: "cult-scale",
    title: "Cult Scale / Культура Маркетинга",
    status: "paused",
    statusLabel: "На паузе / требует уточнения деталей",
    category: "комьюнити / партнёрский рост / маркетинг / культура роста",
    url: "https://cult-scale.vercel.app/",
    shortDescription:
      "Проект на стыке комьюнити, партнёрского роста и маркетинговой культуры. Использовался как направление для упаковки идей, роста, коллабораций и системного мышления вокруг маркетинга.",
    problem: "Идеи вокруг роста, партнёрств и маркетинговой культуры требуют отдельной упаковки и уточнения.",
    solution: "Пока показывается как paused-направление, а не как основной кейс.",
    valueForUser: "Можно увидеть направление мышления без ложного позиционирования проекта как завершённого продукта.",
    role: "Черновая упаковка направления и продуктовой гипотезы.",
    tags: ["Community", "Marketing Culture", "Growth", "Partnerships", "Paused Project"],
    ctaLabel: "Посмотреть Cult Scale",
    ctaUrl: "https://cult-scale.vercel.app/"
  },
  {
    id: "life-os",
    title: "Life OS / Личный AI-мозг",
    status: "internal",
    statusLabel: "Активный внутренний проект",
    category: "AI-система / личный контекст / агенты / Codex / продуктивность",
    shortDescription:
      "Личный AI-мозг и центр управления проектами: система, где собраны контекст, цели, проекты, решения, PRD, AI-агенты и процессы.",
    problem: "AI часто ошибается не потому, что слабый, а потому что у него нет личного и проектного контекста.",
    solution:
      "Life OS хранит личность, цели, проекты, решения, агенты, фазы и задачи в структуре, с которой AI может работать как партнёр.",
    valueForUser:
      "Такую логику можно адаптировать для эксперта, фаундера или команды, чтобы AI не начинал каждый раз с нуля.",
    role: "Архитектура системы, контекстные файлы, агенты, PRD и рабочие протоколы.",
    tags: ["Life OS", "AI Agents", "Codex", "Context", "Markdown", "Productivity", "Personal System"],
    ctaLabel: "Хочу собрать свой AI-мозг",
    featured: true
  },
  {
    id: "personal-growth-os",
    title: "Personal Growth OS / Личная ОС роста",
    status: "research",
    statusLabel: "Исследование и проектирование",
    category: "привычки / мысли / цели / AI-менторы / саморефлексия",
    shortDescription:
      "Личная ОС для привычек, мыслей, целей и осознанного роста: от хаоса во времени, мыслях и распорядке — к ясности, пониманию и действию.",
    problem: "Людям часто не хватает не информации, а ясности, поддержки и системы маленьких действий.",
    solution:
      "Продуктовая концепция соединяет привычки, голосовые заметки, дневник мыслей, AI-менторов, фокус и анализ состояния.",
    valueForUser: "Человек записывает мысль, понимает себя, выбирает маленький шаг, делает его и видит прогресс.",
    role: "Исследование, проектирование сценариев, продуктовая упаковка и будущий UX.",
    tags: ["Personal Growth", "Habits", "AI Mentors", "Voice Notes", "Self-Reflection", "Focus", "Community"]
  },
  {
    id: "liveos-journal",
    title: "LiveOS Journal / Фазы и исследования",
    status: "media",
    statusLabel: "Активное медиа-направление",
    category: "блог / фазы дня / исследования / AI-автоматизация контента",
    shortDescription:
      "Медиа-раздел о том, как личные фазы, спорт, сон, исследования, AI-инструменты и работа над проектами превращаются в полезные статьи и короткие посты.",
    problem: "Личный опыт легко превращается в хаотичный дневник, если не отделять шум дня от полезного вывода.",
    solution:
      "Контентная логика: фаза / заметка / голос -> AI-очистка -> вывод -> статья -> короткие посты для соцсетей.",
    valueForUser: "Читатель видит практические выводы о фокусе, привычках, энергии, продуктивности, контенте и применении AI.",
    role: "Медиа-направление, контент-пайплайн, будущий блог и SEO/GEO-актив.",
    tags: ["Фазы", "AI", "Фокус", "Привычки", "Спорт", "Сон", "Исследования", "Контент"],
    ctaLabel: "Открыть Journal",
    ctaUrl: "/journal",
    featured: true
  }
];
