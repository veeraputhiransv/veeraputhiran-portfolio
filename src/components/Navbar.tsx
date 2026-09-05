import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { getSocialUrl, profile, resumeUrl } from '../data/profile'
import { GitHubIcon } from './icons'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#contact', label: 'Contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const githubUrl = getSocialUrl(profile.githubUrl)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? 'border-line bg-surface/95 backdrop-blur-sm'
          : 'border-transparent bg-paper/90 backdrop-blur-sm'
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="flex items-center gap-3 text-ink no-underline"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-navy font-serif text-sm font-semibold text-white">
            VS
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:inline">
            {profile.shortName}
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[13px] font-medium text-ink-secondary transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={resumeUrl}
            download
            className="rounded-md border border-line bg-surface px-3.5 py-2 text-[13px] font-medium text-ink transition-colors hover:border-line-strong hover:bg-paper"
          >
            Resume
          </a>
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-navy px-3.5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-ink"
            >
              <GitHubIcon className="h-3.5 w-3.5" aria-hidden="true" />
              GitHub
            </a>
          ) : null}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface text-ink lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-surface lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 text-base font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-auto flex max-w-6xl gap-2 px-5 pb-5 sm:px-8">
            <a
              href={resumeUrl}
              download
              className="flex-1 rounded-md border border-line px-3.5 py-2.5 text-center text-sm font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-md bg-navy px-3.5 py-2.5 text-center text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
