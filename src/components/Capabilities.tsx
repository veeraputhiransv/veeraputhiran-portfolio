import { capabilityGroups } from '../data/capabilities'
import { SectionHeading } from './SectionHeading'

export function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          index="05"
          eyebrow="Engineering Capabilities"
          title="Grouped by the work, with where each one was used"
          description="No proficiency ratings. Each capability lists the products and projects on this page where it was actually applied, so the claim is checkable against the case studies above."
        />

        <div className="mt-14 grid gap-x-12 gap-y-14 lg:grid-cols-2">
          {capabilityGroups.map((group) => (
            <section key={group.id} aria-labelledby={`capability-${group.id}`}>
              <h3
                id={`capability-${group.id}`}
                className="font-serif text-xl font-semibold tracking-tight text-ink"
              >
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-secondary">
                {group.description}
              </p>

              <dl className="mt-6">
                {group.capabilities.map((capability) => (
                  <div
                    key={capability.name}
                    className="grid gap-x-6 gap-y-1 border-t border-line py-3 sm:grid-cols-[9.5rem_minmax(0,1fr)]"
                  >
                    <dt className="font-mono text-[0.82rem] font-medium text-ink">
                      {capability.name}
                    </dt>
                    <dd className="text-[0.82rem] leading-6 text-ink-muted">
                      {capability.usedIn.join(' · ')}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
