import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-serif text-lg font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-white/70">{profile.role}</p>
        </div>
        <p className="text-sm text-white/60">
          Built with React + TypeScript · {year}
        </p>
      </div>
    </footer>
  )
}
