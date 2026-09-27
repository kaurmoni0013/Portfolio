import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, FileText } from 'lucide-react'
import { certificates, type Credential } from '../../data/certificates'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

const toneStyles: Record<Credential['tone'], string> = {
  elite: 'border-teal/40 text-teal bg-teal/10',
  silver: 'border-accent/40 text-accent bg-accent/10',
  completed: 'border-ink-4/50 text-ink-2 bg-white/[0.05]',
  participation: 'border-violet/40 text-violet bg-violet/10',
}

function CertificateCard({ cert, index }: { cert: Credential; index: number }) {
  const reduce = useReducedMotion()

  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group/cert"
    >
      <a
        href={cert.file}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full focus-visible:outline-offset-4"
        aria-label={`View certificate: ${cert.issuer} — ${cert.title}`}
      >
        <div className="panel panel-hover relative flex h-full flex-col overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cert:-translate-y-1.5">
          {/* plate */}
          <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-line-soft bg-base">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(91,140,255,0.16),transparent_64%)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-4 rounded-lg border border-line-soft/70 sm:inset-5"
            />

            {cert.logo ? (
              <img
                src={cert.logo}
                alt=""
                width={160}
                height={160}
                loading="lazy"
                decoding="async"
                className="relative size-14 object-contain opacity-55 grayscale transition-[opacity,filter,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cert:scale-110 group-hover/cert:opacity-90 group-hover/cert:grayscale-0 sm:size-16"
              />
            ) : (
              <FileText className="relative size-7 text-ink-4" strokeWidth={1.3} aria-hidden="true" />
            )}

            {cert.credential ? (
              <span
                className={`absolute top-3.5 right-3.5 rounded-full border px-2.5 py-1 font-mono text-[0.5625rem] tracking-[0.16em] uppercase ${toneStyles[cert.tone]}`}
              >
                {cert.credential}
              </span>
            ) : null}

            <span className="absolute bottom-3.5 left-4 font-mono text-[0.5625rem] tracking-[0.18em] text-ink-4 uppercase">
              {cert.fileLabel}
            </span>
          </div>

          {/* meta */}
          <div className="flex flex-1 flex-col p-5">
            <span className="font-mono text-[0.5625rem] tracking-[0.2em] text-ink-4 uppercase">
              {cert.issuer}
            </span>
            <h3 className="mt-2 font-display text-[0.9375rem] leading-snug font-600 tracking-tight text-ink">
              {cert.title}
            </h3>
            <p className="mt-1.5 text-[0.75rem] text-ink-4">{cert.period}</p>

            <span className="mt-5 inline-flex items-center gap-1.5 self-start font-mono text-[0.625rem] tracking-[0.16em] text-ink-3 uppercase transition-colors duration-500 group-hover/cert:text-ink">
              View certificate
              <ArrowUpRight
                className="size-3 transition-transform duration-500 group-hover/cert:-translate-y-0.5 group-hover/cert:translate-x-0.5"
                strokeWidth={2}
              />
            </span>
          </div>
        </div>
      </a>
    </motion.li>
  )
}

export function Certificates() {
  return (
    <Section
      id="certificates"
      index="06"
      eyebrow="Certificates"
      title="Verified learning, not badges."
      lede="Four NPTEL courses and three hackathon certificates. Every card opens the original PDF."
      className="py-24 md:py-32"
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <CertificateCard key={cert.id} cert={cert} index={i} />
        ))}
      </ul>

      <Reveal>
        <p className="mt-10 max-w-2xl text-[0.875rem] leading-relaxed text-ink-3">
          NPTEL grades are shown exactly as issued: Programming in Modern C++ (Elite), Programming in
          Java and Fundamentals of Object Oriented Programming (Silver), and Data Structures and
          Algorithms Design (completed).
        </p>
      </Reveal>
    </Section>
  )
}
