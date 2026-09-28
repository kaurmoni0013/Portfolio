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
      title="A CS & AI undergraduate who actually ships the backend too."
      className={`py-16 md:py-20 ${className}`}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="max-w-xl text-[1.0625rem] leading-relaxed text-ink-2">
              I'm a Computer Science & Artificial Intelligence undergraduate
              graduating in 2028. I build full-stack applications with a backend-first approach, and I care
              most about the parts of a product that can't be faked: concurrent
              writes, authentication that fails closed, and cost control when a third-party
              API sits in the request path.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-2">
              I also regularly practice DSA in C++ to strengthen problem-solving
              and algorithmic thinking. I am currently expanding my knowledge of
              system design, backend architecture, and DevOps/cloud concepts.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {['Backend Development', 'System Design', 'C++ / DSA'].map((f) => (
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