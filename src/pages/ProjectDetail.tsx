import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { featuredProjects, selectedProjects } from '../data/projects'
import { ChatStream } from '../components/visuals/ChatStream'
import { StateMachine } from '../components/visuals/StateMachine'
import { HighlightList } from '../components/ui/HighlightList'
import { PageHeader } from '../components/ui/PageHeader'
import { ProjectLinks } from '../components/ui/ProjectLinks'
import { Reveal } from '../components/ui/Reveal'
import { TechRow } from '../components/ui/TechRow'
import NotFound from './NotFound'

const portals = [
  { role: 'Admin', detail: 'Roster, weekly availability, clinic-wide stats' },
  { role: 'Staff', detail: 'Check-in, reschedule, cancel, queue board' },
  { role: 'Doctor', detail: 'Start and complete consultations, notes and prescriptions' },
  { role: 'Patient', detail: 'Book a slot, watch queue position, read the visit summary' },
]

/** The full technical write-up for a single project: the extended summary, the
 *  "hard parts" and, where a workflow diagram exists, the interaction visuals.
 *  This is the DETAILED layer — the compact public listing links here. */
export default function ProjectDetail() {
  const { id } = useParams()
  const project = [...featuredProjects, ...selectedProjects].find((p) => p.id === id)

  if (!project) return <NotFound />

  const hasHighlights = (project.highlights?.length ?? 0) > 0

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={project.name}
        lede={project.kicker}
      >
        <div className="flex flex-wrap items-center gap-4">
          <ProjectLinks links={project.links} />
        </div>
      </PageHeader>

      <section className="shell pb-24">
        <Reveal>
          <Link
            to="/projects"
            className="link-wipe inline-flex items-center gap-2 text-[0.875rem] font-medium text-ink-3 transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" strokeWidth={2} aria-hidden="true" />
            All projects
          </Link>

          <div className="mt-6">
            <TechRow tech={project.tech} />
          </div>

          <p className="mt-8 max-w-3xl text-[1.0625rem] leading-relaxed text-ink-2">{project.summary}</p>
        </Reveal>

        {hasHighlights ? (
          <div className="mt-16 grid gap-10 border-t border-line-soft pt-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow text-accent-soft">The hard parts</p>
              <div className="mt-6">
                <HighlightList items={project.highlights ?? []} />
              </div>
            </Reveal>

            <div className="lg:col-span-5">
              {project.id === 'mediqueue' ? (
                <>
                  <Reveal delay={0.05}>
                    <p className="eyebrow text-accent-soft">Appointment workflow</p>
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
                </>
              ) : project.id === 'orbit-ai' ? (
                <Reveal delay={0.05}>
                  <p className="eyebrow text-accent-soft">How a response is served</p>
                  <div className="mt-6">
                    <ChatStream />
                  </div>
                </Reveal>
              ) : null}
            </div>
          </div>
        ) : null}
      </section>
    </>
  )
}