import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { profile, socials } from '../../data/profile'
import { Button } from '../ui/Button'
import { SocialIcon } from '../ui/SocialIcon'

const rise = (i: number) => ({
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] as const } },
})

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
            <motion.p variants={rise(0)} className="eyebrow">
              Computer Science & AI Undergraduate
            </motion.p>

            <motion.h1 variants={rise(1)} className="display-xl mt-5 text-ink">
              {profile.name} <span className="wave" aria-hidden="true">👋</span>
            </motion.h1>

            <motion.p variants={rise(2)} className="body-lg mt-6 max-w-xl text-ink-2">
              Full-Stack Developer building practical MERN applications, strengthening problem-solving with C++, and exploring scalable backend architecture.
            </motion.p>

            <motion.div variants={rise(3)} className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/projects" variant="primary" iconEnd={<ArrowRight className="size-4" strokeWidth={2} />}>
                View Projects
              </Button>
              <Button href={profile.resume.href} variant="ghost" download iconEnd={<ArrowUpRight className="size-4" strokeWidth={2} />}>
                Resume
              </Button>
            </motion.div>

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