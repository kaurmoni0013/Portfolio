import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { certificates } from '../../data/certificates'

/**
 * Quiet certificate grid. Clean cards with a small lift on hover.
 * No colored badges, no radial gradients, no animated effects.
 */
export function Certificates({ className = '' }: { className?: string }) {
  return (
    <Section
      id="certificates"
      eyebrow="Certificates"
      title="Verified learning, not badges."
      lede="NPTEL courses and hackathon certificates. Every card opens the original PDF."
      className={`py-16 md:py-20 ${className}`}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <li key={cert.id}>
            <Reveal delay={i * 0.04}>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-xl border border-line bg-raised p-5 transition-colors duration-150 hover:border-ink-3"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-line-soft bg-base text-ink-3">
                    <span className="font-semibold text-[0.75rem]">{cert.issuer.slice(0, 3)}</span>
                  </div>
                  <div>
                    <h3 className="display-sm text-ink">{cert.title}</h3>
                    <p className="mt-1 text-[0.8125rem] text-ink-3">{cert.period}</p>
                    {cert.credential ? (
                      <span className="mt-2 inline-block rounded-full border border-line-soft px-2.5 py-0.5 text-[0.75rem] text-ink-3">
                        {cert.credential}
                      </span>
                    ) : null}
                  </div>
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <p className="mt-8 max-w-2xl text-[0.8125rem] leading-relaxed text-ink-4">
          NPTEL grades are shown exactly as issued: Programming in Modern C++ (Elite), Programming in
          Java and Fundamentals of Object Oriented Programming (Silver), and Data Structures and
          Algorithms Design (completed).
        </p>
      </Reveal>
    </Section>
  )
}