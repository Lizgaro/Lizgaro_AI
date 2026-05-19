import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Контакт в Telegram",
    text: "Вы пишете в свободной форме: какой у вас продукт, аудитория и что сейчас не работает.",
    hint: "Без брифа на 40 вопросов"
  },
  {
    title: "Диагностика",
    text: "Я задаю несколько точных вопросов и смотрю, где проект теряет деньги, заявки или внимание.",
    hint: "Ищем место разрыва"
  },
  {
    title: "Первый рабочий шаг",
    text: "Выбираем ближайшее действие, которое можно собрать и запустить быстро.",
    hint: "Сначала то, что даст движение"
  },
  {
    title: "Сборка под ключ",
    text: "Я забираю на себя упаковку: смыслы, структуру, текст, сайт, бота, AI-логику или связку между ними.",
    hint: "Контекст от вас, сборка на мне"
  },
  {
    title: "Запуск и усиление",
    text: "Выкатываем рабочую версию, смотрим на реакцию людей, заявки, вопросы и слабые места.",
    hint: "Усиливаем то, что двигает"
  }
];

export function Process() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="process"
          label="04 / Process"
          title="От первого сообщения — до рабочей связки"
          description="Клиенту не нужно самому писать ТЗ, разбираться в технике и управлять каждым слоем. Сначала понимаем суть, потом собираем путь к действию."
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
