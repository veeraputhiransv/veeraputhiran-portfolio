import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Projects"
          title="Engineering case studies"
          description="Selected systems work across enterprise workflow, applied AI, document intelligence and cloud-native backend architecture. These are sanitized engineering case studies; live URLs are included only when a public artifact exists."
        />

        <div className="mt-14 grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
