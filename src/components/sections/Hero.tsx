import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react'
import { profile, socials } from '../../data/profile'
import { Button } from '../ui/Button'
import { Flourish } from '../ui/Flourish'
import { SocialIcon } from '../ui/SocialIcon'

const rise = (i: number) => ({
 hidden: { opacity: 0, y: 15 },
 show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] as const } },
})

/**
 * The opening statement. Type first, portrait second, and only one portrait on
 * the site — an earlier version showed the same photo in both the hero and the
 * About section, which read as a stock template rather than a person.
 */
export function Hero() {
 const reduce = useReducedMotion()

 return (
 <section className="relative overflow-hidden pt-[calc(var(--nav-h)+clamp(2.5rem,7vw,5rem))] pb-20 md:pb-28">
 <div className="shell">
 <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
 {/* --------------------------------------------------------- text */}
 <motion.div
 className="lg:col-span-7"
 initial={reduce ? false : 'hidden'}
 animate="show"
 variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.08 } } }}
 >
 <motion.p variants={rise(0)} className="eyebrow text-accent-soft">
 Hello — I&rsquo;m {profile.name}
 </motion.p>

 <motion.h1
 variants={rise(1)}
 className="display-xl mt-5 text-ink"
 >
 {/* The <br>s give the ragged three-line shape, but a naive
 text extraction reads "partsof the web thathave to be
 right". One clean accessible name, the same three lines
 painted. */}
 <span className="sr-only">I build the parts of the web that have to be right.</span>
 <span aria-hidden="true">
 I build the parts
 <br />
 of the web that
 <br />
 <span className="text-gradient">have to be right.</span>
 </span>
 </motion.h1>

 <motion.div variants={rise(2)} className="rule-accent mt-8" />

 <motion.p variants={rise(3)} className="body-lg mt-8 max-w-xl">
 I&rsquo;m a Computer Science &amp; AI undergraduate in Jaipur, graduating in 2028. I work
 mostly in the MERN stack and C++, and I care most about the parts of a product that
 can&rsquo;t be faked: concurrent writes, authentication that fails closed, and cost
 control when someone else&rsquo;s API sits in the request path.
 </motion.p>

 <motion.div variants={rise(4)} className="mt-10 flex flex-wrap items-center gap-3">
 <Button href="/projects" variant="primary" iconEnd={<ArrowRight className="size-4" strokeWidth={2} />}>
 See my work
 </Button>
 <Button href={profile.resume.href} variant="ghost" download iconEnd={<ArrowUpRight className="size-4" strokeWidth={2} />}>
 Résumé
 </Button>
 <Button
 href={`mailto:${profile.email}`}
 variant="quiet"
 external={false}
 download={false}
 icon={<Mail className="size-4" strokeWidth={1.8} />}
 >
 Email me
 </Button>
 </motion.div>

 <motion.ul variants={rise(5)} className="mt-11 flex flex-wrap items-center gap-2.5">
 {socials.slice(0, 4).map((s) => (
 <li key={s.id}>
 <a
 href={s.href}
 target="_blank"
 rel="noopener noreferrer"
 className="flex size-11 items-center justify-center rounded-full border border-line text-ink-3 transition-colors duration-300 "
 aria-label={s.label}
 >
 <SocialIcon id={s.id} className="size-4" />
 </a>
 </li>
 ))}
 </motion.ul>
 </motion.div>

 {/* ----------------------------------------------------- portrait */}
 <motion.figure
 className="relative lg:col-span-5"
 initial={reduce ? false : { opacity: 0, y: 15 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, delay: reduce ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
 >
 {/* The offset frame and the champagne rule behind the photo are the
 page's signature: a drawn, hand-made mark rather than a glow. */}
 <div
 aria-hidden="true"
 className="pointer-events-none absolute -top-4 -left-4 -z-10 h-full w-full rounded-[1.75rem] border border-line-soft"
 />
 <div
 aria-hidden="true"
 className="pointer-events-none absolute -top-4 -left-4 -z-10 h-24 w-24 rounded-tl-[1.75rem] border-t-2 border-l-2 border-[color:var(--color-champagne)]/45"
 />

 <div className="overflow-hidden rounded-[1.75rem] border border-line bg-raised">
 <img
 src="portrait.webp"
 alt={`${profile.name}, Computer Science & Artificial Intelligence undergraduate in Jaipur`}
 width={900}
 height={853}
 fetchPriority="high"
 decoding="async"
 className="aspect-[4/5] w-full object-cover object-top"
 />
 </div>

 <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-4">
 <span className="font-display text-[1.0625rem] text-ink">{profile.name}</span>
 <Flourish className="h-7 w-20" />
 </figcaption>
 </motion.figure>
 </div>

 {/* quiet "what I work with" line, replacing the old scrolling band */}
 <motion.div
 className="mt-20 border-t border-line-soft pt-8 md:mt-24"
 initial={reduce ? false : { opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.6, delay: reduce ? 0 : 0.4 }}
 >
 <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:gap-6">
 <p className="eyebrow shrink-0">Working with</p>
 <p className="text-[0.9375rem] leading-relaxed text-ink-3">
 React, Node, Express, MongoDB, Redis, C++, PostgreSQL, Docker, Tailwind, GitHub Actions
 — mostly for full-stack MERN work and C++ DSA practice.
 </p>
 <Link
 to="/about"
 className="tap link-wipe inline-flex shrink-0 items-center gap-1.5 self-start text-[0.9375rem] text-accent-soft transition-colors duration-300 sm:self-auto"
 >
 More about me
 <ArrowUpRight className="size-3.5" strokeWidth={2} />
 </Link>
 </div>
 </motion.div>
 </div>
 </section>
 )
}
