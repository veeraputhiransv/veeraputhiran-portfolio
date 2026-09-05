import { architecturePrinciples, systemBuildSteps } from '../data/architecture'
import { ArchitectureFlow } from './ArchitectureFlow'
import { SectionHeading } from './SectionHeading'

export function Architecture() {
  return (
    <section id="architecture" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Architecture"
          title="How I Build Systems"
          description="A repeatable path from product requirement to production feedback, with explicit attention to data, security, asynchrony and operability."
        />

        <div className="mt-12 rounded-lg border border-line bg-paper p-5 sm:p-8">
          <ArchitectureFlow steps={systemBuildSteps} labeled />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {architecturePrinciples.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-line bg-paper p-6"
            >
              <h3 className="text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-secondary">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
