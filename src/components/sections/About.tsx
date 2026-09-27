import { ArrowUpRight } from 'lucide-react'
import { atAGlance } from '../../data/journey'
import { socials } from '../../data/profile'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

const focusAreas = [
 'Full-stack development',
 'C++ and DSA',
 'Backend systems',
 'Database design',
 'System design concepts',
 'DevOps and cloud',
]

/**
 * The written introduction. There is deliberately no portrait here: the
 * homepage already carries it, and repeating the same photo in two sections
 * was one of the things that made the site read like a template.
 */
export function About({ className = '' }: { className?: string }) {
 return (
 <Section
 id="about"
 eyebrow="About"
 title={
 <>
 A CS/AI undergraduate who actually ships the backend too.
 </>
 }
 className={`py-20 md:py-24 ${className}`}
 >
 <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
 <div className="lg:col-span-7">
 {/* The page header already leads with profile.summary, so this body
 starts with the longer paragraph rather than repeating it. */}
 <Reveal>
 <p className="max-w-xl text-[1.0625rem] leading-relaxed text-ink-2">
 Two full-stack products so far — a clinic appointment system and an AI conversation
 workspace — both with real auth, real persistence, and CI that runs an end-to-end suite
 on every push. I&rsquo;m currently working on system design, testing depth and
 deployment.
 </p>
 </Reveal>

 <Reveal delay={0.12}>
 <p className="eyebrow mt-12">What I focus on</p>
 <ul className="mt-5 flex flex-wrap gap-2.5">
 {focusAreas.map((f) => (
 <li
 key={f}
 className="rounded-full border border-line-soft px-3.5 py-1.5 text-[0.875rem] text-ink-3"
 >
 {f}
 </li>
 ))}
 </ul>
 </Reveal>

 <Reveal delay={0.16}>
 <div className="mt-11 flex flex-wrap gap-x-7 gap-y-3">
 {socials.map((s) => (
 <a
 key={s.id}
 href={s.href}
 target="_blank"
 rel="noopener noreferrer"
 className="tap link-wipe inline-flex items-center gap-1.5 text-[0.9375rem] text-ink-3 transition-colors duration-300 "
 >
 {s.label}
 <ArrowUpRight className="size-3.5" strokeWidth={1.8} />
 </a>
 ))}
 </div>
 </Reveal>
 </div>

 <Reveal className="lg:col-span-5" delay={0.1}>
 <div className="panel p-7">
 <p className="eyebrow">At a glance</p>
 <dl className="mt-5">
 {atAGlance.map((row) => (
 <div key={row.label} className="border-b border-line-soft py-4 first:border-t">
 <dt className="text-[0.8125rem] text-ink-4">{row.label}</dt>
 <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink">{row.value}</dd>
 </div>
 ))}
 </dl>
 </div>
 </Reveal>
 </div>
 </Section>
 )
}
