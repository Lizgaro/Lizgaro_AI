import { siteConfig } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  const consoleSteps = ["Идея", "Аудитория", "Оффер", "Сайт / бот", "Монетизация"];

  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden px-4 pt-32 sm:pt-36">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(244,246,240,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(244,246,240,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-ink to-transparent" />

      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-between gap-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase text-lime">{siteConfig.hero.label}</p>
            <h1 className="mt-5 max-w-5xl break-normal font-display text-[clamp(3.5rem,10vw,8.25rem)] font-black uppercase leading-[0.9] text-text lg:leading-[0.82]">
              {siteConfig.displayName}
            </h1>
          </div>
          <div className="max-w-xl lg:pb-5">
            <h2 className="font-display text-4xl font-black uppercase leading-none text-text sm:text-5xl">
              {siteConfig.hero.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">{siteConfig.hero.description}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.fallbackCtaHref}>{siteConfig.hero.ctaPrimary}</ButtonLink>
              <ButtonLink href="#projects" variant="secondary">
                {siteConfig.hero.ctaSecondary}
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">{siteConfig.hero.support}</p>
          </div>
        </div>

        <div className="grid gap-6 pb-12 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div className="rounded-[2rem] border border-lime/20 bg-lime/[0.04] p-5 shadow-glow">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs uppercase text-muted">
              <span>Monetization system</span>
              <span className="text-lime">MVP mode</span>
            </div>
            <div className="grid gap-3 pt-5">
              {consoleSteps.map((item, index) => (
                <div key={item} className="grid grid-cols-[80px_1fr] items-center gap-3">
                  <span className="font-mono text-xs uppercase text-muted">{item}</span>
                  <span className="h-2 rounded-full bg-white/10">
                    <span
                      className="block h-2 rounded-full bg-lime"
                      style={{ width: `${42 + index * 11}%` }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {siteConfig.hero.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs uppercase text-muted"
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
