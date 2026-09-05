import { Download, Mail } from 'lucide-react'
import { getSocialUrl, profile, resumeUrl } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './icons'

export function Contact() {
  const githubUrl = getSocialUrl(profile.githubUrl)
  const linkedinUrl = getSocialUrl(profile.linkedinUrl)

  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent">
          Contact
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          Let's Build Something Meaningful
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-ink-secondary sm:text-[1.05rem]">
          I'm currently exploring Senior Backend, AI/GenAI, Senior Software
          Engineering and Platform Engineering opportunities.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email Me
          </a>
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
          <a
            href={resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-paper"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <p className="mt-8 text-sm text-ink-muted">{profile.email}</p>
      </div>
    </section>
  )
}
