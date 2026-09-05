export const systemBuildSteps = [
  'Product Requirement',
  'Domain Modeling',
  'API / Service Design',
  'Data Architecture',
  'Security',
  'Async Processing',
  'Observability',
  'Deployment',
  'Production Feedback',
] as const

export type ArchitecturePrinciple = {
  title: string
  description: string
  /** Where this shows up in the work on this page. */
  example: string
}

/**
 * How I approach systems, with a concrete reference from the portfolio for
 * each one. Deliberately not another technology list.
 */
export const architecturePrinciples: ArchitecturePrinciple[] = [
  {
    title: 'API Design',
    description:
      'The contract is the product surface. Explicit request validation, stable response shapes, and a version story before the first external consumer arrives.',
    example:
      'The API Contract Impact Analyzer exists because I wanted breaking changes caught in CI rather than discovered by a consumer.',
  },
  {
    title: 'Data Modelling',
    description:
      'Get the identity of the record right first; the write model follows the domain, read paths are shaped for their queries.',
    example:
      'Journal provenance in the G/L platform and the outstanding item as the collections aggregate both hinged on choosing the right entity to hang state off.',
  },
  {
    title: 'Event-Driven Systems',
    description:
      'Cross-service work travels as events with a transactional outbox, idempotent consumers and explicit compensation instead of a distributed transaction.',
    example:
      'The Event-Driven Order Platform is the reference implementation: no two-phase commit, but no lost or double-applied work either.',
  },
  {
    title: 'AI Grounding',
    description:
      'Retrieve evidence before generating, return the sources alongside the answer, and let the system say it has no basis for a response.',
    example:
      'Ask Veera retrieves portfolio evidence before generation; the Log Investigator produces deterministic findings first and only then asks a model to explain them.',
  },
  {
    title: 'Reliability',
    description:
      'Timeouts, bounded retries, idempotency keys, and a defined behaviour for every failure path — including the one where a dependency is simply slow.',
    example:
      'Notification processing in the Fluence portal and media processing at Layerpath both run off the request path so a degraded downstream never becomes a failed user action.',
  },
  {
    title: 'Security / RBAC',
    description:
      'Authentication and authorisation asserted at the API boundary, per endpoint and per role. UI state is a convenience, never the control.',
    example:
      'JWT with role-based access across the Fluence portal, and module-level Admin / Supervisor / Analyst permissions in the collections platform.',
  },
  {
    title: 'Observability',
    description:
      'Structured logs, correlation identifiers that survive service and queue hops, and health surfaces that answer questions without a reproduction.',
    example:
      'The Log Investigator turns that discipline into a tool — fingerprinting recurring failures, tracing correlated requests and flagging error and latency changes.',
  },
  {
    title: 'Enterprise Integrations',
    description:
      'Every integration gets a mapping layer, so domain code never depends on a source system’s field naming or release schedule.',
    example:
      'ERP synchronisation and ontology mapping at Tickmarks, Business Central posting-lifecycle work, and notification/email processing all sit behind that boundary.',
  },
]
