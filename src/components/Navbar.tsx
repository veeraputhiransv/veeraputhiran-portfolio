import { useEffect, useState } from 'react'
import { Menu, Sparkles, X } from 'lucide-react'
import { getSocialUrl, profile, resumeUrl } from '../data/profile'
import { GitHubIcon } from './icons'

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'products', label: 'Products' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const

type NavbarProps = {
  onAskVeera: () => void
}

export function Navbar({ onAskVeera }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const githubUrl = getSocialUrl(profile.githubUrl)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Marks the section currently under the header so a long page stays
  // navigable. Observer-based, so there is no scroll-handler layout work.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
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
          ? 'border-line bg-paper/95 backdrop-blur-sm'
          : 'border-transparent bg-paper/90 backdrop-blur-sm'
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="flex items-center gap-2.5 text-ink no-underline"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-navy font-serif text-sm font-semibold text-white">
            VS
          </span>
          <span className="hidden sm:block">
            <span className="block text-[13px] font-semibold tracking-tight">
              {profile.name}
            </span>
            <span className="label-mono block text-ink-muted">
              Backend & AI
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-4 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={`text-[13px] font-medium transition-colors hover:text-ink ${
                  active === item.id ? 'text-accent' : 'text-ink-secondary'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={onAskVeera}
            className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-2 text-[13px] font-medium text-ink transition-colors hover:border-line-strong"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Ask Veera
          </button>
          <a
            href={resumeUrl}
            download
            className="rounded-md border border-line bg-surface px-3 py-2 text-[13px] font-medium text-ink transition-colors hover:border-line-strong"
          >
            Resume
          </a>
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-navy px-3 py-2 text-[13px] font-medium text-white transition-colors hover:bg-ink"
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
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-surface lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {navItems.map((item) => (
              <li key={item.id} className="border-b border-line last:border-b-0">
                <a
                  href={`#${item.id}`}
                  className="block py-3 text-[0.95rem] font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-5 pt-2 pb-5 sm:px-8">
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                onAskVeera()
              }}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-line px-3.5 py-2.5 text-sm font-medium text-ink"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Ask Veera
            </button>
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
