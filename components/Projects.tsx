import { currentProjects, pastProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="projects"
          label="03 / Projects"
          title="Проекты и кейсы"
          description="Активные проекты и работы, по которым видно мой подход к сайтам, AI, партнёрствам и системам."
        />

        <div className="mt-12">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h3 className="font-display text-3xl font-black uppercase leading-none text-text sm:text-4xl">
              Что развиваю сейчас
            </h3>
            <span className="hidden font-mono text-xs uppercase text-lime sm:block">Active projects</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {currentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h3 className="font-display text-3xl font-black uppercase leading-none text-text sm:text-4xl">
              Что уже делал
            </h3>
            <span className="hidden font-mono text-xs uppercase text-muted sm:block">Selected work</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {pastProjects.map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
