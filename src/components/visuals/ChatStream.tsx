import { Check, Square } from 'lucide-react'

const USER_MESSAGE = 'Summarise this thread so I can pick it up tomorrow.'

const REPLY =
 'Rolling summary stored in MongoDB and rebuilt as the thread crosses its summarisation threshold. A short-lived Redis lock stops two summaries writing at once, so the context you get back is never half-written.'

/**
 * A static illustration of the Orbit AI streaming interaction, shown in its
 * finished state. Nothing here animates or re-renders — it is a picture of a
 * conversation, not a simulation of one. Decorative, and no request is made.
 */
export function ChatStream() {
 return (
 <div className="panel overflow-hidden">
 <div className="flex items-center gap-3 border-b border-line-soft px-4 py-3">
 <span className="flex gap-1.5" aria-hidden="true">
 <span className="size-2 rounded-full bg-ink-5" />
 <span className="size-2 rounded-full bg-ink-5/70" />
 <span className="size-2 rounded-full bg-ink-5/45" />
 </span>
 <span className="text-[0.8125rem] text-ink-3">Thread — architecture notes</span>
 <span className="ml-auto inline-flex items-center gap-1.5 text-[0.75rem] text-ink-4">
 <span className="size-1.5 rounded-full bg-teal" aria-hidden="true" />
 SSE
 </span>
 </div>

 <div className="space-y-4 p-5">
 <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md border border-line-soft bg-white/[0.045] px-4 py-2.5">
 <p className="text-[0.8125rem] leading-relaxed text-ink">{USER_MESSAGE}</p>
 </div>

 <div className="max-w-[92%] rounded-2xl rounded-bl-md border border-line-soft bg-raised px-4 py-3">
 <p className="text-[0.8125rem] leading-relaxed text-ink-2">{REPLY}</p>

 <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-line-soft pt-3">
 <span className="inline-flex items-center gap-1.5 rounded-full border border-line-soft px-2.5 py-1 font-mono text-[0.6875rem] text-ink-3">
 <Check className="size-3 text-teal" strokeWidth={2.4} aria-hidden="true" />
 Saved
 </span>
 <span className="inline-flex items-center gap-1.5 rounded-full border border-line-soft px-2.5 py-1 font-mono text-[0.6875rem] text-ink-3">
 <Square className="size-2.5 fill-current" strokeWidth={0} aria-hidden="true" />
 Stop
 </span>
 <span className="font-mono text-[0.6875rem] text-ink-3">Retry</span>
 </div>
 </div>
 </div>

 <div className="border-t border-line-soft px-5 py-3.5">
 <p className="text-[0.75rem] text-ink-4">
 A still frame of the streaming response. Nothing here moves or re-renders, and no
 request is made.
 </p>
 </div>
 </div>
 )
}
