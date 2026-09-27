/**
 * The page atmosphere. Deliberately still: a warm espresso base, two fixed
 * colour fields, a fine grid, a vignette and a little film grain. Nothing
 * here animates, so it costs the compositor nothing and never competes with
 * the content. All layers are static and sit behind everything with pointer
 * events disabled.
 */
export function Backdrop() {
 return (
 <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
 <div className="absolute inset-0 bg-void" />

 {/* fine grid, faded out towards the edges */}
 <div
 className="absolute inset-0 opacity-50"
 style={{
 backgroundImage:
 'linear-gradient(to right, rgba(255,236,229,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,236,229,0.035) 1px, transparent 1px)',
 backgroundSize: '76px 76px',
 maskImage: 'radial-gradient(ellipse 95% 62% at 50% 0%, #000 0%, transparent 76%)',
 WebkitMaskImage: 'radial-gradient(ellipse 95% 62% at 50% 0%, #000 0%, transparent 76%)',
 }}
 />

 {/* Fixed colour fields — a warm rose glow high on the left where the
 portrait sits, with champagne as a cooler counterweight on the
 right. The radial gradients already fall off to transparent, so they
 need no CSS blur; dropping it removes a very large blurred surface
 that the browser would otherwise re-rasterise while scrolling. */}
 <div className="absolute -top-[-20rem] -left-[-12rem] size-[44rem] rounded-full bg-[radial-gradient(circle,rgba(226,138,124,0.15),transparent_66%)]" />
 <div className="absolute -top-[-8rem] right-[-16rem] size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(217,184,124,0.075),transparent_68%)]" />

 {/* vignette */}
 <div
 className="absolute inset-0"
 style={{
 background:
 'radial-gradient(ellipse 120% 80% at 50% 40%, transparent 42%, rgba(21,17,15,0.5) 82%, #15110f 100%)',
 }}
 />

 {/* film grain — plain alpha rather than a blend mode, which would force
 the whole fixed stack to re-composite on every frame */}
 <div
 className="absolute inset-0 opacity-[0.035]"
 style={{
 backgroundImage:
 "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
 }}
 />
 </div>
 )
}
