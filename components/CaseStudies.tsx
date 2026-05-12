import { cases } from "@/data/cases";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import { SectionHeading } from "./SectionHeading";

export function CaseStudies() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="cases"
          label="04 / Cases"
          title="Кейсы и направления с честными статусами"
          description="Показываю как концепты, прототипы, внутренние проекты и направления. Без выдуманных клиентов, отзывов и метрик."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {cases.map((item, index) => (
            <article
              key={item.title}
              className={`group relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-surface p-6 transition hover:border-lime/40 sm:p-8 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(185,255,61,0.10),transparent_34%),linear-gradient(90deg,rgba(244,246,240,0.04)_1px,transparent_1px)] bg-[size:auto,48px_48px] opacity-80" />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-mono text-xs uppercase text-lime">
                  {item.status}
                </span>
                <span className="font-mono text-xs uppercase text-muted">{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="mt-16 max-w-3xl">
                <h3 className="font-display text-4xl font-black uppercase leading-none text-text sm:text-5xl">
                  {item.title}
                </h3>
                <p className="mt-5 text-lg leading-8 text-muted">{item.description}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <ButtonLink href={siteConfig.fallbackCtaHref} variant="ghost">
                  Обсудить похожее
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
