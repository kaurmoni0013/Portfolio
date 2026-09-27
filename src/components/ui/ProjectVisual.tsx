type Props = {
 src: string
 alt: string
 width: number
 height: number
 label?: string
 className?: string
 priority?: boolean
}

/**
 * A product screenshot inside a browser frame. The only motion is a 2% scale
 * on hover — no light sweep, no looping shine.
 */
export function ProjectVisual({
 src,
 alt,
 width,
 height,
 label,
 className = '',
 priority = false,
}: Props) {
 return (
 <figure className={`browser group/visual relative ${className}`}>
 <div className="flex items-center gap-2.5 border-b border-line-soft px-3.5 py-2.5">
 <span className="flex gap-1.5" aria-hidden="true">
 <span className="size-2 rounded-full bg-ink-5" />
 <span className="size-2 rounded-full bg-ink-5/70" />
 <span className="size-2 rounded-full bg-ink-5/45" />
 </span>
 {label ? (
 <span className="truncate text-[0.8125rem] text-ink-4">
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
 className="w-full transition-transform duration-300 ease-out group-hover/visual:scale-[1.02]"
 />
 </div>
 </figure>
 )
}
