import { siteConfig } from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import { SectionHeading } from "./SectionHeading";

const lifeOsItems = [
  "личный контекст",
  "цели и проекты",
  "решения и PRD",
  "AI-агенты",
  "фазы дня",
  "процессы и задачи"
];

const growthOsItems = [
  "привычки",
  "голосовые заметки",
  "дневник мыслей",
  "AI-менторы",
  "фокус-режим",
  "анализ состояния"
];

export function LifeOSSection() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="life-os"
          label="06 / Life OS"
          title="Личный AI-мозг и ОС роста"
          description="Отдельно показываю Life OS как рабочую базу контекста и Personal Growth OS как исследование будущего продукта."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="overflow-hidden rounded-[2rem] border border-lime/20 bg-lime text-ink">
            <div className="p-6 sm:p-8">
              <p className="font-mono text-xs uppercase text-ink/65">Активный внутренний проект</p>
              <h3 className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] sm:text-7xl">
                Life OS
              </h3>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/75">
                Личный AI-мозг и центр управления проектами: система, где собраны контекст, цели,
                проекты, решения, PRD, AI-агенты и процессы. Она помогает AI работать не с нуля,
                а как партнёру.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {lifeOsItems.map((item) => (
                  <span key={item} className="rounded-full border border-ink/15 bg-ink/5 px-3 py-1 text-sm text-ink/75">
                    {item}
                  </span>
                ))}
              </div>
              <ButtonLink href={siteConfig.fallbackCtaHref} variant="ink" className="mt-8">
                Хочу собрать свой AI-мозг
              </ButtonLink>
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-lime">Исследование и проектирование</p>
            <h3 className="mt-5 font-display text-4xl font-black uppercase leading-none text-text sm:text-5xl">
              Personal Growth OS
            </h3>
            <p className="mt-6 text-lg leading-8 text-muted">
              Личная ОС для привычек, мыслей, целей и осознанного роста. Идея — помочь человеку
              убрать шум, услышать себя, выбрать маленький шаг на сегодня и постепенно двигаться к
              своим целям.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {growthOsItems.map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-sm text-muted">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
