import { ChevronRight } from 'lucide-react'

type ArchitectureFlowProps = {
  steps: readonly string[]
  /** Numbers each node — used for the ordered "how I build systems" path. */
  labeled?: boolean
  ariaLabel?: string
}

/**
 * Horizontal node/arrow flow that stacks into a vertical rail on small
 * screens. Nodes are monospaced because they name system components, not prose.
 */
export function ArchitectureFlow({
  steps,
  labeled = false,
  ariaLabel = 'Architecture flow',
}: ArchitectureFlowProps) {
  return (
    <ol
      className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-y-2"
      aria-label={ariaLabel}
    >
      {steps.map((step, index) => (
        <li
          key={`${step}-${index}`}
          className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-1.5"
        >
          <span className="inline-flex items-center gap-2 rounded-md border border-line bg-paper-deep px-2.5 py-1.5">
            {labeled ? (
              <span
                className="label-mono text-ink-muted tracking-normal"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            ) : null}
            <span className="font-mono text-[0.78rem] leading-5 text-ink">
              {step}
            </span>
          </span>
          {index < steps.length - 1 ? (
            <ChevronRight
              className="ml-3.5 h-3.5 w-3.5 shrink-0 rotate-90 text-line-strong sm:ml-0 sm:rotate-0"
              aria-hidden="true"
            />
          ) : null}
        </li>
      ))}
    </ol>
  )
}
