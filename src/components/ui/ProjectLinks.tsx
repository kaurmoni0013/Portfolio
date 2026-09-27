import { ArrowUpRight } from 'lucide-react'
import { SocialIcon } from './SocialIcon'
import type { ProjectLink } from '../../data/projects'

/** Small pill link used for live demos and source repositories. */
export function ProjectLinks({ links, size = 'md' }: { links: ProjectLink[]; size?: 'sm' | 'md' }) {
  const pad = size === 'sm' ? 'px-3.5 py-2.5 text-[0.75rem]' : 'px-4 py-3 text-[0.8125rem]'

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {links.map((link) => {
        const isLive = link.kind === 'live'
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2 rounded-full border font-medium transition-colors duration-500 ${
              isLive
                ? 'border-transparent bg-ink text-void hover:bg-white'
                : 'border-line text-ink-2 hover:border-ink-3 hover:text-ink'
            } ${pad}`}
          >
            {isLive ? null : <SocialIcon id="github" className="size-3.5" />}
            {link.label}
            <ArrowUpRight
              className="size-3.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </a>
        )
      })}
    </div>
  )
}
