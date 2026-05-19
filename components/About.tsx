import { siteConfig } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

const scanRows = [
  ["Оффер", "ясно / мутно"],
  ["Сайт", "ведёт / сливает"],
  ["CTA", "заметен / спрятан"],
  ["Заявки", "обрабатываются / остывают"],
  ["Автоматизация", "помогает / мешает"],
  ["Первый шаг", "найден / не найден"]
];

export function About() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="diagnosis"
          label="01 / Diagnosis"
          title={siteConfig.about.title}
          description="Большинство проектов теряет деньги не из-за отсутствия сайта. Деньги теряются там, где человек не понял ценность, не доверился или не получил следующий шаг."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-8">
            <p className="font-display text-4xl font-black uppercase leading-none text-lime sm:text-6xl">
              Видеть суть.
              <br />
              Собрать первый шаг.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted">{siteConfig.about.signal}</p>
            <div className="mt-7 grid gap-2 text-sm leading-6 text-muted">
              <p>Не “сайт под ключ”.</p>
              <p>Не “бот ради бота”.</p>
              <p>Не “AI потому что модно”.</p>
            </div>
          </div>
          <div className="grid gap-5 rounded-[2rem] border border-lime/20 bg-[linear-gradient(135deg,rgba(185,255,61,0.10),rgba(17,20,18,0.88)_46%)] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 font-mono text-[11px] uppercase text-muted">
              <span>PROJECT SCAN</span>
              <span className="text-lime">Рентген проекта</span>
            </div>
            <div className="grid gap-2">
              {scanRows.map(([zone, status]) => (
                <div key={zone} className="grid grid-cols-[0.72fr_1fr] gap-3 rounded-2xl border border-white/10 bg-ink/40 px-4 py-3 text-sm">
                  <span className="font-semibold text-text">{zone}</span>
                  <span className="font-mono text-xs uppercase text-lime">{status}</span>
                </div>
              ))}
            </div>
            <div className="grid gap-4 border-t border-white/10 pt-5">
              {siteConfig.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-7 text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
