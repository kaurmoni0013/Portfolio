/**
 * Pointer tracking on a single rAF loop, shared by the mouse-follow light
 * and the custom cursor. Values are written to CSS custom properties on
 * the root element so the browser can composite them on the GPU instead of
 * re-rendering React on every move.
 */

type Point = { x: number; y: number }

const listeners = new Set<(p: Point) => void>()
let running = false
let latest: Point = { x: 0, y: 0 }
let frame = 0

function flush() {
  for (const fn of listeners) fn(latest)
  frame = 0
}

function start() {
  if (running) return
  running = true
  window.addEventListener('pointermove', onMove, { passive: true })
  window.addEventListener('pointerdown', onDown, { passive: true })
}

function stop() {
  running = false
  window.removeEventListener('pointermove', onMove)
  window.removeEventListener('pointerdown', onDown)
  if (frame) cancelAnimationFrame(frame)
  frame = 0
}

function onMove(e: PointerEvent) {
  latest = { x: e.clientX, y: e.clientY }
  if (!frame) frame = requestAnimationFrame(flush)
}

function onDown() {
  document.documentElement.dataset.pointerDown = 'true'
  window.setTimeout(() => {
    delete document.documentElement.dataset.pointerDown
  }, 220)
}

/** Subscribe to pointer position. Returns an unsubscribe function. */
export function onPointerMove(fn: (p: Point) => void) {
  listeners.add(fn)
  start()
  return () => {
    listeners.delete(fn)
    if (listeners.size === 0) stop()
  }
}
