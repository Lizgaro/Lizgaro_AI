import { siteConfig } from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import { SectionHeading } from "./SectionHeading";

const lifeOsItems = ["личный контекст", "цели и проекты", "решения", "AI-агенты", "задачи", "PRD"];

const growthOsItems = [
  "ежедневные привычки",
  "планирование дня",
  "голосовые заметки",
  "дневник мыслей",
  "AI-менторы",
  "фокус-режим"
];

export function LifeOSSection() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="life-os"
          label="04 / Building now"
          title="Что я развиваю как систему и продукт"
          description="Здесь не внутренняя кухня, а два направления, которые объясняют мой способ мышления: личный AI-мозг и продукт для спокойного роста."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="interactive-card group overflow-hidden rounded-[2rem] border border-lime/20 bg-lime text-ink">
            <div className="p-6 sm:p-8">
              <p className="font-mono text-xs uppercase text-ink/65">Моя внутренняя система</p>
              <h3 className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] sm:text-7xl">
                Life OS
              </h3>
              <img
                src="/og/life-os.svg"
                alt="Визуальная схема Life OS: контекст, проекты, решения и AI-агенты"
                className="mt-6 aspect-[1200/630] w-full rounded-[1.35rem] border border-ink/15 object-cover shadow-[0_24px_90px_rgba(11,13,12,0.18)]"
              />
              <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-ink">
                AI часто ошибается не потому, что слабый, а потому что у него нет твоего контекста.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
                Life OS собирает мой контекст, цели, проекты, решения и AI-агентов в одну рабочую базу. Так AI быстрее
                понимает задачу, точнее предлагает решения и помогает превращать хаос идей в конкретные действия.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {lifeOsItems.map((item) => (
                  <span key={item} className="interactive-chip interactive-chip-ink rounded-full border border-ink/15 bg-ink/5 px-3 py-1 text-sm text-ink/75">
                    {item}
                  </span>
                ))}
              </div>
              <ButtonLink href={siteConfig.fallbackCtaHref} variant="ink" className="mt-8">
                Хочу собрать свой AI-мозг
              </ButtonLink>
              <ButtonLink href="/projects/life-os" variant="inkGhost" className="mt-3 sm:ml-3">
                Подробнее
              </ButtonLink>
            </div>
          </article>

          <article className="interactive-card group rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-lime">Продукт в разработке</p>
            <h3 className="mt-5 font-display text-4xl font-black uppercase leading-none text-text sm:text-5xl">
              Личная ОС роста
            </h3>
            <img
              src="/og/growth-os.svg"
              alt="Визуальная схема Личной ОС роста: привычки, мысли, цели, фокус и AI-менторы"
              className="mt-6 aspect-[1200/630] w-full rounded-[1.35rem] border border-white/10 object-cover shadow-[0_24px_90px_rgba(0,0,0,0.28)]"
            />
            <p className="mt-6 text-lg font-semibold leading-8 text-text">
              Информации стало слишком много. Ясности и действия - меньше.
            </p>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Я создаю минималистичный продукт, который помогает человеку не просто собирать знания, а превращать их в
              жизнь: записал мысль, понял себя, выбрал маленький шаг, сделал, увидел прогресс.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {growthOsItems.map((item) => (
                <span key={item} className="interactive-chip rounded-full border border-white/10 px-3 py-1 text-sm text-muted">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/projects/growth-os" variant="secondary">
                Подробнее
              </ButtonLink>
              <ButtonLink href={siteConfig.fallbackCtaHref} variant="ghost">
                Обсудить продукт
              </ButtonLink>
            </div>
          </article>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 text-sm text-muted">
          <span className="font-mono text-xs uppercase text-lime">Follow build</span>
          <a href="/blog" className="interactive-link rounded-full border border-white/10 px-3 py-2 hover:border-lime/40 hover:text-lime">
            Читать блог <span className="arrow-shift ml-1" aria-hidden="true">-&gt;</span>
          </a>
          <a href="/rss.xml" className="interactive-link rounded-full border border-white/10 px-3 py-2 hover:border-lime/40 hover:text-lime">
            RSS обновления <span className="arrow-shift ml-1" aria-hidden="true">-&gt;</span>
          </a>
          <a href={siteConfig.contacts.telegram} className="interactive-link rounded-full border border-white/10 px-3 py-2 hover:border-lime/40 hover:text-lime">
            Telegram <span className="arrow-shift ml-1" aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
