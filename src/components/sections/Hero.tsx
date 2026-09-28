import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { profile, socials } from '../../data/profile'
import { Button } from '../ui/Button'
import { SocialIcon } from '../ui/SocialIcon'

const rise = (i: number) => ({
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] as const } },
})

const roles = [
  'Full-Stack Developer',
  'MERN Stack Developer',
  'Backend Engineer',
  'C++ / DSA Practitioner',
  'System Design Learner',
]

function CyclingText() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2400)
    return () => clearInterval(id)
  }, [reduce])

  if (reduce) {
    return (
      <span className="text-accent-soft">
        {roles[0]}
      </span>
    )
  }

  return (
    <span className="relative inline-block overflow-hidden align-bottom" style={{ minWidth: '18ch' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 22, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -22, opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="block text-accent-soft"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative flex min-h-[calc(100svh-var(--nav-h))] items-center overflow-hidden pt-[calc(var(--nav-h)+2rem)] pb-16 md:pb-20">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          <motion.div
            className="lg:col-span-7"
            initial={reduce ? false : 'hidden'}
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.08 } } }}
          >
            {/* Greeting */}
            <motion.p variants={rise(0)} className="font-display text-[1.5rem] font-400 tracking-tight text-ink-2 md:text-[1.875rem]">
              Hi There! <span className="wave" aria-hidden="true">👋🏻</span>
            </motion.p>

            {/* Name */}
            <motion.h1 variants={rise(1)} className="display-xl mt-4 text-ink uppercase tracking-tight">
              I&rsquo;m {profile.name}
            </motion.h1>

            {/* Cycling roles */}
            <motion.p variants={rise(2)} className="body-lg mt-5 text-ink-2">
              <CyclingText />
            </motion.p>

            {/* Buttons */}
            <motion.div variants={rise(3)} className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/projects" variant="primary" iconEnd={<ArrowRight className="size-4" strokeWidth={2} />}>
                View Projects
              </Button>
              <Button href={profile.resume.href} variant="ghost" download iconEnd={<ArrowUpRight className="size-4" strokeWidth={2} />}>
                Resume
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.ul variants={rise(4)} className="mt-9 flex flex-wrap items-center gap-3">
              {socials.slice(0, 2).map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-10 place-items-center rounded-full border border-line-soft text-ink-3 transition-colors duration-150 hover:border-ink-3 hover:text-ink"
                    aria-label={s.label}
                  >
                    <SocialIcon id={s.id} className="size-4" />
                  </a>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.figure
            className="relative lg:col-span-5"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: reduce ? 0 : 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="overflow-hidden rounded-full border border-line bg-raised aspect-square">
              <img
                src="moni_avtar.png"
                alt={`${profile.name}, Computer Science & Artificial Intelligence undergraduate in Jaipur`}
                width={500}
                height={500}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}