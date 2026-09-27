import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'

const STEPS = [
  {
    id: 'scheduled',
    label: 'Scheduled',
    actor: 'Patient',
    note: 'Booked against a doctor’s published slot',
  },
  {
    id: 'waiting',
    label: 'Waiting',
    actor: 'Staff',
    note: 'Front desk checks the patient in',
  },
  {
    id: 'in-consult',
    label: 'In Consult',
    actor: 'Doctor',
    note: 'Only the assigned doctor can start',
  },
  {
    id: 'completed',
    label: 'Completed',
    actor: 'Doctor',
    note: 'Requires clinical notes or a prescription',
  },
]

/**
 * The MediQueue appointment lifecycle. Each step is filled in sequence as
 * the block enters the viewport, so the rule reads left to right the way the
 * service layer enforces it. `CANCELLED` sits off the main line because it
 * branches from Scheduled and Waiting.
 */
export function StateMachine() {
  const reduce = useReducedMotion()

  return (
    <div className="relative">
      <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <div key={step.id} className="relative flex gap-4 pb-8 lg:pb-0">
            {/* connector */}
            {i < STEPS.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute top-7 left-[0.9375rem] hidden h-px w-[calc(100%-0.5rem)] origin-left bg-line lg:block"
              >
                <motion.span
                  className="block h-px w-full origin-left bg-gradient-to-r from-accent/70 to-teal/50"
                  initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: '-15% 0px' }}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.22, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
            ) : null}

            <div className="relative shrink-0">
              <motion.span
                className="grid size-8 place-items-center rounded-full border border-line bg-raised font-mono text-[0.625rem] text-ink-3"
                initial={reduce ? false : { opacity: 0.4, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 0.5, delay: i * 0.16, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.span
                  className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.35),transparent_70%)]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.16 }}
                />
                {i + 1}
              </motion.span>
            </div>

            <motion.div
              className="min-w-0 pb-2 lg:pr-6"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-mono text-[0.75rem] font-500 tracking-[0.06em] text-ink uppercase">
                  {step.label}
                </h4>
                <span className="rounded-full border border-line-soft px-2 py-0.5 font-mono text-[0.5625rem] tracking-[0.14em] text-ink-4 uppercase">
                  {step.actor}
                </span>
              </div>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-3">{step.note}</p>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line-soft pt-5">
        <span className="inline-flex items-center gap-2 font-mono text-[0.625rem] tracking-[0.14em] text-ink-4 uppercase">
          <span className="size-1.5 rounded-full bg-ink-4" aria-hidden="true" />
          Branch: Cancelled — requires a reason, patient from Scheduled, staff from Scheduled or Waiting
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-[0.625rem] tracking-[0.14em] text-ink-4 uppercase">
          <Check className="size-3 text-teal" strokeWidth={2} aria-hidden="true" />
          Illegal moves return 409 with a specific code
        </span>
      </div>
    </div>
  )
}
