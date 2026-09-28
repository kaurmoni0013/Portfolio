import { Contact } from '../components/sections/Contact'
import { PageHeader } from '../components/ui/PageHeader'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Connect"
        lede="I'm interested in software engineering opportunities, backend development, and projects where I can keep learning and building."
      />
      <Contact />
    </>
  )
}