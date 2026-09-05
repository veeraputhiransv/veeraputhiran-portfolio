const PLACEHOLDER_MARKER = 'PASTE_'

export const profile = {
  name: 'Veeraputhiran S',
  shortName: 'Veeraputhiran',
  role: 'Senior Backend & AI Engineer',
  location: 'Chennai, India',
  email: 'veera.sputhiran@gmail.com',
  availability: 'Open to opportunities • October 2026',
  availabilityDetail:
    'Open to Senior Backend, AI/GenAI, Senior Software Engineering, Platform Engineering, India Remote and Global Remote opportunities.',
  headline:
    '9+ years building enterprise SaaS, distributed backend systems, AI workflows and production APIs.',
  summary:
    'I design and ship backend systems and applied-AI workflows for enterprise products — REST and event-driven services in Java and Python, retrieval-grounded AI, and the data models, integrations and operational surfaces those systems need to survive production.',
  linkedinUrl: 'https://www.linkedin.com/in/veeraputhiran-s-3218ba148/',
  githubUrl: 'https://github.com/veeraputhiransv',
  resumeFileName: 'Veeraputhiran_S_Resume.pdf',
  /** Primary technical positioning shown in the hero, monospaced. */
  heroStack: [
    'Java',
    'Spring Boot',
    'Python',
    'FastAPI',
    'LLM/RAG',
    'Kafka',
    'React',
  ],
  /** Supporting positioning line under the hero stack. */
  heroSupporting: [
    'Ex-Zoho',
    'Enterprise SaaS',
    'Finance / ERP',
    'AI Systems',
  ],
  domains: [
    'Enterprise SaaS',
    'Finance / ERP',
    'Distributed Systems',
    'AI Systems',
    'API Architecture',
    'Product Engineering',
  ],
  employers: ['Zoho', 'Layerpath', 'Concentrix / Fluence Energy', 'Tickmarks'],
} as const

export const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFileName}`

export function isPlaceholderUrl(url: string): boolean {
  return url.includes(PLACEHOLDER_MARKER)
}

export function getSocialUrl(url: string): string | undefined {
  if (!url || isPlaceholderUrl(url)) return undefined
  return url
}

export function warnIfPlaceholders(): void {
  if (!import.meta.env.DEV) return

  const unresolved: string[] = []
  if (isPlaceholderUrl(profile.githubUrl)) unresolved.push('githubUrl')
  if (isPlaceholderUrl(profile.linkedinUrl)) unresolved.push('linkedinUrl')

  if (unresolved.length > 0) {
    console.warn(
      `[portfolio] Replace placeholder values in src/data/profile.ts before publishing: ${unresolved.join(', ')}.`,
    )
  }
}
