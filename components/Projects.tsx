import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="projects"
          label="03 / Projects"
          title="Проекты и работы с честными статусами"
          description="Активные проекты, внутренние системы, paused-направления и исследования. Без фейковых метрик, клиентов и отзывов."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
