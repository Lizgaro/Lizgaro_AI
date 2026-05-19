import { siteConfig } from "@/data/site";

const visibleSocials = siteConfig.socials.filter((item) => item.href);

export function Footer() {
  return (
    <footer className="px-4 pb-8">
      <div className="mx-auto grid max-w-7xl gap-6 border-t border-white/10 pt-8 text-sm text-muted lg:grid-cols-[1fr_auto_auto] lg:items-start">
        <div>
          <p className="font-semibold uppercase text-text">{siteConfig.name}</p>
          <p className="mt-1">{siteConfig.role}</p>
        </div>

        <nav className="flex flex-wrap gap-3" aria-label="Быстрые ссылки">
          {[
            ["Проекты", "/#proof"],
            ["Соцсети", "/#socials"],
            ["Блог", "/blog"],
            ["RSS", "/rss.xml"],
            ["Контакт", "/#contact"]
          ].map(([label, href]) => (
            <a key={href} href={href} className="interactive-link hover:text-lime">
              {label}
            </a>
          ))}
        </nav>

        {visibleSocials.length ? (
          <nav className="flex flex-wrap gap-3" aria-label="Социальные ссылки">
            {visibleSocials.map((social) => (
              <a key={social.label} href={social.href} className="interactive-link hover:text-lime">
                {social.label}
              </a>
            ))}
          </nav>
        ) : (
          <p>Контакты будут добавлены после финального выбора ссылок.</p>
        )}
      </div>
    </footer>
  );
}
