import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

type ProjectsProps = {
  onAskVeera: () => void
}

export function Projects({ onAskVeera }: ProjectsProps) {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          index="03"
          eyebrow="Selected Independent Engineering"
          title="Four systems built end to end, with the source open"
          description="Independent work where the design decisions are mine and the code is public. Each one exists because of a specific failure mode I wanted to solve properly rather than demonstrate."
        />

        <div className="mt-14 grid gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onAskVeera={onAskVeera}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
