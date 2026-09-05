import { experience } from '../data/experience'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Selected roles"
          description="A timeline of backend, platform and applied AI work across enterprise products and SaaS systems."
        />

        <ol className="relative mt-14 space-y-0 border-l border-line pl-0 sm:ml-2">
          {experience.map((role) => (
            <li key={role.id} className="relative pb-12 pl-6 last:pb-0 sm:pl-10">
              <span
                className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full border-2 border-accent bg-paper"
                aria-hidden="true"
              />
              <article className="rounded-lg border border-line bg-surface p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-ink">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-secondary">
                      {role.company}
                      {role.client ? ` — Client: ${role.client}` : ''}
                      {role.context ? ` · ${role.context}` : ''}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm text-ink-muted">
                    {role.period}
                    {role.location ? ` · ${role.location}` : ''}
                  </p>
                </div>

                <ul className="mt-5 space-y-2.5 text-[0.98rem] leading-7 text-ink-secondary">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="pl-4 relative">
                      <span
                        className="absolute top-[0.7rem] left-0 h-1 w-1 rounded-full bg-line-strong"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {role.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-paper px-2.5 py-1 text-xs font-medium text-ink-secondary"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
