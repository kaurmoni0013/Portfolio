import { ArrowUpRight } from 'lucide-react'
import { atAGlance } from '../../data/journey'
import { profile, socials } from '../../data/profile'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

const focusAreas = [
  'Full-stack development',
  'C++ and DSA',
  'Backend systems',
  'Database design',
  'System design concepts',
  'DevOps and cloud',
]

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title={
        <>
          A CS/AI undergraduate who
          <br className="hidden sm:block" /> actually ships the backend too.
        </>
      }
      className="py-24 md:py-32"
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* ------------------------------------------------------ portrait */}
        <Reveal className="lg:col-span-5">
          <figure className="relative">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-raised">
              <div className="aspect-[4/5] w-full">
                <img
                  src="portrait.webp"
                  alt="Moni Kaur, Computer Science &amp; AI undergraduate"
                  width={900}
                  height={853}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover object-top"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-void/85 via-void/10 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                <span className="font-display text-[0.9375rem] font-600 tracking-tight text-ink">
                  Moni Kaur
                </span>
                <span className="font-mono text-[0.625rem] tracking-[0.18em] text-ink-3 uppercase">
                  Jaipur, IN
                </span>
              </figcaption>
            </div>

            {/* offset frame accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-3 -bottom-3 -z-10 size-full rounded-[1.5rem] border border-line-soft"
            />

            <div className="mt-6 flex flex-wrap gap-2">
              {focusAreas.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-line-soft px-3 py-1.5 font-mono text-[0.625rem] tracking-[0.12em] text-ink-3 uppercase"
                >
                  {f}
                </span>
              ))}
            </div>
          </figure>
        </Reveal>

        {/* ---------------------------------------------------------- text */}
        <div className="lg:col-span-7">
          <Reveal delay={0.08}>
            <p className="max-w-xl text-[1.0625rem] leading-relaxed text-ink-2">{profile.summary}</p>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-ink-3">
              Two full-stack products so far — a clinic appointment system and an AI conversation
              workspace — both with real auth, real persistence, and CI that runs an end-to-end suite
              on every push. I&rsquo;m currently working on system design, testing depth and
              deployment.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-12 border-t border-line-soft">
              {atAGlance.map((row) => (
                <div
                  key={row.label}
                  className="group grid grid-cols-1 gap-1 border-b border-line-soft py-4 transition-colors duration-500 hover:bg-white/[0.02] sm:grid-cols-[10rem_1fr] sm:gap-6 sm:px-2"
                >
                  <dt className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-4 uppercase transition-colors duration-500 group-hover:text-accent">
                    {row.label}
                  </dt>
                  <dd className="text-[0.9375rem] text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap link-wipe font-mono text-[0.6875rem] tracking-[0.16em] text-ink-3 uppercase transition-colors duration-400 hover:text-ink"
                >
                  {s.label}
                  <ArrowUpRight className="ml-1 inline size-3 align-[-1px]" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
