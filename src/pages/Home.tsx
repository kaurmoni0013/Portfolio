import { Hero } from '../components/sections/Hero'
import { profile, socials } from '../data/profile'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { SocialIcon, type SocialIconId } from '../components/ui/SocialIcon'

export default function Home() {
  return (
    <>
      <Hero />

      {/* ------------------- INTRODUCTION ------------------- */}
      <section className="py-24 md:py-32 border-t border-line-soft/60">
        <div className="shell">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="display-lg text-ink font-bold tracking-tight uppercase sm:text-4xl md:text-5xl">
                LET ME <span className="text-accent">INTRODUCE</span> MYSELF
              </h2>

              <div className="mt-10 space-y-6 text-left text-[1.0625rem] leading-relaxed text-ink-2 md:text-[1.125rem] md:leading-loose bg-raised/40 p-8 md:p-12 rounded-3xl border border-line-soft backdrop-blur-sm">
                <p>
                  I&rsquo;m Moni Kaur, a Computer Science &amp; Artificial Intelligence undergraduate
                  focused on Software Engineering and Full-Stack Development.
                </p>
                <p>
                  I primarily work with{' '}
                  <span className="text-accent font-medium">C++, JavaScript, React.js, Node.js, Express.js, and MongoDB</span>,
                  and I have hands-on experience building real-world applications with REST APIs, JWT
                  authentication, role-based access control, database design, Redis, and AI API integration.
                </p>
                <p>
                  I have a strong foundation in DSA, OOP, DBMS, Operating Systems, and Computer Networks,
                  with 150+ DSA problems practiced in C++. I also have working knowledge of Java, MySQL,
                  Linux, Git/GitHub, Docker, and system-design concepts.
                </p>
                <p>
                  What I enjoy most is taking an idea from{' '}
                  <span className="text-ink font-semibold">problem → architecture → implementation → deployment</span>.
                  My projects have given me practical experience with backend logic, authentication,
                  concurrency, security, APIs, and building interfaces that real users can interact with.
                </p>
                <p>
                  Currently, I&rsquo;m strengthening my skills in backend engineering, system design,
                  cloud, and DevOps while continuing to build production-oriented projects.
                </p>
                <p className="font-medium text-ink">
                  I&rsquo;m looking for opportunities where I can contribute as a Software Engineer,
                  learn from experienced teams, and take ownership of building reliable software.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------- SIGN OFF ---------------------- */}
      <section className="py-20 md:py-24 border-t border-line-soft/60">
        <div className="shell">
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <h2 className="display-md text-ink">{profile.tagline}</h2>
                <p className="body-lg mt-5 max-w-xl text-ink-3">
                  If you&rsquo;re hiring, mentoring, or just want to compare notes on full-stack or backend work,
                  I&rsquo;d genuinely like to hear from you.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 lg:col-span-5 lg:justify-end">
                <Button href={`mailto:${profile.email}`} variant="primary">
                  Get in touch
                </Button>
                <Button href="/contact" variant="ghost">
                  Contact details
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------- FIND ME ON ------------------- */}
      <section className="py-20 md:py-28 border-t border-line-soft/60">
        <div className="shell">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="display-lg font-bold text-ink tracking-tight uppercase sm:text-3xl md:text-4xl">
                FIND ME ON
              </h2>
              <p className="mt-3 text-[1.0625rem] text-ink-3">
                Feel free to <span className="text-accent font-medium">connect</span> with me
              </p>

              <ul className="mt-8 flex items-center justify-center gap-5">
                {socials
                  .filter((s) => s.id === 'github' || s.id === 'linkedin' || s.id === 'email')
                  .map((s) => (
                    <li key={s.id}>
                      <a
                        href={s.href}
                        target={s.id === 'email' ? undefined : '_blank'}
                        rel={s.id === 'email' ? undefined : 'noopener noreferrer'}
                        className="grid size-13 place-items-center rounded-full border border-line-soft bg-raised text-ink-2 transition-all duration-300 hover:border-accent hover:text-accent hover:scale-110 shadow-lg"
                        aria-label={s.label}
                      >
                        <SocialIcon id={s.id as SocialIconId} className="size-5" />
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}