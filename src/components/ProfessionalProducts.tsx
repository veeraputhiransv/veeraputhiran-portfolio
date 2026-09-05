import {
  productCount,
  productEmployers,
  productsDisclosure,
} from '../data/products'
import { ProductCaseStudy } from './ProductCaseStudy'
import { SectionHeading } from './SectionHeading'
import { TechList } from './TechList'

export function ProfessionalProducts() {
  return (
    <section id="products" className="border-b border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          index="04"
          eyebrow="Professional Products I've Built"
          title="Enterprise software that shipped to real users"
          description={`${productCount} products across finance and ERP, enterprise portals, AI SaaS and marketing platforms, presented as architecture and engineering decisions. Outcome figures appear only where they were measured.`}
        />

        <p className="mt-6 max-w-3xl border-l-2 border-line-strong pl-4 text-sm leading-6 text-ink-muted">
          {productsDisclosure}
        </p>

        <nav
          aria-label="Product case studies"
          className="mt-12 rounded-lg border border-line bg-surface p-6 sm:p-7"
        >
          <h3 className="label-mono text-ink-muted">Jump to a case study</h3>
          <div className="mt-5 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {productEmployers.map((employer) => (
              <div key={`index-${employer.id}`}>
                <p className="text-sm font-semibold tracking-tight text-ink">
                  {employer.employer}
                </p>
                <ul className="mt-2.5 space-y-1.5">
                  {employer.products.map((product) => (
                    <li key={`index-${product.id}`}>
                      <a
                        href={`#${product.id}`}
                        className="text-[0.82rem] leading-6 text-ink-secondary transition-colors hover:text-accent"
                      >
                        {product.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        <div className="mt-16 space-y-20 lg:space-y-24">
          {productEmployers.map((employer) => (
            <div key={employer.id} id={`employer-${employer.id}`}>
              <header className="border-t-2 border-navy pt-6">
                <div className="flex flex-col gap-x-10 gap-y-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <h3 className="font-serif text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
                      {employer.employer}
                    </h3>
                    <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-sm font-semibold text-accent">
                        {employer.role}
                      </span>
                      <span className="label-mono text-ink-muted">
                        {employer.period}
                      </span>
                    </p>
                    <p className="mt-4 text-[0.97rem] leading-7 text-ink-secondary">
                      {employer.positioning}
                    </p>
                  </div>

                  <div className="lg:max-w-xs lg:shrink-0">
                    <h4 className="label-mono text-ink-muted">Focus</h4>
                    <div className="mt-2.5">
                      <TechList
                        items={employer.focus}
                        label={`${employer.employer} focus areas`}
                      />
                    </div>
                  </div>
                </div>
              </header>

              <div className="mt-8 grid gap-6">
                {employer.products.map((product, index) => (
                  <ProductCaseStudy
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
