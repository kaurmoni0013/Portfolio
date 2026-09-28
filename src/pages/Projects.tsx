import { Projects } from '../components/sections/Projects'
import { PageHeader } from '../components/ui/PageHeader'

export default function ProjectsPage() {
 return (
 <>
<PageHeader
        eyebrow="Projects"
        eyebrowClassName="text-[1.0625rem]"
        title="Things I've built and the engineering behind them."
        lede="A selection of full-stack applications and projects that helped me build stronger foundations in backend development, system design, and problem solving."
      />
 <Projects />
 </>
 )
}
