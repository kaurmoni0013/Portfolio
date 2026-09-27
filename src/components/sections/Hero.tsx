import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { profile, socials } from '../../data/profile'
import { scrollToId } from '../../lib/scroll'
import { Button } from '../ui/Button'
import { SocialIcon } from '../ui/SocialIcon'
import { OrbitPanel } from '../visuals/OrbitPanel'

const EASE = [0.16, 1, 0.3, 1] as const

const maskUp: Variants = {
  hidden: { y: '112%' },
  show: (i: number) => ({ y: 0, transition: { duration: 1.05, delay: 0.1 + i * 0.1, ease: EASE } }),
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.85, delay: 0.4 + i * 0.09, ease: EASE } }),
}

const credentials = [
  { k: 'CGPA', v: '9.4 / 10' },
  { k: 'Class of', v: '2028' },
  { k: 'Semester', v: '5th' },
  { k: 'MediQueue E2E', v: '67 / 67' },
]

const glyphs: Record<string, React.ReactNode> = {
  github: <SocialIcon id="github" className="size-4" />,
  linkedin: <SocialIcon id="linkedin" className="size-4" />,
  leetcode: <SocialIcon id="leetcode" className="size-4" />,
  gfg: <SocialIcon id="gfg" className="size-4" />,
  email: <SocialIcon id="email" className="size-4" />,
}

export function Hero() {
  const reduce = useReducedMotion()
  const initial = reduce ? false : 'hidden'

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center pt-[calc(var(--nav-h)+2.5rem)] pb-16"
    >
      <div className="shell w-full">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* ---------------------------------------------------------- text */}
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              custom={0}
              initial={initial}
              animate="show"
              className="inline-flex items-center gap-2.5 rounded-full border border-line-soft bg-white/[0.03] py-1.5 pr-4 pl-2.5"
            >
              <span className="relative flex size-1.5">
                <span className="animate-pulse-dot absolute inline-flex size-full rounded-full bg-teal" />
                <span className="relative inline-flex size-1.5 rounded-full bg-teal" />
              </span>
              <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-2">
                Open to software engineering internships
              </span>
            </motion.div>

            <h1 className="display-xl mt-8 text-ink">
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span variants={maskUp} custom={0} initial={initial} animate="show" className="block text-ink-3">
                  Hi, I&rsquo;m
                </motion.span>
              </span>
              <span className="mt-1 block overflow-hidden pb-[0.08em]">
                <motion.span variants={maskUp} custom={1} initial={initial} animate="show" className="text-gradient block">
                  Moni Kaur.
                </motion.span>
              </span>
            </h1>

            <motion.p
              variants={fadeUp}
              custom={1}
              initial={initial}
              animate="show"
              className="mt-8 max-w-xl font-display text-[clamp(1.125rem,2.1vw,1.5rem)] leading-[1.3] font-500 tracking-[-0.02em] text-ink"
            >
              Computer Science &amp; Artificial Intelligence Undergraduate
            </motion.p>

            <motion.p variants={fadeUp} custom={2} initial={initial} animate="show" className="body-lg mt-3 max-w-xl">
              Building full-stack applications and exploring modern backend systems.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={3}
              initial={initial}
              animate="show"
              className="mt-6 max-w-lg text-[0.9375rem] leading-relaxed text-ink-3"
            >
              I like the parts of a web app that are hard to fake — concurrent writes, states that
              can&rsquo;t be reached illegally, and authentication that fails closed. That&rsquo;s
              what MediQueue and Orbit AI are about, alongside daily C++ practice.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={4}
              initial={initial}
              animate="show"
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button
                onClick={() => scrollToId('projects')}
                iconEnd={<ArrowUpRight className="size-4" strokeWidth={2} />}
              >
                View My Work
              </Button>
              <Button
                href={profile.resume.href}
                variant="ghost"
                download
                icon={<Download className="size-4" strokeWidth={1.8} />}
              >
                Download Resume
              </Button>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              custom={5}
              initial={initial}
              animate="show"
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap group inline-flex items-center gap-2 text-[0.8125rem] text-ink-3 transition-colors duration-400 hover:text-ink"
                    data-cursor="link"
                  >
                    <span className="text-ink-4 transition-colors duration-400 group-hover:text-accent">
                      {glyphs[s.id]}
                    </span>
                    <span className="link-wipe">{s.label}</span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* -------------------------------------------------------- visual */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.3, delay: 0.4, ease: EASE }}
            className="flex justify-center lg:col-span-5"
          >
            <OrbitPanel />
          </motion.div>
        </div>

        {/* ----------------------------------------------------- credentials */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease: EASE }}
          className="mt-16 border-t border-line-soft pt-6 lg:mt-24"
        >
          <div className="flex flex-col gap-x-10 gap-y-5 sm:flex-row sm:items-center sm:justify-between">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-5 sm:flex sm:flex-wrap sm:gap-x-12">
              {credentials.map((c) => (
                <li key={c.k} className="flex items-baseline gap-2.5">
                  <span className="font-display text-[1.0625rem] font-600 tracking-tight text-ink">
                    {c.v}
                  </span>
                  <span className="font-mono text-[0.625rem] tracking-[0.18em] text-ink-4 uppercase">
                    {c.k}
                  </span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => scrollToId('about')}
              className="tap group inline-flex items-center gap-2.5 self-start font-mono text-[0.625rem] tracking-[0.22em] text-ink-4 uppercase transition-colors duration-400 hover:text-ink-2"
              data-cursor="link"
            >
              Scroll
              <span className="grid size-7 place-items-center rounded-full border border-line-soft transition-colors duration-400 group-hover:border-line">
                <ArrowDown
                  className="size-3 transition-transform duration-500 group-hover:translate-y-0.5"
                  strokeWidth={1.8}
                />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
