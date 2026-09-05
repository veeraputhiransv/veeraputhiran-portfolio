import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { getSocialUrl, profile, resumeUrl } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './icons'

type HeroProps = {
  onAskVeera: () => void
}

const secondaryCta =
  'inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3.5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-paper-deep'

export function Hero({ onAskVeera }: HeroProps) {
  const githubUrl = getSocialUrl(profile.githubUrl)
  const linkedinUrl = getSocialUrl(profile.linkedinUrl)

  return (
    <section id="home" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1">
          <span
            className="h-1.5 w-1.5 rounded-full bg-success"
            aria-hidden="true"
          />
          <span className="label-mono text-ink-secondary">
            {profile.availability}
          </span>
        </p>

        <h1 className="mt-9 font-serif text-[clamp(2.5rem,6.5vw,4.5rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-ink">
          {profile.name}
        </h1>

        <p className="mt-4 text-lg font-semibold tracking-tight text-accent sm:text-xl">
          {profile.role}
        </p>

        <p className="mt-6 max-w-2xl text-[1.15rem] leading-8 text-ink-secondary sm:text-[1.3rem] sm:leading-9">
          {profile.headline}
        </p>

        <ul
          className="mt-9 flex flex-wrap items-center gap-x-2.5 gap-y-2"
          aria-label="Primary technologies"
        >
          {profile.heroStack.map((item, index) => (
            <li key={item} className="flex items-center gap-2.5">
              <span className="font-mono text-[0.82rem] font-medium text-ink">
                {item}
              </span>
              {index < profile.heroStack.length - 1 ? (
                <span className="text-line-strong" aria-hidden="true">
                  •
                </span>
              ) : null}
            </li>
          ))}
        </ul>

        <p className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-ink-muted">
          {profile.heroSupporting.map((item, index) => (
            <span key={item} className="flex items-center gap-2.5">
              <span className="label-mono">{item}</span>
              {index < profile.heroSupporting.length - 1 ? (
                <span className="text-line-strong" aria-hidden="true">
                  •
                </span>
              ) : null}
            </span>
          ))}
        </p>

        <div className="mt-11 flex flex-wrap items-center gap-2.5">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink"
          >
            View Engineering Work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <button type="button" onClick={onAskVeera} className={secondaryCta}>
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Ask Veera AI
          </button>
          <a href={resumeUrl} download className={secondaryCta}>
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className={secondaryCta}
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
              className={secondaryCta}
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
