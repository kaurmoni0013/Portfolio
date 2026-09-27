import { useEffect, useState } from 'react'
import { navSections, type NavSectionId } from '../data/profile'

/**
 * Tracks which section owns the viewport using a band across the upper
 * third of the screen, so the indicator changes at a natural reading
 * position rather than when a heading happens to touch the top edge.
 */
export function useScrollSpy(ids: readonly string[] = navSections.map((s) => s.id)) {
  const [active, setActive] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const compute = () => {
      const line = window.innerHeight * 0.32
      let current = elements[0].id

      for (const el of elements) {
        const { top, bottom } = el.getBoundingClientRect()
        if (top <= line && bottom > line) {
          current = el.id
          break
        }
        if (top <= line) current = el.id
      }

      // Pin the final section once the page is scrolled to the bottom,
      // otherwise short trailing sections can never become active.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = elements[elements.length - 1].id
      }

      setActive(current)
    }

    compute()
    window.addEventListener('scroll', compute, { passive: true })
    window.addEventListener('resize', compute)
    return () => {
      window.removeEventListener('scroll', compute)
      window.removeEventListener('resize', compute)
    }
  }, [ids])

  return active as NavSectionId
}
