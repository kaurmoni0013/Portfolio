export type TechKey =
  | 'cplusplus'
  | 'java'
  | 'javascript'
  | 'typescript'
  | 'sql'
  | 'html'
  | 'css'
  | 'react'
  | 'node'
  | 'express'
  | 'rest'
  | 'jwt'
  | 'sse'
  | 'mongodb'
  | 'redis'
  | 'docker'
  | 'git'
  | 'github'
  | 'linux'
  | 'postman'
  | 'vscode'
  | 'openrouter'
  | 'python'
  | 'fastapi'
  | 'tailwind'
  | 'vite'
  | 'reactquery'
  | 'dsa'
  | 'oop'
  | 'dbms'
  | 'os'
  | 'networks'
  | 'systemdesign'
  | 'algorithms'

export type Skill = {
  key: TechKey
  name: string
  note: string
}

export type SkillGroup = {
  id: string
  label: string
  caption: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    caption: 'Core languages I write daily',
skills: [
      { key: 'cplusplus', name: 'C++', note: 'Primary language for DSA practice, problem solving, and coursework.' },
      { key: 'java', name: 'Java', note: 'OOP fundamentals, collections and exception handling.' },
      { key: 'javascript', name: 'JavaScript', note: 'ES modules, async patterns, and the DOM.' },
      { key: 'typescript', name: 'TypeScript', note: 'Static typing for scalable React/Node codebases.' },
      { key: 'sql', name: 'SQL', note: 'Joins, indexing, and relational query planning.' },
    ],
  },
  {
    id: 'fullstack',
    label: 'Full-Stack Development',
    caption: 'Complete applications — frontend through database, built and shipped',
    skills: [
      { key: 'react', name: 'React', note: 'Component design, hooks, custom queries, and route-level guards.' },
      { key: 'html', name: 'HTML', note: 'Semantic structure and accessible markup.' },
      { key: 'css', name: 'CSS', note: 'Layout, responsive design, and dark-first styling.' },
      { key: 'node', name: 'Node.js', note: 'Async runtimes, process lifecycle, graceful shutdown.' },
      { key: 'express', name: 'Express.js', note: 'Middleware, route-scoped validation, centralised errors.' },
      { key: 'mongodb', name: 'MongoDB', note: 'Schema design, compound and partial unique indexes.' },
      { key: 'rest', name: 'REST APIs', note: 'Resource design, status codes, machine-readable errors.' },
      { key: 'jwt', name: 'Authentication', note: 'JWT cookies, bcrypt hashing, session revocation, RBAC.' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend Engineering',
    caption: 'Server-side depth — reliability, coordination, and data integrity',
    skills: [
      { key: 'node', name: 'Node.js', note: 'Async runtimes, process lifecycle, graceful shutdown.' },
      { key: 'express', name: 'Express.js', note: 'Middleware, route-scoped validation, centralised errors.' },
      { key: 'sse', name: 'Server-Sent Events', note: 'Streaming model output with abort and retry handling.' },
      { key: 'redis', name: 'Redis', note: 'Rate limits, token quotas, atomic reservations — used in Orbit AI.' },
      { key: 'mongodb', name: 'MongoDB', note: 'Schema design, compound and partial unique indexes.' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Environment',
    caption: 'Daily workflow and deployment',
    skills: [
      { key: 'git', name: 'Git', note: 'Branching, clean history, reviewable diffs.' },
      { key: 'github', name: 'GitHub', note: 'Actions pipelines that run real test suites.' },
      { key: 'linux', name: 'Linux', note: 'Shell comfort, permissions, processes, deployment.' },
      { key: 'docker', name: 'Docker', note: 'Compose stacks and single-origin production images.' },
    ],
  },
  {
    id: 'concepts',
    label: 'CS Foundations',
    caption: 'Coursework and self-study — theoretical foundations I build on',
    skills: [
      { key: 'dsa', name: 'Data Structures & Algorithms', note: 'Core DSA practice in C++.' },
      { key: 'algorithms', name: 'Algorithms', note: 'Sorting, searching, recursion, dynamic programming.' },
      { key: 'oop', name: 'OOP', note: 'Encapsulation, inheritance, polymorphism, interfaces.' },
      { key: 'dbms', name: 'DBMS', note: 'Normalisation, transactions, ACID, indexing.' },
      { key: 'os', name: 'Operating Systems', note: 'Processes, scheduling, memory, concurrency.' },
      { key: 'networks', name: 'Computer Networks', note: 'TCP/IP, HTTP, request lifecycle, DNS.' },
      { key: 'systemdesign', name: 'System Design Fundamentals', note: 'Caching, rate limiting, consistent hashing, messaging — currently deepening.' },
    ],
  },
]

/** Display name for every technology key, derived from the groups above. */
export const skillNames: Record<string, string> = Object.fromEntries(
  skillGroups.flatMap((g) => g.skills).map((s) => [s.key, s.name]),
)

export const marqueeItems = [
  'C++',
  'Java',
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Redis',
  'JWT',
  'REST APIs',
  'Git',
  'Docker',
  'Linux',
]