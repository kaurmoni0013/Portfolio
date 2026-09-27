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
 * The single scroll-reveal primitive used site-wide. Motion is transform +
 * opacity only, and collapses to a plain fade when the visitor has asked
 * for reduced motion.
 */
export function Reveal({ children, className, delay = 0, y = 22, as = 'div', once = true }: RevealProps) {
  const reduce = useReducedMotion()
  const Comp = motion[as]

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y, filter: reduce ? 'none' : 'blur(6px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: reduce ? 0.2 : 0.85, delay: reduce ? 0 : delay, ease: [0.16, 1, 0.3, 1] },
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
