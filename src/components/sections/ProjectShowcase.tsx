import type { Project } from '../../data/projects'
import { ProjectLinks } from '../ui/ProjectLinks'
import { Reveal } from '../ui/Reveal'
import { TechRow } from '../ui/TechRow'
import { sizeFor } from '../../lib/imageSize'
import { Button } from '../ui/Button'
import { ArrowUpRight } from 'lucide-react'

function FeaturedImage({ project, priority }: { project: Project; priority?: boolean }) {
  const size = sizeFor(project.id)
  if (!project.image) return null
  return (
    <div className="relative overflow-hidden rounded-[1rem] border border-line bg-base">
      <img
        src={project.image}
        alt={project.imageAlt ?? `${project.name} interface`}
        width={size.w}
        height={size.h}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="aspect-[16/10] w-full max-h-[360px] min-h-0 object-cover object-top"
      />
    </div>
  )
}

/** A featured project as a compact, scannable card: image on one side
 *  (~40%), summary in points, focus tags and links on the other (~60%).
 *  The engineering detail lives on the project's own page. */
export function ProjectShowcase({ project, index = 0, priority = false }: { project: Project; index?: number; priority?: boolean }) {
  const label = `Featured ${String(index + 1).padStart(2, '0')}`

  return (
    <article className="relative grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
      <Reveal className="lg:order-2 lg:col-span-5">
        <FeaturedImage project={project} priority={priority} />
      </Reveal>

      <div className="lg:order-1 lg:col-span-7">
        <Reveal>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="eyebrow text-accent-soft">{label}</span>
            <span className="text-[0.8125rem] text-ink-4">{project.year}</span>
          </div>

          <h2 className="display-md mt-4 text-ink">{project.name}</h2>

          {(project.points?.length ?? 0) > 0 ? (
            <ul className="mt-5 space-y-2.5">
              {project.points?.map((point) => (
                <li key={point} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-2">
                  <span className="mt-[0.625rem] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-3">{project.summary}</p>
          )}

          <div className="mt-6">
            <TechRow tech={project.tech} />
          </div>
        </Reveal>

        {(project.focus?.length ?? 0) > 0 ? (
          <Reveal delay={0.05}>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.focus?.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-line-soft bg-white/[0.03] px-3.5 py-1.5 text-[0.8125rem] text-ink-3"
                >
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={`/projects/${project.id}`} iconEnd={<ArrowUpRight className="size-4" strokeWidth={2} aria-hidden="true" />}>
              View Project
            </Button>
            <ProjectLinks links={project.links} />
          </div>
        </Reveal>
      </div>
    </article>
  )
}