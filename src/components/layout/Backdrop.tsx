import { useEffect } from 'react'
import { onPointerMove } from '../../lib/pointer'

/**
 * The page atmosphere: a fine grid, two slow-drifting colour fields, a
 * mouse-following light and a film-grain overlay. All of it is painted with
 * transforms and gradients so it stays on the compositor, and it all sits
 * behind the content with pointer events disabled.
 */
export function Backdrop() {
  useEffect(
    () =>
      onPointerMove(({ x, y }) => {
        document.documentElement.style.setProperty('--pointer-x', `${x}px`)
        document.documentElement.style.setProperty('--pointer-y', `${y}px`)
      }),
    [],
  )

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-void" />

      {/* fine grid, faded out towards the edges */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.032) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.032) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 95% 62% at 50% 0%, #000 0%, transparent 76%)',
          WebkitMaskImage: 'radial-gradient(ellipse 95% 62% at 50% 0%, #000 0%, transparent 76%)',
        }}
      />

      {/* colour fields — blue dominant, teal as a counterweight */}
      <div className="animate-drift absolute -top-[22rem] -left-[14rem] size-[46rem] rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.20),transparent_66%)] blur-[26px]" />
      <div
        className="animate-drift absolute -top-[10rem] right-[-16rem] size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(47,212,180,0.11),transparent_68%)] blur-[30px]"
        style={{ animationDelay: '-9s' }}
      />
      <div
        className="animate-drift absolute top-[52%] left-[38%] size-[52rem] rounded-full bg-[radial-gradient(circle,rgba(127,116,240,0.075),transparent_70%)] blur-[36px]"
        style={{ animationDelay: '-17s' }}
      />

      {/* mouse-following light */}
      <div
        className="absolute -left-[22rem] -top-[22rem] size-[44rem] rounded-full opacity-70 mix-blend-screen"
        style={{
          background:
            'radial-gradient(circle, rgba(120,160,255,0.10) 0%, rgba(120,160,255,0.04) 38%, transparent 66%)',
          transform: 'translate3d(calc(var(--pointer-x) - 50%), calc(var(--pointer-y) - 50%), 0)',
          transition: 'transform 220ms cubic-bezier(0.16,1,0.3,1)',
        }}
      />

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 50% 40%, transparent 42%, rgba(7,8,11,0.5) 82%, #07080b 100%)',
        }}
      />

      {/* film grain */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}
