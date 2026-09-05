type TechListProps = {
  items: readonly string[]
  label: string
}

/** Monospaced technology chips. Names of things, so not set in prose type. */
export function TechList({ items, label }: TechListProps) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded border border-line bg-paper-deep px-2 py-1 font-mono text-[0.72rem] leading-4 text-ink-secondary"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
