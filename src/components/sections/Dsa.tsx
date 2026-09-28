import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { dsaTopics } from '../../data/dsa'

/**
 * Problem Solving. One dedicated block: concise topic list and a single
 * repository CTA. No fabricated counts, no repeated keyword cards.
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
        <ul className="flex flex-wrap gap-2">
          {dsaTopics.map((topic) => (
            <li key={topic} className="rounded-full border border-line bg-raised px-4 py-1.5 text-[0.875rem] text-ink-2">
              {topic}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10">
          <a
            href="https://github.com/kaurmoni0013/dsa-cpp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-6 py-3 text-[0.9375rem] font-medium text-ink transition-colors duration-200 hover:border-accent/50 hover:bg-white/[0.06]"
          >
            View dsa-cpp repository
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </Reveal>
    </Section>
  )
}