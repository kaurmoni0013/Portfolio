/** Smooth in-page scrolling that respects reduced-motion preferences. */
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const navH = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-h'),
  ) || 72

  const top = el.getBoundingClientRect().top + window.scrollY - navH - 12

  window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' })
}
