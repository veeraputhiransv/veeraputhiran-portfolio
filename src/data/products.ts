/**
 * Professional (employer) product case studies.
 *
 * These are portfolio case studies, not open-source projects: no repository
 * links, no proprietary source, no customer data, no internal screenshots.
 * Architecture is described as public-safe abstractions, and outcome figures
 * appear only where they were measured and can be stated publicly.
 *
 * The scope of what is omitted is stated once, at section level, via
 * `productsDisclosure`. Individual case studies carry no disclaimers.
 */

export const productsDisclosure =
  'Professional work is described at an architectural level; proprietary source code, customer data and internal implementation details are intentionally omitted.'

export type EngineeringDecision = {
  title: string
  detail: string
}

export type ProductCaseStudy = {
  id: string
  title: string
  domain: string
  summary: string
  context: string
  /** What I worked on, phrased as scope rather than achievement claims. */
  work: string[]
  architecture: string[]
  decisions: EngineeringDecision[]
  technologies: string[]
  infrastructure?: string[]
  workflowRoles?: string[]
  outcomes?: string[]
  /**
   * True only where the figures were actually measured on the product. Keeps
   * verified metrics visually distinct from qualitative outcome statements.
   */
  outcomesMeasured?: boolean
}

export type ProductEmployer = {
  id: string
  employer: string
  role: string
  period: string
  positioning: string
  focus: string[]
  products: ProductCaseStudy[]
}

export const productEmployers: ProductEmployer[] = [
  {
    id: 'tickmarks',
    employer: 'Tickmarks',
    role: 'Senior AI Developer',
    period: 'Feb 2026 – Sep 2026',
    positioning:
      'AI engineering, backend APIs and frontend product development for finance and ERP systems — AI workflows grounded in accounting data, REST services behind them, and the product surfaces finance teams work in.',
    focus: [
      'AI Engineering',
      'Backend APIs',
      'Frontend Product Development',
      'Finance / ERP',
      'Enterprise Integrations',
    ],
    products: [
      {
        id: 'product-sop-guidance',
        title: 'SOP Guidance & Audit Browser Extension',
        domain: 'Workflow Compliance · Browser Platform',
        summary:
          'Browser-based workflow assistant that guides ERP users through approved SOPs, validates required completion conditions and records traceable audit evidence.',
        context:
          'Finance and ERP teams work to documented standard operating procedures, but the procedure lives outside the system where the work happens. Reviewers are left reconstructing whether the required steps were actually performed, from records that were never designed to answer that question.',
        work: [
          'Chrome and Edge MV3 extension with a React side panel as the guidance surface',
          'Content scripts that detect the active ERP screen and record context',
          'Background service worker coordinating messaging, session and panel state',
          'Authoring Mode for defining SOPs, steps and completion conditions',
          'Compliance Mode for guided execution against a selected SOP',
          'Required-step validation and completion rules evaluated during the workflow',
          'Audit-oriented interaction capture tied to the ERP context in view',
        ],
        architecture: [
          'ERP Application',
          'Content Script',
          'Context Detection',
          'Background Service',
          'React Side Panel',
          'SOP Workflow',
          'Validation / Audit Evidence',
        ],
        decisions: [
          {
            title: 'Side panel rather than an injected overlay',
            detail:
              'Guidance renders in the browser side panel, so the ERP DOM stays untouched. Upstream UI changes cannot break the assistant, and the host application keeps its own layout and scroll behaviour.',
          },
          {
            title: 'Context detection kept at the content-script boundary',
            detail:
              'The content script reports only which ERP screen and record type is in view. SOP selection, validation and evidence handling stay inside the extension, which keeps host-page code minimal and the trust boundary narrow.',
          },
          {
            title: 'Authoring and Compliance as separate modes',
            detail:
              'Defining a procedure and executing one are different activities with different risk. Keeping them as distinct modes rather than one editable surface means procedure authoring cannot be mistaken for procedure evidence.',
          },
          {
            title: 'Completion conditions declared as data',
            detail:
              'Required steps and completion rules are declared per SOP rather than coded per screen, so a process owner can change a procedure without waiting for an extension release.',
          },
        ],
        technologies: [
          'Chrome / Edge MV3',
          'React',
          'TypeScript',
          'Side Panel API',
          'Content Scripts',
          'Background Service Worker',
          'REST APIs',
        ],
        outcomes: [
          'Procedure guidance and audit evidence are produced in the same session as the ERP work, without modifying the ERP application itself.',
        ],
      },
      {
        id: 'product-collections',
        title: 'AI-Assisted Collections Workflow Platform',
        domain: 'Finance Operations · Backend APIs',
        summary:
          'Finance collections platform supporting outstanding-item workflows, customer responses, promise-to-pay, disputes, escalation, recovery, write-off review and reporting.',
        context:
          'Collections work spreads across ERP balances, customer correspondence and spreadsheets. The real state of an outstanding item — promised, disputed, escalated, recovered, written off — usually lives in somebody’s inbox, which makes both follow-up and reporting unreliable.',
        work: [
          'Python and FastAPI REST APIs covering the collection lifecycle',
          'Role and module level access for Admin, Supervisor and Analyst workflows',
          'Workflow APIs for outstanding identification, customer response capture, promise-to-pay, disputes, escalation, recovery and write-off review',
          'Synchronisation and mapping against ERP and business-system data',
          'AI-assisted steps supporting prioritisation and response drafting',
          'Frontend integration support and reporting endpoints',
        ],
        architecture: [
          'ERP / Financial Data',
          'Sync / Mapping',
          'FastAPI Backend',
          'Collections Workflow',
          'PTP / Dispute / Escalation',
          'Recovery / Review',
          'Reporting',
        ],
        decisions: [
          {
            title: 'The outstanding item is the workflow aggregate',
            detail:
              'State transitions hang off the individual outstanding item rather than the customer account. One disputed invoice then stops blocking collection activity on everything else the customer owes.',
          },
          {
            title: 'Authorisation resolved in the API layer',
            detail:
              'Admin, Supervisor and Analyst see the same domain through different permitted transitions. The check sits at the endpoint, not in the UI, so a frontend change cannot widen what a role can do.',
          },
          {
            title: 'An explicit sync and mapping layer',
            detail:
              'ERP identifiers and field names are mapped once on ingest. Workflow code depends on the platform’s own model, which keeps source-system naming changes from propagating through the service.',
          },
          {
            title: 'AI proposes, a person commits',
            detail:
              'AI-assisted steps suggest prioritisation and draft customer language. The action recorded against a financial record is always the one a human confirmed, which keeps the audit trail defensible.',
          },
        ],
        technologies: [
          'Python',
          'FastAPI',
          'MySQL',
          'REST APIs',
          'React',
          'RBAC',
          'LLM',
        ],
      },
      {
        id: 'product-gl-provenance',
        title: 'General Ledger Audit & Provenance Platform',
        domain: 'Audit Traceability · ERP Extension',
        summary:
          'Audit traceability for journal provenance — capturing who prepared a journal and preserving that identity through accounting posting into durable general-ledger entries.',
        context:
          'The ERP records who posted a journal, but not who prepared it, and the originating journal record does not survive posting intact. Answering an auditor’s question about the origin of a ledger entry meant reconstructing it from outside the ledger.',
        work: [
          'AL extension work on Microsoft Dynamics 365 Business Central',
          'Prepared-by capture at journal creation',
          'Integration with the posting lifecycle so attribution survives posting',
          'Provenance carried onto posted journals and linked G/L entries',
          'Backend data modelling for the provenance records and their linkage',
          'Read-only provenance API for audit and reporting consumers',
        ],
        architecture: [
          'Journal Creation',
          'Prepared-By Capture',
          'Posting Pipeline',
          'Posted Journal',
          'G/L Entry',
          'Durable Provenance',
          'Audit API',
        ],
        decisions: [
          {
            title: 'Attribution captured at creation, never inferred later',
            detail:
              'Prepared-by is recorded when the journal line is created. After posting, the originating record may be renumbered or removed, so any attempt to derive authorship retrospectively is guesswork.',
          },
          {
            title: 'Provenance follows the standard posting lifecycle',
            detail:
              'Extending the posting routines keeps the link intact through normal accounting operation, instead of maintaining a parallel table that silently drifts away from the ledger.',
          },
          {
            title: 'Resolvable from the G/L entry, not just the journal',
            detail:
              'Audit questions start at the ledger entry. Linking provenance to the posted G/L entry means the answer is one lookup from where the auditor is already standing.',
          },
          {
            title: 'A read-only external surface',
            detail:
              'Provenance is exposed for reading only. Nothing outside the posting pipeline can rewrite audit attribution, which is what makes the record worth trusting.',
          },
        ],
        technologies: [
          'Microsoft Dynamics 365 Business Central',
          'AL Extensions',
          'REST APIs',
          'SQL',
          'Data Modelling',
        ],
      },
      {
        id: 'product-pmo',
        title: 'PMO & Release Governance Platform',
        domain: 'Delivery Governance · Product Engineering',
        summary:
          'Internal product-delivery system managing engineering review, UAT, finance sign-off and controlled production release, with retained release history.',
        context:
          'Release approvals were tracked across chat and email. After a production release, nobody could reliably answer which approvals it actually had, or who signed off on what.',
        work: [
          'Next.js, React and TypeScript application with a Material UI surface',
          'Role-specific interfaces for CEO, CTO, Finance Lead, Development Lead and Developer',
          'Workflow and state model spanning project, task, testing and release stages',
          'Sign-off gates for lead review, CTO review, UAT and finance approval',
          'Release history retained per project as a reviewable record',
        ],
        architecture: [
          'Project',
          'Tasks',
          'Development Testing',
          'Lead Sign-off',
          'CTO Review',
          'UAT',
          'Finance Sign-off',
          'Production',
          'Release History',
        ],
        decisions: [
          {
            title: 'A state machine, not a status field',
            detail:
              'Every gate is an explicit transition carrying an actor and a timestamp. The release record becomes an audit trail rather than a snapshot of where something currently sits.',
          },
          {
            title: 'Role determines available transitions',
            detail:
              'All five roles share one workflow definition; what differs is which transition each may perform. The process stays single-sourced instead of being re-implemented per role screen.',
          },
          {
            title: 'Finance sign-off as a first-class gate',
            detail:
              'Commercial approval runs inside the same pipeline as engineering approval. Keeping it out of side conversations is what makes the release history complete.',
          },
          {
            title: 'Interfaces shaped by decision, not by data',
            detail:
              'Each role lands on the work waiting for them rather than a shared table with hidden controls, which is the difference between a governance tool people use and one they route around.',
          },
        ],
        technologies: [
          'Next.js',
          'React',
          'TypeScript',
          'Material UI',
          'REST APIs',
          'Role-Based UI',
        ],
        workflowRoles: [
          'CEO',
          'CTO',
          'Finance Lead',
          'Development Lead',
          'Developer',
        ],
      },
    ],
  },
  {
    id: 'concentrix-fluence',
    employer: 'Concentrix — Client: Fluence Energy',
    role: 'Senior Software Engineer',
    period: 'Oct 2025 – Feb 2026',
    positioning:
      'Enterprise backend engineering on a customer-facing operational portal, delivered with globally distributed stakeholders across requirements, release readiness and production support.',
    focus: [
      'Java / Spring Boot',
      'Secure APIs',
      'Operational Workflows',
      'GCP',
      'Production Support',
    ],
    products: [
      {
        id: 'product-fluence-portal',
        title: 'Fluence Customer Portal',
        domain: 'Enterprise Portal · Secure APIs',
        summary:
          'Enterprise customer portal supporting secure operational workflows, customer requests and notification processing.',
        context:
          'Customers and internal operations teams needed a single authenticated surface for operational requests — with a durable record of what was requested, who handled it, and which notifications were sent.',
        work: [
          'Java and Spring Boot REST APIs for request and workflow endpoints',
          'JWT authentication with role-based access control across protected surfaces',
          'Request validation and structured logging for end-to-end traceability',
          'Notification and email processing paths',
          'Query and data-access optimisation against PostgreSQL and Firestore on GCP',
          'Production support spanning integration, debugging and release readiness',
          'SonarQube-guided cleanup of legacy service paths',
        ],
        architecture: [
          'Portal',
          'Spring Boot APIs',
          'JWT + RBAC',
          'Operational Workflows',
          'PostgreSQL',
          'Notification Processing',
          'GCP / Firestore / Email',
        ],
        decisions: [
          {
            title: 'Authorisation asserted per endpoint',
            detail:
              'Roles are resolved from the token and checked at the API boundary rather than inferred from navigation state. UI visibility becomes a convenience, never the access control.',
          },
          {
            title: 'Validation at the edge, before persistence',
            detail:
              'Payloads are validated and rejected at the boundary so workflow code can assume well-formed input. Invalid state never reaches the database, which is far cheaper than repairing it later.',
          },
          {
            title: 'Correlated, structured logs as a design requirement',
            detail:
              'Operational requests carry an identifier through workflow and notification paths. That is what makes production questions answerable without first reproducing the issue.',
          },
          {
            title: 'Notification work off the request path',
            detail:
              'Email and notification processing runs outside the synchronous request, so a slow or failing downstream delivery cannot turn into a failed customer action.',
          },
          {
            title: 'Measure before optimising',
            detail:
              'Slow paths were identified from actual query behaviour and access patterns rather than rewritten on suspicion — including where Firestore and PostgreSQL access patterns differed.',
          },
        ],
        technologies: [
          'Java',
          'Spring Boot',
          'REST APIs',
          'JWT',
          'RBAC',
          'PostgreSQL',
          'GCP',
          'Firestore',
          'SonarQube',
        ],
        outcomes: [
          'Delivered against release cycles coordinated with globally distributed stakeholders across engineering, business and support.',
        ],
      },
    ],
  },
  {
    id: 'layerpath',
    employer: 'Layerpath',
    role: 'Senior Full-Stack / Backend Engineer',
    period: 'Feb 2025 – Jun 2025',
    positioning:
      'AI SaaS product engineering: browser-based workflow capture, asynchronous media and AI processing, and the AWS infrastructure underneath it.',
    focus: [
      'AI SaaS',
      'Browser Extension',
      'Async Processing',
      'AWS',
      'Terraform',
    ],
    products: [
      {
        id: 'product-layerpath-demos',
        title: 'AI Interactive Demo Platform',
        domain: 'AI SaaS · Async Pipelines',
        summary:
          'AI-assisted SaaS platform for capturing product workflows and turning them into interactive and video software demonstrations.',
        context:
          'Producing a software demo meant screen recording, editing, and re-recording the whole thing whenever the product changed. Making capture produce structured data instead of a flat recording is what allows a demo to be regenerated rather than re-shot.',
        work: [
          'Browser extension for in-product workflow capture',
          'Java and Spring Boot REST APIs for capture ingestion and processing',
          'Concurrent processing for real-time ingestion of capture sessions',
          'Asynchronous workflows for post-capture AI and media processing',
          'Authentication and authorisation across the platform surfaces',
          'AI-assisted processing and voice / narration workflows',
          'AWS infrastructure provisioned and maintained with Terraform',
        ],
        architecture: [
          'Browser Extension',
          'Workflow Capture',
          'Backend APIs',
          'Async Processing',
          'AI Processing',
          'Voice / Narration Workflow',
          'Interactive / Video Demo',
          'Cloud Delivery',
        ],
        decisions: [
          {
            title: 'Capture stored as discrete steps',
            detail:
              'Persisting a workflow as structured steps rather than one opaque recording is what lets the same capture render as either an interactive walkthrough or a video, and be re-rendered when the product changes.',
          },
          {
            title: 'Processing moved off the request path',
            detail:
              'Upload returns as soon as the payload is durable. AI processing and narration run asynchronously through queues, so media work measured in minutes never holds a browser connection open.',
          },
          {
            title: 'Explicit boundaries between pipeline stages',
            detail:
              'Capture, AI processing and rendering are separated by queues so each stage retries and scales on its own. A narration failure retries narration instead of discarding the capture.',
          },
          {
            title: 'Infrastructure as code from the start',
            detail:
              'API Gateway, Lambda, S3 and IAM defined in Terraform meant environments were reproducible rather than hand-assembled — which is most of why setup time dropped.',
          },
        ],
        technologies: [
          'Java',
          'Spring Boot',
          'Browser Extension',
          'REST APIs',
          'AWS',
          'Terraform',
          'Async Processing',
        ],
        infrastructure: ['API Gateway', 'Lambda', 'S3', 'IAM'],
        outcomes: [
          '~70% reduction in setup time',
          '~30% reduction in support tickets',
        ],
        outcomesMeasured: true,
      },
    ],
  },
  {
    id: 'zoho',
    employer: 'Zoho Corporation',
    role: 'Member Technical Staff / Software Developer',
    period: 'Apr 2017 – Jan 2025',
    positioning:
      'The longest stretch of my career: backend and product engineering on a marketing SaaS platform at Zoho, spanning campaign APIs, high-volume asynchronous delivery workflows, ML-assisted abuse prevention and production operations.',
    focus: [
      'Marketing SaaS',
      'High-Volume Workflows',
      'Async Processing',
      'ML-Assisted Classification',
      'Performance & Reliability',
    ],
    products: [
      {
        id: 'product-zoho-campaigns',
        title: 'Zoho Campaigns — Marketing SaaS Platform',
        domain: 'Marketing SaaS · Backend Platform',
        summary:
          'Backend and product engineering on a marketing SaaS platform: campaign APIs, high-volume asynchronous delivery workflows, and the data paths and caches behind them.',
        context:
          'Campaign sending is bursty and long-running. A single user action fans out into a large amount of downstream work that has to survive retries, partial failure and rate limits — while the API that triggered it still needs to answer quickly.',
        work: [
          'Backend REST APIs across campaign and product surfaces',
          'High-volume campaign workflows and their asynchronous processing paths',
          'Data-access and query optimisation across relational and document stores',
          'Security work on authenticated product surfaces',
          'Reliability and performance tuning on production service paths',
          'Mentoring and code review for engineers joining the product',
        ],
        architecture: [
          'Campaign API',
          'Validation',
          'Queue / Async Workers',
          'Delivery Workflow',
          'Data Layer',
          'Reporting',
        ],
        decisions: [
          {
            title: 'Long-running work behind queues',
            detail:
              'User-facing endpoints record intent and return. Fan-out runs in workers, which keeps API latency largely independent of how large a campaign is.',
          },
          {
            title: 'Read paths shaped by the query, not the write model',
            detail:
              'Reporting and listing paths were indexed and shaped for their actual access patterns instead of reusing the transactional model, which is where most of the response-time improvement came from.',
          },
          {
            title: 'Caching only where staleness is acceptable',
            detail:
              'Redis fronted read paths that tolerate a short delay. Correctness-critical reads continued to hit the primary store, so caching never became a source of wrong answers.',
          },
          {
            title: 'Review as the mechanism for shared ownership',
            detail:
              'Mentoring and code review were how context on these services stayed distributed rather than concentrated in whoever wrote them first.',
          },
        ],
        technologies: [
          'Java',
          'Spring Boot',
          'Node.js',
          'TypeScript',
          'Python',
          'REST APIs',
          'PostgreSQL',
          'Kafka',
          'Redis',
          'MongoDB',
          'AWS',
          'Docker',
          'Terraform',
        ],
        outcomes: ['~20% improvement in API response time'],
        outcomesMeasured: true,
      },
      {
        id: 'product-anti-spam',
        title: 'ML-Assisted Anti-Spam & Content Moderation',
        domain: 'Applied ML · Abuse Prevention',
        summary:
          'Machine-learning-assisted system for detecting spam and risky campaign content before delivery.',
        context:
          'Sending reputation is shared infrastructure. Content that trips spam filters or policy rules degrades delivery for every other sender on the platform, and reputation damage is not recoverable after send — so evaluation has to happen before content leaves the system.',
        work: [
          'Content and feature processing over campaign material',
          'ML-based spam classification in the pre-delivery path',
          'Moderation and policy signals combined with classifier output',
          'Allow / review / reject routing for evaluated content',
          'Feedback loop returning review outcomes into classification',
        ],
        architecture: [
          'Campaign Content',
          'Content / Feature Processing',
          'ML-Based Spam Classification',
          'Moderation / Policy Signals',
          'Allow / Review / Reject',
          'Feedback Loop',
        ],
        decisions: [
          {
            title: 'Three outcomes rather than two',
            detail:
              'A review queue between allow and reject keeps borderline content from being silently blocked, and it is what supplies the feedback loop with labelled examples.',
          },
          {
            title: 'Deterministic policy signals alongside the classifier',
            detail:
              'Rule-based signals cover the cases that must never depend on a model score. The classifier handles the ambiguous remainder, which keeps hard policy decisions explainable.',
          },
          {
            title: 'Evaluation in the pre-send path',
            detail:
              'Classification runs before delivery instead of in post-hoc reporting. Detecting abuse after send tells you what happened; detecting it before send is the only version that protects deliverability.',
          },
          {
            title: 'Review outcomes retained as labels',
            detail:
              'Moderator decisions feed back as training signal, so classification quality tracks how abuse actually changes rather than a fixed historical snapshot.',
          },
        ],
        technologies: [
          'Python',
          'Java',
          'ML-Assisted Classification',
          'Content Moderation',
          'Classification Pipeline',
          'REST APIs',
        ],
        outcomes: ['~40% improvement in spam-detection accuracy'],
        outcomesMeasured: true,
      },
    ],
  },
]

export const productCount = productEmployers.reduce(
  (total, employer) => total + employer.products.length,
  0,
)
