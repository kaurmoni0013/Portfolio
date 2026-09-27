import type { Project } from '../../data/projects'
import { ChatStream } from '../visuals/ChatStream'
import { StateMachine } from '../visuals/StateMachine'
import { HighlightList } from '../ui/HighlightList'
import { ProjectLinks } from '../ui/ProjectLinks'
import { ProjectVisual } from '../ui/ProjectVisual'
import { Reveal } from '../ui/Reveal'
import { TechRow } from '../ui/TechRow'
import { sizeFor } from '../../lib/imageSize'

const portals = [
 { role: 'Admin', detail: 'Roster, weekly availability, clinic-wide stats' },
 { role: 'Staff', detail: 'Check-in, reschedule, cancel, queue board' },
 { role: 'Doctor', detail: 'Start and complete consultations, notes and prescriptions' },
 { role: 'Patient', detail: 'Book a slot, watch queue position, read the visit summary' },
]

/**
 * The heading block, set the way a project is usually presented: name first,
 * then the one-line description, then the stack. The screenshot is the
 * largest element in the showcase and the links sit directly beneath it.
 */
function ShowcaseHeader({ project, label }: { project: Project; label: string }) {
 return (
 <Reveal>
 <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
 <span className="eyebrow text-accent-soft">{label}</span>
 <span className="text-[0.8125rem] text-ink-4">{project.year}</span>
 </div>

 <h2 className="display-md mt-4 text-ink">{project.name}</h2> <p className="mt-3 max-w-2xl font-display text-[1.125rem] leading-snug font-400 text-ink-2">
 {project.kicker}
 </p>
 <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-3">{project.summary}</p>

 <div className="mt-6">
 <TechRow tech={project.tech} />
 </div>
 </Reveal>
 )
}

function Screenshot({ project, priority }: { project: Project; priority?: boolean }) {
 const size = sizeFor(project.id)
 if (!project.image) return null
 return (
 <Reveal delay={0.05} className="mt-10">
 <ProjectVisual
 src={project.image}
 alt={project.imageAlt ?? `${project.name} interface`}
 width={size.w}
 height={size.h}
 label={project.name}
 priority={priority}
 />
 </Reveal>
 )
}

function Links({ project }: { project: Project }) {
 return (
 <Reveal delay={0.05}>
 <div className="mt-6">
 <ProjectLinks links={project.links} />
 </div>
 </Reveal>
 )
}

/** MediQueue: the queue lifecycle diagram and the four role portals. */
function MediQueueDetail({ project }: { project: Project }) {
 return (
 <div className="mt-14 grid gap-10 border-t border-line-soft pt-10 lg:grid-cols-12 lg:gap-12">
 <Reveal className="lg:col-span-7">
 <p className="eyebrow">The hard parts</p>
 <div className="mt-6">
 <HighlightList items={project.highlights ?? []} />
 </div>
 </Reveal>

 <div className="lg:col-span-5">
 <Reveal delay={0.08}>
 <p className="eyebrow">Appointment workflow</p>
 <div className="mt-6">
 <StateMachine />
 </div>
 </Reveal>

 <Reveal delay={0.08}>
 <ul className="mt-8 grid gap-px overflow-hidden rounded-[1rem] border border-line bg-line-soft sm:grid-cols-2">
 {portals.map((p) => (
 <li key={p.role} className="bg-raised px-5 py-4">
 <span className="text-[0.8125rem] font-medium text-accent-soft">{p.role}</span>
 <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-3">{p.detail}</p>
 </li>
 ))}
 </ul>
 </Reveal>
 </div>
 </div>
 )
}

/** Orbit AI: how a streamed response is served. */
function OrbitDetail({ project }: { project: Project }) {
 return (
 <div className="mt-14 grid gap-10 border-t border-line-soft pt-10 lg:grid-cols-12 lg:gap-12">
 <Reveal className="lg:col-span-7">
 <p className="eyebrow">What made it non-trivial</p>
 <div className="mt-6">
 <HighlightList items={project.highlights ?? []} />
 </div>
 </Reveal>

 <Reveal className="lg:col-span-5" delay={0.08}>
 <p className="eyebrow">How a response is served</p>
 <div className="mt-6">
 <ChatStream />
 </div>
 </Reveal>
 </div>
 )
}

/** Everything else gets the same name/stack/screenshot/links order, with the
 * detail underneath in two columns. */
function GenericDetail({ project }: { project: Project }) {
 const hasHighlights = (project.highlights?.length ?? 0) > 0
 if (!hasHighlights) return null
 return (
 <div className="mt-14 border-t border-line-soft pt-10">
 <Reveal>
 <p className="eyebrow">What I contributed</p>
 <div className="mt-6 max-w-3xl">
 <HighlightList items={project.highlights ?? []} />
 </div>
 </Reveal>
 </div>
 )
}

/**
 * A single featured project, presented as one large showcase. The screenshot
 * is the dominant element (about 89% of the content column), with the
 * supporting detail below it rather than competing beside it.
 */
export function ProjectShowcase({ project, index = 0, priority = false }: { project: Project; index?: number; priority?: boolean }) {
 const label = project.links.length === 1 && project.year === '2025' ? 'Hackathon' : `Featured ${String(index + 1).padStart(2, '0')}`

 return (
 <article className="relative">
 <ShowcaseHeader project={project} label={label} />
 <Screenshot project={project} priority={priority} />
 <Links project={project} />

 {project.id === 'mediqueue' ? (
 <MediQueueDetail project={project} />
 ) : project.id === 'orbit-ai' ? (
 <OrbitDetail project={project} />
 ) : (
 <GenericDetail project={project} />
 )}
 </article>
 )
}
