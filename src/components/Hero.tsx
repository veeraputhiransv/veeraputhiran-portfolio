import { ArrowRight, Download } from 'lucide-react'
import { getSocialUrl, profile, resumeUrl } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './icons'

export function Hero() {
  const githubUrl = getSocialUrl(profile.githubUrl)
  const linkedinUrl = getSocialUrl(profile.linkedinUrl)

  return (
    <section id="home" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-secondary">
          <span
            className="h-1.5 w-1.5 rounded-full bg-success"
            aria-hidden="true"
          />
          {profile.availability}
        </p>

        <p className="mt-8 text-sm font-medium tracking-wide text-accent">
          {profile.role}
        </p>

        <h1 className="mt-3 font-serif text-[clamp(2.4rem,6vw,4.35rem)] font-semibold leading-[1.08] tracking-tight text-ink">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-2xl text-xl font-medium leading-snug text-ink sm:text-2xl">
          {profile.headline}
        </p>

        <p className="mt-5 max-w-2xl text-base leading-7 text-ink-secondary sm:text-[1.05rem]">
          {profile.summary}
        </p>

        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Primary technologies">
          {profile.heroBadges.map((badge) => (
            <li
              key={badge}
              className="rounded-md border border-line bg-surface px-3 py-1.5 text-sm text-ink-secondary"
            >
              {badge}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink"
          >
            View Projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-paper"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-paper"
            >
              <GitHubIcon className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          ) : null}
          {linkedinUrl ? (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-paper"
            >
              <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}
