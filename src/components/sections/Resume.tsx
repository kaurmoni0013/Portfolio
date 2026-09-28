import { Download } from 'lucide-react'
import { profile } from '../../data/profile'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

/**
 * A dedicated resume block: a preview of the actual résumé document with a
 * download action sitting directly beneath it. Reused wherever a visitor is
 * making a yes/no decision about asking for the CV, so the piece stays one
 * glance tall.
 */
export function Resume({ className = '' }: { className?: string }) {
  return (
    <section id="resume" className={`relative scroll-mt-24 py-16 md:py-24 ${className}`}>
      <div className="shell">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <figure className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_20px_50px_rgba(5,2,12,0.35)]">
              <img
                src={`${import.meta.env.BASE_URL}moni-resume-preview.webp`}
                alt={`Preview of ${profile.name}'s résumé`}
                width={1500}
                height={1941}
                fetchPriority="high"
                decoding="sync"
                className="h-auto w-full object-contain"
              />
            </figure>

            <div className="mt-8 text-center">
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