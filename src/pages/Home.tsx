import { Hero } from '../components/sections/Hero'
import { Skills } from '../components/sections/Skills'
import { CurrentlyExploring } from '../components/sections/CurrentlyExploring'
import { profile } from '../data/profile'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'

export default function Home() {
  return (
    <>
      <Hero />

      {/* ------------------- INTRODUCTION ------------------- */}
      <section className="py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Let me introduce myself</p>

              <div className="mt-8 space-y-5 text-left text-[1.0rem] leading-relaxed text-ink-2 md:text-[1.0625rem]">
                <p>
                  I&rsquo;m Moni Kaur, a Computer Science &amp; Artificial Intelligence undergraduate
                  focused on Software Engineering and Full-Stack Development.
                </p>
                <p>
                  I primarily work with{' '}
                  <span className="text-accent-soft">C++, JavaScript, React.js, Node.js, Express.js, and MongoDB</span>,
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
                  <span className="text-ink">problem → architecture → implementation → deployment</span>.
                  My projects have given me practical experience with backend logic, authentication,
                  concurrency, security, APIs, and building interfaces that real users can interact with.
                </p>
                <p>
                  Currently, I&rsquo;m strengthening my skills in backend engineering, system design,
                  cloud, and DevOps while continuing to build production-oriented projects.
                </p>
                <p>
                  I&rsquo;m looking for opportunities where I can contribute as a Software Engineer,
                  learn from experienced teams, and take ownership of building reliable software.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Skills />

      <CurrentlyExploring />

      {/* ---------------------- sign off ---------------------- */}
      <section className="py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <div className="border-t border-line-soft pt-12">
              <h2 className="display-md text-ink">{profile.tagline}</h2>
              <p className="body-lg mt-5 max-w-xl">
                If you&rsquo;re hiring, mentoring, or just want to compare notes on full-stack or backend work,
                I&rsquo;d genuinely like to hear from you.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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