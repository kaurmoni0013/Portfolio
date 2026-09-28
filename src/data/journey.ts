export const journey = [
  {
    id: 'start',
    period: '2024 —',
    title: 'B.Tech Computer Science & AI',
    place: 'Arya College of Engineering & IT, Jaipur',
    body: 'Started the degree with a strong CGPA of 9.4/10. Coursework across data structures, OOP, DBMS, operating systems, networks, web development and compiler design gave me the vocabulary; the projects gave me the practice.',
  },
  {
    id: 'cpp-dsa',
    period: '2025',
    title: 'C++ and Data Structures & Algorithms',
    place: 'Daily practice, mostly on LeetCode and GeeksforGeeks',
    body: 'C++ became the default language for problems. I kept every solution in dsa-cpp organised by topic, which is mostly why I can revisit the reasoning later and not just the answer.',
  },
  {
    id: 'web',
    period: '2025',
    title: 'Web fundamentals',
    place: 'HTML, CSS and vanilla JavaScript',
    body: 'Small front-end builds — a solar system model, Tic Tac Toe, a quote generator, a love calculator. Short projects, but they taught me layout, animation and the DOM properly.',
  },
  {
    id: 'mern',
    period: '2026',
    title: 'MERN full-stack',
    place: 'MediQueue — clinic appointment & queue system',
    body: 'Moved from front-end-only work to owning a backend. Auth, role-based access, a real appointment state machine, and a database index that makes double-booking impossible.',
  },
  {
    id: 'training',
    period: '2026',
    title: 'Industrial training — GRRAS Solutions Pvt. Ltd.',
    place: 'Full-stack web development (MERN), Jaipur',
    body: 'Structured training covering HTML, CSS, JavaScript and the MERN stack, with Orbit AI as the assigned project — applied end to end across frontend, backend, database, auth, Redis and AI API integration.',
  },
  {
    id: 'backend',
    period: '2026 —',
    title: 'Backend systems and production concerns',
    place: 'Orbit AI, Redis, Docker, CI',
    body: 'Streaming responses, token quotas, idempotent retries, transactional writes, rate limits and graceful shutdown. Learning what breaks when a third-party API is in the request path.',
  },
  {
    id: 'next',
    period: 'Next',
    title: 'System design and DevOps',
    place: 'Currently working on',
    body: 'Closing the gaps I know I have: deeper system design, stronger testing habits, and deployment I can rely on without watching a dashboard.',
  },
] as const

export const education = [
  {
    id: 'btech',
    degree: 'B.Tech — Computer Science & Artificial Intelligence',
    school: 'Arya College of Engineering & IT, Jaipur',
    period: '2024 — 2028 (expected)',
    detail: 'Currently in the 5th semester with a CGPA of 9.4/10.',
  },
] as const

export const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Operating Systems',
  'Computer Networks',
  'Web Development',
  'Compiler Design',
] as const

export const atAGlance = [
  { label: 'Degree', value: 'B.Tech — CS & AI' },
  { label: 'Institution', value: 'Arya College of Engineering & IT, Jaipur' },
  { label: 'Graduation', value: '2028 (expected)' },
  { label: 'Current CGPA', value: '9.4 / 10' },
  { label: 'Focus', value: 'Full-Stack Development · Backend Engineering · C++ / DSA' },
  { label: 'Looking for', value: 'Software Engineering / Backend internship' },
] as const

export const currentlyExploring = [
  {
    id: 'system-design',
    title: 'System Design',
    description:
      'Deepening my understanding of scalable backend architecture, caching, messaging, distributed systems fundamentals, and design trade-offs.',
  },
  {
    id: 'devops-cloud',
    title: 'DevOps / Cloud',
    description:
      'Currently expanding my knowledge of Docker, CI/CD, GitHub Actions, and cloud/DevOps workflows.',
  },
  {
    id: 'advanced-backend',
    title: 'Advanced Backend Engineering',
    description:
      'Continuing to learn about performance, scalability, caching, concurrency, and production-oriented backend architecture.',
  },
] as const