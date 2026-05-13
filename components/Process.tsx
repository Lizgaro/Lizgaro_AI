import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Ты пишешь в Telegram",
    text: "Коротко описываешь идею, сайт, продукт, блог, бота или задачу."
  },
  {
    title: "Я задаю вопросы",
    text: "Чтобы понять, где точка роста: оффер, сайт, бот, воронка, контент или монетизация."
  },
  {
    title: "Выбираем первый шаг",
    text: "Не строим огромную систему сразу. Сначала выбираем понятный разбор или MVP."
  },
  {
    title: "Собираем структуру",
    text: "Оффер, аудитория, сайт, бот, воронка, контент или AI-связка."
  },
  {
    title: "Запускаем и улучшаем",
    text: "Смотрим, что работает, что мешает и что можно усилить дальше."
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
            <article key={step.title} className="rounded-[2rem] border border-white/10 bg-surface p-5 sm:p-6">
              <p className="font-mono text-xs uppercase text-lime">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-8 font-display text-2xl font-black uppercase leading-none text-text">{step.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
