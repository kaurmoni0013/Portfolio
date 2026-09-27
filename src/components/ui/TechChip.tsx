import { getTechAccent } from '../../lib/tech'
import { TechIcon } from './TechIcon'
import type { TechKey } from '../../data/skills'

type Props = {
 tech: TechKey
 label: string
 size?: 'sm' | 'md'
 className?: string
}

const sizes = {
 sm: { wrap: 'size-8 rounded-lg', icon: 'size-4' },
 md: { wrap: 'size-10 rounded-xl', icon: 'size-5' },
} as const

/** A technology chip: monogram tile plus label, tinted with its brand hue. */
export function TechChip({ tech, label, size = 'sm', className = '' }: Props) {
 const accent = getTechAccent(tech)
 const s = sizes[size]

 return (
 <span
 className={`group/chip inline-flex items-center gap-2.5 rounded-full border border-line-soft bg-white/[0.02] py-1.5 pr-4 pl-1.5 transition-colors duration-500 hover:bg-white/[0.05] ${className}`}
 style={{ ['--chip-accent' as string]: accent }}
 >
 <span
 className={`${s.wrap} grid place-items-center text-ink-2 transition-[color,transform,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/chip:-translate-y-px group-hover/chip:scale-110 group-hover/chip:text-[var(--chip-accent)]`}
 >
 <TechIcon tech={tech} className={s.icon} title={label} />
 </span>
 <span className="text-[0.8125rem] font-medium text-ink-2 transition-colors duration-500 ">
 {label}
 </span>
 </span>
 )
}
