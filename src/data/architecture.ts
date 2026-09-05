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

export const architecturePrinciples = [
  {
    title: 'Backend Architecture',
    description:
      'Designing maintainable APIs, service boundaries, database models and distributed workflows.',
  },
  {
    title: 'AI Integration',
    description:
      'Connecting LLMs with retrieval, enterprise data, APIs and deterministic validation.',
  },
  {
    title: 'Production Reliability',
    description:
      'Logging, validation, monitoring, failure handling, backward compatibility and performance optimization.',
  },
  {
    title: 'Cloud Delivery',
    description:
      'Dockerized services, CI/CD pipelines, infrastructure automation and cloud-native deployment.',
  },
] as const
