export type ExperienceProductLink = {
  label: string
  href: string
}

export type ExperienceRole = {
  id: string
  title: string
  company: string
  client?: string
  period: string
  location?: string
  context?: string
  /** Internal progression within the same employer, where relevant. */
  progression?: string
  summary: string
  highlights: string[]
  technologies: string[]
  /** Deep links into the professional product case studies above. */
  products?: ExperienceProductLink[]
}

/**
 * Timeline summary only. Product detail lives in the professional product
 * case studies, which each role links into rather than repeating.
 */
export const experience: ExperienceRole[] = [
  {
    id: 'tickmarks',
    title: 'Senior AI Developer',
    company: 'Tickmarks',
    period: 'Feb 2026 – Sep 2026',
    location: 'Chennai, India',
    context: 'Finance & ERP Product Engineering',
    summary:
      'Backend APIs, AI workflows and product surfaces for finance and ERP systems, delivered across four products spanning workflow compliance, collections, audit provenance and delivery governance.',
    highlights: [
      'Backend services and React UI modules for finance and ERP products using Python, FastAPI, MySQL and REST APIs.',
      'Document-processing and RAG workflows connecting ERP records, extraction output, retrieval context and deterministic validation.',
      'ERP synchronisation and ontology mapping for company hierarchies, legal entities, dataset mappings and incremental sync.',
      'Global stakeholder work across requirements, integration validation, release readiness and production support.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'MySQL',
      'LLM',
      'RAG',
      'REST APIs',
    ],
    products: [
      { label: 'SOP Guidance & Audit Extension', href: '#product-sop-guidance' },
      { label: 'Collections Workflow Platform', href: '#product-collections' },
      { label: 'G/L Audit & Provenance', href: '#product-gl-provenance' },
      { label: 'PMO & Release Governance', href: '#product-pmo' },
    ],
  },
  {
    id: 'concentrix-fluence',
    title: 'Senior Software Engineer',
    company: 'Concentrix',
    client: 'Fluence Energy',
    period: 'Oct 2025 – Feb 2026',
    context: 'Enterprise Portal Engineering',
    summary:
      'Secure Java and Spring Boot services behind an enterprise customer portal, with notification processing, data-access optimisation and production support alongside globally distributed stakeholders.',
    highlights: [
      'Authenticated REST APIs with JWT and role-based access control across protected application surfaces.',
      'Performance-sensitive service and data-access paths against PostgreSQL and Firestore on GCP.',
      'Event-driven notification flows plus production issue resolution across integration, debugging and release support.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'JWT',
      'RBAC',
      'GCP',
      'Firestore',
      'REST APIs',
    ],
    products: [
      { label: 'Fluence Customer Portal', href: '#product-fluence-portal' },
    ],
  },
  {
    id: 'layerpath',
    title: 'Senior Full-Stack / Backend Engineer',
    company: 'Layerpath',
    period: 'Feb 2025 – Jun 2025',
    context: 'AI SaaS Product',
    summary:
      'Backend and infrastructure work on an AI demo platform: browser-based workflow capture, queue-backed AI and media processing, and Terraform-managed AWS environments.',
    highlights: [
      'Java and Spring Boot services with asynchronous processing paths for concurrent capture workloads.',
      'AWS infrastructure via Terraform across API Gateway, Lambda, S3 and IAM.',
      'Environment setup time reduced by approximately 70%, and customer support issues by approximately 30%.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'AWS',
      'Terraform',
      'Lambda',
      'API Gateway',
      'S3',
    ],
    products: [
      { label: 'AI Interactive Demo Platform', href: '#product-layerpath-demos' },
    ],
  },
  {
    id: 'zoho',
    title: 'Member Technical Staff',
    company: 'Zoho Corporation',
    period: 'Apr 2017 – Jan 2025',
    context: 'Marketing SaaS Platform',
    progression:
      'Joined as Trainee – Software Engineering (Apr 2017), moved to Member Technical Staff (May 2019).',
    summary:
      'Nearly eight years on Zoho Campaigns — backend APIs, high-volume asynchronous delivery workflows, ML-assisted abuse prevention, performance work and production operations.',
    highlights: [
      'Backend services and product features using Java, Spring Boot, Python and Node.js across campaign and delivery surfaces.',
      'ML-assisted spam detection and content moderation in the pre-delivery path, improving detection accuracy by approximately 40%.',
      'Distributed service work across Kafka, PostgreSQL, Redis, MongoDB and AWS, with API response times reduced by approximately 20%.',
      'Code review and mentoring for engineers joining the product.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Python',
      'Node.js',
      'Kafka',
      'PostgreSQL',
      'Redis',
      'MongoDB',
      'AWS',
    ],
    products: [
      { label: 'Zoho Campaigns', href: '#product-zoho-campaigns' },
      { label: 'Anti-Spam & Content Moderation', href: '#product-anti-spam' },
    ],
  },
]
