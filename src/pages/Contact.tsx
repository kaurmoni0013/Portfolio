import { Contact } from '../components/sections/Contact'
import { PageHeader } from '../components/ui/PageHeader'

export default function ContactPage() {
 return (
 <>
 <PageHeader
 eyebrow="Contact"
 title="Let's build something meaningful."
 lede="I'm looking for a software engineering or full-stack internship where I can keep building. If you have an opening, or you want to compare notes on a project, my inbox is open."
 signed
 />
 <Contact />
 </>
 )
}
