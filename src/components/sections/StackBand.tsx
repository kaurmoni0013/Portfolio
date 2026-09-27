import { marqueeItems, skillNames } from '../../data/skills'
import { TechIcon } from '../ui/TechIcon'
import type { TechKey } from '../../data/skills'

/** Invert `skillNames` once so a display label can find its icon. */
const iconForLabel = new Map<string, TechKey>(
  Object.entries(skillNames).map(([key, name]) => [name, key as TechKey]),
)

/**
 * A quiet band of technologies that separates the hero from the rest of the
 * page. It wraps onto as many lines as it needs and then stays put — no
 * scrolling track, so it costs nothing and never pulls the eye.
 */
export function StackBand() {
  return (
    <div className="border-y border-line-soft bg-white/[0.012]">
      <div className="shell py-7">
        <h2 className="font-mono text-[0.625rem] tracking-[0.24em] text-ink-4 uppercase">
          Working with
        </h2>
        <ul className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-4">
          {marqueeItems.map((item) => {
            const tech = iconForLabel.get(item)
            return (
              <li key={item} className="flex items-center gap-2">
                {tech ? (
                  <TechIcon tech={tech} className="size-4 text-ink-4" title={item} />
                ) : null}
                <span className="font-mono text-[0.6875rem] tracking-[0.18em] whitespace-nowrap text-ink-3 uppercase">
                  {item}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
