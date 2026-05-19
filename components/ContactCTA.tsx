import { siteConfig } from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import { ContactForm } from "./ContactForm";

const visibleSocials = siteConfig.socials.filter((item) => item.href);

export function ContactCTA() {
  const contactHref = siteConfig.contacts.telegram;

  return (
    <section id="contact" className="scroll-mt-28 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-lime/20 bg-lime text-ink">
        <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[0.9fr_0.72fr] lg:p-14">
          <div>
            <p className="font-mono text-xs uppercase text-ink/70">11 / Contact</p>
            <h2 className="mt-5 max-w-5xl font-display text-5xl font-black uppercase leading-[0.9] sm:text-7xl lg:text-8xl">
              Покажите проект. Я скажу, где теряется движение.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75">
              Чтобы держать качество и нормально погружаться в каждый проект, я беру в личную работу не больше 3-4 проектов в месяц. Напишите коротко: что есть сейчас, где затык и какой результат нужен.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={contactHref} variant="ink">
                Написать в Telegram
              </ButtonLink>
              <ButtonLink href={`mailto:${siteConfig.contacts.email}`} variant="inkGhost">
                {siteConfig.contacts.email}
              </ButtonLink>
            </div>

            <div className="mt-6 rounded-3xl border border-ink/15 bg-ink/5 p-5">
              <p className="font-mono text-xs uppercase text-ink/60">Что написать</p>
              <p className="mt-3 text-sm leading-6 text-ink/70">
                Без длинного ТЗ. Сначала быстро понимаем задачу, потом выбираем ближайший рабочий шаг, который можно запустить уже на этой неделе.
              </p>
              {visibleSocials.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {visibleSocials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      className="interactive-link rounded-full border border-ink/20 px-3 py-1 text-sm hover:border-ink hover:bg-ink/5"
                    >
                      {social.label} <span className="arrow-shift ml-1" aria-hidden="true">-&gt;</span>
                    </a>
                  ))}
                  <a href="/blog" className="interactive-link rounded-full border border-ink/20 px-3 py-1 text-sm hover:border-ink hover:bg-ink/5">
                    Блог <span className="arrow-shift ml-1" aria-hidden="true">-&gt;</span>
                  </a>
                  <a href="/rss.xml" className="interactive-link rounded-full border border-ink/20 px-3 py-1 text-sm hover:border-ink hover:bg-ink/5">
                    RSS <span className="arrow-shift ml-1" aria-hidden="true">-&gt;</span>
                  </a>
                </div>
              ) : null}
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
