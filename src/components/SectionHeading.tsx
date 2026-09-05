type SectionHeadingProps = {
  /** Two-digit section index, rendered as a monospaced editorial numeral. */
  index?: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="flex items-center gap-3 text-accent">
        {index ? (
          <>
            <span className="label-mono text-ink-muted" aria-hidden="true">
              {index}
            </span>
            <span
              className="h-px w-6 bg-line-strong"
              aria-hidden="true"
            />
          </>
        ) : null}
        <span className="label-mono">{eyebrow}</span>
      </p>
      <h2 className="mt-4 font-serif text-[clamp(1.85rem,3.4vw,2.6rem)] font-semibold leading-[1.15] tracking-tight text-ink text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-ink-secondary sm:text-[1.05rem]">
          {description}
        </p>
      ) : null}
    </div>
  )
}
