/**
 * Capabilities grouped by the kind of engineering work they belong to, each
 * tied to the products and projects where it was actually used. No proficiency
 * ratings, no percentage bars — where it was used is the evidence.
 */

export type Capability = {
  name: string
  usedIn: string[]
}

export type CapabilityGroup = {
  id: string
  title: string
  description: string
  capabilities: Capability[]
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: 'backend',
    title: 'Backend & Distributed Systems',
    description:
      'Service boundaries, API contracts, data models and the asynchronous paths between them.',
    capabilities: [
      {
        name: 'Java',
        usedIn: [
          'Event-Driven Order Platform',
          'API Contract Impact Analyzer',
          'Fluence Customer Portal',
          'AI Interactive Demo Platform',
          'Zoho Campaigns',
        ],
      },
      {
        name: 'Spring Boot',
        usedIn: [
          'Event-Driven Order Platform',
          'API Contract Impact Analyzer',
          'Fluence Customer Portal',
          'AI Interactive Demo Platform',
        ],
      },
      {
        name: 'Python',
        usedIn: [
          'AI Recruiter Copilot',
          'AI Production Log Investigator',
          'Collections Workflow Platform',
          'Anti-Spam & Content Moderation',
        ],
      },
      {
        name: 'FastAPI',
        usedIn: [
          'AI Recruiter Copilot',
          'AI Production Log Investigator',
          'Collections Workflow Platform',
        ],
      },
      {
        name: 'REST APIs',
        usedIn: [
          'Fluence Customer Portal',
          'Collections Workflow Platform',
          'G/L Audit & Provenance Platform',
          'Zoho Campaigns',
        ],
      },
      {
        name: 'Kafka',
        usedIn: ['Event-Driven Order Platform', 'Zoho Campaigns'],
      },
      {
        name: 'Microservices',
        usedIn: ['Event-Driven Order Platform', 'Zoho Campaigns'],
      },
      {
        name: 'PostgreSQL',
        usedIn: [
          'Event-Driven Order Platform',
          'AI Production Log Investigator',
          'Fluence Customer Portal',
          'Zoho Campaigns',
        ],
      },
      {
        name: 'MySQL',
        usedIn: ['Collections Workflow Platform', 'Tickmarks finance / ERP work'],
      },
      {
        name: 'Redis',
        usedIn: ['Event-Driven Order Platform', 'Zoho Campaigns'],
      },
    ],
  },
  {
    id: 'ai',
    title: 'AI Engineering',
    description:
      'Retrieval and evidence around the model, deterministic checks in front of it, and a human decision after it.',
    capabilities: [
      {
        name: 'LLM',
        usedIn: [
          'AI Recruiter Copilot',
          'AI Production Log Investigator',
          'Collections Workflow Platform',
        ],
      },
      {
        name: 'RAG',
        usedIn: ['AI Recruiter Copilot', 'Tickmarks document workflows'],
      },
      {
        name: 'Retrieval',
        usedIn: [
          'AI Recruiter Copilot (TF-IDF retrieval)',
          'Tickmarks document workflows',
        ],
      },
      {
        name: 'AI workflows',
        usedIn: [
          'SOP Guidance & Audit Extension',
          'Collections Workflow Platform',
          'AI Interactive Demo Platform',
        ],
      },
      {
        name: 'Document intelligence',
        usedIn: ['Tickmarks ERP document and comparison workflows'],
      },
      {
        name: 'ML-assisted classification',
        usedIn: ['Anti-Spam & Content Moderation'],
      },
      {
        name: 'Voice / narration workflows',
        usedIn: ['AI Interactive Demo Platform'],
      },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description:
      'Product surfaces for operational work — role-aware, state-driven, and built to be read quickly.',
    capabilities: [
      {
        name: 'React',
        usedIn: [
          'SOP Guidance & Audit Extension',
          'PMO & Release Governance Platform',
          'AI Recruiter Copilot',
          'AI Production Log Investigator',
          'API Contract Impact Analyzer',
        ],
      },
      {
        name: 'Next.js',
        usedIn: ['PMO & Release Governance Platform'],
      },
      {
        name: 'TypeScript',
        usedIn: [
          'PMO & Release Governance Platform',
          'SOP Guidance & Audit Extension',
          'AI Production Log Investigator',
          'This portfolio',
        ],
      },
      {
        name: 'Material UI',
        usedIn: ['PMO & Release Governance Platform'],
      },
      {
        name: 'Browser extensions',
        usedIn: [
          'SOP Guidance & Audit Extension (MV3)',
          'AI Interactive Demo Platform (workflow capture)',
        ],
      },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud / Infrastructure',
    description:
      'Reproducible environments, queue-backed processing and delivery pipelines that do not depend on manual steps.',
    capabilities: [
      {
        name: 'AWS',
        usedIn: [
          'AI Interactive Demo Platform (API Gateway, Lambda, S3, IAM)',
          'Zoho Campaigns',
        ],
      },
      {
        name: 'GCP',
        usedIn: ['Fluence Customer Portal (Firestore, cloud services)'],
      },
      {
        name: 'Docker',
        usedIn: [
          'Event-Driven Order Platform',
          'AI Recruiter Copilot',
          'AI Production Log Investigator',
          'Zoho Campaigns',
        ],
      },
      {
        name: 'Terraform',
        usedIn: ['AI Interactive Demo Platform', 'Zoho Campaigns'],
      },
      {
        name: 'CI/CD',
        usedIn: [
          'API Contract Impact Analyzer (breaking-change enforcement)',
          'This portfolio (GitHub Actions → Pages)',
        ],
      },
    ],
  },
]
