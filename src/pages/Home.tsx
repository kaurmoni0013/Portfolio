import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Hero } from '../components/sections/Hero'
import { Skills } from '../components/sections/Skills'
import { CurrentlyExploring } from '../components/sections/CurrentlyExploring'
import { ProjectShowcase } from '../components/sections/ProjectShowcase'
import { featuredProjects } from '../data/projects'
import { profile } from '../data/profile'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'

export default function Home() {
  return (
    <>
      <Hero />

      {/* ----------------- selected work ----------------- */}
      <section className="py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2 className="display-md mt-3 max-w-xl text-ink">
                  Two full-stack products, and what made them hard.
                </h2>
              </div>
              <Link
                to="/projects"
                className="tap link-wipe inline-flex items-center gap-1.5 text-[0.9375rem] text-ink-3 transition-colors duration-150"
              >
                All projects
                <ArrowUpRight className="size-3.5" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 space-y-24 md:space-y-32">
            {featuredProjects.slice(0, 2).map((project, i) => (
              <ProjectShowcase key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Skills />

      <CurrentlyExploring />

      {/* ---------------------- sign off ---------------------- */}
      <section className="py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <div className="border-t border-line-soft pt-12">
              <h2 className="display-md text-ink">{profile.tagline}</h2>
              <p className="body-lg mt-5 max-w-xl">
                If you&rsquo;re hiring, mentoring, or just want to compare notes on full-stack or backend work,
                I&rsquo;d genuinely like to hear from you.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Button href={`mailto:${profile.email}`} variant="primary">
                  Get in touch
                </Button>
                <Button href="/contact" variant="ghost">
                  Contact details
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}