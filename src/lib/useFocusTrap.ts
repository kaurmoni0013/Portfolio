import { useEffect, type RefObject } from 'react'

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Makes an overlay behave like a real dialog for keyboard and screen reader
 * users: focus moves in on open, Tab is trapped inside, Escape closes, and
 * focus returns to whatever was focused before.
 */
export function useFocusTrap(
  active: boolean,
  ref: RefObject<HTMLElement | null>,
  onEscape: () => void,
) {
  useEffect(() => {
    if (!active) return
    const panel = ref.current
    if (!panel) return

    const returnTo = document.activeElement as HTMLElement | null
    const first = panel.querySelector<HTMLElement>(FOCUSABLE)
    first?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onEscape()
        return
      }
      if (e.key !== 'Tab') return

      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null,
      )
      if (items.length === 0) return

      const firstItem = items[0]
      const lastItem = items[items.length - 1]
      const current = document.activeElement

      if (e.shiftKey && (current === firstItem || !panel.contains(current))) {
        e.preventDefault()
        lastItem.focus()
      } else if (!e.shiftKey && current === lastItem) {
        e.preventDefault()
        firstItem.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown, true)
    return () => {
      document.removeEventListener('keydown', onKeyDown, true)
      returnTo?.focus?.()
    }
  }, [active, ref, onEscape])
}
