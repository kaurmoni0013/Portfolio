import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { currentlyExploring } from '../../data/journey'

const layoutStyles = [
  {
    colSpan: 'lg:col-span-7',
    padding: 'p-7 md:p-8',
    bg: 'bg-raised',
    titleSize: 'text-[1.25rem] font-medium',
    badge: 'Primary Focus',
  },
  {
    colSpan: 'lg:col-span-5',
    padding: 'p-6 md:p-7',
    bg: 'bg-raised/80',
    titleSize: 'text-[1.125rem] font-medium',
    badge: 'Infrastructure',
  },
  {
    colSpan: 'lg:col-span-12',
    padding: 'p-6 md:p-8',
    bg: 'bg-raised/60',
    titleSize: 'text-[1.1875rem] font-medium',
    badge: 'Backend Systems',
  },
]

/**
 * What I'm currently learning — rendered in an asymmetric layout with varied card sizes.
 */
export function CurrentlyExploring({ className = '' }: { className?: string }) {
  return (
    <Section
      id="learning"
      eyebrow="Currently Exploring"
      title="What I'm deepening right now."
      lede="These are areas I'm actively studying to grow as a full-stack & backend engineer."
      className={`py-16 md:py-20 ${className}`}
    >
      <div className="grid gap-5 lg:grid-cols-12">
        {currentlyExploring.map((item, i) => {
          const style = layoutStyles[i % layoutStyles.length]
          return (
            <div key={item.id} className={`${style.colSpan}`}>
              <Reveal delay={i * 0.08}>
                <div
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line ${style.bg} ${style.padding} transition-all duration-300 hover:border-accent/40 hover:shadow-lg`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-line-soft bg-base px-3 py-1 text-[0.75rem] text-accent-soft">
                        {style.badge}
                      </span>
                    </div>
                    <h3 className={`mt-4 ${style.titleSize} text-ink group-hover:text-accent-soft transition-colors duration-200`}>
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          )
        })}
      </div>
    </Section>
  )
}