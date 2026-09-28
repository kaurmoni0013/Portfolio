import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  radius: number
  color: string
  alpha: number
  twinkleSpeed: number
  vx: number
  vy: number
}

/**
 * Animated Canvas Starfield Backdrop — 160+ twinkling & gently moving stars,
 * creating an authentic space universe theme across the portfolio.
 */
export function Backdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    const numStars = 160
    const stars: Star[] = []

    const starColors = [
      '#ffffff',
      '#f7f2fc',
      '#c77af0',
      '#d99afa',
      '#e6cffa',
    ]

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const star of stars) {
        // Move star gently
        star.x += star.vx
        star.y += star.vy

        // Wrap around screen
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        // Twinkle effect
        star.alpha += star.twinkleSpeed
        if (star.alpha > 0.95 || star.alpha < 0.15) {
          star.twinkleSpeed = -star.twinkleSpeed
        }

        ctx.save()
        ctx.globalAlpha = Math.max(0.15, Math.min(0.95, star.alpha))
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.shadowBlur = star.radius > 1.2 ? 6 : 2
        ctx.shadowColor = star.color
        ctx.fill()
        ctx.restore()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep space base void */}
      <div className="absolute inset-0 bg-void" />

      {/* Animated 2D Starfield Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 size-full block" />

      {/* Space Nebula Glows */}
      <div className="absolute -top-72 left-[20%] size-[60rem] rounded-full bg-[radial-gradient(circle,rgba(145,68,191,0.22),transparent_65%)] pointer-events-none" />
      <div className="absolute top-[30%] -right-80 size-[56rem] rounded-full bg-[radial-gradient(circle,rgba(95,46,135,0.18),transparent_68%)] pointer-events-none" />
      <div className="absolute bottom-[10%] -left-60 size-[48rem] rounded-full bg-[radial-gradient(circle,rgba(73,47,113,0.16),transparent_70%)] pointer-events-none" />

      {/* Ambient Space Vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,7,21,0.12),transparent_40%,rgba(12,7,21,0.55))] pointer-events-none" />
    </div>
  )
}
