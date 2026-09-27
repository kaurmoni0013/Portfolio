import { motion, useReducedMotion } from 'framer-motion'
import { coursework, education, journey } from '../../data/journey'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

/**
 * The development journey as a single vertical spine. The line draws itself
 * as the block scrolls into view, and each node lights up in turn.
 */
export function Journey() {
  const reduce = useReducedMotion()

  return (
    <Section
      id="journey"
      index="05"
      eyebrow="Journey"
      title="How I got here, in order."
      lede="Nothing here was planned as a five-year strategy. It is roughly the order things actually happened."
      className="py-24 md:py-32"
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* --------------------------------------------------------- timeline */}
        <div className="lg:col-span-7">
          <div className="relative pl-8 sm:pl-10">
            {/* spine */}
            <span
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-[0.3125rem] w-px bg-line-soft sm:left-[0.4375rem]"
            >
              <motion.span
                className="block w-px origin-top bg-gradient-to-b from-accent via-violet to-teal"
                initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>

            <ol className="space-y-10">
              {journey.map((item, i) => (
                <li key={item.id} className="relative">
                  <motion.span
                    aria-hidden="true"
                    className="absolute top-1.5 -left-8 grid size-2.5 place-items-center rounded-full border border-line bg-base sm:-left-10"
                    initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-12% 0px' }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="size-1 rounded-full bg-accent" />
                  </motion.span>

                  <Reveal delay={i * 0.05}>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                      <span className="font-mono text-[0.625rem] tracking-[0.2em] text-accent-soft uppercase">
                        {item.period}
                      </span>
                      <h3 className="font-display text-[1.0625rem] font-600 tracking-tight text-ink">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-[0.8125rem] text-ink-4">{item.place}</p>
                    <p className="mt-3 max-w-xl text-[0.875rem] leading-relaxed text-ink-3">
                      {item.body}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* -------------------------------------------------------- education */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="panel p-7">
              <span className="eyebrow">Education</span>
              {education.map((e) => (
                <div key={e.degree} className="mt-5">
                  <h3 className="font-display text-[1.0625rem] leading-snug font-600 tracking-tight text-ink">
                    {e.degree}
                  </h3>
                  <p className="mt-2 text-[0.875rem] text-ink-2">{e.school}</p>
                  <p className="mt-1 font-mono text-[0.625rem] tracking-[0.18em] text-ink-4 uppercase">
                    {e.period}
                  </p>
                  <p className="mt-4 text-[0.8125rem] leading-relaxed text-ink-3">{e.detail}</p>
                </div>
              ))}

              <div className="mt-7 border-t border-line-soft pt-6">
                <h4 className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-4 uppercase">
                  Coursework
                </h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {coursework.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-line-soft px-3 py-1.5 text-[0.75rem] text-ink-3 transition-colors duration-500 hover:border-line hover:text-ink-2"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
