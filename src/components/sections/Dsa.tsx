import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { dsaFacts, dsaLinks, dsaPath, dsaTopics } from '../../data/dsa'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Dsa({ className = '' }: { className?: string }) {
 const reduce = useReducedMotion()

 return (
 <Section
 id="dsa"
 eyebrow="Problem solving"
 title="C++ first, then everything else."
 lede="Most of my problem solving happens in C++, in a repository organised by topic so I can re-read the reasoning later. Below is the path, and the topics I have actually worked through."
 className={`py-20 md:py-24 ${className}`}
 >
 {/* the path */}
 <Reveal>
 <ol className="grid gap-px overflow-hidden rounded-[1.25rem] border border-line bg-line-soft sm:grid-cols-2 lg:grid-cols-4">
 {dsaPath.map((step, i) => (
 <li key={step.id} className="relative bg-raised px-6 py-7">
 <span className="font-mono text-[0.75rem] text-ink-4">
 {String(i + 1).padStart(2, '0')}
 </span>
 <h3 className="display-sm mt-4 font-600 text-ink">
 {step.label}
 </h3>
 <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-3">{step.note}</p>
 {i < dsaPath.length - 1 ? (
 <span
 aria-hidden="true"
 className="absolute top-1/2 -right-2.5 hidden size-5 -translate-y-1/2 place-items-center rounded-full border border-line bg-base lg:grid"
 >
 <ArrowUpRight className="size-2.5 text-ink-4" strokeWidth={2} />
 </span>
 ) : null}
 </li>
 ))}
 </ol>
 </Reveal>

 <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
 {/* topics */}
 <div className="lg:col-span-8">
 <Reveal>
 <p className="eyebrow">Topics in dsa-cpp</p>
 </Reveal>
 <ul className="mt-6 grid gap-px overflow-hidden rounded-[1.25rem] border border-line bg-line-soft sm:grid-cols-2">
 {dsaTopics.map((topic, i) => (
 <li key={topic.label}>
 <motion.div
 className="group h-full bg-raised px-6 py-6 transition-colors duration-500 hover:bg-[#2b2320]"
 initial={reduce ? false : { opacity: 0, y: 14 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-8% 0px' }}
 transition={{ duration: 0.6, delay: (i % 2) * 0.06, ease: [0.16, 1, 0.3, 1] }}
 >
 <div className="flex items-baseline justify-between gap-4">
 <h4 className="display-sm font-600 text-ink transition-colors duration-500 group-">
 {topic.label}
 </h4>
 <span className="font-mono text-[0.75rem] text-ink-4">
 {topic.files} files
 </span>
 </div>
 <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-ink-3">{topic.blurb}</p>
 </motion.div>
 </li>
 ))}
 </ul>
 </div>

 {/* facts + links */}
 <div className="lg:col-span-4">
 <Reveal delay={0.1}>
 <dl className="border-t border-line-soft">
 {dsaFacts.map((f) => (
 <div key={f.label} className="border-b border-line-soft py-5">
 <dt className="sr-only">{f.label}</dt>
 <dd>
 <span className="block font-display text-[1.75rem] leading-none font-600 tracking-tight text-ink">
 {f.value}
 </span>
 <span className="mt-2 block text-[0.8125rem] leading-relaxed text-ink-3">
 {f.label}
 </span>
 </dd>
 </div>
 ))}
 </dl>
 </Reveal>

 <Reveal delay={0.16}>
 <ul className="mt-8 space-y-3">
 {dsaLinks.map((link) => (
 <li key={link.href}>
 <a
 href={link.href}
 target="_blank"
 rel="noopener noreferrer"
 className="group inline-flex items-center gap-2 text-[0.8125rem] text-ink-2 transition-colors duration-400 "
 >
 <span className="link-wipe">{link.label}</span>
 <ArrowUpRight
 className="size-3.5 text-ink-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
 strokeWidth={1.8}
 />
 </a>
 </li>
 ))}
 </ul>
 </Reveal>
 </div>
 </div>
 </Section>
 )
}
