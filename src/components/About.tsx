import { profile } from '../data/profile'
import { SectionHeading } from './SectionHeading'
import { TechList } from './TechList'

export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-28">
        <div>
          <SectionHeading
            index="08"
            eyebrow="About"
            title="Systems engineering, with applied AI on top of it"
          />
          <div className="mt-8 max-w-2xl space-y-5 text-[1.02rem] leading-7 text-ink-secondary">
            <p>
              Nine years in, most of my work has been the same shape: a business
              process that people are running manually or in spreadsheets, and a
              system that has to make it reliable, auditable and fast enough to
              trust. Collections workflows, ledger provenance, campaign
              delivery, release governance — different domains, the same
              question about where state lives and who is allowed to change it.
            </p>
            <p>
              The engineering that follows is backend-heavy: service boundaries,
              API contracts, data models, and the asynchronous paths that keep a
              slow dependency from becoming a failed user action. I write the
              frontend when the product needs one, and I have shipped browser
              extensions, role-driven internal tools and ERP-adjacent interfaces
              where the interface is part of the compliance story.
            </p>
            <p>
              The AI work sits on the same foundation. My interest is in systems
              where a model operates against real business data — retrieval
              before generation, deterministic checks in front of the model, a
              human decision after it, and sources attached to the answer. The
              independent projects on this page are where I test that discipline
              without a deadline shaping the trade-offs.
            </p>
            <p>
              I have worked in product teams at {profile.employers.join(', ')},
              including remote collaboration with globally distributed
              stakeholders across requirements, release readiness and production
              support.
            </p>
          </div>
        </div>

        <aside className="self-start rounded-lg border border-line bg-surface p-6 sm:p-7">
          <h3 className="label-mono text-ink-muted">Current focus</h3>
          <p className="mt-3 text-sm leading-6 text-ink-secondary">
            {profile.location}. Open to senior backend, AI/GenAI and platform
            engineering roles — India remote and global remote.
          </p>

          <h3 className="label-mono mt-8 text-ink-muted">Domains</h3>
          <div className="mt-3">
            <TechList items={profile.domains} label="Domain experience" />
          </div>

          <h3 className="label-mono mt-8 text-ink-muted">Organisations</h3>
          <ul className="mt-3 space-y-2">
            {profile.employers.map((employer) => (
              <li
                key={employer}
                className="border-t border-line pt-2 text-sm text-ink"
              >
                {employer}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
