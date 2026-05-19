import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const caseProjects = projects.filter((project) => ["avito-leads", "mari-nails", "ambassador-hub"].includes(project.id));

  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="cases"
          label="05 / Cases"
          title="Кейсы, где важен был не инструмент, а правильный первый шаг"
          description="Ситуация → что сделал → смысл. Без выдуманных метрик и обещаний, которых нет."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {caseProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} compact revealIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
