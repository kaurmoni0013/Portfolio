import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { skillGroups } from '../../data/skills'
import { getTechAccent } from '../../lib/tech'
import { TechIcon } from '../ui/TechIcon'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Skills() {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()
  const group = skillGroups[active]

  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Tech stack"
      title="What I reach for, and why."
      lede="Grouped by the role each tool plays. Hover any tile for the one-line reason it's in my stack — there are no progress bars here, because a percentage tells you nothing."
      className="py-24 md:py-32"
    >
      {/* category index */}
      <Reveal>
        <div
          role="tablist"
          aria-label="Technology categories"
          className="-mx-[var(--gutter)] flex snap-x snap-mandatory gap-2 overflow-x-auto px-[var(--gutter)] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {skillGroups.map((g, i) => {
            const isActive = i === active
            return (
              <button
                key={g.id}
                role="tab"
                id={`tab-${g.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${g.id}`}
                onClick={() => setActive(i)}
                className={`relative shrink-0 snap-start rounded-full border px-4 py-2.5 text-[0.8125rem] font-medium transition-colors duration-500 ${
                  isActive
                    ? 'border-line bg-white/[0.06] text-ink'
                    : 'border-line-soft text-ink-3 hover:border-line hover:text-ink-2'
                }`}
              >
                <span className="font-mono text-[0.625rem] tracking-[0.16em] text-ink-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="ml-2.5">{g.label}</span>
              </button>
            )
          })}
        </div>
      </Reveal>

      {/* panel */}
      <div className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={group.id}
            id={`panel-${group.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${group.id}`}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-line-soft pt-8"
          >
            <p className="font-mono text-[0.6875rem] tracking-[0.18em] text-ink-4 uppercase">
              {group.caption}
            </p>

            <ul className="mt-8 grid gap-px overflow-hidden rounded-[1.25rem] border border-line bg-line-soft sm:grid-cols-2 lg:grid-cols-3">
              {group.skills.map((skill) => (
                <li key={`${group.id}-${skill.key}-${skill.name}`} className="group relative">
                  <div
                    className="relative h-full overflow-hidden bg-raised px-6 py-7 transition-colors duration-500 group-hover:bg-[#12161e]"
                    style={{ ['--accent' as string]: getTechAccent(skill.key) }}
                  >
                    {/* brand-tinted wash on hover */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      style={{
                        background:
                          'radial-gradient(120% 90% at 12% 0%, color-mix(in oklab, var(--accent) 16%, transparent), transparent 62%)',
                      }}
                    />

                    <div className="relative flex items-start gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line-soft bg-base text-ink-2 transition-[transform,color,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:border-line group-hover:text-[var(--accent)]">
                        <TechIcon
                          tech={skill.key}
                          className="size-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[-6deg] group-hover:scale-110"
                          title={skill.name}
                        />
                      </span>

                      <div className="min-w-0">
                        <h3 className="font-display text-[0.9375rem] font-600 tracking-tight text-ink">
                          {skill.name}
                        </h3>
                        <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink-3">
                          {skill.note}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* running list of every technology, for scanability */}
      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2.5">
          {skillGroups.flatMap((g) =>
            g.skills.map((s) => (
              <span
                key={`${g.id}-${s.key}-${s.name}`}
                className="font-mono text-[0.625rem] tracking-[0.14em] text-ink-4 uppercase"
              >
                {s.name}
              </span>
            )),
          )}
        </div>
      </Reveal>
    </Section>
  )
}
