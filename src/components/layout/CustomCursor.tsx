import { useEffect, useRef, useState } from 'react'
import { onPointerMove } from '../../lib/pointer'
import { useFinePointer } from '../../lib/useMediaQuery'

type Mode = 'default' | 'link' | 'project' | 'text'

const MODES: Record<Mode, { size: number; ring: number; label?: string }> = {
  default: { size: 7, ring: 34 },
  link: { size: 5, ring: 52 },
  project: { size: 0, ring: 84, label: 'View' },
  text: { size: 0, ring: 26 },
}

/**
 * A small dot with a lagging ring, shown only on precise pointers. Hover
 * intent is read from `data-cursor` attributes so any interactive element
 * opts in without extra wiring.
 */
export function CustomCursor() {
  const fine = useFinePointer()
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const visible = useRef(false)
  const [mode, setMode] = useState<Mode>('default')
  const [shown, setShown] = useState(false)
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    document.body.dataset.customCursor = fine ? 'on' : 'off'
    return () => {
      delete document.body.dataset.customCursor
    }
  }, [fine])

  useEffect(() => {
    if (!fine) return

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const lag = { ...pos }

    const stop = onPointerMove(({ x, y }) => {
      pos.x = x
      pos.y = y
      if (!visible.current) {
        visible.current = true
        setShown(true)
      }
      lag.x += (pos.x - lag.x) * 0.16
      lag.y += (pos.y - lag.y) * 0.16

      if (dot.current) {
        dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`
      }
      if (ring.current) {
        ring.current.style.transform = `translate3d(${lag.x}px, ${lag.y}px, 0) translate(-50%, -50%)`
      }
    })

    const onOver = (e: PointerEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.('[data-cursor]')
      setMode((el?.getAttribute('data-cursor') as Mode) ?? 'default')
    }
    const onEnter = () => {
      visible.current = true
      setShown(true)
    }
    const onLeave = () => {
      visible.current = false
      setShown(false)
    }

    document.addEventListener('pointerover', onOver, true)
    document.addEventListener('pointerenter', onEnter)
    document.addEventListener('pointerleave', onLeave)
    document.addEventListener('pointerdown', () => setPressed(true))
    document.addEventListener('pointerup', () => setPressed(false))

    return () => {
      stop()
      document.removeEventListener('pointerover', onOver, true)
      document.removeEventListener('pointerenter', onEnter)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [fine])

  if (!fine) return null

  const cfg = MODES[mode]

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-100">
      <div
        ref={ring}
        className="absolute top-0 left-0 grid place-items-center rounded-full border border-white/40 transition-[width,height,background-color,border-color,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          width: cfg.ring,
          height: cfg.ring,
          opacity: shown ? 1 : 0,
          backgroundColor: mode === 'project' ? 'rgba(255,255,255,0.92)' : 'transparent',
          borderColor: mode === 'project' ? 'transparent' : 'rgba(255,255,255,0.4)',
        }}
      >
        {cfg.label ? (
          <span className="font-mono text-[0.5625rem] font-medium tracking-[0.18em] text-void uppercase">
            {cfg.label}
          </span>
        ) : null}
      </div>

      <div
        ref={dot}
        className="absolute top-0 left-0 rounded-full bg-white transition-[width,height,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          width: cfg.size,
          height: cfg.size,
          opacity: shown && cfg.size > 0 ? (pressed ? 0.45 : 1) : 0,
        }}
      />
    </div>
  )
}
