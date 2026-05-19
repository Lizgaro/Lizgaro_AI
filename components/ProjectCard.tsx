import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

const statusStyles: Record<Project["status"], string> = {
  active: "border-lime/40 bg-lime/10 text-lime",
  system: "border-mint/30 bg-mint/10 text-mint",
  building: "border-white/15 bg-white/[0.04] text-text",
  model: "border-white/15 bg-white/[0.03] text-muted",
  tool: "border-white/15 bg-white/[0.03] text-muted",
  direction: "border-white/15 bg-white/[0.03] text-muted"
};

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
  revealIndex?: number;
};

export function ProjectCard({ project, compact = false, revealIndex = 0 }: ProjectCardProps) {
  const isExternal = project.ctaUrl?.startsWith("http");
  const revealStyle = { "--reveal-delay": `${Math.min(revealIndex * 70, 360)}ms` } as CSSProperties;

  if (compact) {
    return (
      <article
        data-motion-reveal
        data-tilt-card
        style={revealStyle}
        className="interactive-card motion-reveal tilt-card rounded-[1.5rem] border border-white/10 bg-surface p-5"
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full border px-3 py-1 font-mono text-[11px] uppercase ${statusStyles[project.status]}`}>
            {project.statusLabel}
          </span>
          <span className="text-xs uppercase text-muted">{project.category}</span>
        </div>
        <h3 className="mt-5 font-display text-2xl font-black uppercase leading-none text-text sm:text-3xl">
          {project.title}
        </h3>
        <div className="mt-5 grid gap-4 text-sm leading-6 text-muted">
          <p>
            <span className="font-semibold text-lime">Ситуация: </span>
            {project.problem || project.shortDescription}
          </p>
          {project.solution ? (
            <p>
              <span className="font-semibold text-lime">Что сделал: </span>
              {project.solution}
            </p>
          ) : null}
          {project.valueForUser ? (
            <p>
              <span className="font-semibold text-lime">Смысл: </span>
              {project.valueForUser}
            </p>
          ) : null}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="interactive-chip rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
        {project.ctaUrl && project.ctaLabel ? (
          <a
            href={project.ctaUrl}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            className="interactive-link group mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-text hover:border-lime/50 hover:bg-lime/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
          >
            {project.ctaLabel} <span className="arrow-shift ml-2" aria-hidden="true">-&gt;</span>
          </a>
        ) : null}
      </article>
    );
  }

  return (
    <article
      data-motion-reveal
      data-tilt-card
      style={revealStyle}
      className={`interactive-card motion-reveal tilt-card group relative isolate flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-surface p-6 sm:p-8 ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(185,255,61,0.10),transparent_34%),linear-gradient(90deg,rgba(244,246,240,0.04)_1px,transparent_1px)] bg-[size:auto,48px_48px] opacity-80" />

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className={`rounded-full border px-3 py-1 font-mono text-[11px] uppercase ${statusStyles[project.status]}`}>
            {project.statusLabel}
          </span>
          <span className="font-mono text-[11px] uppercase text-muted">{project.category}</span>
        </div>

        <h3 className="mt-6 max-w-4xl font-display text-4xl font-black uppercase leading-none text-text sm:text-5xl">
          {project.title}
        </h3>
        {project.hook ? <p className="mt-5 max-w-3xl text-lg leading-8 text-lime">{project.hook}</p> : null}
        <p className="mt-5 max-w-4xl text-base leading-7 text-muted sm:text-lg sm:leading-8">{project.shortDescription}</p>
      </div>

      <div className="mt-7">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="interactive-chip rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
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
              className="interactive-link group inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-text hover:border-lime/50 hover:bg-lime/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
            >
              {project.ctaLabel} <span className="arrow-shift ml-2" aria-hidden="true">-&gt;</span>
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
