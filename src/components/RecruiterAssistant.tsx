import { useEffect, useId, useRef, useState } from 'react'
import { Sparkles, X } from 'lucide-react'
import {
  ASSISTANT_UNAVAILABLE_MESSAGE,
  RecruiterApiError,
  sendRecruiterChat,
  type RecruiterSource,
} from '../lib/recruiterApi'

const SUGGESTED_QUESTIONS = [
  "Tell me about Veera's backend experience",
  'What AI systems has he built?',
  'Show his Java / Spring Boot experience',
  'Which projects use FastAPI?',
  'Why is he suitable for a Senior Backend role?',
]

type ChatTurn = {
  id: string
  role: 'user' | 'assistant'
  content: string
  sources?: RecruiterSource[]
}

type RecruiterAssistantProps = {
  open: boolean
  onClose: () => void
}

function SourceCard({ source }: { source: RecruiterSource }) {
  const body = (
    <>
      <p className="label-mono text-accent">{source.type}</p>
      <p className="mt-1.5 text-sm font-medium text-ink">{source.title}</p>
      <p className="mt-1 text-xs leading-5 text-ink-muted">
        {source.reference}
      </p>
    </>
  )

  if (source.url) {
    return (
      <a
        href={source.url}
        target="_blank"
        rel="noreferrer"
        className="block rounded-md border border-line bg-paper-deep p-3 transition-colors hover:border-line-strong"
      >
        {body}
      </a>
    )
  }

  return (
    <div className="rounded-md border border-line bg-paper-deep p-3">
      {body}
    </div>
  )
}

export function RecruiterAssistant({ open, onClose }: RecruiterAssistantProps) {
  const [input, setInput] = useState('')
  const [turns, setTurns] = useState<ChatTurn[]>([])
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const titleId = useId()

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => inputRef.current?.focus(), 50)
    return () => {
      document.body.style.overflow = previous
      window.clearTimeout(timer)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight })
  }, [turns, pending])

  async function ask(question: string) {
    const trimmed = question.trim()
    if (!trimmed || pending) return
    setError(null)
    setInput('')
    setTurns((current) => [
      ...current,
      { id: crypto.randomUUID(), role: 'user', content: trimmed },
    ])
    setPending(true)
    try {
      const response = await sendRecruiterChat(trimmed)
      setTurns((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: response.answer,
          sources: response.sources,
        },
      ])
    } catch (err) {
      const message =
        err instanceof RecruiterApiError
          ? err.message
          : ASSISTANT_UNAVAILABLE_MESSAGE
      setError(message)
    } finally {
      setPending(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[80]">
      <button
        type="button"
        className="absolute inset-0 bg-navy/25"
        aria-label="Close Ask Veera"
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="absolute inset-0 flex flex-col bg-surface md:inset-y-0 md:right-0 md:left-auto md:w-[28rem] md:border-l md:border-line"
      >
        <header className="flex items-start justify-between gap-3 border-b border-line px-5 py-4">
          <div>
            <p className="label-mono text-accent">Portfolio Assistant</p>
            <h2
              id={titleId}
              className="mt-1.5 font-serif text-2xl font-semibold tracking-tight text-ink"
            >
              Ask Veera
            </h2>
            <p className="mt-1.5 text-sm leading-6 text-ink-secondary">
              Retrieval-grounded answers from my public engineering portfolio,
              returned with the evidence they came from.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line text-ink"
            aria-label="Close assistant"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        <div className="border-b border-line px-5 py-4">
          <p className="label-mono text-ink-muted">Suggested questions</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {SUGGESTED_QUESTIONS.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => void ask(question)}
                className="rounded-md border border-line bg-paper-deep px-2.5 py-1.5 text-left text-xs text-ink-secondary transition-colors hover:border-line-strong hover:text-ink"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
          {turns.length === 0 ? (
            <p className="text-sm text-ink-muted">
              Ask about backend systems, Java / Spring Boot, FastAPI, LLM / RAG
              work, enterprise SaaS, projects, or cloud experience.
            </p>
          ) : null}

          {turns.map((turn) => (
            <article key={turn.id}>
              <p className="label-mono text-ink-muted">
                {turn.role === 'user' ? 'Question' : 'Answer'}
              </p>
              <div
                className={
                  turn.role === 'user'
                    ? 'mt-2 rounded-md bg-navy px-3 py-2.5 text-sm leading-6 text-white'
                    : 'mt-2 rounded-md border border-line bg-paper-deep px-3 py-2.5 text-sm leading-6 whitespace-pre-line text-ink'
                }
              >
                {turn.content}
              </div>
              {turn.sources && turn.sources.length > 0 ? (
                <div className="mt-3">
                  <p className="label-mono text-ink-muted">Sources / Evidence</p>
                  <div className="mt-2 grid gap-2">
                    {turn.sources.map((source) => (
                      <SourceCard
                        key={`${source.type}-${source.reference}`}
                        source={source}
                      />
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          ))}

          {pending ? (
            <p className="text-sm text-ink-muted">Retrieving portfolio evidence…</p>
          ) : null}
          {error ? <p className="text-sm text-ink-secondary">{error}</p> : null}
        </div>

        <form
          className="border-t border-line p-4"
          onSubmit={(event) => {
            event.preventDefault()
            void ask(input)
          }}
        >
          <label htmlFor="ask-veera-input" className="sr-only">
            Ask a question
          </label>
          <div className="flex gap-2">
            <input
              id="ask-veera-input"
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about backend, RAG, Java, FastAPI, or cloud"
              maxLength={2000}
              className="min-w-0 flex-1 rounded-md border border-line bg-paper-deep px-3 py-2.5 text-sm text-ink outline-none focus:border-accent"
            />
            <button
              type="submit"
              disabled={pending || !input.trim()}
              className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-2.5 text-sm font-medium text-ink disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Ask
            </button>
          </div>
        </form>
      </aside>
    </div>
  )
}
