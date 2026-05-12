import type { Project } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

const statusStyles: Record<Project["status"], string> = {
  active: "border-lime/40 bg-lime/10 text-lime",
  paused: "border-white/15 bg-white/[0.03] text-muted",
  internal: "border-mint/30 bg-mint/10 text-mint",
  research: "border-white/15 bg-white/[0.03] text-text",
  media: "border-lime/40 bg-lime/10 text-lime"
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isExternal = project.ctaUrl?.startsWith("http");

  return (
    <article
      className={`group relative isolate flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-surface p-6 transition hover:border-lime/40 sm:p-8 ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(185,255,61,0.10),transparent_34%),linear-gradient(90deg,rgba(244,246,240,0.04)_1px,transparent_1px)] bg-[size:auto,48px_48px] opacity-80" />

      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className={`rounded-full border px-3 py-1 font-mono text-xs uppercase ${statusStyles[project.status]}`}>
            {project.statusLabel}
          </span>
          <span className="font-mono text-xs uppercase text-muted">{String(index + 1).padStart(2, "0")}</span>
        </div>

        <p className="mt-8 max-w-3xl font-mono text-xs uppercase tracking-[0.08em] text-muted">{project.category}</p>
        <h3 className="mt-4 max-w-4xl font-display text-4xl font-black uppercase leading-none text-text sm:text-5xl">
          {project.title}
        </h3>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-muted">{project.shortDescription}</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {project.problem ? (
            <div className="border-t border-white/10 pt-4">
              <p className="font-mono text-xs uppercase text-lime">Проблема</p>
              <p className="mt-3 text-sm leading-6 text-muted">{project.problem}</p>
            </div>
          ) : null}
          {project.solution ? (
            <div className="border-t border-white/10 pt-4">
              <p className="font-mono text-xs uppercase text-lime">Решение</p>
              <p className="mt-3 text-sm leading-6 text-muted">{project.solution}</p>
            </div>
          ) : null}
          {project.valueForUser ? (
            <div className="border-t border-white/10 pt-4">
              <p className="font-mono text-xs uppercase text-lime">Польза</p>
              <p className="mt-3 text-sm leading-6 text-muted">{project.valueForUser}</p>
            </div>
          ) : null}
        </div>

        {project.role ? (
          <p className="mt-6 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-muted">
            <span className="font-semibold text-text">Роль: </span>
            {project.role}
          </p>
        ) : null}
      </div>

      <div className="mt-8">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          {project.ctaUrl && project.ctaLabel ? (
            <a
              href={project.ctaUrl}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-text transition hover:border-lime/50 hover:bg-lime/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
            >
              {project.ctaLabel}
            </a>
          ) : null}
          <ButtonLink href={siteConfig.fallbackCtaHref} variant={project.ctaUrl ? "ghost" : "secondary"}>
            {project.secondaryCtaLabel || "Обсудить похожее"}
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
