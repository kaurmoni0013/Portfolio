import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { dsaPath, dsaTopics } from '../../data/dsa'

/**
 * Problem Solving. Clean list of topics and the practice path.
 * No decorative arrows, no monospace counters, no animated cards.
 */
export function Dsa({ className = '' }: { className?: string }) {
  return (
    <Section
      id="dsa"
      eyebrow="Problem Solving"
      title="C++ / Data Structures & Algorithms"
      lede="Regular C++ practice to strengthen algorithmic thinking, data structure knowledge, pattern recognition, and complexity analysis."
      className={`py-16 md:py-20 ${className}`}
    >
      <Reveal>
        <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {dsaPath.map((step) => (
            <li key={step.id} className="rounded-xl border border-line bg-raised px-5 py-5">
              <h3 className="display-sm mt-2 text-ink">{step.label}</h3>
              <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink-3">{step.note}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-8">
          <Reveal>
            <ul className="grid gap-2 sm:grid-cols-2">
              {dsaTopics.map((topic) => (
                <li key={topic.label} className="rounded-xl border border-line bg-raised px-5 py-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="display-sm text-ink">{topic.label}</h4>
                    <span className="text-[0.75rem] text-ink-4">{topic.files} files</span>
                  </div>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-3">{topic.blurb}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-4">
          <Reveal delay={0.05}>
            <a
              href="https://github.com/kaurmoni0013/dsa-cpp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.875rem] text-ink-3 transition-colors duration-150 hover:text-ink"
            >
              View dsa-cpp repository
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}