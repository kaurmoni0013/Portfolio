import { About } from '../components/sections/About'
import { Certificates } from '../components/sections/Certificates'
import { Journey } from '../components/sections/Journey'
import { BackendSystemDesign } from '../components/sections/BackendSystemDesign'
import { CurrentlyExploring } from '../components/sections/CurrentlyExploring'
import { Button } from '../components/ui/Button'
import { PageHeader } from '../components/ui/PageHeader'
import { profile } from '../data/profile'

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About me"
        title="The short version, and the long version."
        lede={profile.summary}
      >
        <div className="flex flex-wrap gap-3">
          <Button href={profile.resume.href} variant="ghost" download>
            Download résumé
          </Button>
          <Button href="/contact" variant="quiet">
            Get in touch
          </Button>
        </div>
      </PageHeader>

      <About />
      <BackendSystemDesign />
      <CurrentlyExploring />
      <Journey />
      <Certificates />
    </>
  )
}