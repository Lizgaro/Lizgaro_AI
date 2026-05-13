import { siteConfig } from "@/data/site";

const visibleSocials = siteConfig.socials.filter((item) => item.href);

export function Footer() {
  return (
    <footer className="px-4 pb-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold uppercase text-text">{siteConfig.name}</p>
          <p className="mt-1">{siteConfig.role}</p>
        </div>

        {visibleSocials.length ? (
          <nav className="flex flex-wrap gap-3" aria-label="Социальные ссылки">
            {visibleSocials.map((social) => (
              <a key={social.label} href={social.href} className="hover:text-lime">
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
