import { siteConfig } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  const steps = siteConfig.hero.consoleSteps;
  const entryPoints = siteConfig.hero.entryPoints;

  return (
    <section id="top" className="relative isolate overflow-hidden px-4 pb-6 pt-24 sm:pt-28 lg:pt-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(244,246,240,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(244,246,240,0.032)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(125deg,rgba(185,255,61,0.11),transparent_34%,rgba(99,255,136,0.055)_68%,transparent)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 border-t border-white/[0.03] bg-gradient-to-t from-ink via-ink/72 to-transparent" />

      <div className="mx-auto flex min-h-[calc(100svh-6.5rem)] max-w-7xl flex-col justify-center gap-5">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.52fr)] lg:items-center">
          <div>
            <p className="hero-reveal font-mono text-xs uppercase tracking-normal text-lime">{siteConfig.hero.label}</p>
            <p className="hero-reveal mt-4 font-mono text-xs uppercase text-muted" style={{ animationDelay: "70ms" }}>
              {siteConfig.role}
            </p>
            <h1
              className="hero-reveal mt-4 max-w-[22rem] break-words font-display text-[clamp(1.85rem,8vw,4.85rem)] font-black uppercase leading-[0.98] tracking-normal text-text [text-wrap:wrap] sm:max-w-5xl sm:text-[clamp(2.55rem,5.35vw,4.85rem)] sm:leading-[0.92] sm:[text-wrap:balance]"
              style={{ animationDelay: "120ms" }}
            >
              {siteConfig.hero.title}
            </h1>
            <p
              className="hero-reveal mt-5 max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
              style={{ animationDelay: "180ms" }}
            >
              {siteConfig.hero.description}
            </p>

            <div className="hero-reveal mt-7 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
              <ButtonLink href={siteConfig.fallbackCtaHref}>{siteConfig.hero.ctaPrimary}</ButtonLink>
              <ButtonLink href="#projects" variant="secondary">
                {siteConfig.hero.ctaSecondary}
              </ButtonLink>
              <ButtonLink href="/blog" variant="ghost">
                Читать блог
              </ButtonLink>
            </div>

            <p className="hero-reveal mt-4 max-w-3xl text-sm leading-6 text-muted" style={{ animationDelay: "300ms" }}>
              {siteConfig.hero.support}
            </p>
          </div>

          <aside
            className="hero-console motion-card hero-reveal w-full max-w-full rounded-[1.5rem] border border-white/10 bg-surface/80 p-4 shadow-[0_28px_110px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-5"
            style={{ animationDelay: "180ms" }}
            aria-label="Маршруты по сайту"
          >
            <div className="flex min-w-0 items-center justify-between gap-4 border-b border-white/10 pb-3 font-mono text-[11px] uppercase text-muted">
              <span>Что здесь найти</span>
              <span className="shrink-0 text-lime">Live portfolio</span>
            </div>

            <div className="mt-1">
              {entryPoints.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="interactive-link group grid grid-cols-[2.35rem_minmax(0,1fr)_1.25rem] gap-3 border-b border-white/10 py-3 hover:border-lime/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                >
                  <span className="font-mono text-xs text-lime">0{index + 1}</span>
                  <span>
                    <span className="block text-base font-semibold text-text transition group-hover:text-lime">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-5 text-muted">{item.description}</span>
                  </span>
                  <span aria-hidden="true" className="arrow-shift text-lime">
                    -&gt;
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-4">
              <p className="font-mono text-[11px] uppercase text-muted">Как обычно собираю систему</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {steps.map((item) => (
                  <span
                    key={item}
                    className="interactive-chip rounded-full border border-lime/20 bg-lime/[0.05] px-3 py-1.5 text-xs text-text"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div
          className="hero-reveal grid gap-3 border-t border-white/10 pt-4 text-sm text-muted sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
          style={{ animationDelay: "420ms" }}
        >
          <p>Ниже - услуги, проекты и блог: можно быстро понять, чем я полезен и с какой задачей ко мне приходить.</p>
          <a
            href="#services"
            className="interactive-link inline-flex font-mono text-xs uppercase text-lime hover:text-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
          >
            Перейти к услугам <span className="arrow-shift ml-1" aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
