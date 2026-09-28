import { Reveal } from '../ui/Reveal'
import { profile } from '../../data/profile'

const focus = ['Full-Stack Developer', 'Backend Engineering', 'C++ / DSA', 'System Design']

const hobbies = [
  { icon: '🏸', label: 'Playing badminton' },
  { icon: '📚', label: 'Reading spiritual books' },
  { icon: '💻', label: 'Exploring new technologies and building projects' },
]

/**
 * The long-form introduction: avatar alongside the bio paragraphs, then the
 * focus areas, a few personal details, and a closing quote. Lives on the
 * About page, whose PageHeader carries the section heading.
 */
export function About({ className = '' }: { className?: string }) {
  return (
    <section id="about" className={`relative scroll-mt-24 py-16 md:py-20 ${className}`}>
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <figure className="mx-auto aspect-square max-w-sm overflow-hidden rounded-full border border-line bg-raised">
              <img
                src={`${import.meta.env.BASE_URL}moni_avtar.webp`}
                alt={`${profile.name}, Computer Science & Artificial Intelligence undergraduate in Jaipur`}
                width={1254}
                height={1254}
                fetchPriority="high"
                decoding="sync"
                className="h-full w-full object-cover"
              />
            </figure>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[1.0625rem] leading-relaxed text-ink-2">
                Hi! I&rsquo;m {profile.name}, a Computer Science &amp; Artificial Intelligence
                undergraduate from India, currently pursuing my B.Tech at Arya College of
                Engineering &amp; IT, Jaipur.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-2">
                I&rsquo;m a Full-Stack Developer who enjoys building complete web applications with a
                strong interest in backend engineering and system design. I work with the MERN stack
                and enjoy understanding what happens behind the interface — from APIs and
                authentication to databases, application logic, and scalability.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-2">
                Alongside development, I regularly practice Data Structures &amp; Algorithms in C++,
                focusing on problem-solving, patterns, and writing efficient solutions.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-2">
                I&rsquo;m currently deepening my knowledge of system design, scalable backend
                architecture, DevOps, and cloud technologies through projects and continuous
                learning.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {focus.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-line-soft px-3.5 py-1.5 text-[0.875rem] text-ink-3"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8">
                <p className="text-[0.8125rem] text-ink-4">Outside of coding, I enjoy:</p>
                <ul className="mt-3 space-y-2">
                  {hobbies.map((h) => (
                    <li key={h.label} className="flex items-center gap-3 text-[0.9375rem] text-ink-2">
                      <span aria-hidden="true">{h.icon}</span>
                      <span>{h.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2}>
          <blockquote className="mx-auto mt-16 max-w-2xl text-center md:mt-20">
            <p className="font-display text-[clamp(1.5rem,4vw,2.25rem)] font-500 tracking-tight text-ink">
              &ldquo;Build. Learn. Solve. Repeat.&rdquo;
            </p>
            <cite className="mt-4 block text-[0.8125rem] not-italic text-ink-4">— {profile.name}</cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}