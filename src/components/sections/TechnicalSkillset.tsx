import { Reveal } from '../ui/Reveal'
import { TechChip } from '../ui/TechChip'
import type { TechKey } from '../../data/skills'

type SkillItem = { key?: TechKey; label: string }

const groups: { label: string; items: SkillItem[] }[] = [
  {
    label: 'Languages',
    items: [
      { key: 'cplusplus', label: 'C++' },
      { key: 'javascript', label: 'JavaScript' },
      { key: 'java', label: 'Java' },
      { key: 'sql', label: 'SQL' },
    ],
  },
  {
    label: 'Full-Stack Development',
    items: [
      { key: 'react', label: 'React' },
      { key: 'node', label: 'Node.js' },
      { key: 'express', label: 'Express.js' },
      { key: 'mongodb', label: 'MongoDB' },
      { key: 'jwt', label: 'JWT' },
      { key: 'rest', label: 'REST APIs' },
      { label: 'RBAC' },
    ],
  },
  {
    label: 'Backend & System Design',
    items: [
      { key: 'redis', label: 'Redis' },
      { label: 'Caching' },
      { label: 'Kafka' },
      { label: 'Rate Limiting' },
      { label: 'Database Design' },
    ],
  },
  {
    label: 'Development Tools',
    items: [
      { key: 'git', label: 'Git' },
      { key: 'github', label: 'GitHub' },
      { key: 'linux', label: 'Linux' },
      { key: 'docker', label: 'Docker' },
    ],
  },
]

/** The technical skillset grouped by role, shown on the About page. */
export function TechnicalSkillset({ className = '' }: { className?: string }) {
  return (
    <section id="technical-skillset" className={`relative scroll-mt-24 border-t border-line-soft/60 py-20 md:py-28 ${className}`}>
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="display-lg font-bold tracking-tight text-ink uppercase sm:text-3xl md:text-4xl">
              Technical <span className="text-accent">Skillset</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2">
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.04}>
              <div>
                <h3 className="eyebrow text-accent-soft">{group.label}</h3>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) =>
                    item.key ? (
                      <li key={item.label}>
                        <TechChip tech={item.key} label={item.label} size="sm" />
                      </li>
                    ) : (
                      <li
                        key={item.label}
                        className="rounded-full border border-line-soft bg-white/[0.02] px-4 py-2.5 text-[0.875rem] text-ink-2"
                      >
                        {item.label}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}