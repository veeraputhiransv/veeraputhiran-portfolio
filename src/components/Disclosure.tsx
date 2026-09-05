import { Plus } from 'lucide-react'
import type { ReactNode } from 'react'

type DisclosureProps = {
  summary: string
  hint?: string
  defaultOpen?: boolean
  children: ReactNode
}

/**
 * Progressive disclosure built on native <details>. Keyboard operable and
 * findable by in-page search without any JavaScript state, which is why this
 * is used instead of modals for the deeper case-study layers.
 */
export function Disclosure({
  summary,
  hint,
  defaultOpen = false,
  children,
}: DisclosureProps) {
  return (
    <details className="group border-t border-line" open={defaultOpen}>
      <summary className="flex items-center justify-between gap-4 py-4 text-left transition-colors hover:text-accent focus-visible:text-accent">
        <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-sm font-semibold tracking-tight text-ink">
            {summary}
          </span>
          {hint ? (
            <span className="label-mono text-ink-muted">{hint}</span>
          ) : null}
        </span>
        <Plus
          className="h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200 group-open:rotate-45"
          aria-hidden="true"
        />
      </summary>
      <div className="pb-6">{children}</div>
    </details>
  )
}
