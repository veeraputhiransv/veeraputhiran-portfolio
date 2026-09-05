import { ArrowRight } from 'lucide-react'
import { experience } from '../data/experience'
import { SectionHeading } from './SectionHeading'
import { TechList } from './TechList'

export function Experience() {
  return (
    <section id="experience" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          index="07"
          eyebrow="Professional Experience"
          title="9+ years across enterprise SaaS, finance / ERP, AI and backend systems"
          description="A summary view. Each role links into the product case studies rather than repeating them."
        />

        <ol className="mt-14 border-l border-line">
          {experience.map((role) => (
            <li key={role.id} className="relative pb-14 pl-6 last:pb-0 sm:pl-10">
              <span
                className="absolute top-2 -left-[4.5px] h-2 w-2 rounded-full bg-accent"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-x-8 gap-y-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-secondary">
                    <span className="font-medium text-ink">{role.company}</span>
                    {role.client ? ` — Client: ${role.client}` : ''}
                    {role.context ? ` · ${role.context}` : ''}
                  </p>
                </div>
                <p className="shrink-0">
                  <span className="label-mono text-ink-muted">
                    {role.period}
                    {role.location ? ` · ${role.location}` : ''}
                  </span>
                </p>
              </div>

              {role.progression ? (
                <p className="mt-2 text-[0.82rem] leading-6 text-ink-muted">
                  {role.progression}
                </p>
              ) : null}

              <p className="mt-4 max-w-3xl text-[0.97rem] leading-7 text-ink-secondary">
                {role.summary}
              </p>

              <ul className="mt-5 grid max-w-3xl gap-1.5">
                {role.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-baseline gap-2.5 text-sm leading-6 text-ink-secondary"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-strong"
                      aria-hidden="true"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <TechList
                  items={role.technologies}
                  label={`${role.company} technologies`}
                />
              </div>

              {role.products ? (
                <div className="mt-6">
                  <h4 className="label-mono text-ink-muted">
                    Product case studies
                  </h4>
                  <ul className="mt-2.5 flex flex-wrap gap-x-5 gap-y-2">
                    {role.products.map((product) => (
                      <li key={product.href}>
                        <a
                          href={product.href}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                        >
                          {product.label}
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
