import { siteConfig } from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import { SectionHeading } from "./SectionHeading";

const blocks = [
  {
    title: "Не делаю сайты ради сайтов.",
    label: "Сайт / лендинг",
    text:
      "Я собираю не просто страницу, а путь к действию: чтобы человек понял ценность, доверился и дошёл до заявки.",
    bullets: ["понятный первый экран", "ясный оффер", "заметный CTA", "кейсы и логика пути"],
    final: "Если сайт не объясняет ценность — он просто красиво сливает клиентов.",
    cta: "Разобрать сайт"
  },
  {
    title: "Заявки не должны остывать.",
    label: "AI, боты и автоматизация",
    text:
      "Если человек уже написал, спросил, кликнул или оставил заявку — он горячий. В этот момент нельзя терять скорость.",
    bullets: ["быстрый ответ", "уточнение", "квалификация", "следующий шаг"],
    final: "Иногда рост начинается не с новой рекламы, а с того, чтобы не терять тех, кто уже заинтересовался.",
    cta: "Настроить путь заявки"
  }
];

export function Offers() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="offers"
          label="03 / Site + Automation"
          title="Сайт и AI — только если они ведут к действию"
          description="Инструмент выбирается после диагноза. Иногда нужен лендинг. Иногда бот. Иногда достаточно поправить оффер и CTA."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {blocks.map((block) => (
            <article
              key={block.title}
              className="interactive-card flex min-h-[360px] flex-col justify-between rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-8"
            >
              <div>
                <p className="font-mono text-xs uppercase text-lime">{block.label}</p>
                <h3 className="mt-5 font-display text-4xl font-black uppercase leading-none text-text sm:text-5xl">
                  {block.title}
                </h3>
                <p className="mt-6 text-base leading-7 text-muted sm:text-lg sm:leading-8">{block.text}</p>
                <div className="mt-7 grid gap-2 sm:grid-cols-2">
                  {block.bullets.map((item) => (
                    <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-muted">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-7 border-t border-white/10 pt-5 text-lg font-semibold leading-8 text-lime">
                  {block.final}
                </p>
              </div>
              <ButtonLink href={siteConfig.fallbackCtaHref} variant="secondary" className="mt-8 w-full px-3">
                {block.cta}
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
