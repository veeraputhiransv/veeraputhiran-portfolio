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
    'Building scalable backend systems, enterprise SaaS platforms and AI-powered workflows.',
  summary:
    '9+ years of experience designing and delivering production-grade backend systems, enterprise applications, distributed services and AI-powered products using Java, Spring Boot, Python, FastAPI, LLMs and RAG.',
  linkedinUrl: 'https://www.linkedin.com/in/veeraputhiran-s-3218ba148/',
  githubUrl: 'https://github.com/veeraputhiransv',
  resumeFileName: 'Veeraputhiran_S_Resume.pdf',
  heroBadges: [
    'Java',
    'Spring Boot',
    'Python',
    'FastAPI',
    'LLM',
    'RAG',
    'Kafka',
    'React',
  ],
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
