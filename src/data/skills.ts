export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend Engineering',
    items: [
      'Java',
      'Spring Boot',
      'Python',
      'FastAPI',
      'Node.js',
      'REST APIs',
      'Microservices',
      'Hibernate/JPA',
    ],
  },
  {
    title: 'AI Engineering',
    items: [
      'LLM',
      'RAG',
      'AI Workflows',
      'AI Agents',
      'Semantic Retrieval',
      'Document Intelligence',
      'Prompt Engineering',
      'ML/NLP',
    ],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Redux'],
  },
  {
    title: 'Data & Messaging',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'ClickHouse',
      'Kafka',
    ],
  },
  {
    title: 'Cloud / DevOps',
    items: [
      'AWS',
      'Azure',
      'GCP',
      'Docker',
      'Terraform',
      'CI/CD',
      'Git',
      'Azure DevOps',
    ],
  },
  {
    title: 'Security / Architecture',
    items: [
      'JWT',
      'RBAC',
      'System Design',
      'Event-Driven Architecture',
      'Distributed Systems',
    ],
  },
]
