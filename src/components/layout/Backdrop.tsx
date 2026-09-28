/**
 * Space backdrop: deep void base, twinkling multi-layered stars,
 * and glowing purple nebula clouds.
 */
export function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep space void base */}
      <div className="absolute inset-0 bg-void" />

      {/* Layer 1 — Small twinkling stars */}
      <div
        className="absolute inset-0 star-layer-1"
        style={{
          backgroundImage: [
            'radial-gradient(1px 1px at 4% 9%, rgba(255,255,255,0.85) 99%, transparent)',
            'radial-gradient(1px 1px at 12% 19%, rgba(230,207,250,0.75) 99%, transparent)',
            'radial-gradient(1px 1px at 22% 35%, rgba(255,255,255,0.65) 99%, transparent)',
            'radial-gradient(1px 1px at 35% 12%, rgba(230,207,250,0.80) 99%, transparent)',
            'radial-gradient(1px 1px at 48% 62%, rgba(255,255,255,0.70) 99%, transparent)',
            'radial-gradient(1px 1px at 59% 25%, rgba(230,207,250,0.85) 99%, transparent)',
            'radial-gradient(1px 1px at 68% 82%, rgba(255,255,255,0.60) 99%, transparent)',
            'radial-gradient(1px 1px at 78% 18%, rgba(230,207,250,0.90) 99%, transparent)',
            'radial-gradient(1px 1px at 88% 52%, rgba(255,255,255,0.75) 99%, transparent)',
            'radial-gradient(1px 1px at 95% 28%, rgba(230,207,250,0.85) 99%, transparent)',
          ].join(', '),
        }}
      />

      {/* Layer 2 — Medium stars */}
      <div
        className="absolute inset-0 star-layer-2 opacity-80"
        style={{
          backgroundImage: [
            'radial-gradient(1.5px 1.5px at 8% 45%, rgba(255,255,255,0.9) 99%, transparent)',
            'radial-gradient(1.5px 1.5px at 18% 75%, rgba(199,122,240,0.85) 99%, transparent)',
            'radial-gradient(1.5px 1.5px at 29% 22%, rgba(255,255,255,0.8) 99%, transparent)',
            'radial-gradient(1.5px 1.5px at 41% 88%, rgba(199,122,240,0.9) 99%, transparent)',
            'radial-gradient(1.5px 1.5px at 52% 44%, rgba(255,255,255,0.75) 99%, transparent)',
            'radial-gradient(1.5px 1.5px at 63% 15%, rgba(199,122,240,0.85) 99%, transparent)',
            'radial-gradient(1.5px 1.5px at 74% 65%, rgba(255,255,255,0.9) 99%, transparent)',
            'radial-gradient(1.5px 1.5px at 84% 38%, rgba(199,122,240,0.8) 99%, transparent)',
            'radial-gradient(1.5px 1.5px at 92% 85%, rgba(255,255,255,0.85) 99%, transparent)',
          ].join(', '),
        }}
      />

      {/* Layer 3 — Bright glowing accent stars */}
      <div
        className="absolute inset-0 star-layer-3 opacity-90"
        style={{
          backgroundImage: [
            'radial-gradient(2px 2px at 15% 25%, rgba(217,154,250,0.95) 99%, transparent)',
            'radial-gradient(2px 2px at 33% 68%, rgba(255,255,255,0.9) 99%, transparent)',
            'radial-gradient(2px 2px at 57% 10%, rgba(217,154,250,0.95) 99%, transparent)',
            'radial-gradient(2px 2px at 76% 42%, rgba(255,255,255,0.9) 99%, transparent)',
            'radial-gradient(2px 2px at 89% 72%, rgba(217,154,250,0.85) 99%, transparent)',
          ].join(', '),
        }}
      />

      {/* Space Nebula Glows */}
      <div className="absolute -top-72 left-[20%] size-[60rem] rounded-full bg-[radial-gradient(circle,rgba(145,68,191,0.24),transparent_65%)]" />
      <div className="absolute top-[30%] -right-80 size-[56rem] rounded-full bg-[radial-gradient(circle,rgba(95,46,135,0.20),transparent_68%)]" />
      <div className="absolute bottom-[10%] -left-60 size-[48rem] rounded-full bg-[radial-gradient(circle,rgba(73,47,113,0.18),transparent_70%)]" />

      {/* Ambient Vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,7,21,0.12),transparent_40%,rgba(12,7,21,0.55))]" />
    </div>
  )
}
