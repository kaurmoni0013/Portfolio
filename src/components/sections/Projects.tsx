import { motion, useReducedMotion } from 'framer-motion'
import { Dsa } from './Dsa'
import { ProjectShowcase } from './ProjectShowcase'
import { featuredProjects, selectedProjects, type Project } from '../../data/projects'
import { skillNames } from '../../data/skills'
import { ProjectLinks } from '../ui/ProjectLinks'
import { Reveal } from '../ui/Reveal'
import { TechChip } from '../ui/TechChip'
import { sizeFor } from '../../lib/imageSize'

function SelectedCard({ project }: { project: Project }) {
 const reduce = useReducedMotion()
 const size = sizeFor(project.id)

 return (
 <motion.article
 initial={reduce ? false : { opacity: 0, y: 22 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-10% 0px' }}
 transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
 className="group/card panel panel-hover relative flex flex-col overflow-hidden"
 >
 {project.image ? (
 <div className="relative overflow-hidden border-b border-line-soft bg-base">
 <img
 src={project.image}
 alt={project.imageAlt ?? `${project.name} interface`}
 width={size.w}
 height={size.h}
 loading="lazy"
 decoding="async"
 className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover/card:scale-[1.03]"
 />
 </div>
 ) : (
 <div className="relative flex h-28 items-center justify-center overflow-hidden border-b border-line-soft bg-base">
 <div
 aria-hidden="true"
 className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(226,138,124,0.14),transparent_62%)]"
 />
 <span className="relative text-[0.8125rem] text-ink-4">{project.year}</span>
 </div>
 )}

 <div className="flex flex-1 flex-col p-6">
 <div className="flex items-baseline justify-between gap-4">
 <h3 className="display-sm font-500 text-ink">
 {project.name}
 </h3> <span className="text-[0.8125rem] text-ink-4">{project.year}</span>
 </div>
 <p className="mt-2 text-[0.875rem] text-accent-soft">{project.kicker}</p>
 <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-3">{project.summary}</p>

 <div className="mt-6 flex flex-wrap gap-1.5">
 {project.tech.map((t) => (
 <TechChip key={t} tech={t} label={skillNames[t] ?? t} />
 ))}
 </div>

 <div className="mt-auto pt-6">
 <ProjectLinks links={project.links} size="sm" />
 </div>
 </div>
 </motion.article>
 )
}

export function Projects() {
 return (
 <>
 {/* The page's PageHeader already carries the eyebrow, title and lede, so
 this section deliberately renders no second heading block. Each
 project name is an h2, which keeps the outline h1 > h2 throughout. */}
 <section id="projects" className="relative scroll-mt-24 pb-20 md:pb-24">
 <div className="shell">
 <div className="space-y-24 md:space-y-32">
 {featuredProjects.map((project, i) => (
 <ProjectShowcase key={project.id} project={project} index={i} priority={i === 0} />
 ))}
 </div>

 <div className="mt-24 md:mt-32">
 <Reveal>
 <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-line-soft pt-8">
 <h2 className="display-md text-ink">Smaller builds</h2> <p className="max-w-md text-[0.9375rem] leading-relaxed text-ink-3">
 Short projects, mostly from my first year of web development. They are small on
 purpose — that is where the fundamentals got built.
 </p>
 </div>
 </Reveal>

 <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
 {selectedProjects.map((p) => (
 <SelectedCard key={p.id} project={p} />
 ))}
 </div>
 </div>
 </div>
 </section>

 <Dsa className="py-20 md:py-24" />
 </>
 )
}
