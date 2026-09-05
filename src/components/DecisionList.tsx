import type { EngineeringDecision } from '../data/products'

type DecisionListProps = {
  decisions: readonly EngineeringDecision[]
}

/**
 * The deepest layer of a case study: the trade-off, and why it went that way.
 * Numbered so a reader can reference one in a conversation.
 */
export function DecisionList({ decisions }: DecisionListProps) {
  return (
    <ol className="grid gap-x-8 gap-y-6 lg:grid-cols-2">
      {decisions.map((decision, index) => (
        <li key={decision.title} className="flex gap-3.5">
          <span
            className="label-mono mt-1 shrink-0 text-line-strong"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <h5 className="text-sm font-semibold tracking-tight text-ink">
              {decision.title}
            </h5>
            <p className="mt-1.5 text-sm leading-6 text-ink-secondary">
              {decision.detail}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}
