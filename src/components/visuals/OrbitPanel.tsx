import { TechIcon } from '../ui/TechIcon'
import type { TechKey } from '../../data/skills'

type Node = { tech: TechKey; label: string; angle: number; size: string }

const nodes: Node[] = [
  { tech: 'react', label: 'React', angle: -90, size: 'size-11' },
  { tech: 'node', label: 'Node.js', angle: -18, size: 'size-12' },
  { tech: 'mongodb', label: 'MongoDB', angle: 54, size: 'size-11' },
  { tech: 'redis', label: 'Redis', angle: 126, size: 'size-10' },
  { tech: 'docker', label: 'Docker', angle: 198, size: 'size-11' },
]

const ORBIT = 37 // percentage offset from the centre

function position(angle: number) {
  const rad = (angle * Math.PI) / 180
  return {
    left: `${50 + ORBIT * Math.cos(rad)}%`,
    top: `${50 + ORBIT * Math.sin(rad)}%`,
  }
}

/**
 * The hero instrument: a slowly rotating orbit of the technologies the two
 * full-stack products actually run on. Nodes counter-rotate so their icons
 * stay upright, and every animation is disabled under reduced motion.
 */
export function OrbitPanel() {
  return (
    <div className="panel relative aspect-square w-full max-w-[25rem] overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(91,140,255,0.10),transparent_62%)]"
      />

      {(
        [
          'left-3.5 top-3.5 border-l border-t',
          'right-3.5 top-3.5 border-r border-t',
          'left-3.5 bottom-11 border-b border-l',
          'right-3.5 bottom-11 border-b border-r',
        ] as const
      ).map((pos) => (
        <span key={pos} aria-hidden="true" className={`absolute size-3 border-line-soft ${pos}`} />
      ))}

      <div className="absolute inset-0 grid place-items-center pb-8">
        <div className="relative aspect-square w-[80%]">
          <div
            aria-hidden="true"
            className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-line-soft"
          />
          <div
            aria-hidden="true"
            className="animate-spin-reverse absolute inset-[18%] rounded-full border border-line-soft/60"
          />

          <div className="animate-spin-slow absolute inset-0 motion-reduce:animate-none">
            {nodes.map((n) => (
              <div
                key={n.tech}
                className="animate-spin-reverse absolute -translate-x-1/2 -translate-y-1/2 motion-reduce:animate-none"
                style={position(n.angle)}
              >
                <div
                  className={`grid ${n.size} place-items-center rounded-2xl border border-line bg-void/85 shadow-[0_8px_24px_-14px_rgba(0,0,0,0.9)] backdrop-blur-sm transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110`}
                >
                  <TechIcon tech={n.tech} className="size-5" colored title={n.label} />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute inset-[38%]">
            <div className="relative grid size-full place-items-center rounded-full border border-line bg-base">
              <span className="font-display text-[0.6875rem] font-700 tracking-[0.14em] text-ink/90">
                MK
              </span>
              <span
                aria-hidden="true"
                className="animate-pulse-dot absolute -right-0.5 -bottom-0.5 size-2 rounded-full bg-teal"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-line-soft px-4 py-3">
        <span className="font-mono text-[0.625rem] tracking-[0.2em] text-ink-4 uppercase">Stack</span>
        <span className="font-mono text-[0.625rem] tracking-[0.14em] text-ink-3">MERN + Redis</span>
      </div>
    </div>
  )
}
