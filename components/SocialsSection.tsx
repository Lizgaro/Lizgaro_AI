import type { CSSProperties } from "react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

const visibleSocials = siteConfig.socials.filter((item) => item.href);

export function SocialsSection() {
  return (
    <section id="socials" className="scroll-mt-28 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="09 / Socials"
          title="Сайт — чтобы понять, что я делаю. Соцсети — чтобы понять, как я думаю"
          description="Telegram — глубже и экспертнее. Threads, X и Instagram — короче, резче, визуальнее и работают на переходы к сайту, блогу, кейсам и заявке."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
          <div
            data-motion-reveal
            data-tilt-card
            className="interactive-card motion-reveal tilt-card rounded-[2rem] border border-lime/20 bg-lime p-6 text-ink sm:p-8"
          >
            <p className="font-mono text-xs uppercase text-ink/60">Соцсети → сайт → заявка</p>
            <h3 className="mt-4 font-display text-4xl font-black uppercase leading-none sm:text-5xl">
              Живой процесс вместо стерильной витрины
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
              В соцсетях — мысли, хуки, эксперименты, ошибки, статьи, продукты и наблюдения. На сайте — структура, кейсы и точка входа.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {visibleSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="interactive-link inline-flex min-h-12 items-center justify-center rounded-full border border-ink/20 bg-ink px-5 py-3 text-sm font-semibold text-text hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                >
                  {social.label} <span className="arrow-shift ml-2" aria-hidden="true">-&gt;</span>
                </a>
              ))}
            </div>
          </div>

          <div
            data-motion-reveal
            className="motion-reveal rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-8"
            style={{ "--reveal-delay": "90ms" } as CSSProperties}
          >
            <p className="font-mono text-xs uppercase text-lime">Роли каналов</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                ["Telegram", "глубже: мысли, материалы, контекст"],
                ["Threads", "быстрее: короткие идеи и хуки"],
                ["X", "резче: тезисы, треды, позиция"],
                ["Instagram", "визуальнее: Reels, карусели, кейсы"]
              ].map(([label, text]) => (
                <div key={label} className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4">
                  <p className="font-semibold text-text">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">
              Связка: соцсети цепляют → сайт объясняет → блог и кейсы углубляют → Telegram прогревает → заявка закрывает.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
