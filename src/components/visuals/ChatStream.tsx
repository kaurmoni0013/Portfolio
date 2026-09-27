import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Square } from 'lucide-react'
import { usePrefersReducedMotion } from '../../lib/useMediaQuery'

const USER_MESSAGE = 'Summarise this thread so I can pick it up tomorrow.'

const REPLY =
  'Rolling summary stored in MongoDB and rebuilt as the thread crosses its summarisation threshold. A short-lived Redis lock stops two summaries writing at once, so the context you get back is never half-written.'

type Phase = 'typing' | 'done'

/**
 * A looping illustration of the Orbit AI streaming interaction: the prompt
 * lands, the response streams in token by token, then the loop resets.
 * Purely decorative — it makes no network request — and it renders as a
 * finished conversation when reduced motion is requested.
 */
export function ChatStream() {
  const reduce = usePrefersReducedMotion()
  const [phase, setPhase] = useState<Phase | 'user'>('user')
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (reduce) return

    const timers: number[] = []
    let charTimer = 0

    timers.push(window.setTimeout(() => setPhase('typing'), 900))

    charTimer = window.setInterval(() => {
      setCount((c) => {
        if (c >= REPLY.length) {
          window.clearInterval(charTimer)
          timers.push(window.setTimeout(() => setPhase('done'), 240))
          return c
        }
        return c + 1
      })
    }, 26)

    return () => {
      window.clearInterval(charTimer)
      timers.forEach(window.clearTimeout)
    }
  }, [reduce])

  // Under reduced motion the same markup is shown in its finished state.
  const settled = reduce
  const current: Phase = settled ? 'done' : phase === 'user' ? 'typing' : phase
  const streamed = settled ? REPLY : REPLY.slice(0, count)

  return (
    <div className="panel overflow-hidden">
      <div className="flex items-center gap-3 border-b border-line-soft px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-ink-5" />
          <span className="size-2 rounded-full bg-ink-5/70" />
          <span className="size-2 rounded-full bg-ink-5/45" />
        </span>
        <span className="font-mono text-[0.625rem] tracking-[0.18em] text-ink-4 uppercase">
          Thread — architecture notes
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[0.5625rem] tracking-[0.16em] text-ink-4 uppercase">
          <span className="animate-pulse-dot size-1.5 rounded-full bg-teal" aria-hidden="true" />
          SSE
        </span>
      </div>

      <div className="min-h-[15.5rem] space-y-4 p-5 sm:min-h-[14rem]">
        <motion.div
          initial={settled ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md border border-line-soft bg-white/[0.045] px-4 py-2.5"
        >
          <p className="text-[0.8125rem] leading-relaxed text-ink">{USER_MESSAGE}</p>
        </motion.div>

        {streamed.length > 0 ? (
          <motion.div
            initial={settled ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[92%] rounded-2xl rounded-bl-md border border-line-soft bg-raised px-4 py-3"
          >
            <p className="text-[0.8125rem] leading-relaxed text-ink-2">
              {streamed}
              {current === 'typing' ? (
                <span className="animate-caret ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] bg-accent" />
              ) : null}
            </p>

            {current === 'done' ? (
              <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-line-soft pt-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line-soft px-2.5 py-1 font-mono text-[0.5625rem] tracking-[0.14em] text-ink-4 uppercase">
                  <Check className="size-2.5 text-teal" strokeWidth={2.4} aria-hidden="true" />
                  Saved
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line-soft px-2.5 py-1 font-mono text-[0.5625rem] tracking-[0.14em] text-ink-4 uppercase">
                  <Square className="size-2 fill-current" strokeWidth={0} aria-hidden="true" />
                  Stop
                </span>
                <span className="font-mono text-[0.5625rem] tracking-[0.14em] text-ink-4 uppercase">
                  Retry
                </span>
              </div>
            ) : null}
          </motion.div>
        ) : null}
      </div>

      <div className="border-t border-line-soft px-5 py-3.5">
        <p className="text-[0.6875rem] text-ink-4">
          Interface illustration of the streaming response — decorative, no request is made.
        </p>
      </div>
    </div>
  )
}
