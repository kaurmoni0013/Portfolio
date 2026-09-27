import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react'
import { profile, socials } from '../../data/profile'
import { Button } from '../ui/Button'
import { SocialIcon } from '../ui/SocialIcon'

const roles = ['Frontend Developer', 'React Developer', 'Creative Coder']

const rise = (i: number) => ({
 hidden: { opacity: 0, y: 14 },
 show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] as const } },
})

/** The opening hero: a direct introduction, changing role, and original avatar. */
export function Hero() {
 const reduce = useReducedMotion()
 const [roleIndex, setRoleIndex] = useState(0)

 useEffect(() => {
 if (reduce) return
 const timer = window.setInterval(() => {
 setRoleIndex((index) => (index + 1) % roles.length)
 }, 2400)
 return () => window.clearInterval(timer)
 }, [reduce])

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
 <motion.p variants={rise(0)} className="eyebrow text-accent-soft">
 Computer Science &amp; AI student <span className="px-1.5 text-ink-5">/</span> Jaipur, India
 </motion.p>

 <motion.h1 variants={rise(1)} className="display-xl mt-5 text-ink">
 Hey there, I&rsquo;m
 <br />
 <span className="text-gradient">{profile.name}.</span>
 <span className="wave ml-2" role="img" aria-label="waving hand">
 👋
 </span>
 </motion.h1>

 <motion.div variants={rise(2)} className="mt-6 flex min-h-10 items-center gap-2.5 text-xl font-semibold sm:text-2xl">
 <span className="text-ink-3">I&rsquo;m a</span>
 <span className="relative inline-grid min-w-0 text-accent-soft">
 <AnimatePresence mode="wait" initial={false}>
 <motion.span
 key={roles[roleIndex]}
 initial={reduce ? false : { opacity: 0, y: 9 }}
 animate={{ opacity: 1, y: 0 }}
 exit={reduce ? { opacity: 0 } : { opacity: 0, y: -9 }}
 transition={{ duration: reduce ? 0 : 0.22 }}
 >
 {roles[roleIndex]}
 </motion.span>
 </AnimatePresence>
 </span>
 </motion.div>

 <motion.p variants={rise(3)} className="body-lg mt-6 max-w-xl">
 I&rsquo;m Moni, a woman in tech who loves making the web feel intuitive, useful, and a little more human.
 I build thoughtful interfaces with React and bring each idea to life with care.
 </motion.p>

 <motion.div variants={rise(4)} className="mt-8 flex flex-wrap items-center gap-3">
 <Button href="/projects" variant="primary" iconEnd={<ArrowRight className="size-4" strokeWidth={2} />}>
 Explore my work
 </Button>
 <Button href={`mailto:${profile.email}`} variant="ghost" external={false} download={false} icon={<Mail className="size-4" strokeWidth={1.8} />}>
 Get in touch
 </Button>
 </motion.div>

 <motion.ul variants={rise(5)} className="mt-8 flex flex-wrap items-center gap-3">
 {socials.slice(0, 4).map((social) => (
 <li key={social.id}>
 <a
 href={social.href}
 target="_blank"
 rel="noopener noreferrer"
 className="grid size-10 place-items-center rounded-full border border-line text-ink-3 transition-colors duration-300 hover:border-accent/60 hover:text-accent-soft"
 aria-label={social.label}
 >
 <SocialIcon id={social.id} className="size-4" />
 </a>
 </li>
 ))}
 </motion.ul>
 </motion.div>

 <motion.figure
 className="relative mx-auto w-full max-w-[29rem] lg:col-span-5"
 initial={reduce ? false : { opacity: 0, y: 14 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.65, delay: reduce ? 0 : 0.18, ease: [0.16, 1, 0.3, 1] }}
 >
 <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,rgba(112,66,147,0.2),transparent_68%)]" />
 <motion.div
 animate={reduce ? undefined : { y: [0, -5, 0] }}
 transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
 className="overflow-hidden rounded-[1.5rem] border border-line bg-raised shadow-[0_24px_80px_rgba(4,2,10,0.32)]"
 >
 <img
 src="/Portfolio/moni-avatar.svg"
 alt="Illustration of Moni, a woman developer working at her laptop"
 width={640}
 height={720}
 fetchPriority="high"
 decoding="async"
 className="aspect-[4/5] w-full object-cover"
 />
 </motion.div>
 <figcaption className="mt-4 flex items-center justify-between gap-4 px-1">
 <span className="text-sm font-medium text-ink-2">{profile.name}</span>
 <span className="inline-flex items-center gap-2 text-xs text-ink-3">
 <span className="size-2 rounded-full bg-teal" />
 Available for opportunities
 </span>
 </figcaption>
 </motion.figure>
 </div>

 <motion.div
 className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line-soft pt-6 text-sm text-ink-3 md:mt-16"
 initial={reduce ? false : { opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.5, delay: reduce ? 0 : 0.45 }}
 >
 <span className="font-medium text-ink-2">Building with</span>
 <span>React</span>
 <span>TypeScript</span>
 <span>Tailwind CSS</span>
 <span>Node.js</span>
 <Link to="/about" className="tap link-wipe inline-flex items-center gap-1 text-accent-soft md:ml-auto">
 More about me <ArrowUpRight className="size-3.5" />
 </Link>
 </motion.div>
 </div>
 </section>
 )
}
