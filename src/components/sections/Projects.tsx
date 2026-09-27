import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import type { Project } from '../../data/projects'
import { featuredProjects, selectedProjects } from '../../data/projects'
import { skillNames } from '../../data/skills'
import { ChatStream } from '../visuals/ChatStream'
import { StateMachine } from '../visuals/StateMachine'
import { ProjectLinks } from '../ui/ProjectLinks'
import { ProjectVisual } from '../ui/ProjectVisual'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { TechChip } from '../ui/TechChip'

const IMAGE_SIZE: Record<string, { w: number; h: number }> = {
  mediqueue: { w: 935, h: 766 },
  'orbit-ai': { w: 1400, h: 707 },
  'solar-system': { w: 900, h: 749 },
  'tic-tac-toe': { w: 800, h: 732 },
  'love-calculator': { w: 571, h: 799 },
  'random-quote': { w: 800, h: 779 },
}

const portals = [
  { role: 'Admin', detail: 'Roster, weekly availability, clinic-wide stats' },
  { role: 'Staff', detail: 'Check-in, reschedule, cancel, queue board' },
  { role: 'Doctor', detail: 'Start and complete consultations, notes and prescriptions' },
  { role: 'Patient', detail: 'Book a slot, watch queue position, read the visit summary' },
]

const RAILQR_SIZE = { w: 0, h: 0 }

function HighlightList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => {
        const [lead, ...rest] = item.split(' — ')
        return (
          <li key={lead} className="flex gap-3 text-[0.875rem] leading-relaxed text-ink-2">
            <Check className="mt-[0.3rem] size-3.5 shrink-0 text-teal" strokeWidth={2.2} aria-hidden="true" />
            <p>
              {rest.length ? (
                <>
                  <span className="font-medium text-ink">{lead}</span> — {rest.join(' — ')}
                </>
              ) : (
                lead
              )}
            </p>
          </li>
        )
      })}
    </ul>
  )
}

function TechRow({ tech }: { tech: Project['tech'] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li key={t}>
          <TechChip tech={t} label={skillNames[t] ?? t} />
        </li>
      ))}
    </ul>
  )
}

function ShowcaseHeading({ project, index }: { project: Project; index: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <span className="font-mono text-[0.625rem] tracking-[0.24em] text-accent-soft">{index}</span>
      <span className="eyebrow">{project.kicker}</span>
      <span className="font-mono text-[0.625rem] tracking-[0.18em] text-ink-4 uppercase">
        {project.year}
      </span>
    </div>
  )
}

function MediQueueShowcase() {
  const project = featuredProjects[0]
  const size = IMAGE_SIZE.mediqueue

  return (
    <article className="relative">
      <Reveal>
        <ShowcaseHeading project={project} index="Featured 01" />
        <h3 className="display-md mt-5 text-ink">{project.name}</h3>
        <p className="body-lg mt-5 max-w-3xl">{project.summary}</p>
        <div className="mt-7">
          <TechRow tech={project.tech} />
        </div>
        <div className="mt-8">
          <ProjectLinks links={project.links} />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7" delay={0.05}>
          <ProjectVisual
            src={project.image!}
            alt={project.imageAlt!}
            width={size.w}
            height={size.h}
            label="MediQueue — patient portal"
            priority
          />

          <ul className="mt-6 grid gap-px overflow-hidden rounded-[1rem] border border-line bg-line-soft sm:grid-cols-2">
            {portals.map((p) => (
              <li key={p.role} className="bg-raised px-5 py-4 transition-colors duration-500 hover:bg-[#12161e]">
                <span className="font-mono text-[0.625rem] tracking-[0.2em] text-accent-soft uppercase">
                  {p.role}
                </span>
                <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink-3">{p.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.12}>
          <h4 className="eyebrow">Appointment workflow</h4>
          <div className="mt-6">
            <StateMachine />
          </div>

          <div className="mt-8 space-y-3.5 border-t border-line-soft pt-7">
            <HighlightList items={project.highlights!} />
          </div>
        </Reveal>
      </div>
    </article>
  )
}

function OrbitShowcase() {
  const project = featuredProjects[1]
  const size = IMAGE_SIZE['orbit-ai']

  return (
    <article className="relative">
      <Reveal>
        <ShowcaseHeading project={project} index="Featured 02" />
        <h3 className="display-md mt-5 text-ink">{project.name}</h3>
        <p className="body-lg mt-5 max-w-3xl">{project.summary}</p>
        <div className="mt-7">
          <TechRow tech={project.tech} />
        </div>
        <div className="mt-8">
          <ProjectLinks links={project.links} />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="order-2 lg:order-1 lg:col-span-5" delay={0.12}>
          <h4 className="eyebrow">What made it non-trivial</h4>
          <div className="mt-6">
            <HighlightList items={project.highlights!} />
          </div>
        </Reveal>

        <div className="order-1 space-y-6 lg:order-2 lg:col-span-7">
          <Reveal delay={0.05}>
            <ProjectVisual
              src={project.image!}
              alt={project.imageAlt!}
              width={size.w}
              height={size.h}
              label="Orbit AI — conversation workspace"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <ChatStream />
          </Reveal>
        </div>
      </div>
    </article>
  )
}

function RailQRShowcase() {
  const project = featuredProjects[2]

  return (
    <article className="panel panel-hover overflow-hidden p-7 md:p-9">
      <div className="grid gap-9 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <ShowcaseHeading project={project} index="Hackathon" />
          <h3 className="display-md mt-5 text-ink">{project.name}</h3>
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-2">{project.summary}</p>
          <div className="mt-7">
            <ProjectLinks links={project.links} size="sm" />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <div className="grid gap-8 sm:grid-cols-2">
            <HighlightList items={project.highlights!} />
            <div>
              <TechRow tech={project.tech} />
              <p className="mt-6 border-t border-line-soft pt-5 text-[0.8125rem] leading-relaxed text-ink-3">
                Built as a team prototype for the Smart India Hackathon. I contributed to problem
                analysis, the backend APIs and the database layer.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  )
}

function SelectedCard({ project }: { project: Project }) {
  const reduce = useReducedMotion()
  const size = IMAGE_SIZE[project.id] ?? RAILQR_SIZE
  const live = project.links.some((l) => l.kind === 'live')

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="group/card panel panel-hover relative flex flex-col overflow-hidden"
      {...(live ? { 'data-cursor': 'project' } : {})}
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
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-[1.06]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-raised via-raised/10 to-transparent"
          />
        </div>
      ) : (
        <div className="relative flex h-32 items-center justify-center overflow-hidden border-b border-line-soft bg-base">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(91,140,255,0.14),transparent_62%)]"
          />
          <span className="relative font-display text-[0.6875rem] tracking-[0.28em] text-ink-4 uppercase">
            {project.year}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-[1.125rem] font-600 tracking-tight text-ink">
            {project.name}
          </h3>
          <span className="font-mono text-[0.5625rem] tracking-[0.16em] text-ink-4 uppercase">
            {project.year}
          </span>
        </div>
        <p className="mt-1 font-mono text-[0.625rem] tracking-[0.14em] text-ink-4 uppercase">
          {project.kicker}
        </p>
        <p className="mt-4 text-[0.875rem] leading-relaxed text-ink-3">{project.summary}</p>

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
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Things I built, and the hard parts."
      lede="Two products I could defend in a code review, one hackathon prototype, and the smaller builds that taught me the basics. Every link below is a real repository or a real deployment."
      className="py-24 md:py-32"
    >
      <div className="space-y-24 md:space-y-32">
        <MediQueueShowcase />
        <OrbitShowcase />
        <RailQRShowcase />
      </div>

      <div className="mt-24 md:mt-32">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-line-soft pt-8">
            <h3 className="display-md text-ink">Smaller builds</h3>
            <p className="max-w-md text-[0.875rem] text-ink-3">
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
    </Section>
  )
}
