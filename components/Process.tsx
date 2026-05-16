import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Ты пишешь в Telegram",
    text: "Коротко описываешь идею, сайт, продукт, блог, бота или задачу.",
    hint: "Точка входа без длинного брифа"
  },
  {
    title: "Я задаю вопросы",
    text: "Чтобы понять, где точка роста: оффер, сайт, бот, воронка, контент или монетизация.",
    hint: "Сначала ясность, потом сборка"
  },
  {
    title: "Выбираем первый шаг",
    text: "Не строим огромную систему сразу. Сначала выбираем понятный разбор или MVP.",
    hint: "MVP вместо перегруза"
  },
  {
    title: "Собираем структуру",
    text: "Оффер, аудитория, сайт, бот, воронка, контент или AI-связка.",
    hint: "Появляется рабочая схема"
  },
  {
    title: "Запускаем и улучшаем",
    text: "Смотрим, что работает, что мешает и что можно усилить дальше.",
    hint: "Решения на фактах, не на догадках"
  }
];

export function Process() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="process"
          label="06 / Process"
          title="Как проходит работа"
          description="После клика не будет тумана. Сначала разбираем задачу, потом выбираем ближайшее действие."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step.title} className="interactive-card group rounded-[2rem] border border-white/10 bg-surface p-5 sm:p-6">
              <p className="font-mono text-xs uppercase text-lime">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-8 font-display text-2xl font-black uppercase leading-none text-text">{step.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{step.text}</p>
              <p className="mt-5 border-t border-white/10 pt-4 font-mono text-[11px] uppercase text-muted transition group-hover:border-lime/30 group-hover:text-lime">
                {step.hint}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
