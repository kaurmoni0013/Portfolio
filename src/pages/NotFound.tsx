import { Link } from 'react-router-dom'
import { PageHeader } from '../components/ui/PageHeader'
import { Flourish } from '../components/ui/Flourish'
import { routes } from '../data/profile'

export default function NotFound() {
 return (
 <>
 <PageHeader
 eyebrow="404"
 title="That page doesn't exist."
 lede="The link may be old, or the address may have a typo in it."
 signed
 >
 <ul className="flex flex-wrap gap-3">
 {routes.map((r) => (
 <li key={r.to}>
 <Link
 to={r.to}
 className="inline-flex rounded-full border border-line px-4 py-2.5 text-[0.9375rem] text-ink-2 transition-colors duration-300 "
 >
 {r.label}
 </Link>
 </li>
 ))}
 </ul>
 </PageHeader>
 <div className="shell pb-24">
 <Flourish className="h-8 w-24" />
 </div>
 </>
 )
}
