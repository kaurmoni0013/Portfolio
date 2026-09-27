import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  index: string
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
  className?: string
  children: ReactNode
  /** Renders the heading block flush to the left edge (used by the hero-adjacent bands). */
  bare?: boolean
}

/**
 * Shared section frame: a mono index, an eyebrow, a display heading and an
 * optional lede, separated from the content by a fading hairline.
 */
export function Section({ id, index, eyebrow, title, lede, className = '', children, bare = false }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-24 ${className}`}>
      <div className="shell">
        <Reveal>
          <header className={bare ? '' : 'max-w-3xl'}>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.6875rem] tracking-[0.24em] text-accent-soft">{index}</span>
              <span className="eyebrow">{eyebrow}</span>
            </div>
            <h2 className="display-lg mt-5 text-ink">{title}</h2>
            {lede ? <p className="body-lg mt-6 max-w-2xl">{lede}</p> : null}
          </header>
        </Reveal>

        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  )
}
