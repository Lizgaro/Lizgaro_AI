import { skills } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

export function SkillsGrid() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="skills"
          label="03 / Skills"
          title="Навыки не по отдельности, а как связка"
          description="Главная ценность не в одном инструменте, а в соединении AI, маркетинга, продукта, контента и операций."
        />

        <div className="mt-12 grid gap-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="grid gap-5 border-t border-white/10 py-6 lg:grid-cols-[0.32fr_1fr] lg:items-start"
            >
              <h3 className="font-mono text-sm uppercase text-lime">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-text"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
