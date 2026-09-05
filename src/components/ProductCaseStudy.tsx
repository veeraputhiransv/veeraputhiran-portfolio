import type { ProductCaseStudy as ProductCaseStudyData } from '../data/products'
import { ArchitectureFlow } from './ArchitectureFlow'
import { DecisionList } from './DecisionList'
import { Disclosure } from './Disclosure'
import { TechList } from './TechList'

type ProductCaseStudyProps = {
  product: ProductCaseStudyData
  index: number
}

export function ProductCaseStudy({ product, index }: ProductCaseStudyProps) {
  const headingId = `${product.id}-title`

  return (
    <article
      id={product.id}
      aria-labelledby={headingId}
      className="rounded-lg border border-line bg-surface p-6 sm:p-8"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="label-mono text-ink-muted" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="h-px w-5 bg-line-strong" aria-hidden="true" />
        <p className="label-mono text-accent">{product.domain}</p>
      </div>

      <h4
        id={headingId}
        className="mt-4 font-serif text-[1.5rem] font-semibold leading-tight tracking-tight text-ink sm:text-[1.7rem]"
      >
        {product.title}
      </h4>

      <p className="mt-4 max-w-3xl text-[1.02rem] leading-7 text-ink-secondary">
        {product.summary}
      </p>

      {product.outcomes ? (
        <div className="mt-6">
          <h5 className="label-mono text-ink-muted">
            {product.outcomesMeasured ? 'Measured outcome' : 'Outcome'}
          </h5>
          <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
            {product.outcomes.map((outcome) => (
              <li
                key={outcome}
                className={
                  product.outcomesMeasured
                    ? 'rounded-md border border-accent/20 bg-accent-soft px-3.5 py-2.5 font-mono text-[0.82rem] leading-6 text-navy'
                    : 'rounded-md border border-line bg-paper-deep px-3.5 py-2.5 text-sm leading-6 text-ink-secondary sm:col-span-2'
                }
              >
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-8">
        <h5 className="label-mono text-ink-muted">Context</h5>
        <p className="mt-2.5 max-w-3xl text-sm leading-6 text-ink-secondary">
          {product.context}
        </p>
      </div>

      <div className="mt-8">
        <h5 className="label-mono text-ink-muted">Architecture / Workflow</h5>
        <div className="mt-3">
          <ArchitectureFlow
            steps={product.architecture}
            ariaLabel={`${product.title} architecture flow`}
          />
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-x-10">
        <div>
          <h5 className="label-mono text-ink-muted">Stack</h5>
          <div className="mt-3">
            <TechList
              items={product.technologies}
              label={`${product.title} technologies`}
            />
          </div>
        </div>

        {product.infrastructure ? (
          <div>
            <h5 className="label-mono text-ink-muted">Cloud infrastructure</h5>
            <div className="mt-3">
              <TechList
                items={product.infrastructure}
                label={`${product.title} infrastructure`}
              />
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-8 space-y-0">
        <Disclosure
          summary="What I worked on"
          hint={`${product.work.length} areas`}
        >
          <ul className="grid gap-x-8 gap-y-2 lg:grid-cols-2">
            {product.work.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-2.5 text-sm leading-6 text-ink-secondary"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-strong"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          {product.workflowRoles ? (
            <div className="mt-6">
              <h6 className="label-mono text-ink-muted">Workflow roles</h6>
              <div className="mt-2.5">
                <TechList
                  items={product.workflowRoles}
                  label={`${product.title} workflow roles`}
                />
              </div>
            </div>
          ) : null}
        </Disclosure>

        <Disclosure
          summary="Key engineering decisions"
          hint={`${product.decisions.length} trade-offs`}
        >
          <DecisionList decisions={product.decisions} />
        </Disclosure>
      </div>
    </article>
  )
}
