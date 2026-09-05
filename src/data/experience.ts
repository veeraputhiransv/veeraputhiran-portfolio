export type ExperienceRole = {
  id: string
  title: string
  company: string
  client?: string
  period: string
  location?: string
  context?: string
  bullets: string[]
  technologies: string[]
}

export const experience: ExperienceRole[] = [
  {
    id: 'tickmarks',
    title: 'Senior AI Developer',
    company: 'Tickmarks',
    period: 'Feb 2026 – Sep 2026',
    location: 'Chennai, India',
    context: 'Finance & ERP Product Engineering',
    bullets: [
      'Built backend services and React.js UI modules for finance and ERP products using Python, FastAPI, MySQL and REST APIs.',
      'Developed document-processing and RAG workflows connecting ERP records, extraction outputs, retrieval context and deterministic validation.',
      'Designed ERP synchronization and ontology-mapping workflows for company hierarchies, legal entities, dataset mappings and incremental sync.',
      'Implemented document comparison and risk-enrichment services combining structured ERP information with document signals.',
      'Designed finance collection workflow APIs covering outstanding identification, customer responses, promise-to-pay, disputes, escalation, recovery and reporting.',
      'Worked with global stakeholders across requirements, integration validation, debugging, release readiness and production support.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'MySQL',
      'LLM',
      'RAG',
      'REST APIs',
    ],
  },
  {
    id: 'concentrix-fluence',
    title: 'Senior Software Engineer',
    company: 'Concentrix',
    client: 'Fluence Energy',
    period: 'Oct 2025 – Feb 2026',
    bullets: [
      'Delivered enterprise backend services with Java, Spring Boot, PostgreSQL and REST APIs, with attention to correctness, security and maintainability.',
      'Implemented authenticated APIs using JWT and role-based access control (RBAC) across protected application surfaces.',
      'Worked on performance-sensitive service paths and data access patterns against PostgreSQL and Firestore on GCP.',
      'Supported event-driven notification flows and production issues spanning integration, debugging and release support.',
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
  },
  {
    id: 'layerpath',
    title: 'Senior Full-Stack / Backend Engineer',
    company: 'Layerpath',
    period: 'Feb 2025 – Jun 2025',
    context: 'AI SaaS Product',
    bullets: [
      'Built and maintained Java/Spring backend services for an AI SaaS product, including asynchronous processing paths for concurrent workloads.',
      'Worked across AWS infrastructure using Terraform, SQS/SNS, RDS, Lambda and API Gateway to support cloud-native delivery.',
      'Reduced environment setup time by approximately 70% through infrastructure and developer-workflow improvements.',
      'Contributed to approximately 30% reduction in customer support issues through backend reliability improvements.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'AWS',
      'Terraform',
      'SQS',
      'SNS',
      'RDS',
      'Lambda',
      'API Gateway',
    ],
  },
  {
    id: 'zoho-mts',
    title: 'Member Technical Staff',
    company: 'Zoho Corporation',
    period: 'May 2019 – Jan 2025',
    bullets: [
      'Worked on Zoho Campaigns across backend services, product features and production operations using Java, Spring Boot, Python, Node.js and related data systems.',
      'Built and improved ML-assisted spam detection workflows used in campaign delivery and content evaluation paths.',
      'Designed and operated distributed service work involving Kafka, PostgreSQL, Redis, MongoDB and AWS.',
      'Improved spam detection accuracy by approximately 40%.',
      'Reduced API response times by approximately 20%.',
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
  },
  {
    id: 'zoho-trainee',
    title: 'Trainee – Software Engineering',
    company: 'Zoho Corporation',
    period: 'Apr 2017 – May 2019',
    bullets: [
      'Built a foundation in Java, SQL, REST APIs, React and Python while contributing to product engineering work.',
      'Learned full software development lifecycle practices: requirements, implementation, testing, release and support.',
    ],
    technologies: ['Java', 'SQL', 'REST APIs', 'React', 'Python', 'SDLC'],
  },
]
