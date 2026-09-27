import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

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
 'group/btn relative inline-flex items-center justify-center gap-2.5 rounded-full text-[0.9375rem] font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out'

const variants = {
 primary: 'bg-ink text-void px-6 py-3.5 hover:-translate-y-px hover:bg-white/90 active:translate-y-0',
 ghost: 'border border-line px-6 py-3.5 text-ink hover:bg-white/[0.04] hover:-translate-y-px active:translate-y-0',
 quiet: 'border border-line-soft px-5 py-2.5 text-ink-2 hover:-translate-y-px active:translate-y-0',
} as const

const isRemote = (href: string) => /^https?:/i.test(href)

/** A site-internal path, e.g. "/projects" — handled by the router, not the server. */
const isRoute = (href: string) => href.startsWith('/') && !href.startsWith('//')

/**
 * Plain anchors, router links and buttons. Hover is a one-pixel lift and a
 * colour change, both driven by CSS transitions — there is no pointer tracking
 * here, because measuring the element on every `pointermove` is the kind of
 * cost that shows up as lag on a laptop.
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
 const classes = `${base} ${variants[variant]} ${className}`

 const inner = (
 <>
 {icon ? (
 <span className="shrink-0 transition-transform duration-200 ease-out group-hover/btn:-translate-x-0.5">
 {icon}
 </span>
 ) : null}
 <span>{children}</span>
 {iconEnd ? (
 <span className="shrink-0 transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5">
 {iconEnd}
 </span>
 ) : null}
 </>
 )

 if (href !== undefined) {
 // Internal routes go through the router so navigation stays client-side.
 // They must never carry a download attribute — a page URL is not a file.
 if (isRoute(href)) {
 return (
 <Link to={href} className={classes} {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}>
 {inner}
 </Link>
 )
 }

 const remote = isRemote(href)
 const openNew = external ?? remote
 const willDownload = download ?? !remote

 return (
 <a
 href={href}
 className={classes}
 {...(openNew ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
 {...(willDownload ? { download: '' } : {})}
 {...(onClick ? { onClick } : {})}
 {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
 >
 {inner}
 </a>
 )
 }

 return (
 <button
 type={type}
 onClick={onClick}
 className={classes}
 {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
 >
 {inner}
 </button>
 )
}
