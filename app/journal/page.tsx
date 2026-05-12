import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "LiveOS Journal — Артём Лизгаро",
  description:
    "LiveOS Journal: фазы дня, исследования, спорт, сон, AI-инструменты и превращение заметок в полезные статьи и соцсети.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/journal`
  },
  openGraph: {
    title: "LiveOS Journal — Артём Лизгаро",
    description:
      "Фазы, исследования, AI и личная система управления. Без хаотичного дневника, только выводы, которые можно применить.",
    url: `${siteConfig.siteUrl}/journal`,
    type: "website",
    locale: "ru_RU"
  }
};

const filters = ["Сон", "Фокус", "Спорт", "AI", "Исследования", "Привычки", "Дневник", "Контент"];

const materialTypes = [
  "дневник фазы",
  "статья-вывод",
  "исследовательская заметка",
  "AI-практика",
  "разбор ошибки",
  "практика дня"
];

export default function JournalPage() {
  return (
    <>
      <Header />
      <main className="px-4 pb-20 pt-32 sm:pt-36">
        <section className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase text-lime">LiveOS Journal</p>
          <h1 className="mt-5 max-w-6xl font-display text-5xl font-black uppercase leading-[0.9] text-text sm:text-7xl lg:text-8xl">
            Фазы, исследования, AI и личная система управления
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            Раздел показывает, как я фиксирую день, фазы, состояние, результаты, исследования и
            инсайты, а затем превращаю это в статьи для сайта и короткие версии для соцсетей.
          </p>
        </section>

        <section className="mx-auto mt-12 grid max-w-7xl gap-4 lg:grid-cols-[0.85fr_1fr]">
          <article className="rounded-[2rem] border border-lime/20 bg-lime p-6 text-ink sm:p-8">
            <p className="font-mono text-xs uppercase text-ink/65">Правило публикации</p>
            <p className="mt-6 font-display text-4xl font-black uppercase leading-none sm:text-6xl">
              личный факт {"->"} честный вывод {"->"} практическое применение
            </p>
            <p className="mt-6 text-lg leading-8 text-ink/75">
              Не публиковать хаотичный дневник без пользы для читателя. Публиковать выводы, которые
              человек может применить к себе.
            </p>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-lime">Workflow</p>
            <p className="mt-6 font-display text-4xl font-black uppercase leading-none text-text sm:text-5xl">
              фаза / заметка / голос {"->"} AI draft {"->"} SEO {"->"} статья {"->"} Telegram {"->"} X
            </p>
            <p className="mt-6 text-lg leading-8 text-muted">
              В MVP этот процесс только подготовлен. Реальные статьи и соцсетевые версии не
              публикуются без отдельного задания.
            </p>
          </article>
        </section>

        <section className="mx-auto mt-12 grid max-w-7xl gap-4 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-surface p-6">
            <p className="font-mono text-xs uppercase text-lime">Фильтры будущих материалов</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <span key={filter} className="rounded-full border border-white/10 px-3 py-1 text-sm text-muted">
                  {filter}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-surface p-6">
            <p className="font-mono text-xs uppercase text-lime">Типы материалов</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {materialTypes.map((type) => (
                <span key={type} className="rounded-full border border-white/10 px-3 py-1 text-sm text-muted">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
