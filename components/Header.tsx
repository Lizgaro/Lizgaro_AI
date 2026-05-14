"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { navigation } from "@/data/navigation";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink/82 px-3 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-4">
        <a
          href="/#top"
          className="flex min-w-0 items-center gap-3 rounded-full pr-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
          aria-label="В начало страницы"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-lime/40 bg-lime/10 font-mono text-sm font-bold text-lime">
            AL
          </span>
          <span className="hidden min-w-0 text-sm font-semibold uppercase text-text sm:block">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition hover:bg-white/[0.04] hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={siteConfig.fallbackCtaHref} className="min-h-10 px-4 py-2">
            {siteConfig.hero.ctaPrimary}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-text transition hover:border-lime/40 hover:text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime lg:hidden"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="flex h-4 w-5 flex-col justify-between">
            <span className={`h-px bg-current transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-px bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-px bg-current transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-2 max-h-[calc(100svh-6rem)] max-w-7xl overflow-y-auto rounded-3xl border border-white/10 bg-ink/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl lg:hidden">
          <nav className="grid gap-1" aria-label="Мобильная навигация">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-text transition hover:bg-white/[0.04]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.fallbackCtaHref}
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-2xl bg-lime px-4 py-3 text-center text-sm font-semibold text-ink"
            >
              {siteConfig.hero.ctaPrimary}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
