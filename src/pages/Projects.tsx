import { Projects } from '../components/sections/Projects'
import { PageHeader } from '../components/ui/PageHeader'

export default function ProjectsPage() {
 return (
 <>
 <PageHeader
 eyebrow="Projects"
 title="Things I built, and the hard parts."
 lede="Two products I could defend in a code review, one hackathon prototype, and the smaller builds that taught me the basics. Every link is a real repository or a real deployment."
 />
 <Projects />
 </>
 )
}
