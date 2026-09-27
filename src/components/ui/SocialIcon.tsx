import { siGeeksforgeeks, siGithub, siLeetcode } from 'simple-icons'
import { Mail, Workflow } from 'lucide-react'

export type SocialIconId = 'github' | 'linkedin' | 'leetcode' | 'gfg' | 'email'

type Props = {
 id: SocialIconId
 className?: string
 colored?: boolean
}

/** Generic "in" mark — brand sets no longer ship a monochrome LinkedIn glyph. */
const LINKEDIN_PATH =
 'M2 2h20v20H2V2Zm5.2 3.4a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM6.4 10.4h2.4v7.2H6.4v-7.2Zm4 0h2.3v1c.35-.65 1-1.2 2-1.2 1.55 0 2.9 1 2.9 3.2v4.2h-2.4v-3.7c0-1-.4-1.7-1.3-1.7-.95 0-1.5.65-1.5 1.75v3.65h-2.4v-7.2Z'

export function SocialIcon({ id, className = 'size-4', colored = false }: Props) {
 if (id === 'github') {
 return (
 <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
 <path d={siGithub.path} fill={colored ? `#${siGithub.hex}` : 'currentColor'} />
 </svg>
 )
 }

 if (id === 'leetcode') {
 return (
 <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
 <path d={siLeetcode.path} fill={colored ? `#${siLeetcode.hex}` : 'currentColor'} />
 </svg>
 )
 }

 if (id === 'linkedin') {
 return (
 <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
 <path
 d={LINKEDIN_PATH}
 fill={colored ? '#0a66c2' : 'currentColor'}
 fillRule="evenodd"
 clipRule="evenodd"
 />
 </svg>
 )
 }

 if (id === 'gfg') {
 return (
 <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
 <path d={siGeeksforgeeks.path} fill={colored ? `#${siGeeksforgeeks.hex}` : 'currentColor'} />
 </svg>
 )
 }

 if (id === 'email') {
 return <Mail className={className} strokeWidth={1.6} aria-hidden="true" />
 }

 return <Workflow className={className} strokeWidth={1.6} aria-hidden="true" />
}
