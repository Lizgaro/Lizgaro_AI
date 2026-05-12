import { ButtonLink } from "./ButtonLink";
import { SectionHeading } from "./SectionHeading";

const journalTags = ["Фазы", "AI", "Фокус", "Привычки", "Спорт", "Сон", "Исследования", "Контент"];

export function JournalSection() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="journal"
          label="07 / Journal"
          title="LiveOS Journal: фазы, исследования и выводы"
          description="Медиа-направление о том, как личные наблюдения превращаются не в шум дня, а в полезные статьи, посты и развитие личного бренда."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[0.8fr_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs uppercase text-lime">Контентная логика</p>
            <p className="mt-6 font-display text-4xl font-black uppercase leading-none text-text sm:text-5xl">
              фаза / заметка / голос {"->"} AI-очистка {"->"} вывод {"->"} статья {"->"} соцсети
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-surface-2 p-6 sm:p-8">
            <p className="text-lg leading-8 text-muted">
              Я развиваю медиа-раздел, где фиксирую и анализирую собственную систему управления
              жизнью через фазы дня, спорт, сон, исследования, AI-инструменты и работу над проектами.
              Личный опыт становится основой для статей о фокусе, привычках, прокрастинации,
              восстановлении, продуктивности, контенте и применении AI.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {journalTags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/journal" variant="secondary">
                Открыть Journal
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
