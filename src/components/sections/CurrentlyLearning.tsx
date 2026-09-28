import { Reveal } from '../ui/Reveal'

const topics = ['System Design', 'Backend Architecture', 'DevOps', 'Cloud']

/** Currently-learning topics, shown on the About page. */
export function CurrentlyLearning({ className = '' }: { className?: string }) {
  return (
    <section id="currently-learning" className={`relative scroll-mt-24 border-t border-line-soft/60 py-20 md:py-28 ${className}`}>
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="display-lg font-bold tracking-tight text-ink uppercase sm:text-3xl md:text-4xl">
              Currently <span className="text-accent">Learning</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {topics.map((topic, i) => (
            <Reveal key={topic} delay={i * 0.05}>
              <div className="panel h-full p-6 text-center">
                <h3 className="display-sm font-600 text-ink">{topic}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}