import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { profile, socials } from '../../data/profile'
import { scrollToId } from '../../lib/scroll'
import { Button } from '../ui/Button'
import { SocialIcon } from '../ui/SocialIcon'

const EASE = [0.16, 1, 0.3, 1] as const

/** One restrained enter: 15px of lift and a fade, nothing more. */
const rise: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: EASE },
  }),
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
      className="relative flex min-h-svh items-center pt-[calc(var(--nav-h)+3rem)] pb-16"
    >
      <div className="shell w-full">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-14">
          {/* ---------------------------------------------------------- text */}
          <div className="lg:col-span-7">
            <motion.div
              variants={rise}
              custom={0}
              initial={initial}
              animate="show"
              className="inline-flex items-center gap-2.5 rounded-full border border-line-soft bg-white/[0.03] py-1.5 pr-4 pl-3"
            >
              <span className="size-1.5 rounded-full bg-teal" aria-hidden="true" />
              <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-2">
                Open to software engineering internships
              </span>
            </motion.div>

            <h1 className="display-xl mt-8 text-ink">
              <motion.span variants={rise} custom={1} initial={initial} animate="show" className="block text-ink-3">
                Hi, I&rsquo;m
              </motion.span>
              <motion.span
                variants={rise}
                custom={2}
                initial={initial}
                animate="show"
                className="text-gradient mt-1 block"
              >
                Moni Kaur.
              </motion.span>
            </h1>

            <motion.p
              variants={rise}
              custom={3}
              initial={initial}
              animate="show"
              className="mt-8 max-w-xl font-display text-[clamp(1.125rem,2.1vw,1.5rem)] leading-[1.3] font-500 tracking-[-0.02em] text-ink"
            >
              Computer Science &amp; Artificial Intelligence Undergraduate
            </motion.p>

            <motion.p
              variants={rise}
              custom={4}
              initial={initial}
              animate="show"
              className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-ink-3"
            >
              I build full-stack applications, work through the backend problems that are hard to
              fake, and practise C++ problems most days. MediQueue and Orbit AI are where that
              shows up.
            </motion.p>

            <motion.div
              variants={rise}
              custom={5}
              initial={initial}
              animate="show"
              className="mt-9 flex flex-wrap items-center gap-3"
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
              variants={rise}
              custom={6}
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
                    className="tap group inline-flex items-center gap-2 text-[0.8125rem] text-ink-3 transition-colors duration-200 hover:text-ink"
                  >
                    <span className="text-ink-4 transition-colors duration-200 group-hover:text-accent">
                      {glyphs[s.id]}
                    </span>
                    <span className="link-wipe">{s.label}</span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* --------------------------------------------------------- static */}
          <motion.div
            variants={rise}
            custom={4}
            initial={initial}
            animate="show"
            className="flex justify-center lg:col-span-5"
          >
            <figure className="panel w-full max-w-[22rem] overflow-hidden p-2.5">
              <img
                src="portrait.webp"
                alt="Moni Kaur"
                width={900}
                height={853}
                fetchPriority="high"
                decoding="async"
                className="aspect-square w-full rounded-[calc(var(--radius-card)-0.375rem)] object-cover"
              />
              <figcaption className="flex items-center justify-between px-2.5 pt-3 pb-1.5">
                <span className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-4 uppercase">
                  B.Tech CSE &amp; AI
                </span>
                <span className="font-mono text-[0.625rem] tracking-[0.14em] text-ink-3">
                  Class of 2028
                </span>
              </figcaption>
            </figure>
          </motion.div>
        </div>

        {/* ----------------------------------------------------- credentials */}
        <div className="mt-16 border-t border-line-soft pt-6 lg:mt-24">
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
              className="tap group inline-flex items-center gap-2.5 self-start font-mono text-[0.625rem] tracking-[0.22em] text-ink-4 uppercase transition-colors duration-200 hover:text-ink-2"
            >
              Scroll
              <span className="grid size-7 place-items-center rounded-full border border-line-soft transition-colors duration-200 group-hover:border-line">
                <ArrowDown className="size-3" strokeWidth={1.8} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
