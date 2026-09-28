import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { currentlyExploring } from '../../data/journey'

/**
 * What I'm currently learning — shows growth direction without overstating expertise.
 */
export function CurrentlyExploring({ className = '' }: { className?: string }) {
  return (
    <Section
      id="learning"
      eyebrow="Currently Exploring"
      title="What I'm deepening right now."
      lede="These are areas I'm actively studying to grow as a backend engineer."
      className={`py-16 md:py-20 ${className}`}
    >
      <ul className="grid gap-5 md:grid-cols-3">
        {currentlyExploring.map((item, i) => (
          <li key={item.id}>
            <Reveal delay={i * 0.06}>
              <div className="rounded-xl border border-line bg-raised p-6 transition-colors duration-150 hover:border-ink-3">
                <h3 className="display-sm text-ink">{item.title}</h3>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-3">{item.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}