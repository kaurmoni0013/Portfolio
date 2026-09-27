import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { Flourish } from './Flourish'

type PageHeaderProps = {
 eyebrow: string
 title: ReactNode
 lede?: ReactNode
 children?: ReactNode
 /** Adds the drawn sprig under the heading. */
 signed?: boolean
}

/**
 * The masthead every inner page opens with. Replaces the old section frame's
 * numbered monospace index with a plain label, a serif title and the accent
 * rule — the numbering was part of the terminal look the design is moving away
 * from, and it carried no information.
 */
export function PageHeader({ eyebrow, title, lede, children, signed = false }: PageHeaderProps) {
 return (
 <header className="pt-[calc(var(--nav-h)+clamp(2.5rem,7vw,5.5rem))] pb-14 md:pb-20">
 <div className="shell">
 <Reveal>
 <p className="eyebrow text-accent-soft">{eyebrow}</p>
 <h1 className="display-lg mt-4 max-w-4xl text-ink">{title}</h1> <div className="rule-accent mt-7" />
 {lede ? <p className="body-lg mt-7 max-w-2xl">{lede}</p> : null}
 {children ? <div className="mt-9">{children}</div> : null}
 {signed ? <Flourish className="mt-9 h-8 w-24 text-ink-4" /> : null}
 </Reveal>
 </div>
 </header>
 )
}
