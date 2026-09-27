import { Workflow } from 'lucide-react'
import { brands, glyphs, lines } from '../../lib/tech'
import type { TechKey } from '../../data/skills'

type Props = {
  tech: TechKey
  className?: string
  /** Applies the brand accent as the fill/stroke colour. */
  colored?: boolean
  title?: string
}

/**
 * Renders a technology mark: the official monochrome glyph where one exists,
 * a neutral line icon for practices and concepts, and a hand-drawn mark for
 * the handful of technologies no icon set ships.
 */
export function TechIcon({ tech, className = 'size-5', colored = false, title }: Props) {
  const brand = brands[tech]
  if (brand) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        role={title ? 'img' : 'presentation'}
        aria-hidden={title ? undefined : true}
        aria-label={title}
      >
        {title ? <title>{title}</title> : null}
        <path d={brand.icon.path} fill={colored ? `#${brand.icon.hex}` : 'currentColor'} />
      </svg>
    )
  }

  const line = lines[tech]
  if (line) {
    const Icon = line.icon
    return (
      <Icon
        className={className}
        strokeWidth={1.6}
        color={colored ? line.accent : 'currentColor'}
        role={title ? 'img' : 'presentation'}
        aria-hidden={title ? undefined : true}
        aria-label={title}
      />
    )
  }

  const glyph = glyphs[tech]
  if (glyph) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        role={title ? 'img' : 'presentation'}
        aria-hidden={title ? undefined : true}
        aria-label={title}
      >
        {title ? <title>{title}</title> : null}
        <path
          d={glyph.path}
          stroke={colored ? glyph.accent : 'currentColor'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return <Workflow className={className} strokeWidth={1.6} aria-hidden="true" />
}
