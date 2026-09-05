import { Download, Mail } from 'lucide-react'
import { getSocialUrl, profile, resumeUrl } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './icons'

const secondaryCta =
  'inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3.5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-paper-deep'

export function Contact() {
  const githubUrl = getSocialUrl(profile.githubUrl)
  const linkedinUrl = getSocialUrl(profile.linkedinUrl)

  return (
    <section id="contact" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="flex items-center gap-3">
          <span className="label-mono text-ink-muted" aria-hidden="true">
            09
          </span>
          <span className="h-px w-6 bg-line-strong" aria-hidden="true" />
          <span className="label-mono text-accent">Contact</span>
        </p>

        <h2 className="mt-4 max-w-3xl font-serif text-[clamp(1.85rem,3.4vw,2.6rem)] font-semibold leading-[1.15] tracking-tight text-ink">
          Open to senior backend, AI and platform engineering roles
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-ink-secondary sm:text-[1.05rem]">
          {profile.availabilityDetail} If a system on this page is close to what
          your team is working on, that is a good place to start the
          conversation.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-2.5">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email Me
          </a>
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
          <a href={resumeUrl} download className={secondaryCta}>
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <p className="mt-8">
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-sm text-ink-secondary transition-colors hover:text-accent"
          >
            {profile.email}
          </a>
        </p>
      </div>
    </section>
  )
}
