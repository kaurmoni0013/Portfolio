import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { atAGlance } from '../../data/journey'

/**
 * Concise introduction. The page header leads with the summary;
 * this section adds the brief facts. No portrait — the homepage
 * already carries it.
 */
export function About({ className = '' }: { className?: string }) {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Full-stack developer with a backend focus."
      className={`py-16 md:py-20 ${className}`}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="max-w-xl text-[1.0625rem] leading-relaxed text-ink-2">
              I'm a Computer Science & Artificial Intelligence undergraduate at Arya College of
              Engineering & IT, Jaipur, graduating in 2028. I build complete web applications using
              the MERN stack — frontend, backend, database, authentication, and APIs — and my
              stronger interest is in what happens on the server side: how data is structured, how
              requests are validated, and how systems hold up under real use.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-2">
              I practice DSA regularly in C++ to build algorithmic thinking and problem-solving
              patterns. I'm currently deepening my understanding of system design, scalable backend
              architecture, and DevOps/cloud concepts — the parts of engineering that sit between
              making something work and making it hold up.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {['Full-Stack Development', 'Backend Engineering', 'C++ / DSA', 'System Design'].map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-line-soft px-3.5 py-1.5 text-[0.875rem] text-ink-3"
                >
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-5" delay={0.05}>
          <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-base">
            {atAGlance.map((row) => (
              <div key={row.label} className="flex justify-between border-b border-line-soft py-3 first:border-t">
                <dt className="text-[0.8125rem] text-ink-3">{row.label}</dt>
                <dd className="text-[0.875rem] font-medium text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}