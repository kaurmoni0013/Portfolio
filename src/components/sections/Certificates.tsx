import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { certificates, nptelTone } from '../../data/certificates'

const badgeText = (tone: string, credential?: string) =>
  credential ?? (tone === 'participation' ? 'Participation' : nptelTone[tone as keyof typeof nptelTone] ?? 'Completed')

/** Standardized certificate card. The image container ratio, card height,
 *  padding, title and metadata positions, badge and CTA are identical on every
 *  card; only the badge text differs.
 */
export function Certificates({ className = '' }: { className?: string }) {
  return (
    <section id="certificates" className={`relative scroll-mt-24 border-t border-line-soft/60 py-20 md:py-28 ${className}`}>
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="display-lg font-bold tracking-tight text-ink uppercase sm:text-3xl md:text-4xl">
              Verified <span className="text-accent">Certificates</span>
            </h2>
            <p className="mt-4 text-[1.0625rem] text-ink-3">
              NPTEL courses and hackathon certificates, with the grade as issued. Every card opens the original PDF.
            </p>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <li key={cert.id} className="flex items-stretch">
            <Reveal delay={i * 0.04} className="h-full w-full">
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-raised transition-colors duration-200 hover:border-accent/60"
              >
                {/* Consistent image preview — fixed height, contain, no stretch */}
                <div className="flex h-32 w-full items-center justify-center border-b border-line-soft bg-base p-4">
                  {cert.logo ? (
                    <img
                      src={cert.logo}
                      alt=""
                      width={240}
                      height={180}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-[0.8125rem] text-ink-4">{cert.issuer}</span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="display-sm text-ink">{cert.title}</h3>
                  <p className="mt-1 text-[0.75rem] text-ink-3">{cert.period}</p>

                  {/* Same badge component on every card; text may differ */}
                  <span className="mt-3 inline-flex w-fit items-center rounded-full border border-line-soft bg-base px-2.5 py-0.5 text-[0.75rem] font-medium text-ink-2">
                    {badgeText(cert.tone, cert.credential)}
                  </span>

                  {/* Visible, explicit CTA */}
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.875rem] font-medium text-accent-soft">
                    View Certificate
                    <ArrowUpRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
      </div>
    </section>
  )
}