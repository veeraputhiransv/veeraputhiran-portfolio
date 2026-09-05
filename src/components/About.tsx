import { profile } from '../data/profile'
import { SectionHeading } from './SectionHeading'

const highlights = [
  '9+ Years Experience',
  'Enterprise SaaS',
  'Backend Architecture',
  'AI / LLM Engineering',
] as const

export function About() {
  return (
    <section id="about" className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div>
          <SectionHeading eyebrow="About" title="Engineering at the intersection of systems and applied AI" />
          <div className="mt-8 space-y-5 text-[1.02rem] leading-7 text-ink-secondary">
            <p>
              I am a Senior Backend & AI Engineer with 9+ years of experience
              building production-grade SaaS products, enterprise platforms,
              scalable backend systems and AI-powered workflows.
            </p>
            <p>
              My strength is translating complex business requirements into
              reliable technical systems — from architecture and APIs through
              implementation, integration, production deployment and support.
            </p>
            <p>
              My current focus is the intersection of AI and enterprise
              software: systems where LLMs and RAG operate against structured
              business data, APIs, documents and real operational workflows,
              rather than as standalone chatbots.
            </p>
            <p>
              That work typically includes backend architecture, enterprise
              SaaS, AI systems, REST APIs, distributed services, ERP
              integrations, cloud infrastructure and production engineering.
            </p>
          </div>
        </div>

        <aside className="self-start rounded-lg border border-line bg-paper p-6 sm:p-7">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-ink-muted">
            Focus
          </p>
          <p className="mt-3 text-sm leading-6 text-ink-secondary">
            {profile.location}. Currently exploring senior backend, AI/GenAI
            and platform engineering roles, India remote and global remote.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="border-t border-line pt-3 text-sm font-medium text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
