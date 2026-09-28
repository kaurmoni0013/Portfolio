import { Contact } from '../components/sections/Contact'
import { PageHeader } from '../components/ui/PageHeader'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Connect"
        lede="Open to software engineering and full-stack/backend-focused internship opportunities, and always interested in building and learning through real-world projects."
      />
      <Contact />
    </>
  )
}