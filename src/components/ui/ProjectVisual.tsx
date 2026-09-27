type Props = {
  src: string
  alt: string
  width: number
  height: number
  label?: string
  className?: string
  priority?: boolean
  /** Shows the "View" cursor treatment — only where a live demo exists. */
  live?: boolean
}

/**
 * A product screenshot inside a browser frame. The image scales very
 * slightly on hover, and a light sweep crosses the frame once — enough to
 * signal interactivity without turning the card into a light show.
 */
export function ProjectVisual({
  src,
  alt,
  width,
  height,
  label,
  className = '',
  priority = false,
  live = true,
}: Props) {
  return (
    <figure
      className={`browser group/visual relative ${className}`}
      {...(live ? { 'data-cursor': 'project' } : {})}
    >
      <div className="flex items-center gap-2.5 border-b border-line-soft px-3.5 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
        <span className="size-2 rounded-full bg-ink-5" />
        <span className="size-2 rounded-full bg-ink-5/70" />
        <span className="size-2 rounded-full bg-ink-5/45" />
        </span>
        {label ? (
          <span className="truncate font-mono text-[0.5625rem] tracking-[0.16em] text-ink-4 uppercase">
            {label}
          </span>
        ) : null}
      </div>

      <div className="relative overflow-hidden bg-base">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="w-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/visual:scale-[1.045]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-12deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent opacity-0 group-hover/visual:animate-sweep group-hover/visual:opacity-100"
        />
      </div>
    </figure>
  )
}
