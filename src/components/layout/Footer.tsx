import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { profile, routes, socials } from '../../data/profile'

export function Footer() {
 const year = new Date().getFullYear()

 return (
 <footer className="border-t border-line-soft bg-void/40">
 <div className="shell py-14">
 <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
 <div>
 <p className="font-display text-[1.5rem] leading-tight font-400 tracking-tight text-ink">
 {profile.name}
 </p>
 <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-3">
 Full-Stack Developer focused on backend engineering, C++/DSA, and scalable system design.
 B.Tech Computer Science &amp; AI, graduating 2028.
 </p>
 </div>

 <nav aria-label="Footer navigation">
 <ul className="flex flex-wrap gap-x-7 gap-y-3">
 {routes.map((r) => (
 <li key={r.to}>
 <Link
 to={r.to}
 className="tap link-wipe text-[0.9375rem] text-ink-3 transition-colors duration-300 "
 >
 {r.label}
 </Link>
 </li>
 ))}
 </ul>
 </nav>
 </div>

 <div className="mt-12 flex flex-col gap-5 border-t border-line-soft pt-7 sm:flex-row sm:items-center sm:justify-between">
 <p className="text-[0.875rem] text-ink-4">
 © {year} {profile.name}
 </p>

 <ul className="flex flex-wrap items-center gap-5">
 {socials.slice(0, 4).map((s) => (
 <li key={s.id}>
 <a
 href={s.href}
 target="_blank"
 rel="noopener noreferrer"
 className="tap text-[0.875rem] text-ink-3 transition-colors duration-300 "
 >
 {s.label}
 </a>
 </li>
 ))}
 </ul>

 <button
 type="button"
 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
 className="tap group inline-flex items-center gap-2 self-start text-[0.875rem] text-ink-3 transition-colors duration-300 sm:self-auto"
 >
 Back to top
 <span className="grid size-8 place-items-center rounded-full border border-line-soft transition-colors duration-300 group-">
 <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={2} />
 </span>
 </button>
 </div>
 </div>
 </footer>
 )
}
