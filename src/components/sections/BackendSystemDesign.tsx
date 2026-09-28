import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

/**
 * Backend & System Design focus — shows concepts I've studied and have applied.
 * Distinguishes between what I've implemented and what I'm actively learning.
 */
export function BackendSystemDesign({ className = '' }: { className?: string }) {
  const implementedConcepts = [
    'Redis — rate limiting, token quotas, atomic reservations, locks',
    'Caching — strategy and invalidation in backend services',
    'Rate Limiting — sliding window, token bucket implementations',
    'JWT Authentication — session revocation, RBAC, bcrypt hashing',
    'MongoDB — schema design, compound/partial unique indexes',
    'REST API Design — resource modelling, status codes, error mapping',
    'Database Design — normalisation, transactions, ACID, indexing',
    'Concurrency — short-lived locks, idempotent retries, transactional writes',
  ]

  const learningConcepts = [
    'System Design — caching strategies, consistent hashing, Bloom filters',
    'Messaging — Kafka, pub/sub patterns, event-driven architecture',
    'Distributed Systems — consistency models, CAP trade-offs, scalability',
    'DevOps / Cloud — Docker, CI/CD pipelines, GitHub Actions',
    'Advanced Concurrency — lock-free patterns, actor models',
  ]

  return (
    <Section
      id="backend-system-design"
      eyebrow="Backend & System Design"
      title="Backend architecture & system design fundamentals."
      lede="Concepts I've implemented in projects and areas I'm actively deepening. The distinction matters."
      className={`py-16 md:py-20 ${className}`}
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <Reveal>
            <h3 className="display-sm text-ink">Implemented in Projects</h3>
            <ul className="mt-5 space-y-3">
              {implementedConcepts.map((item, i) => (
                <li key={item}>
                  <Reveal delay={i * 0.04}>
                    <div className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-ink-2">
                      <span className="size-1.5 shrink-0 mt-2 rounded-full bg-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div>
          <Reveal delay={0.1}>
            <h3 className="display-sm text-ink">Currently Deepening</h3>
            <p className="mt-3 text-[0.875rem] text-ink-4">
              These represent concepts I have studied and/or implemented in learning exercises. They do not imply production distributed-systems experience.
            </p>
            <ul className="mt-6 space-y-3">
              {learningConcepts.map((item, i) => (
                <li key={item}>
                  <Reveal delay={i * 0.04 + 0.1}>
                    <div className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-ink-3">
                      <span className="size-1.5 shrink-0 mt-2 rounded-full bg-ink-4" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}