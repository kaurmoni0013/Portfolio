export const profile = {
  name: 'Moni Kaur',
  initials: 'MK',
  role: 'Frontend & Full-Stack Developer · CS & AI Undergraduate',
  location: 'Jaipur, Rajasthan, India',
  email: 'kaurmoni0013@gmail.com',
  tagline:
    'Thoughtful code, joyful experiences, and a little bit of magic.',
  summary:
    "I'm a B.Tech Computer Science & AI undergraduate graduating in 2028, based in Jaipur. I build full-stack projects with a frontend-first eye for clear layouts and thoughtful details, using React, the MERN stack, and C++. I love making useful web experiences and learning how great products work behind the scenes.",
  resume: {
    label: 'Download Resume',
    href: 'Moni_Kaur_Resume.pdf',
    size: 'PDF · 92 KB',
  },
} as const

export const socials = [
  { id: 'github', label: 'GitHub', handle: 'kaurmoni0013', href: 'https://github.com/kaurmoni0013' },
  { id: 'linkedin', label: 'LinkedIn', handle: 'in/kaurmoni0013', href: 'https://www.linkedin.com/in/kaurmoni0013' },
  { id: 'leetcode', label: 'LeetCode', handle: 'u/kaurmoni0013', href: 'https://leetcode.com/u/kaurmoni0013/' },
  { id: 'gfg', label: 'GeeksforGeeks', handle: 'user/kaurmoni0013', href: 'https://www.geeksforgeeks.org/user/kaurmoni0013/' },
  { id: 'email', label: 'Email', handle: 'kaurmoni0013@gmail.com', href: 'mailto:kaurmoni0013@gmail.com' },
] as const

/**
 * The site's pages. `to` is a react-router path relative to the site basename;
 * `nav: false` keeps a page out of the header (it is still reachable).
 */
export const routes = [
  { to: '/', label: 'Home', nav: true },
  { to: '/projects', label: 'Projects', nav: true },
  { to: '/about', label: 'About', nav: true },
  { to: '/contact', label: 'Contact', nav: true },
] as const

export type RoutePath = (typeof routes)[number]['to']
