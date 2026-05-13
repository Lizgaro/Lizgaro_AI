export type ProjectGroup = "current" | "past";
export type ProjectStatus = "active" | "system" | "building" | "model" | "tool" | "direction";

export type Project = {
  id: string;
  title: string;
  group: ProjectGroup;
  status: ProjectStatus;
  statusLabel: string;
  category: string;
  url?: string;
  shortDescription: string;
  hook?: string;
  problem?: string;
  solution?: string;
  valueForUser?: string;
  tags: string[];
  ctaLabel?: string;
  ctaUrl?: string;
  secondaryCtaLabel?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "mari-nails",
    title: "Mari Nails",
    group: "current",
    status: "active",
    statusLabel: "Действующий проект",
    category: "AI beauty / сайт / визуальная примерка",
    url: "https://mari-nails.vercel.app/",
    shortDescription:
      "AI-сайт для beauty-ниши, где клиент может заранее выбрать или сгенерировать стиль маникюра и прийти к мастеру уже с понятным визуальным референсом.",
    valueForUser:
      "Клиент экономит время на выборе, а мастер быстрее понимает желание клиента.",
    tags: ["AI Beauty", "Nails", "Try-On", "AI Widget"],
    ctaLabel: "Посмотреть проект",
    ctaUrl: "https://mari-nails.vercel.app/",
    secondaryCtaLabel: "Хочу похожий AI-виджет",
    featured: true
  },
  {
    id: "life-os",
    title: "Life OS",
    group: "current",
    status: "system",
    statusLabel: "Моя внутренняя система",
    category: "AI-система / личный контекст / проекты",
    shortDescription:
      "Система, которая собирает мой контекст, цели, проекты, решения и AI-агентов в одну рабочую базу.",
    hook:
      "AI часто ошибается не потому, что слабый, а потому что у него нет твоего контекста.",
    problem:
      "У людей много идей, заметок, чатов, задач и проектов, но всё лежит в разных местах. AI каждый раз приходится заново объяснять контекст.",
    solution:
      "Life OS собирает личный контекст в понятную структуру: кто я, что строю, какие проекты активны, какие решения приняты, какие агенты нужны и что делать дальше.",
    valueForUser:
      "AI быстрее понимает задачу, точнее предлагает решения, помогает вести проекты и превращает хаос идей в конкретные действия.",
    tags: ["Life OS", "AI Agents", "Context", "Codex"],
    secondaryCtaLabel: "Хочу собрать свой AI-мозг",
    featured: true
  },
  {
    id: "personal-growth-os",
    title: "Личная ОС роста",
    group: "current",
    status: "building",
    statusLabel: "Продукт в разработке",
    category: "привычки / мысли / цели / AI-менторы",
    shortDescription:
      "Минималистичное приложение для привычек, мыслей, целей и саморефлексии. Помогает человеку понять себя, фиксировать мысли голосом, планировать день, отслеживать привычки и превращать знания в действия.",
    hook:
      "Информации стало слишком много. Ясности и действия - меньше.",
    valueForUser:
      "Не очередной трекер с галочками, а личная операционная система роста: записал мысль, понял себя, выбрал маленький шаг, сделал, увидел прогресс.",
    tags: ["Personal Growth", "Habits", "AI Mentors", "Focus"],
    secondaryCtaLabel: "Обсудить продукт"
  },
  {
    id: "ambassador-hub",
    title: "Ambassador Hub",
    group: "past",
    status: "model",
    statusLabel: "Маркетинговая модель",
    category: "партнёрский рост / инфлюенсеры / revenue share",
    url: "https://v0-ambassadorhub.vercel.app/",
    shortDescription:
      "Модель партнёрского роста, где продукт, блогер и аудитория соединяются через воронку и совместную монетизацию.",
    valueForUser:
      "У блогера есть аудитория. У продукта есть ценность. Модель показывает, как соединить их не через разовую рекламу, а через партнёрство.",
    tags: ["Partnerships", "Revenue Share", "Funnels"],
    ctaLabel: "Посмотреть работу",
    ctaUrl: "https://v0-ambassadorhub.vercel.app/"
  },
  {
    id: "knowledge-base",
    title: "База знаний",
    group: "past",
    status: "tool",
    statusLabel: "Внутренний инструмент",
    category: "knowledge base / материалы / процессы",
    url: "https://baza-znaniy.vercel.app/",
    shortDescription:
      "Внутренняя база материалов для партнёров роста: инструкции, процессы, воронки, AI-инструменты и рабочие материалы в одной структуре.",
    tags: ["Knowledge Base", "Operations", "AI Tools"],
    ctaLabel: "Посмотреть работу",
    ctaUrl: "https://baza-znaniy.vercel.app/"
  },
  {
    id: "cult-scale",
    title: "Cult Scale",
    group: "past",
    status: "direction",
    statusLabel: "Упаковка направления",
    category: "маркетинг / партнёрства / комьюнити",
    url: "https://cult-scale.vercel.app/",
    shortDescription:
      "Проектная упаковка направления на стыке маркетинга, партнёрств, комьюнити и системного роста.",
    tags: ["Growth", "Community", "Partnerships"],
    ctaLabel: "Посмотреть работу",
    ctaUrl: "https://cult-scale.vercel.app/"
  }
];

export const currentProjects = projects.filter((project) => project.group === "current");
export const pastProjects = projects.filter((project) => project.group === "past");
