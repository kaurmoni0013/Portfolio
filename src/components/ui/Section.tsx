import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
 id?: string
 eyebrow: string
 title: ReactNode
 lede?: ReactNode
 className?: string
 children: ReactNode
 /** Renders the heading block full width instead of capped at 3 columns. */
 bare?: boolean
}

/**
 * Shared section frame: a label, a serif heading and an optional lede above a
 * fading rule. The old frame also carried a numbered monospace index
 * ("01", "02") — decorative, and part of the console-like look the redesign
 * is replacing, so it is gone rather than restyled.
 */
export function Section({ id, eyebrow, title, lede, className = '', children, bare = false }: SectionProps) {
 return (
 <section id={id} className={`relative scroll-mt-24 ${className}`}>
 <div className="shell">
 <Reveal>
 <header className={bare ? '' : 'max-w-3xl'}>
 <p className="eyebrow text-accent-soft">{eyebrow}</p>
 <h2 className="display-md mt-3 text-ink">{title}</h2> {lede ? <p className="body-lg mt-5 max-w-2xl">{lede}</p> : null}
 </header>
 </Reveal>

 <div className="mt-12 md:mt-14">{children}</div>
 </div>
 </section>
 )
}
