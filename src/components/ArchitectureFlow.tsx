import { ChevronDown, ChevronRight } from 'lucide-react'

type ArchitectureFlowProps = {
  steps: readonly string[]
  labeled?: boolean
}

export function ArchitectureFlow({
  steps,
  labeled = false,
}: ArchitectureFlowProps) {
  return (
    <ol className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center">
      {steps.map((step, index) => (
        <li key={`${step}-${index}`} className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-md border border-line bg-paper px-3 py-1.5 text-sm text-ink">
            {labeled ? (
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-[10px] font-semibold text-white"
                aria-hidden="true"
              >
                {index + 1}
              </span>
            ) : null}
            {step}
          </span>
          {index < steps.length - 1 ? (
            <>
              <ChevronRight
                className="hidden h-4 w-4 shrink-0 text-ink-muted md:block"
                aria-hidden="true"
              />
              <ChevronDown
                className="h-4 w-4 shrink-0 text-ink-muted md:hidden"
                aria-hidden="true"
              />
            </>
          ) : null}
        </li>
      ))}
    </ol>
  )
}
