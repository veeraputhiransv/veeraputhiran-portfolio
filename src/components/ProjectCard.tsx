import { ArrowUpRight } from 'lucide-react'
import { hasProjectLink, type Project } from '../data/projects'
import { ArchitectureFlow } from './ArchitectureFlow'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const live = hasProjectLink(project.links.live) ? project.links.live : undefined
  const repo = hasProjectLink(project.links.repo) ? project.links.repo : undefined
  const caseStudy = hasProjectLink(project.links.caseStudy)
    ? project.links.caseStudy
    : undefined
  const hasLinks = Boolean(live || repo || caseStudy)

  return (
    <article className="rounded-lg border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-accent">
          {project.tag}
        </p>
        {project.status === 'in-development' ? (
          <span className="rounded-sm border border-navy/20 bg-accent-soft px-2 py-0.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-navy">
            In Development
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 font-serif text-2xl font-semibold tracking-tight text-ink sm:text-[1.7rem]">
        {project.title}
      </h3>

      <p className="mt-4 max-w-3xl text-[1.02rem] leading-7 text-ink-secondary">
        {project.description}
      </p>

      {project.problem ? (
        <div className="mt-6 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-ink-muted">
            Problem
          </p>
          <p className="mt-2 text-sm leading-6 text-ink-secondary">
            {project.problem}
          </p>
        </div>
      ) : null}

      {project.solution ? (
        <div className="mt-6">
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-ink-muted">
            Solution
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.solution.map((item) => (
              <li
                key={item}
                className="rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink-secondary"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {project.features ? (
        <div className="mt-6">
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-ink-muted">
            Capabilities
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.features.map((item) => (
              <li
                key={item}
                className="rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink-secondary"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-8">
        <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-ink-muted">
          Architecture
        </p>
        <ArchitectureFlow steps={project.architecture} />
      </div>

      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Project technologies">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-paper px-2.5 py-1 text-xs font-medium text-ink-secondary"
          >
            {tech}
          </li>
        ))}
      </ul>

      {hasLinks ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Live
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : null}
          {repo ? (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Source
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : null}
          {caseStudy ? (
            <a
              href={caseStudy}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Case study
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}
