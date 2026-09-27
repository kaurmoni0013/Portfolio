/**
 * A restrained violet glow and a sparse star field echo the reference while
 * keeping the portfolio content easy to read.
 */
export function Backdrop() {
 return (
 <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
 <div className="absolute inset-0 bg-void" />
 <div
 className="absolute inset-0 opacity-55"
 style={{
 backgroundImage:
 'radial-gradient(1px 1px at 11% 18%, rgba(230,207,250,0.65) 99%, transparent), radial-gradient(1px 1px at 28% 43%, rgba(230,207,250,0.5) 99%, transparent), radial-gradient(1px 1px at 77% 21%, rgba(230,207,250,0.58) 99%, transparent), radial-gradient(1px 1px at 89% 58%, rgba(230,207,250,0.48) 99%, transparent), radial-gradient(1px 1px at 58% 77%, rgba(230,207,250,0.42) 99%, transparent), radial-gradient(1px 1px at 19% 83%, rgba(230,207,250,0.5) 99%, transparent)',
 }}
 />
 <div className="absolute -top-72 left-[22%] size-[50rem] rounded-full bg-[radial-gradient(circle,rgba(95,46,135,0.19),transparent_68%)]" />
 <div className="absolute top-[25%] -right-80 size-[48rem] rounded-full bg-[radial-gradient(circle,rgba(73,47,113,0.16),transparent_70%)]" />
 <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,7,21,0.08),transparent_45%,rgba(12,7,21,0.42))]" />
 </div>
 )
}
