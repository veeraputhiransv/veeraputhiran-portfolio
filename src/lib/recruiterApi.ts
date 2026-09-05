export type SourceType = 'experience' | 'project' | 'skill' | 'profile'

export type RecruiterSource = {
  title: string
  type: SourceType
  reference: string
  url?: string | null
}

export type RecruiterChatResponse = {
  answer: string
  sources: RecruiterSource[]
  mode?: 'live' | 'mock'
}

export class RecruiterApiError extends Error {
  readonly kind: 'unavailable' | 'timeout' | 'validation'

  constructor(kind: 'unavailable' | 'timeout' | 'validation', message: string) {
    super(message)
    this.kind = kind
    this.name = 'RecruiterApiError'
  }
}

export const ASSISTANT_UNAVAILABLE_MESSAGE =
  'The portfolio assistant is temporarily unavailable. You can still explore the projects and experience sections.'

const REQUEST_TIMEOUT_MS = 25_000

function resolveApiUrl(): string | undefined {
  const raw = import.meta.env.VITE_RECRUITER_API_URL?.trim()
  if (!raw || raw.includes('PASTE_')) return undefined
  if (import.meta.env.PROD && /localhost|127\.0\.0\.1/.test(raw)) return undefined
  return raw.replace(/\/$/, '')
}

export function isRecruiterApiConfigured(): boolean {
  return Boolean(resolveApiUrl())
}

export async function sendRecruiterChat(
  message: string,
): Promise<RecruiterChatResponse> {
  const baseUrl = resolveApiUrl()
  if (!baseUrl) {
    throw new RecruiterApiError('unavailable', ASSISTANT_UNAVAILABLE_MESSAGE)
  }

  const controller = new AbortController()
  const timer = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(`${baseUrl}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
      signal: controller.signal,
    })

    if (response.status === 422) {
      throw new RecruiterApiError(
        'validation',
        'Please enter a concise question about Veeraputhiran’s public engineering work.',
      )
    }

    if (!response.ok) {
      throw new RecruiterApiError('unavailable', ASSISTANT_UNAVAILABLE_MESSAGE)
    }

    const payload = (await response.json()) as RecruiterChatResponse
    if (!payload || typeof payload.answer !== 'string') {
      throw new RecruiterApiError('unavailable', ASSISTANT_UNAVAILABLE_MESSAGE)
    }
    return {
      answer: payload.answer,
      sources: Array.isArray(payload.sources) ? payload.sources : [],
      mode: payload.mode,
    }
  } catch (error) {
    if (error instanceof RecruiterApiError) throw error
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new RecruiterApiError('timeout', ASSISTANT_UNAVAILABLE_MESSAGE)
    }
    throw new RecruiterApiError('unavailable', ASSISTANT_UNAVAILABLE_MESSAGE)
  } finally {
    window.clearTimeout(timer)
  }
}
