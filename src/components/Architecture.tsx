import { architecturePrinciples, systemBuildSteps } from '../data/architecture'
import { ArchitectureFlow } from './ArchitectureFlow'
import { SectionHeading } from './SectionHeading'

export function Architecture() {
  return (
    <section id="architecture" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          index="06"
          eyebrow="Architecture"
          title="How I build systems"
          description="The reasoning I bring to a system before any of it is written, with the place on this page where each one shows up."
        />

        <div className="mt-12 rounded-lg border border-line bg-surface p-5 sm:p-7">
          <h3 className="label-mono text-ink-muted">
            Requirement to production feedback
          </h3>
          <div className="mt-4">
            <ArchitectureFlow
              steps={systemBuildSteps}
              labeled
              ariaLabel="Path from product requirement to production feedback"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-x-6 gap-y-6 md:grid-cols-2">
          {architecturePrinciples.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-lg border border-line bg-surface p-6"
            >
              <h3 className="text-base font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-secondary">
                {item.description}
              </p>
              <p className="mt-4 border-t border-line pt-4 text-[0.82rem] leading-6 text-ink-muted">
                {item.example}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
