export type Project = {
  id: string
  title: string
  tag: string
  status?: 'in-development'
  description: string
  problem?: string
  solution?: string[]
  features?: string[]
  architecture: string[]
  technologies: string[]
  links: {
    live?: string
    repo?: string
    caseStudy?: string
  }
}

export const projects: Project[] = [
  {
    id: 'ai-recruiter-copilot',
    title: 'AI Recruiter Copilot',
    tag: 'Evidence-grounded AI / RAG',
    description:
      'An AI assistant that helps recruiters explore my engineering experience and projects using retrieved portfolio evidence rather than unrestricted generation.',
    architecture: [
      'Recruiter Question',
      'Validation',
      'TF-IDF Retrieval',
      'Context Builder',
      'LLM Provider',
      'Grounded Answer',
      'Evidence',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'RAG',
      'TF-IDF',
      'LLM',
    ],
    links: {
      live: 'https://veeraputhiransv.github.io/veeraputhiran-portfolio/',
      repo: 'https://github.com/veeraputhiransv/ai-recruiter-copilot',
      caseStudy: '',
    },
  },
  {
    id: 'event-driven-order-platform',
    title: 'Event-Driven Order Platform',
    tag: 'Distributed Systems / Event-Driven Architecture',
    description:
      'A production-inspired distributed backend demonstrating reliable cross-service order processing using Kafka choreography, transactional outbox, persistent idempotency, compensation and eventual consistency.',
    features: [
      'Transactional Outbox',
      'Kafka Choreography',
      'Idempotent Consumers',
      'Failure Compensation',
      'Correlation IDs',
      'Inventory Concurrency',
    ],
    architecture: [
      'Order API',
      'Local Transaction',
      'Transactional Outbox',
      'Kafka',
      'Inventory Service',
      'Payment Service',
      'Confirmation / Compensation',
    ],
    technologies: [
      'Java 21',
      'Spring Boot',
      'Kafka',
      'PostgreSQL',
      'Redis',
      'Flyway',
      'Docker',
      'Testcontainers',
    ],
    links: {
      repo: 'https://github.com/veeraputhiransv/event-driven-order-platform',
    },
  },
  {
    id: 'log-investigator',
    title: 'AI Production Log Investigator',
    tag: 'Incident Investigation / Observability',
    description:
      'Evidence-first incident investigation for application logs. Parses and normalizes logs, fingerprints recurring failures, traces correlated requests, detects explainable error and latency changes, and uses an optional LLM only to explain observed evidence.',
    features: [
      'Error Fingerprinting',
      'Correlation Tracing',
      'Frequency Spike Detection',
      'Latency Analysis',
      'Incident Grouping',
      'Best-Effort Redaction',
      'Evidence-Grounded AI',
    ],
    architecture: [
      'Log Ingestion',
      'Parser / Redaction',
      'Normalization',
      'PostgreSQL',
      'Fingerprinting & Analysis',
      'Incident Evidence',
      'Grounded LLM Explanation',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'React',
      'TypeScript',
      'SQLAlchemy',
      'Alembic',
      'pytest',
    ],
    links: {
      repo: 'https://github.com/veeraputhiransv/ai-production-log-investigator',
    },
  },
  {
    id: 'api-contract-impact-analyzer',
    title: 'API Contract Impact Analyzer',
    tag: 'API Governance / Platform Engineering',
    description:
      'A deterministic OpenAPI compatibility analyzer that compares baseline and candidate API contracts, identifies consumer-impacting changes, explains why they matter, and can fail CI before a breaking contract is released.',
    features: [
      'Directional Compatibility Rules',
      'Breaking Change Detection',
      'Schema & $ref Analysis',
      'Security Change Analysis',
      'Deterministic Findings',
      'CI Fail-on-Breaking',
      'Migration Guidance',
      'Stable JSON Output',
    ],
    architecture: [
      'Baseline OpenAPI',
      'Parse & Normalize',
      'Match Operations',
      'Compatibility Rules',
      'Deduplicate Findings',
      'Severity / Impact',
      'Migration Guidance',
      'CLI / REST / CI Result',
    ],
    technologies: [
      'Java 21',
      'Spring Boot',
      'OpenAPI',
      'Maven',
      'React',
      'TypeScript',
      'JUnit 5',
    ],
    links: {
      repo: 'https://github.com/veeraputhiransv/api-contract-impact-analyzer',
    },
  },
]

export function hasProjectLink(url: string | undefined): url is string {
  return Boolean(url && url.trim().length > 0)
}
