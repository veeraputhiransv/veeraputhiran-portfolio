import { getSocialUrl, profile, resumeUrl } from '../data/profile'
import { GitHubIcon, LinkedInIcon } from './icons'

const footerLinks = [
  { href: '#work', label: 'Independent Engineering' },
  { href: '#products', label: 'Professional Products' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#experience', label: 'Experience' },
] as const

export function Footer() {
  const year = new Date().getFullYear()
  const githubUrl = getSocialUrl(profile.githubUrl)
  const linkedinUrl = getSocialUrl(profile.linkedinUrl)

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-serif text-xl font-semibold">{profile.name}</p>
            <p className="label-mono mt-2 text-white/60">{profile.role}</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
              {profile.headline}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-10">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-wrap items-center gap-2.5">
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                <GitHubIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
            {linkedinUrl ? (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
            <a
              href={resumeUrl}
              download
              className="rounded-md border border-white/15 px-3.5 py-2 text-sm font-medium text-white/85 transition-colors hover:border-white/40 hover:text-white"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono text-white/55">
            React · TypeScript · Tailwind · GitHub Pages
          </p>
          <p className="text-sm text-white/50">
            © {year} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
