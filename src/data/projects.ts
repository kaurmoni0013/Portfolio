import type { TechKey } from './skills'

export type ProjectLink = {
  label: string
  href: string
  kind: 'live' | 'repo'
}

export type Project = {
  id: string
  name: string
  kicker: string
  year: string
  summary: string
  /** One short description, written in points, for the compact public listing. */
  points?: string[]
  /** 2–4 engineering focus tags shown on the compact public listing. */
  focus?: string[]
  image?: string
  imageAlt?: string
  tech: TechKey[]
  links: ProjectLink[]
  highlights?: string[]
}

export const featuredProjects: Project[] = [
  {
    id: 'mediqueue',
    name: 'MediQueue',
    kicker: 'Clinic Appointment & Queue Management System',
    year: '2026',
    summary:
      'A MERN application that replaces a small clinic’s paper register with appointment booking, a live patient queue and wait-time estimates, split across four role-specific portals. Every rule — slot conflicts, who may transition an appointment, who may read a consultation — is enforced on the server rather than in the UI.',
    image: 'projects/mediqueue.webp',
    imageAlt: 'MediQueue clinic dashboard interface',
    tech: ['react', 'node', 'express', 'mongodb', 'jwt', 'reactquery', 'vite'],
    points: [
      'Appointment booking with a live queue and wait-time estimates',
      'Four role-specific portals where every rule is enforced server-side',
      'Slots that two patients can never hold at the same time',
      'Sign-out that revokes every token the user ever held',
    ],
    focus: ['Race-safe booking', 'Server-enforced RBAC', 'JWT revocation', 'End-to-end API tests'],
    links: [
      { label: 'Live Demo', href: 'https://mediqueue-1cu4.onrender.com', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/kaurmoni0013/MediQueue', kind: 'repo' },
    ],
    highlights: [
      'Race-safe booking — slots are re-verified at booking time and protected by a partial unique index on (doctor, date, startTime) scoped to active statuses, so two patients can never hold the same slot even under simultaneous requests.',
      'Queue as a view, not a table — position and ETA are derived on read from active appointments, so they cannot drift out of sync with the database.',
      'RBAC enforced twice — client-side route guards and server middleware, backed by per-record ownership checks so a patient cannot open someone else’s visit.',
      'JWT session revocation — signing out bumps a per-user token version, invalidating every token previously issued to that user.',
      'Hardened by default — bcrypt, helmet, global and auth-scoped rate limits, centralised error mapping with no stack-trace leaks, and a production boot that refuses to run on the default JWT secret.',
      'Verified continuously — a 67-check end-to-end API suite covering auth, role guards, the status machine, rate limits, revocation and slot conflicts, run on every push.',
    ],
  },
  {
    id: 'orbit-ai',
    name: 'Orbit AI',
    kicker: 'Full-Stack AI Conversation Workspace',
    year: '2026',
    summary:
      'An AI chat workspace built for sustained use rather than one-off prompts: persistent conversations with bounded context and rolling summaries, streaming responses, and a usage model that cannot be overrun. Redis handles coordination while MongoDB transactions keep paired messages and usage totals consistent.',
    image: 'projects/orbit-ai.webp',
    imageAlt: 'Orbit AI conversation workspace interface',
    tech: ['react', 'node', 'express', 'mongodb', 'redis', 'openrouter', 'sse', 'docker'],
    points: [
      'Persistent conversations with bounded, rolling context',
      'Streaming responses that fail safely and never double-charge quota',
      'Coordinate via Redis, write messages and usage atomically in MongoDB',
    ],
    focus: ['SSE streaming', 'Atomic quota reservations', 'Idempotent retries', 'Redis locks'],
    links: [
      { label: 'Live Demo', href: 'https://orbit-ai-k1m5.onrender.com', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/kaurmoni0013/Orbit-AI', kind: 'repo' },
    ],
    highlights: [
      'Streaming that fails safely — Server-Sent Events with first-byte and idle timeouts, bounded retries on transient provider errors, and provider requests aborted when the client disconnects.',
      'Atomic quota reservations — Redis reserves a token window before the provider call and reconciles it against real usage afterwards; reservations are released on failure, so quota is never double-charged.',
      'Idempotent retries — an idempotency key replays a completed response from the database instead of calling the provider and billing usage a second time.',
      'Concurrency locks — short-lived Redis locks stop duplicate summary jobs when a conversation crosses its summarisation threshold.',
      'Transactional persistence — the message pair and usage totals are written in a single MongoDB transaction, and only after a stream finishes successfully.',
      'Bounded AI integration — server-side model allowlist, capped message size, a character budget for assembled context, and provider-reported usage recorded rather than estimated.',
    ],
  },
]

export const selectedProjects: Project[] = [
  {
    id: 'solar-system',
    name: 'Solar System',
    kicker: 'Animated CSS model',
    year: '2025',
    summary:
      'An interactive solar system built with HTML and CSS — planetary orbits, layered CSS animation and a responsive layout that holds up on a phone.',
    image: 'projects/solar-system.webp',
    imageAlt: 'Animated solar system with orbiting planets',
    tech: ['html', 'css', 'javascript'],
    links: [
      { label: 'Live', href: 'https://kaurmoni0013.github.io/Solar-System/', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/kaurmoni0013/Solar-System', kind: 'repo' },
    ],
  },
  {
    id: 'tic-tac-toe',
    name: 'Tic Tac Toe',
    kicker: 'Vanilla JavaScript game',
    year: '2025',
    summary:
      'A clean two-player implementation with winner and draw detection, restart handling and a responsive board — no framework, just DOM logic.',
    image: 'projects/tic-tac-toe.webp',
    imageAlt: 'Tic tac toe game board',
    tech: ['html', 'css', 'javascript'],
    links: [
      { label: 'Live', href: 'https://kaurmoni0013.github.io/tic-tac-toe-javascript/', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/kaurmoni0013/tic-tac-toe-javascript', kind: 'repo' },
    ],
  },
  {
    id: 'love-calculator',
    name: 'Love Calculator',
    kicker: 'HTML · CSS · JavaScript',
    year: '2025',
    summary:
      'A small playful app with an animated result reveal and a progress bar — my first pass at making browser animation feel deliberate rather than decorative.',
    image: 'projects/love-calculator.webp',
    imageAlt: 'Love calculator result screen',
    tech: ['html', 'css', 'javascript'],
    links: [
      { label: 'Live', href: 'https://kaurmoni0013.github.io/Love-Calculator/', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/kaurmoni0013/Love-Calculator', kind: 'repo' },
    ],
  },
  {
    id: 'random-quote',
    name: 'Random Quote',
    kicker: 'Quote generator with API integration',
    year: '2025',
    summary:
      'A responsive quote generator that pulls from a public API and handles the failure cases — loading, empty and error states — instead of only the happy path.',
    image: 'projects/random-quote.webp',
    imageAlt: 'Random quote generator interface',
    tech: ['html', 'css', 'javascript'],
    links: [
      { label: 'Live', href: 'https://kaurmoni0013.github.io/Random-Quote-Generator/', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/kaurmoni0013/Random-Quote-Generator', kind: 'repo' },
    ],
  },
  {
    id: 'snake-game-cpp',
    name: 'Snake Game',
    kicker: 'C++ · console',
    year: '2025',
    summary:
      'The classic snake game written in C++, with collision handling, speed progression and a high score persisted to disk between sessions.',
    tech: ['cplusplus'],
    links: [{ label: 'GitHub', href: 'https://github.com/kaurmoni0013/snake-game-cpp', kind: 'repo' }],
  },
]
