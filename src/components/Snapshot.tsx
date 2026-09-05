import { snapshot } from '../data/snapshot'

export function Snapshot() {
  return (
    <section
      id="snapshot"
      aria-labelledby="snapshot-heading"
      className="border-b border-line bg-surface"
    >
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
        <h2 id="snapshot-heading" className="label-mono text-ink-muted">
          Career / Engineering Snapshot
        </h2>

        <dl className="mt-7 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {snapshot.map((item) => (
            <div key={item.value} className="border-t border-line pt-4">
              <dt className="font-serif text-[1.35rem] font-semibold tracking-tight text-ink">
                {item.value}
              </dt>
              <dd className="mt-1.5">
                <span className="label-mono text-accent">{item.label}</span>
                <p className="mt-2 text-sm leading-6 text-ink-secondary">
                  {item.detail}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
