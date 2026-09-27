import { marqueeItems } from '../../data/skills'

/**
 * A single quiet band of technologies that separates the hero from the rest
 * of the page. The list is duplicated once and translated by -50% so the loop
 * is seamless, and it holds still entirely under reduced motion.
 */
export function MarqueeStrip() {
  const row = [...marqueeItems, ...marqueeItems]

  return (
    <div className="relative overflow-hidden border-y border-line-soft bg-white/[0.012] py-4">
      {/* The track is wider than the viewport on purpose, so the window that
          reveals it must clip it — otherwise the document scrolls sideways. */}
      <div
        aria-hidden="true"
        className="animate-marquee flex w-max items-center motion-reduce:animate-none"
        style={{ ['--mk-marquee-duration' as string]: '64s' }}
      >
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex shrink-0 items-center">
            <span className="font-mono text-[0.6875rem] tracking-[0.22em] whitespace-nowrap text-ink-3 uppercase">
              {item}
            </span>
            <span className="mx-10 size-1 rounded-full bg-ink-5" />
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-void to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-void to-transparent" />
    </div>
  )
}
