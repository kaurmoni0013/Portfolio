import { Backdrop } from './components/layout/Backdrop'
import { Footer } from './components/layout/Footer'
import { Nav } from './components/layout/Nav'
import { About } from './components/sections/About'
import { Certificates } from './components/sections/Certificates'
import { Contact } from './components/sections/Contact'
import { Dsa } from './components/sections/Dsa'
import { Hero } from './components/sections/Hero'
import { Journey } from './components/sections/Journey'
import { StackBand } from './components/sections/StackBand'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-void focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
      >
        Skip to content
      </a>

      <Backdrop />

      <Nav />

      <main id="main">
        <Hero />
        <StackBand />
        <About />
        <Skills />
        <Projects />
        <Dsa />
        <Journey />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
