import type { Project } from '../../data/projects'
import { skillNames } from '../../data/skills'
import { TechChip } from './TechChip'

/** The stack, as chips. */
export function TechRow({ tech }: { tech: Project['tech'] }) {
 return (
 <ul className="flex flex-wrap gap-2">
 {tech.map((t) => (
 <li key={t}>
 <TechChip tech={t} label={skillNames[t] ?? t} />
 </li>
 ))}
 </ul>
 )
}
