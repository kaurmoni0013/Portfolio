import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Folder, Home, Mail, Menu, User, X } from 'lucide-react'
import { profile, routes, socials } from '../../data/profile'
import { useLockBody } from '../../lib/useLockBody'
import { useFocusTrap } from '../../lib/useFocusTrap'
import { SocialIcon } from '../ui/SocialIcon'

const navRoutes = routes.filter((r) => r.nav)

const navIcons = {
  home: Home,
  user: User,
  folder: Folder,
  mail: Mail,
} as const

function NavIcon({ icon, className }: { icon: (typeof navRoutes)[number]['icon']; className?: string }) {
  const Icon = navIcons[icon]
  return <Icon className={className} strokeWidth={1.8} aria-hidden="true" />
}

function Wordmark() {
 return (
 <NavLink
 to="/"
 className="group flex items-center gap-3"
 aria-label={`${profile.name} — home`}
 >
 <span className="relative grid size-10 place-items-center overflow-hidden rounded-full border border-line bg-raised">
 <span className="font-display text-[0.875rem] font-500 tracking-tight text-ink">MK</span>
 <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(199,122,240,0.3),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
 </span>
 <span className="font-display text-[1.0625rem] font-500 tracking-tight">Moni Kaur</span>
 </NavLink>
 )
}

function navClass(isActive: boolean) {
 return `relative flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.9375rem] transition-colors duration-300 ${
 isActive ? 'text-ink' : 'text-ink-3 '
 }`
}

export function SiteHeader() {
 const [scrolled, setScrolled] = useState(false)
 const [open, setOpen] = useState(false)
 const reduce = useReducedMotion()
 const menuRef = useRef<HTMLElement>(null)
 useLockBody(open)
 useFocusTrap(open, menuRef, () => setOpen(false))

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 12)
 onScroll()
 window.addEventListener('scroll', onScroll, { passive: true })
 return () => window.removeEventListener('scroll', onScroll)
 }, [])

 useEffect(() => {
 // The drawer owns Escape while it is open, via useFocusTrap.
 if (open) return
 const onKey = (e: KeyboardEvent) => {
 if (e.key === 'Escape') setOpen(false)
 }
 window.addEventListener('keydown', onKey)
 return () => window.removeEventListener('keydown', onKey)
 }, [open])

 return (
 <>
 <header
 className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
 scrolled || open
 ? // A solid fill rather than backdrop-blur: a full-width blur
 // would re-sample everything behind it on every scroll frame.
 'border-b border-line-soft bg-void/90 shadow-[0_8px_24px_rgba(5,2,12,0.22)]'
 : 'border-b border-transparent bg-transparent'
 }`}
 >
 <div className="shell flex h-[var(--nav-h)] items-center justify-between gap-6">
 <Wordmark />

 <nav aria-label="Main" className="hidden lg:block">
 <ul className="flex items-center gap-1">
 {navRoutes.map((r) => (
 <li key={r.to}>
 <NavLink to={r.to} end={r.to === '/'} className={({ isActive }) => navClass(isActive)}>
 {({ isActive }) => (
 <>
 {isActive ? (
 <motion.span
 layoutId="nav-active"
 className="absolute inset-0 -z-10 rounded-full border border-line bg-white/[0.06]"
 transition={{ type: 'spring', stiffness: 380, damping: 32 }}
 />
 ) : null}
 <NavIcon icon={r.icon} className="size-4" />
 {r.label}
 </>
 )}
 </NavLink>
 </li>
 ))}
 </ul>
 </nav>

 <div className="flex items-center gap-2">
 <a
 href={socials[0].href}
 target="_blank"
 rel="noopener noreferrer"
 className="hidden size-10 place-items-center rounded-full border border-line text-ink-2 transition-colors duration-300 hover:border-accent/50 hover:text-accent sm:grid"
 aria-label="GitHub profile"
 >
 <SocialIcon id="github" className="size-4" />
 </a>
 <a
 href={socials[1].href}
 target="_blank"
 rel="noopener noreferrer"
 className="hidden size-10 place-items-center rounded-full border border-line text-ink-2 transition-colors duration-300 hover:border-accent/50 hover:text-accent sm:grid"
 aria-label="LinkedIn profile"
 >
 <SocialIcon id="linkedin" className="size-4" />
 </a>

 <a
 href={profile.resume.href}
 download
 className="group hidden items-center gap-2 rounded-full border border-line px-4 py-2.5 text-[0.875rem] font-medium text-ink transition-colors duration-300 hover:border-accent/50 hover:bg-white/[0.04] md:inline-flex"
 >
 Résumé
 <ArrowUpRight
 className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
 strokeWidth={2}
 />
 </a>

 <button
 type="button"
 onClick={() => setOpen((v) => !v)}
 className="grid size-10 place-items-center rounded-full border border-line text-ink lg:hidden"
 aria-expanded={open}
 aria-controls="mobile-menu"
 aria-label={open ? 'Close menu' : 'Open menu'}
 >
 {open ? <X className="size-4.5" strokeWidth={1.7} /> : <Menu className="size-4.5" strokeWidth={1.7} />}
 </button>
 </div>
 </div>
 </header>

 <AnimatePresence>
 {open ? (
 <motion.div
 key="menu"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.25 }}
 className="fixed inset-0 z-40 lg:hidden"
 >
 <button
 type="button"
 className="absolute inset-0 bg-black/60"
 onClick={() => setOpen(false)}
 aria-label="Close menu"
 tabIndex={-1}
 />

 <motion.nav
 id="mobile-menu"
 ref={menuRef}
 role="dialog"
 aria-modal="true"
 aria-label="Site menu"
 initial={reduce ? { opacity: 0 } : { y: -18, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 exit={reduce ? { opacity: 0 } : { y: -12, opacity: 0 }}
 transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
 className="absolute inset-x-0 top-[var(--nav-h)] border-b border-line-soft bg-base px-[var(--gutter)] pt-6 pb-10"
 >
 <ul className="divide-y divide-[var(--color-line-soft)]">
 {navRoutes.map((r) => (
 <li key={r.to}>
<NavLink
  to={r.to}
  end={r.to === '/'}
  onClick={() => setOpen(false)}
  className={({ isActive }) =>
  `flex items-center justify-between py-4 font-display text-2xl font-400 ${
  isActive ? 'text-ink' : 'text-ink-2'
  }`
  }
  >
  <span className="flex items-center gap-3">
  <NavIcon icon={r.icon} className="size-5 text-ink-4" />
  {r.label}
  </span>
  </NavLink>
 </li>
 ))}
 </ul>

 <div className="mt-8 flex flex-wrap items-center gap-2.5">
 <a
 href={profile.resume.href}
 download
 className="inline-flex items-center gap-2 rounded-full bg-accent-deep px-5 py-3 text-sm font-medium text-white"
 >
 Download Résumé
 </a>
 <a
 href={socials[0].href}
 target="_blank"
 rel="noopener noreferrer"
 className="grid size-11 place-items-center rounded-full border border-line text-ink-2"
 aria-label="GitHub profile"
 >
 <SocialIcon id="github" className="size-4" />
 </a>
 <a
 href={socials[1].href}
 target="_blank"
 rel="noopener noreferrer"
 className="grid size-11 place-items-center rounded-full border border-line text-ink-2"
 aria-label="LinkedIn profile"
 >
 <SocialIcon id="linkedin" className="size-4" />
 </a>
 </div>
 </motion.nav>
 </motion.div>
 ) : null}
 </AnimatePresence>
 </>
 )
}
