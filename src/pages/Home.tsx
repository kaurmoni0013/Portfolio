import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Projects } from '../components/sections/Projects'
import { Resume } from '../components/sections/Resume'
import { profile, socials } from '../data/profile'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { SocialIcon, type SocialIconId } from '../components/ui/SocialIcon'

export default function Home() {
  return (
    <>
      <Hero />

      {/* ------------------- ABOUT ------------------- */}
      <About className="border-t border-line-soft/60" />

      {/* ------------------- PROJECTS ------------------- */}
      <Projects />

      {/* ------------------- RESUME ------------------- */}
      <Resume className="border-t border-line-soft/60" />

      {/* ---------------------- SIGN OFF ---------------------- */}
      <section className="border-t border-line-soft/60 py-20 md:py-24">
        <div className="shell">
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <h2 className="display-md text-ink">{profile.tagline}</h2>
                <p className="body-lg mt-5 max-w-xl text-ink-3">
                  If you&rsquo;re hiring, mentoring, or just want to compare notes on full-stack or backend work,
                  I&rsquo;d genuinely like to hear from you.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 lg:col-span-5 lg:justify-end">
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

      {/* ------------------- FIND ME ON ------------------- */}
      <section className="border-t border-line-soft/60 py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="display-lg font-bold tracking-tight text-ink uppercase sm:text-3xl md:text-4xl">
                FIND ME ON
              </h2>
              <p className="mt-3 text-[1.0625rem] text-ink-3">
                Feel free to <span className="font-medium text-accent">connect</span> with me
              </p>

              <ul className="mt-8 flex items-center justify-center gap-5">
                {socials
                  .filter((s) => s.id === 'github' || s.id === 'linkedin' || s.id === 'email')
                  .map((s) => (
                    <li key={s.id}>
                      <a
                        href={s.href}
                        target={s.id === 'email' ? undefined : '_blank'}
                        rel={s.id === 'email' ? undefined : 'noopener noreferrer'}
                        className="grid size-13 place-items-center rounded-full border border-line-soft bg-raised text-ink-2 transition-all duration-300 hover:scale-110 hover:border-accent hover:text-accent shadow-lg"
                        aria-label={s.label}
                      >
                        <SocialIcon id={s.id as SocialIconId} className="size-5" />
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}