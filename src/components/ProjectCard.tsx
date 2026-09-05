import { ArrowUpRight } from 'lucide-react'
import { hasProjectLink, type Project } from '../data/projects'
import { ArchitectureFlow } from './ArchitectureFlow'
import { DecisionList } from './DecisionList'
import { Disclosure } from './Disclosure'
import { TechList } from './TechList'

type ProjectCardProps = {
  project: Project
  index: number
  onAskVeera: () => void
}

export function ProjectCard({ project, index, onAskVeera }: ProjectCardProps) {
  const live = hasProjectLink(project.links.live) ? project.links.live : undefined
  const repo = hasProjectLink(project.links.repo) ? project.links.repo : undefined
  const headingId = `project-${project.id}-title`

  return (
    <article
      id={`project-${project.id}`}
      aria-labelledby={headingId}
      className="rounded-lg border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-8"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="label-mono text-ink-muted" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="h-px w-5 bg-line-strong" aria-hidden="true" />
        <p className="label-mono text-accent">{project.tag}</p>
        {project.status === 'in-development' ? (
          <span className="label-mono rounded-sm bg-accent-soft px-2 py-0.5 text-navy">
            In Development
          </span>
        ) : null}
      </div>

      <h3
        id={headingId}
        className="mt-4 font-serif text-[1.6rem] font-semibold leading-tight tracking-tight text-ink sm:text-[1.8rem]"
      >
        {project.title}
      </h3>

      <p className="mt-4 max-w-3xl text-[1.02rem] leading-7 text-ink-secondary">
        {project.description}
      </p>

      <div className="mt-7 grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div>
          <h4 className="label-mono text-ink-muted">Problem</h4>
          <p className="mt-2.5 text-sm leading-6 text-ink-secondary">
            {project.problem}
          </p>
        </div>

        {project.features ? (
          <div>
            <h4 className="label-mono text-ink-muted">Capabilities</h4>
            <ul className="mt-2.5 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {project.features.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-2 text-sm leading-6 text-ink-secondary"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-strong"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="mt-8">
        <h4 className="label-mono text-ink-muted">Architecture</h4>
        <div className="mt-3">
          <ArchitectureFlow
            steps={project.architecture}
            ariaLabel={`${project.title} architecture flow`}
          />
        </div>
      </div>

      <div className="mt-8">
        <h4 className="label-mono text-ink-muted">Stack</h4>
        <div className="mt-3">
          <TechList
            items={project.technologies}
            label={`${project.title} technologies`}
          />
        </div>
      </div>

      <div className="mt-8">
        <Disclosure
          summary="Engineering decisions"
          hint={`${project.decisions.length} trade-offs`}
        >
          <DecisionList decisions={project.decisions} />
        </Disclosure>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        {repo ? (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            Source
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        ) : null}
        {live ? (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            Live
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        ) : null}
        {project.askVeeraDemo ? (
          <button
            type="button"
            onClick={onAskVeera}
            className="text-[0.82rem] font-medium text-ink-muted underline decoration-line-strong decoration-1 underline-offset-4 transition-colors hover:text-ink"
          >
            Try it on this page
          </button>
        ) : null}
      </div>
    </article>
  )
}
