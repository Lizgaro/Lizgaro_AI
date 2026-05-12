import { SectionHeading } from "./SectionHeading";

const principles = [
  "5 минут мысли -> 50 минут действия.",
  "MVP раньше идеала.",
  "Сначала аудитория, потом продукт.",
  "Сначала руками, потом автоматизация.",
  "Не потреблять ради потребления — применять и создавать.",
  "Дизайн должен усиливать смысл, а не закрывать пустоту."
];

export function Philosophy() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="philosophy"
          label="06 / Philosophy"
          title="Как я думаю и работаю"
          description="Принципы нужны не для манифеста, а чтобы быстрее принимать решения и запускать."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <div key={principle} className="rounded-[2rem] border border-white/10 bg-surface p-6">
              <p className="font-mono text-xs uppercase text-lime">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-8 font-display text-3xl font-black uppercase leading-none text-text">{principle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
