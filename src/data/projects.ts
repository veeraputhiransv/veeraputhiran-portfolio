import type { EngineeringDecision } from './products'

export type Project = {
  id: string
  title: string
  tag: string
  status?: 'in-development'
  description: string
  problem: string
  features?: string[]
  architecture: string[]
  decisions: EngineeringDecision[]
  technologies: string[]
  /** Renders an in-page trigger for the live Ask Veera assistant. */
  askVeeraDemo?: boolean
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
    tag: 'Evidence-Grounded AI / RAG',
    description:
      'An AI assistant that answers questions about my engineering experience from retrieved portfolio evidence rather than unrestricted generation. It powers Ask Veera on this site.',
    problem:
      'A recruiter evaluating a backend engineer asks specific questions and gets either a wall of resume text or a chatbot that confidently invents experience. Neither answer is checkable, which makes both useless for a hiring decision.',
    features: [
      'Retrieval Before Generation',
      'Source-Attributed Answers',
      'No-Evidence Refusal',
      'Deterministic Mock Provider',
      'Input Validation',
      'Containerised Deployment',
    ],
    architecture: [
      'Recruiter Question',
      'Validation',
      'TF-IDF Retrieval',
      'Context Builder',
      'LLM Provider',
      'Grounded Answer',
      'Evidence',
    ],
    decisions: [
      {
        title: 'Retrieval before generation',
        detail:
          'Questions are answered from an indexed portfolio corpus; the model only phrases what retrieval returned. Nothing reaches the answer that is not already in the corpus.',
      },
      {
        title: 'TF-IDF instead of embeddings',
        detail:
          'The corpus is small and stable. Lexical retrieval is deterministic, needs no vector store to operate and no embedding spend, and at this corpus size it returns what a hosted embedding pipeline would.',
      },
      {
        title: 'No evidence, no answer',
        detail:
          'When retrieval finds nothing relevant the assistant says so instead of falling back on general knowledge. That refusal is the property that makes the rest of the answers worth reading.',
      },
      {
        title: 'Sources returned with every response',
        detail:
          'Each answer carries the evidence it used, so a claim can be verified rather than trusted.',
      },
      {
        title: 'Provider abstraction with a deterministic default',
        detail:
          'The LLM sits behind an interface with a mock provider, so the API stays testable and deployable without a key configured.',
      },
    ],
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'RAG',
      'TF-IDF',
      'LLM',
      'Docker',
    ],
    askVeeraDemo: true,
    links: {
      repo: 'https://github.com/veeraputhiransv/ai-recruiter-copilot',
    },
  },
  {
    id: 'event-driven-order-platform',
    title: 'Event-Driven Order Platform',
    tag: 'Distributed Systems / Event-Driven Architecture',
    description:
      'A production-inspired distributed backend for reliable cross-service order processing using Kafka choreography, a transactional outbox, persistent idempotency, compensation and eventual consistency.',
    problem:
      'An order touches inventory and payment, which live in separate services with separate databases. Without a distributed transaction, a crash between steps leaves stock reserved against an order that was never paid for — and a retry can charge twice.',
    features: [
      'Transactional Outbox',
      'Kafka Choreography',
      'Idempotent Consumers',
      'Failure Compensation',
      'Correlation IDs',
      'Inventory Concurrency Control',
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
    decisions: [
      {
        title: 'Transactional outbox instead of dual writes',
        detail:
          'The state change and the event announcing it commit in one local transaction; publishing happens afterwards from the outbox. A broker outage can then delay events but never desynchronise them from the database.',
      },
      {
        title: 'Choreography rather than a central orchestrator',
        detail:
          'Services react to events instead of being driven by a coordinator, which keeps each failure decision inside the service that owns the affected data.',
      },
      {
        title: 'Idempotency persisted, not held in memory',
        detail:
          'Consumer deduplication is stored, so at-least-once redelivery after a restart or rebalance still applies each effect exactly once.',
      },
      {
        title: 'Compensation as a modelled path',
        detail:
          'Inventory release and refund are first-class events with their own handlers rather than error branches. Failure is an expected outcome of the workflow, not an exception to it.',
      },
      {
        title: 'Testcontainers over mocked infrastructure',
        detail:
          'Integration tests run against real Kafka and PostgreSQL, because the behaviours worth testing here — redelivery, rebalancing, transaction boundaries — are exactly the ones mocks hide.',
      },
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
      'Evidence-first incident investigation for application logs: parsing and normalisation, failure fingerprinting, correlation tracing, explainable anomaly detection, and an optional LLM used only to explain observed evidence.',
    problem:
      'During an incident the useful signal in a log file is buried in volume, and handing the raw log to an LLM produces a plausible narrative with no way to check it. The investigation needs to be reproducible before it can be readable.',
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
    decisions: [
      {
        title: 'Deterministic analysis first, model second',
        detail:
          'Fingerprinting, correlation tracing and anomaly rules run before any LLM call. The model explains findings that already exist in the database; it never produces them.',
      },
      {
        title: 'Fingerprint failures rather than count lines',
        detail:
          'Normalising the variable parts of a message collapses thousands of lines into a handful of recurring failures — which is the form an on-call engineer can actually act on.',
      },
      {
        title: 'Correlation identifiers as the unit of trace',
        detail:
          'Grouping by correlation ID reconstructs one request’s path through the system without requiring a full distributed tracing stack to be in place first.',
      },
      {
        title: 'Anomaly rules stated, not learned',
        detail:
          'Frequency spikes and latency shifts are detected against explicit thresholds, so an engineer can disagree with a finding and inspect why it fired.',
      },
      {
        title: 'Best-effort redaction at ingest',
        detail:
          'Recognisable secrets and personal data are stripped while parsing, before anything is persisted or sent to a model provider.',
      },
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
      'A deterministic OpenAPI compatibility analyzer that compares baseline and candidate contracts, identifies consumer-impacting changes, explains why each one matters, and fails CI before a breaking contract ships.',
    problem:
      'Breaking an API contract is normally discovered by a consumer after release. Hand-reviewing an OpenAPI diff does not scale, and a textual diff cannot distinguish a parameter rename from a removal, or tell you which side of the contract a change actually hurts.',
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
    decisions: [
      {
        title: 'Every rule carries a direction',
        detail:
          'The same edit means opposite things on each side of the contract: narrowing a response enum breaks consumers, narrowing a request enum breaks callers. Rules are evaluated per direction rather than as a symmetric diff.',
      },
      {
        title: 'Normalise before comparing',
        detail:
          'Contracts are parsed into an internal model with local $refs resolved and path templates normalised, so /users/{id} against /users/{userId} is recognised as one operation instead of a removal plus an addition.',
      },
      {
        title: 'Remote $ref resolution disabled',
        detail:
          'The analyzer never fetches external URLs. A CI run stays hermetic, and a contract cannot pull unreviewed content into the comparison at analysis time.',
      },
      {
        title: 'Deterministic, stably ordered output',
        detail:
          'Findings are deduplicated and sorted by classification then severity, so identical inputs always produce identical output — a prerequisite for diffing results between pipeline runs.',
      },
      {
        title: 'Classification separated from policy',
        detail:
          'The tool reports breaking, potentially breaking and non-breaking. Which of those should fail a build is the pipeline’s decision, expressed as a threshold rather than baked into the analyzer.',
      },
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
