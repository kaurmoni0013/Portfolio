import { Projects } from '../components/sections/Projects'
import { PageHeader } from '../components/ui/PageHeader'

export default function ProjectsPage() {
 return (
 <>
<PageHeader
  eyebrow="Projects"
  title="Things I built, and the hard parts."
  lede="Two products I could defend in a code review, plus earlier projects that built my foundation. Every link is a real repository or deployment."
/>
 <Projects />
 </>
 )
}
