import { useRef, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useFinePointer } from '../../lib/useMediaQuery'

type Common = {
  children: ReactNode
  className?: string
  icon?: ReactNode
  iconEnd?: ReactNode
  variant?: 'primary' | 'ghost' | 'quiet'
  onClick?: () => void
  ariaLabel?: string
}

type ButtonAsLink = Common & {
  href: string
  /** Force or suppress opening in a new tab. Defaults to true for http(s). */
  external?: boolean
  /** Force or suppress the download attribute. Defaults to true for local files. */
  download?: boolean
  type?: never
}

type ButtonAsButton = Common & {
  href?: undefined
  external?: undefined
  download?: undefined
  type?: 'button' | 'submit'
}

type Props = ButtonAsLink | ButtonAsButton

const base =
  'group/btn relative inline-flex items-center justify-center gap-2.5 rounded-full text-[0.9375rem] font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]'

const variants = {
  primary: 'bg-ink text-void px-6 py-3.5 hover:bg-white shadow-[0_10px_30px_-12px_rgba(255,255,255,0.35)]',
  ghost: 'border border-line px-6 py-3.5 text-ink hover:border-ink-3 hover:bg-white/[0.04]',
  quiet: 'border border-line-soft px-5 py-2.5 text-ink-2 hover:text-ink hover:border-line',
} as const

const isRemote = (href: string) => /^https?:/i.test(href)

/**
 * Buttons with a restrained magnetic pull on precise pointers. The offset
 * is capped at a few pixels so the interaction reads as responsiveness
 * rather than as a toy.
 */
export function Button({
  children,
  className = '',
  icon,
  iconEnd,
  href,
  variant = 'primary',
  external,
  download,
  onClick,
  ariaLabel,
  type = 'button',
}: Props) {
  const fine = useFinePointer()
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)

  const magnetic = (e: React.PointerEvent) => {
    if (!fine || reduce) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height
    el.style.transform = `translate3d(${dx * 8}px, ${dy * 5}px, 0)`
  }

  const release = () => {
    const el = ref.current
    if (el) el.style.transform = 'translate3d(0,0,0)'
  }

  const classes = `${base} ${variants[variant]} ${className}`

  const inner = (
    <>
      {icon ? (
        <span className="shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-x-0.5">
          {icon}
        </span>
      ) : null}
      <span>{children}</span>
      {iconEnd ? (
        <span className="shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-0.5">
          {iconEnd}
        </span>
      ) : null}
    </>
  )

  const spring = { type: 'spring' as const, stiffness: 260, damping: 22, mass: 0.4 }
  const pointer = { onPointerMove: magnetic, onPointerLeave: release, onBlur: release }

  if (href !== undefined) {
    const remote = isRemote(href)
    const openNew = external ?? remote
    const willDownload = download ?? !remote

    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        transition={spring}
        {...(openNew ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...(willDownload ? { download: '' } : {})}
        {...(onClick ? { onClick } : {})}
        {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
        data-cursor="link"
        {...pointer}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      className={classes}
      transition={spring}
      {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
      data-cursor="link"
      {...pointer}
    >
      {inner}
    </motion.button>
  )
}
