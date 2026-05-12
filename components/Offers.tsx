import { offers } from "@/data/offers";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import { SectionHeading } from "./SectionHeading";

export function Offers() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="offers"
          label="04 / Offers"
          title="Форматы работы"
          description="Главный вход — разбор проекта. Если задача понятна, можно перейти к сайту, боту, воронке или AI MVP."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className="flex min-h-[360px] flex-col justify-between rounded-[2rem] border border-white/10 bg-surface p-5 transition hover:-translate-y-1 hover:border-lime/40 sm:p-6"
            >
              <div>
                <h3 className="font-display text-3xl font-black uppercase leading-none text-text">{offer.title}</h3>
                <p className="mt-5 text-sm font-semibold uppercase text-lime">Кому подходит</p>
                <p className="mt-2 text-sm leading-6 text-muted">{offer.forWhom}</p>
                <p className="mt-5 text-sm font-semibold uppercase text-lime">Что на выходе</p>
                <p className="mt-2 text-sm leading-6 text-muted">{offer.outcome}</p>
              </div>
              <ButtonLink href={siteConfig.fallbackCtaHref} variant="secondary" className="mt-6 w-full px-3">
                {offer.ctaLabel}
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
