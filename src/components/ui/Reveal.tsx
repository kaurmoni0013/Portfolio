import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'li' | 'span' | 'article' | 'section'
  once?: boolean
}

/**
 * The single scroll-reveal primitive used site-wide: a short lift and fade on
 * first entry, then it stops. Transform and opacity only — both are
 * compositor-friendly, so a reveal never triggers a layout or paint pass.
 * Collapses to a plain fade under reduced motion.
 */
export function Reveal({ children, className, delay = 0, y = 20, as = 'div', once = true }: RevealProps) {
  const reduce = useReducedMotion()
  const Comp = motion[as]

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.15 : 0.5, delay: reduce ? 0 : delay, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-12% 0px -8% 0px' }}
    >
      {children}
    </Comp>
  )
}
