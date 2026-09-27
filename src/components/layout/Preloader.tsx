import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { profile } from '../../data/profile'

/**
 * A short opening curtain: the monogram draws in, the rule fills, then the
 * panels lift away. Skipped entirely when the visitor prefers reduced
 * motion, since the hero already carries the page-load reveal.
 */
export function Preloader({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(!reduce)

  useEffect(() => {
    if (!visible) {
      onDone()
      return
    }
    const id = window.setTimeout(() => {
      setVisible(false)
      onDone()
    }, 1500)
    return () => window.clearTimeout(id)
  }, [visible, onDone])

  if (reduce) return null

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-90 flex flex-col items-center justify-center overflow-hidden bg-void"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative grid size-16 place-items-center overflow-hidden rounded-2xl border border-line">
              <motion.span
                className="absolute inset-y-0 left-0 bg-[linear-gradient(90deg,transparent,rgba(91,140,255,0.35),transparent)]"
                initial={{ x: '-110%' }}
                animate={{ x: '110%' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
              <span className="font-display text-lg font-700 tracking-tight text-ink">
                {profile.initials}
              </span>
            </div>

            <span className="mt-6 font-mono text-[0.625rem] tracking-[0.34em] text-ink-3 uppercase">
              {profile.name}
            </span>
          </motion.div>

          <div className="absolute inset-x-0 bottom-0 h-px bg-line-soft">
            <motion.div
              className="h-px origin-left bg-gradient-to-r from-accent to-teal"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
