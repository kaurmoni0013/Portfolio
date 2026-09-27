import { Check } from 'lucide-react'

/**
 * The "what made it non-trivial" list. Each item is authored as
 * "Lead — explanation", so the lead is set in the body weight and the rest in
 * muted ink rather than both being flattened into one run of text.
 */
export function HighlightList({ items }: { items: readonly string[] }) {
 return (
 <ul className="space-y-4">
 {items.map((item) => {
 const [lead, ...rest] = item.split(' — ')
 return (
 <li key={lead} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-2">
 <Check className="mt-[0.34rem] size-3.5 shrink-0 text-accent" strokeWidth={2.2} aria-hidden="true" />
 <p>
 {rest.length ? (
 <>
 <span className="font-medium text-ink">{lead}</span> — {rest.join(' — ')}
 </>
 ) : (
 lead
 )}
 </p>
 </li>
 )
 })}
 </ul>
 )
}
