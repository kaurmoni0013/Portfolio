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
 * The MediQueue appointment lifecycle, drawn as a plain diagram. Every state
 * and rule is legible without JavaScript and nothing moves once rendered.
 */
export function StateMachine() {
 return (
 <div className="relative">
 <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
 {STEPS.map((step, i) => (
 <div key={step.id} className="relative flex gap-4 pb-8 lg:pb-0">
 {/* connector */}
 {i < STEPS.length - 1 ? (
 <span
 aria-hidden="true"
 className="absolute top-7 left-[0.9375rem] hidden h-px w-[calc(100%-0.5rem)] bg-line lg:block"
 />
 ) : null}

 <span
 aria-hidden="true"
 className="relative grid size-8 shrink-0 place-items-center rounded-full border border-line bg-raised font-mono text-[0.75rem] text-ink-3"
 >
 {i + 1}
 </span>

 <div className="min-w-0 pb-2 lg:pr-6">
 <div className="flex flex-wrap items-center gap-2">
 <h3 className="display-sm font-600 text-ink">
 {step.label}
 </h3>
 <span className="rounded-full border border-line-soft px-2 py-0.5 text-[0.75rem] text-ink-3">
 {step.actor}
 </span>
 </div>
 <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-3">{step.note}</p>
 </div>
 </div>
 ))}
 </div>

 <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line-soft pt-5">
 <span className="inline-flex items-baseline gap-2 text-[0.8125rem] leading-relaxed text-ink-4">
 <span className="size-1.5 shrink-0 translate-y-px rounded-full bg-ink-4" aria-hidden="true" />
 Branch: Cancelled — requires a reason, patient from Scheduled, staff from Scheduled or
 Waiting
 </span>
 <span className="inline-flex items-baseline gap-2 text-[0.8125rem] leading-relaxed text-ink-4">
 <Check className="size-3 shrink-0 translate-y-0.5 text-teal" strokeWidth={2} aria-hidden="true" />
 Illegal moves return 409 with a specific code
 </span>
 </div>
 </div>
 )
}
