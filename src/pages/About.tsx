import { About } from '../components/sections/About'
import { TechnicalSkillset } from '../components/sections/TechnicalSkillset'
import { CurrentlyLearning } from '../components/sections/CurrentlyLearning'
import { Certificates } from '../components/sections/Certificates'
import { Reveal } from '../components/ui/Reveal'

export default function AboutPage() {
  return (
    <>
      <header className="pt-[calc(var(--nav-h)+clamp(2.5rem,7vw,5.5rem))] pb-14 md:pb-20">
        <div className="shell">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="display-lg font-bold tracking-tight text-ink uppercase sm:text-4xl md:text-5xl">
                Know Who <span className="text-accent">I&rsquo;M</span>
              </h1>
            </div>
          </Reveal>
        </div>
      </header>

      <About />
      <TechnicalSkillset />
      <CurrentlyLearning />
      <Certificates />
    </>
  )
}