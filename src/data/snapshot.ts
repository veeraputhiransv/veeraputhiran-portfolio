export type SnapshotItem = {
  value: string
  label: string
  detail: string
}

/**
 * Restrained proof strip. Every entry is a statement of scope or discipline —
 * no counts, no traffic figures, no invented statistics.
 */
export const snapshot: SnapshotItem[] = [
  {
    value: '9+ Years',
    label: 'Enterprise Software Engineering',
    detail: 'Product engineering across SaaS, finance/ERP and AI platforms.',
  },
  {
    value: 'Backend + AI',
    label: 'Java and Python',
    detail: 'Spring Boot and FastAPI services, LLM/RAG workflows around them.',
  },
  {
    value: 'Enterprise SaaS',
    label: 'Finance / ERP / AI',
    detail: 'Regulated workflows, audit traceability, enterprise integrations.',
  },
  {
    value: 'End-to-End',
    label: 'Backend • AI • Frontend',
    detail: 'API design through async processing, cloud delivery and support.',
  },
]
