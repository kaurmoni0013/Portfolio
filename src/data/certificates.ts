export type Credential = {
  id: string
  title: string
  issuer: string
  period: string
  /** Only set where the certificate itself states an award or grade. */
  credential?: string
  tone: 'elite' | 'silver' | 'completed' | 'participation'
  file: string
  fileLabel: string
  logo?: string
}

export const nptelTone = {
  elite: 'Elite',
  silver: 'Silver',
  completed: 'Completed',
} as const

export const certificates: Credential[] = [
  {
    id: 'nptel-cpp',
    title: 'Programming in Modern C++',
    issuer: 'NPTEL',
    period: 'Jul — Oct 2025 · 12 weeks',
    credential: 'Elite',
    tone: 'elite',
    file: 'certificates/cpp.pdf',
    fileLabel: 'NPTEL25CS144',
    logo: 'certs/nptel.webp',
  },
  {
    id: 'nptel-java',
    title: 'Programming in Java',
    issuer: 'NPTEL',
    period: 'Jan — Apr 2026 · 12 weeks',
    credential: 'Silver',
    tone: 'silver',
    file: 'certificates/java.pdf',
    fileLabel: 'NPTEL26CS36S',
    logo: 'certs/nptel.webp',
  },
  {
    id: 'nptel-oop',
    title: 'Fundamentals of Object Oriented Programming',
    issuer: 'NPTEL',
    period: 'Jan — Apr 2026 · 12 weeks',
    credential: 'Silver',
    tone: 'silver',
    file: 'certificates/oops.pdf',
    fileLabel: 'NPTEL26CS87S',
    logo: 'certs/nptel.webp',
  },
  {
    id: 'nptel-dsa',
    title: 'Data Structures and Algorithms Design',
    issuer: 'NPTEL',
    period: 'Jul — Oct 2025 · 12 weeks',
    credential: 'Completed',
    tone: 'completed',
    file: 'certificates/dsa.pdf',
    fileLabel: 'NPTEL25CS81S',
    logo: 'certs/nptel.webp',
  },
  {
    id: 'buildx',
    title: 'BuildX Hackathon',
    issuer: 'BuildX',
    period: 'Hackathon certificate',
    tone: 'participation',
    file: 'certificates/Build-X Hackathon.pdf',
    fileLabel: 'Certificate',
    logo: 'certs/buildx.webp',
  },
  {
    id: 'sih',
    title: 'Smart India Hackathon',
    issuer: 'Smart India Hackathon',
    period: 'RailQR-Mark · team participant',
    credential: 'Participation',
    tone: 'participation',
    file: 'certificates/sih.pdf',
    fileLabel: 'Certificate',
    logo: 'certs/sih.webp',
  },
  {
    id: 'hacknexus',
    title: 'HackNexus 2026',
    issuer: 'HackNexus',
    period: '2026',
    credential: 'Participation',
    tone: 'participation',
    file: 'certificates/hack-nexus.pdf',
    fileLabel: 'Certificate',
    logo: 'certs/hacknexus.webp',
  },
]
