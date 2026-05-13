import { siteConfig } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  const steps = siteConfig.hero.consoleSteps;

  return (
    <section id="top" className="relative isolate overflow-hidden px-4 pb-14 pt-28 sm:pb-20 sm:pt-36">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(244,246,240,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(244,246,240,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-ink to-transparent" />

      <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase text-lime">{siteConfig.hero.label}</p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.15rem,8vw,7.1rem)] font-black uppercase leading-[0.88] text-text">
            {siteConfig.displayName}
          </h1>
        </div>

        <div className="max-w-2xl">
          <h2 className="text-balance font-display text-[clamp(2.35rem,5.6vw,4.9rem)] font-black uppercase leading-[0.9] text-text">
            {siteConfig.hero.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {siteConfig.hero.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={siteConfig.fallbackCtaHref}>{siteConfig.hero.ctaPrimary}</ButtonLink>
            <ButtonLink href="#projects" variant="secondary">
              {siteConfig.hero.ctaSecondary}
            </ButtonLink>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted">{siteConfig.hero.support}</p>

          <div className="mt-8 rounded-[1.5rem] border border-lime/20 bg-lime/[0.04] p-4 shadow-glow sm:p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[11px] uppercase text-muted">
              <span>Monetization path</span>
              <span className="text-lime">MVP mode</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {steps.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {siteConfig.hero.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] uppercase text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
