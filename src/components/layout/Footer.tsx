import { ArrowUp } from 'lucide-react'
import { profile, socials } from '../../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line-soft bg-void/40">
      <div className="shell py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.875rem] text-ink-4">
            © {year} {profile.name}
          </p>

          <ul className="flex flex-wrap items-center gap-5">
            {socials.slice(0, 4).map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap text-[0.875rem] text-ink-3 transition-colors duration-300 hover:text-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="tap group inline-flex items-center gap-2 self-start text-[0.875rem] text-ink-3 transition-colors duration-300 hover:text-ink sm:self-auto"
          >
            Back to top
            <span className="grid size-8 place-items-center rounded-full border border-line-soft transition-colors duration-300 group-hover:border-ink-3">
              <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={2} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
