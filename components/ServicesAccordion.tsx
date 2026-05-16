"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import { SectionHeading } from "./SectionHeading";

const secondaryTags = ["воронки продаж", "AI-маркетинг", "SEO/GEO", "контент-система", "партнёрские модели"];

export function ServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="services"
          label="02 / Services"
          title="Три понятных входа"
          description="Если задача пока размыта - начинаем с разбора. Если уже ясно, что нужно, собираем сайт, бота или AI-инструмент."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {secondaryTags.map((tag) => (
            <span key={tag} className="interactive-chip rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-surface">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const number = String(index + 1).padStart(2, "0");

            return (
              <div key={service.title} className="border-b border-white/10 last:border-b-0">
                <button
                  type="button"
                  className="grid w-full gap-4 px-5 py-6 text-left transition hover:bg-white/[0.03] sm:grid-cols-[64px_1fr_32px] sm:px-8"
                  aria-expanded={isActive}
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                >
                  <span className="font-mono text-xs uppercase text-lime">{number}</span>
                  <span>
                    <span className="block font-display text-2xl font-black uppercase leading-none text-text sm:text-4xl">
                      {service.title}
                    </span>
                    <span className="mt-3 block max-w-3xl text-base leading-7 text-muted">
                      {service.clientProblem}
                    </span>
                  </span>
                  <span className="text-2xl text-lime transition hover:scale-110">{isActive ? "-" : "+"}</span>
                </button>

                {isActive ? (
                  <div className="grid gap-6 px-5 pb-7 sm:grid-cols-[64px_1fr] sm:px-8">
                    <div />
                    <div className="grid gap-6">
                      <div className="grid gap-4 lg:grid-cols-3">
                        <div className="interactive-card rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                          <p className="font-mono text-xs uppercase text-lime">Проблема</p>
                          <p className="mt-3 text-base leading-7 text-muted">{service.clientProblem}</p>
                        </div>
                        <div className="interactive-card rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                          <p className="font-mono text-xs uppercase text-lime">Что делаю</p>
                          <p className="mt-3 text-base leading-7 text-muted">{service.whatIDo}</p>
                        </div>
                        <div className="interactive-card rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                          <p className="font-mono text-xs uppercase text-lime">Результат</p>
                          <p className="mt-3 text-base leading-7 text-muted">{service.result}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span key={tag} className="interactive-chip rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <ButtonLink href={siteConfig.fallbackCtaHref} variant="secondary">
                          Разобрать задачу
                        </ButtonLink>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
