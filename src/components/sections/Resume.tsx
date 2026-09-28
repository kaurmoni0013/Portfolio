import { Download } from 'lucide-react'
import { profile } from '../../data/profile'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

/**
 * A dedicated resume block: the avatar portrait with a download action
 * sitting directly beneath it. Reused wherever a visitor is making a yes/no
 * decision about asking for the CV, so the piece stays one glance tall.
 */
export function Resume({ className = '' }: { className?: string }) {
  return (
    <section id="resume" className={`relative scroll-mt-24 py-16 md:py-20 ${className}`}>
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-md text-center">
            <figure className="mx-auto aspect-square max-w-[15rem] overflow-hidden rounded-full border border-line bg-raised shadow-[0_20px_50px_rgba(5,2,12,0.35)]">
              <img
                src={`${import.meta.env.BASE_URL}moni_avtar.webp`}
                alt={`${profile.name}, Computer Science & Artificial Intelligence undergraduate in Jaipur`}
                width={1254}
                height={1254}
                fetchPriority="low"
                decoding="sync"
                className="h-full w-full object-cover"
              />
            </figure>

            <h2 className="display-md mt-8 text-ink">{profile.name}</h2>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-3">
              {profile.role} · {profile.location}
            </p>

            <div className="mt-8">
              <Button
                href={profile.resume.href}
                iconEnd={<Download className="size-4" strokeWidth={2} aria-hidden="true" />}
                variant="primary"
              >
                {profile.resume.label}
              </Button>
              <p className="mt-3 text-[0.8125rem] text-ink-4">{profile.resume.size}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}