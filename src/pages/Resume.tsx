import { PageHeader } from '../components/ui/PageHeader'
import { Resume } from '../components/sections/Resume'

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="Grab a copy of my résumé."
        lede="Everything on this site — projects, skills, and the work behind them — is summed up in one page. Download it whenever you'd like a snapshot."
      />
      <Resume />
    </>
  )
}