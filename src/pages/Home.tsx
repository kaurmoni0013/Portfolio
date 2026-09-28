import { Hero } from '../components/sections/Hero'
import { CurrentlyExploring } from '../components/sections/CurrentlyExploring'
import { profile } from '../data/profile'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'

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
                LET ME INTRODUCE MYSELF
              </h2>

              <div className="mt-10 space-y-6 text-left text-[1.0625rem] leading-relaxed text-ink-2 md:text-[1.125rem] md:leading-loose bg-raised/40 p-8 md:p-12 rounded-3xl border border-line-soft">
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

      <CurrentlyExploring />

      {/* ---------------------- SIGN OFF ---------------------- */}
      <section className="py-24 md:py-32">
        <div className="shell">
          <Reveal>
            <div className="border-t border-line-soft pt-14">
              <h2 className="display-md text-ink max-w-2xl">{profile.tagline}</h2>
              <p className="body-lg mt-5 max-w-xl text-ink-3">
                If you&rsquo;re hiring, mentoring, or just want to compare notes on full-stack or backend work,
                I&rsquo;d genuinely like to hear from you.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
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
    </>
  )
}