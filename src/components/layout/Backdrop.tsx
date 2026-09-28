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
  isBright?: boolean
}

interface ShootingStar {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  alpha: number
  active: boolean
}

/**
 * Rich Animated Space Starfield Backdrop — 300+ twinkling & floating stars,
 * 4-point glowing starbursts, dynamic shooting stars, and violet nebula clouds.
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
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    const width = window.innerWidth
    const height = window.innerHeight

    const numStars = 320
    const stars: Star[] = []

    const starColors = [
      '#ffffff',
      '#f0e6ff',
      '#c77af0',
      '#d99afa',
      '#78c7b5',
      '#ffd700',
    ]

    for (let i = 0; i < numStars; i++) {
      const isBright = Math.random() < 0.12
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isBright ? Math.random() * 1.8 + 1.5 : Math.random() * 1.2 + 0.6,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: (Math.random() * 0.025 + 0.008) * (Math.random() < 0.5 ? 1 : -1),
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        isBright,
      })
    }

    // Shooting star state
    let shootingStar: ShootingStar | null = null

    const spawnShootingStar = () => {
      shootingStar = {
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.4,
        length: Math.random() * 80 + 60,
        speed: Math.random() * 8 + 6,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
        alpha: 1,
        active: true,
      }
    }

    let nextSpawnTime = Date.now() + Math.random() * 4000 + 2000

    const draw4PointStar = (x: number, y: number, r: number, color: string, alpha: number) => {
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.fillStyle = color
      ctx.shadowColor = color
      ctx.shadowBlur = 10

      ctx.beginPath()
      for (let i = 0; i < 4; i++) {
        ctx.lineTo(Math.cos((i * Math.PI) / 2) * r + x, Math.sin((i * Math.PI) / 2) * r + y)
        ctx.lineTo(Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (r * 0.3) + x, Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (r * 0.3) + y)
      }
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // 1. Draw static and moving twinkling stars
      for (const star of stars) {
        star.x += star.vx
        star.y += star.vy

        if (star.x < 0) star.x = width
        if (star.x > width) star.x = 0
        if (star.y < 0) star.y = height
        if (star.y > height) star.y = 0

        star.alpha += star.twinkleSpeed
        if (star.alpha > 0.98 || star.alpha < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed
        }

        const currentAlpha = Math.max(0.15, Math.min(1, star.alpha))

        if (star.isBright && currentAlpha > 0.6) {
          draw4PointStar(star.x, star.y, star.radius * 3.5, star.color, currentAlpha)
        } else {
          ctx.save()
          ctx.globalAlpha = currentAlpha
          ctx.fillStyle = star.color
          ctx.shadowColor = star.color
          ctx.shadowBlur = star.radius * 3
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }
      }

      // 2. Handle shooting star (meteor streak)
      if (Date.now() > nextSpawnTime && (!shootingStar || !shootingStar.active)) {
        spawnShootingStar()
        nextSpawnTime = Date.now() + Math.random() * 5000 + 4000
      }

      if (shootingStar && shootingStar.active) {
        const endX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length
        const endY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length

        const grad = ctx.createLinearGradient(shootingStar.x, shootingStar.y, endX, endY)
        grad.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.alpha})`)
        grad.addColorStop(0.3, `rgba(199, 122, 240, ${shootingStar.alpha * 0.7})`)
        grad.addColorStop(1, 'rgba(199, 122, 240, 0)')

        ctx.save()
        ctx.strokeStyle = grad
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(shootingStar.x, shootingStar.y)
        ctx.lineTo(endX, endY)
        ctx.stroke()
        ctx.restore()

        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed
        shootingStar.alpha -= 0.015

        if (shootingStar.alpha <= 0 || shootingStar.x > width || shootingStar.y > height) {
          shootingStar.active = false
        }
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
      {/* Cosmic Void Deep Space Base */}
      <div className="absolute inset-0 bg-void" />

      {/* 60 FPS Canvas Space Starfield + Meteors */}
      <canvas ref={canvasRef} className="absolute inset-0 size-full block" />

      {/* Space Nebula Clouds */}
      <div className="absolute -top-64 left-[15%] size-[64rem] rounded-full bg-[radial-gradient(circle,rgba(167,135,235,0.22),transparent_65%)] blur-2xl pointer-events-none" />
      <div className="absolute top-[35%] -right-72 size-[58rem] rounded-full bg-[radial-gradient(circle,rgba(199,122,240,0.18),transparent_68%)] blur-2xl pointer-events-none" />
      <div className="absolute bottom-[5%] -left-64 size-[52rem] rounded-full bg-[radial-gradient(circle,rgba(95,46,135,0.20),transparent_70%)] blur-2xl pointer-events-none" />

      {/* Space Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(12,7,21,0.45)_100%)] pointer-events-none" />
    </div>
  )
}
