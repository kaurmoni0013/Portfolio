export const profile = {
  name: 'Moni Kaur',
  initials: 'MK',
  role: 'Computer Science & Artificial Intelligence Undergraduate',
  location: 'Jaipur, Rajasthan, India',
  email: 'kaurmoni0013@gmail.com',
  tagline:
    'Full-Stack Developer focused on backend engineering, C++/DSA, and scalable system design.',
  summary:
    "I'm a Computer Science & Artificial Intelligence undergraduate at Arya College of Engineering & IT, Jaipur, graduating in 2028. I build complete web applications using the MERN stack — frontend, backend, database, authentication, and APIs — and my stronger interest is in what happens on the server: how requests are validated, how data is structured, and how systems hold up under real use. Alongside web development, I practice DSA regularly in C++ to strengthen algorithmic thinking and problem-solving patterns. I'm currently deepening my understanding of system design, scalable backend architecture, and DevOps/cloud concepts. I prefer building things that work correctly over things that look impressive, and I find the backend side of a product consistently more interesting to reason about.",
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
  { to: '/', label: 'Home', icon: 'home', nav: true },
  { to: '/about', label: 'About', icon: 'user', nav: true },
  { to: '/projects', label: 'Projects', icon: 'folder', nav: true },
  { to: '/contact', label: 'Contact', icon: 'mail', nav: true },
] as const

export type RoutePath = (typeof routes)[number]['to']