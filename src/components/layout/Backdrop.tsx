/**
 * Space-inspired backdrop: deep void base, many scattered stars of varying
 * sizes and opacities, and soft violet nebula glows.
 */
export function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep space base */}
      <div className="absolute inset-0 bg-void" />

      {/* Stars — small 1px */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            'radial-gradient(1px 1px at 5% 8%, rgba(230,207,250,0.75) 99%, transparent)',
            'radial-gradient(1px 1px at 11% 18%, rgba(230,207,250,0.65) 99%, transparent)',
            'radial-gradient(1px 1px at 17% 32%, rgba(230,207,250,0.55) 99%, transparent)',
            'radial-gradient(1px 1px at 24% 6%, rgba(230,207,250,0.60) 99%, transparent)',
            'radial-gradient(1px 1px at 28% 43%, rgba(230,207,250,0.50) 99%, transparent)',
            'radial-gradient(1px 1px at 33% 72%, rgba(230,207,250,0.45) 99%, transparent)',
            'radial-gradient(1px 1px at 38% 14%, rgba(230,207,250,0.70) 99%, transparent)',
            'radial-gradient(1px 1px at 44% 57%, rgba(230,207,250,0.40) 99%, transparent)',
            'radial-gradient(1px 1px at 49% 29%, rgba(230,207,250,0.65) 99%, transparent)',
            'radial-gradient(1px 1px at 53% 88%, rgba(230,207,250,0.50) 99%, transparent)',
            'radial-gradient(1px 1px at 58% 77%, rgba(230,207,250,0.42) 99%, transparent)',
            'radial-gradient(1px 1px at 63% 41%, rgba(230,207,250,0.60) 99%, transparent)',
            'radial-gradient(1px 1px at 67% 12%, rgba(230,207,250,0.55) 99%, transparent)',
            'radial-gradient(1px 1px at 71% 65%, rgba(230,207,250,0.48) 99%, transparent)',
            'radial-gradient(1px 1px at 77% 21%, rgba(230,207,250,0.58) 99%, transparent)',
            'radial-gradient(1px 1px at 82% 48%, rgba(230,207,250,0.45) 99%, transparent)',
            'radial-gradient(1px 1px at 86% 82%, rgba(230,207,250,0.52) 99%, transparent)',
            'radial-gradient(1px 1px at 89% 58%, rgba(230,207,250,0.48) 99%, transparent)',
            'radial-gradient(1px 1px at 93% 34%, rgba(230,207,250,0.62) 99%, transparent)',
            'radial-gradient(1px 1px at 97% 16%, rgba(230,207,250,0.58) 99%, transparent)',
            'radial-gradient(1px 1px at 19% 83%, rgba(230,207,250,0.50) 99%, transparent)',
            'radial-gradient(1px 1px at 42% 91%, rgba(230,207,250,0.44) 99%, transparent)',
            'radial-gradient(1px 1px at 74% 95%, rgba(230,207,250,0.38) 99%, transparent)',
            'radial-gradient(1px 1px at 8%  55%, rgba(230,207,250,0.42) 99%, transparent)',
            'radial-gradient(1px 1px at 91% 74%, rgba(230,207,250,0.46) 99%, transparent)',
          ].join(', '),
        }}
      />

      {/* Stars — slightly brighter/larger 1.5px accent */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: [
            'radial-gradient(1.5px 1.5px at 15% 25%, rgba(199,122,240,0.80) 99%, transparent)',
            'radial-gradient(1.5px 1.5px at 36% 60%, rgba(199,122,240,0.65) 99%, transparent)',
            'radial-gradient(1.5px 1.5px at 60% 10%, rgba(199,122,240,0.72) 99%, transparent)',
            'radial-gradient(1.5px 1.5px at 80% 35%, rgba(199,122,240,0.60) 99%, transparent)',
            'radial-gradient(1.5px 1.5px at 45% 80%, rgba(199,122,240,0.55) 99%, transparent)',
            'radial-gradient(1.5px 1.5px at 90% 90%, rgba(199,122,240,0.50) 99%, transparent)',
            'radial-gradient(1.5px 1.5px at 3%  70%, rgba(199,122,240,0.60) 99%, transparent)',
          ].join(', '),
        }}
      />

      {/* Nebula glows */}
      <div className="absolute -top-72 left-[22%] size-[56rem] rounded-full bg-[radial-gradient(circle,rgba(95,46,135,0.22),transparent_65%)]" />
      <div className="absolute top-[25%] -right-80 size-[52rem] rounded-full bg-[radial-gradient(circle,rgba(73,47,113,0.18),transparent_68%)]" />
      <div className="absolute bottom-0 left-[10%] size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(60,30,100,0.14),transparent_70%)]" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,7,21,0.10),transparent_40%,rgba(12,7,21,0.50))]" />
    </div>
  )
}
