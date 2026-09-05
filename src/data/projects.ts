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
    id: 'sop-compliance',
    title: 'Enterprise SOP Compliance & Audit Assistant',
    tag: 'Enterprise Workflow / Browser Extension',
    description:
      'A browser-based enterprise workflow assistant designed to guide users through SOPs while validating required steps and generating traceable compliance evidence.',
    problem:
      'Traditional SOP documents explain what employees should do but provide little visibility into whether the process was actually followed.',
    solution: [
      'Context-aware SOP guidance',
      'Step-by-step workflows',
      'Required-step validation',
      'Completion tracking',
      'Audit trail',
      'Evidence capture',
      'Compliance reporting',
    ],
    architecture: [
      'Enterprise Application',
      'Browser Extension',
      'Context Detection',
      'SOP Engine',
      'Step Validation',
      'Audit Events',
      'Compliance Report',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Chrome Extension',
      'REST APIs',
      'Enterprise Workflow',
    ],
    links: {
      live: '',
      repo: '',
      caseStudy: '',
    },
  },
  {
    id: 'log-investigator',
    title: 'AI Production Log Investigator',
    tag: 'Incident Investigation / Observability',
    status: 'in-development',
    description:
      'AI-assisted incident investigation platform that transforms large volumes of production logs into clustered incidents, probable root causes and actionable investigation suggestions.',
    features: [
      'Log ingestion',
      'Error classification',
      'Similar-error clustering',
      'Latency anomaly detection',
      'Related-event correlation',
      'LLM-assisted analysis',
      'Probable root-cause explanation',
      'Suggested investigation steps',
    ],
    architecture: [
      'Application Logs',
      'Ingestion API',
      'Parser',
      'Error Clustering',
      'Anomaly Detection',
      'Context Builder',
      'LLM Analysis',
      'Incident Report',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'PostgreSQL',
      'ClickHouse',
      'LLM',
    ],
    links: {
      live: '',
      repo: '',
      caseStudy: '',
    },
  },
  {
    id: 'erp-rag',
    title: 'ERP Document Intelligence / RAG',
    tag: 'Document Intelligence / RAG',
    description:
      'Enterprise document intelligence workflow combining ERP records, document extraction, semantic retrieval, LLM reasoning and deterministic validation to produce traceable results.',
    architecture: [
      'ERP Data + Documents',
      'Document Processing',
      'Chunking / Extraction',
      'Embeddings / Retrieval',
      'Context Builder',
      'LLM',
      'Validation',
      'Evidence-grounded result',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'LLM',
      'RAG',
      'Semantic Retrieval',
      'MySQL/PostgreSQL',
    ],
    links: {
      live: '',
      repo: '',
      caseStudy: '',
    },
  },
  {
    id: 'ai-saas-backend',
    title: 'Scalable AI SaaS Backend',
    tag: 'Cloud-native Backend Architecture',
    description:
      'Backend architecture for an AI SaaS platform supporting concurrent requests, asynchronous workloads and cloud-native infrastructure.',
    architecture: [
      'API Gateway',
      'Backend services',
      'Async queue',
      'Workers',
      'Object storage',
      'Database',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'AWS',
      'Terraform',
      'SQS',
      'SNS',
      'Lambda',
      'RDS',
      'S3',
    ],
    links: {
      live: '',
      repo: '',
      caseStudy: '',
    },
  },
]

export function hasProjectLink(url: string | undefined): url is string {
  return Boolean(url && url.trim().length > 0)
}
