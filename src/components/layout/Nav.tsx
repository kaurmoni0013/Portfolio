import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navSections, profile, socials } from '../../data/profile'
import { scrollToId } from '../../lib/scroll'
import { useScrollSpy } from '../../lib/useScrollSpy'
import { useLockBody } from '../../lib/useLockBody'
import { useFocusTrap } from '../../lib/useFocusTrap'
import { SocialIcon } from '../ui/SocialIcon'

const sectionIds = navSections.map((s) => s.id)

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#home"
      onClick={(e) => {
        e.preventDefault()
        onClick?.()
        scrollToId('home')
      }}
      className="group flex items-center gap-3"
      aria-label={`${profile.name} — back to top`}
      data-cursor="link"
    >
      <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl border border-line bg-raised">
        <span className="font-display text-[0.8125rem] font-700 tracking-tight text-ink">MK</span>
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(91,140,255,0.35),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <span className="hidden font-display text-[0.9375rem] font-600 tracking-tight sm:block">
        Moni Kaur
      </span>
    </a>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(sectionIds)
  const reduce = useReducedMotion()
  const menuRef = useRef<HTMLElement>(null)
  useLockBody(open)
  useFocusTrap(open, menuRef, () => setOpen(false))

  useEffect(() => {
    let raf = 0
    const read = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, y / max) : 0)
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        read()
        raf = 0
      })
    }
    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
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

  const go = (id: string) => {
    setOpen(false)
    // let the drawer finish closing before scrolling
    window.setTimeout(() => scrollToId(id), reduce ? 0 : 180)
  }

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: reduce ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled || open
              ? 'border-b border-line-soft bg-void/72 backdrop-blur-xl backdrop-saturate-150'
              : 'border-b border-transparent bg-transparent'
          }`}
        >
          <div className="shell flex h-[var(--nav-h)] items-center justify-between gap-6">
            <Wordmark onClick={() => setOpen(false)} />

            <nav aria-label="Section navigation" className="hidden lg:block">
              <ul className="flex items-center gap-0.5">
                {navSections.map((s) => {
                  const isActive = active === s.id
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          go(s.id)
                        }}
                        aria-current={isActive ? 'true' : undefined}
                        className={`relative block rounded-full px-3.5 py-2 text-[0.8125rem] font-medium transition-colors duration-400 ${
                          isActive ? 'text-ink' : 'text-ink-3 hover:text-ink'
                        }`}
                        data-cursor="link"
                      >
                        {isActive ? (
                          <motion.span
                            layoutId="nav-active"
                            className="absolute inset-0 -z-10 rounded-full border border-line bg-white/[0.055]"
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          />
                        ) : null}
                        {s.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden size-9 place-items-center rounded-full border border-line text-ink-2 transition-colors duration-400 hover:border-ink-3 hover:text-ink sm:grid"
                aria-label="GitHub profile"
                data-cursor="link"
              >
                <SocialIcon id="github" className="size-4" />
              </a>
              <a
                href={socials[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden size-9 place-items-center rounded-full border border-line text-ink-2 transition-colors duration-400 hover:border-ink-3 hover:text-ink sm:grid"
                aria-label="LinkedIn profile"
                data-cursor="link"
              >
                <SocialIcon id="linkedin" className="size-4" />
              </a>

              <a
                href={`${profile.resume.href}`}
                download
                className="group hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[0.8125rem] font-medium text-void transition-colors duration-500 hover:bg-white md:inline-flex"
                data-cursor="link"
              >
                Résumé
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
                data-cursor="link"
              >
                {open ? <X className="size-4.5" strokeWidth={1.7} /> : <Menu className="size-4.5" strokeWidth={1.7} />}
              </button>
            </div>
          </div>

          {/* reading progress */}
          <div
            aria-hidden="true"
            className="h-px origin-left bg-gradient-to-r from-accent via-violet to-teal"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <button
              type="button"
              className="absolute inset-0 bg-void/80 backdrop-blur-md"
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
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 top-[var(--nav-h)] border-b border-line-soft bg-base/95 px-[var(--gutter)] pt-6 pb-10 backdrop-blur-xl"
            >
              <ul className="divide-y divide-[var(--color-line-soft)]">
                {navSections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        go(s.id)
                      }}
                      className="flex items-center justify-between py-3.5"
                      data-cursor="link"
                    >
                      <span
                        className={`font-display text-xl font-600 tracking-tight ${
                          active === s.id ? 'text-ink' : 'text-ink-2'
                        }`}
                      >
                        {s.label}
                      </span>
                      <span className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-4">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-2.5">
                <a
                  href={profile.resume.href}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-void"
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
