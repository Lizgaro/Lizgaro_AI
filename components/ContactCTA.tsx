import { siteConfig } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

const visibleSocials = siteConfig.socials.filter((item) => item.href);

export function ContactCTA() {
  const contactHref = siteConfig.contacts.telegram;

  return (
    <section id="contact" className="scroll-mt-28 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-lime/20 bg-lime text-ink">
        <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_0.45fr] lg:p-14">
          <div>
            <p className="font-mono text-xs uppercase text-ink/70">09 / Contact</p>
            <h2 className="mt-5 max-w-5xl font-display text-5xl font-black uppercase leading-[0.9] sm:text-7xl lg:text-8xl">
              Есть идея, продукт или хаос в монетизации?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75">
              Напиши мне в Telegram. Разберём, что усилить первым: оффер, сайт, бот, контент, воронку или модель
              заработка.
            </p>
          </div>

          <div className="flex flex-col justify-end gap-4">
            <ButtonLink href={contactHref} variant="ink">
              Написать в Telegram
            </ButtonLink>
            <ButtonLink href="/#offers" variant="inkGhost">
              Выбрать формат работы
            </ButtonLink>

            <div className="mt-4 rounded-3xl border border-ink/15 bg-ink/5 p-5">
              <p className="font-mono text-xs uppercase text-ink/60">Что написать</p>
              <p className="mt-3 text-sm leading-6 text-ink/70">
                Коротко опиши идею, текущую точку и что хочешь получить: сайт, бота, воронку, монетизацию аудитории,
                блог или разбор.
              </p>
              {visibleSocials.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {visibleSocials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      className="rounded-full border border-ink/20 px-3 py-1 text-sm"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
