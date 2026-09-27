import { ArrowUp } from 'lucide-react'
import { navSections, profile, socials } from '../../data/profile'
import { scrollToId } from '../../lib/scroll'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line-soft bg-void/40">
      <div className="shell py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-[1.375rem] leading-tight font-600 tracking-tight text-ink">
              {profile.name}
            </p>
            <p className="mt-2 max-w-md text-[0.875rem] leading-relaxed text-ink-3">
              Computer Science &amp; AI undergraduate, 2028. Building full-stack applications and
              exploring modern backend systems.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navSections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToId(s.id)
                    }}
                    data-cursor="link"
                    className="tap link-wipe font-mono text-[0.625rem] tracking-[0.18em] text-ink-3 uppercase transition-colors duration-400 hover:text-ink"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-line-soft pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.625rem] tracking-[0.16em] text-ink-4 uppercase">
            © {year} {profile.name}
          </p>

          <ul className="flex flex-wrap items-center gap-5">
            {socials.slice(0, 4).map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="tap font-mono text-[0.625rem] tracking-[0.16em] text-ink-3 uppercase transition-colors duration-400 hover:text-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => scrollToId('home')}
            data-cursor="link"
            className="tap group inline-flex items-center gap-2 self-start font-mono text-[0.625rem] tracking-[0.18em] text-ink-3 uppercase transition-colors duration-400 hover:text-ink sm:self-auto"
          >
            Back to top
            <span className="grid size-7 place-items-center rounded-full border border-line-soft transition-colors duration-400 group-hover:border-line">
              <ArrowUp
                className="size-3 transition-transform duration-500 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
