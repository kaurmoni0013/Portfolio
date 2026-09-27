import {
  siCss,
  siCplusplus,
  siDocker,
  siExpress,
  siFastapi,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siLinux,
  siMongodb,
  siMysql,
  siNodedotjs,
  siPostman,
  siPython,
  siReact,
  siRedis,
  siTailwindcss,
  siTypescript,
  siVite,
  type SimpleIcon,
} from 'simple-icons'
import {
  Braces,
  Cpu,
  Database,
  GitBranch,
  KeyRound,
  Network,
  Radio,
  Terminal,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import type { TechKey } from '../data/skills'

export type Brand = { kind: 'brand'; icon: SimpleIcon }
export type Line = { kind: 'line'; icon: LucideIcon; accent: string }
export type Glyph = { kind: 'glyph'; accent: string; path: string }

/** Technologies with an official monochrome mark. */
export const brands: Partial<Record<TechKey, Brand>> = {
  cplusplus: { kind: 'brand', icon: siCplusplus },
  javascript: { kind: 'brand', icon: siJavascript },
  typescript: { kind: 'brand', icon: siTypescript },
  sql: { kind: 'brand', icon: siMysql },
  html: { kind: 'brand', icon: siHtml5 },
  css: { kind: 'brand', icon: siCss },
  react: { kind: 'brand', icon: siReact },
  node: { kind: 'brand', icon: siNodedotjs },
  express: { kind: 'brand', icon: siExpress },
  mongodb: { kind: 'brand', icon: siMongodb },
  redis: { kind: 'brand', icon: siRedis },
  docker: { kind: 'brand', icon: siDocker },
  git: { kind: 'brand', icon: siGit },
  github: { kind: 'brand', icon: siGithub },
  linux: { kind: 'brand', icon: siLinux },
  postman: { kind: 'brand', icon: siPostman },
  python: { kind: 'brand', icon: siPython },
  fastapi: { kind: 'brand', icon: siFastapi },
  tailwind: { kind: 'brand', icon: siTailwindcss },
  vite: { kind: 'brand', icon: siVite },
}

/** Practices and concepts, drawn as neutral line marks. */
export const lines: Partial<Record<TechKey, Line>> = {
  rest: { kind: 'line', icon: Braces, accent: '#c77af0' },
  jwt: { kind: 'line', icon: KeyRound, accent: '#78c7b5' },
  sse: { kind: 'line', icon: Radio, accent: '#c77af0' },
  reactquery: { kind: 'line', icon: GitBranch, accent: '#78c7b5' },
  openrouter: { kind: 'line', icon: Network, accent: '#a787eb' },
  vscode: { kind: 'line', icon: Braces, accent: '#c77af0' },
  dsa: { kind: 'line', icon: GitBranch, accent: '#78c7b5' },
  algorithms: { kind: 'line', icon: Workflow, accent: '#c77af0' },
  oop: { kind: 'line', icon: Cpu, accent: '#a787eb' },
  dbms: { kind: 'line', icon: Database, accent: '#78c7b5' },
  os: { kind: 'line', icon: Terminal, accent: '#c77af0' },
  networks: { kind: 'line', icon: Network, accent: '#a787eb' },
  systemdesign: { kind: 'line', icon: Workflow, accent: '#78c7b5' },
}

/** Java has no monochrome mark in the icon set; a cup silhouette reads
 *  clearly at 20px and stays consistent with the rest of the grid. */
export const glyphs: Partial<Record<TechKey, Glyph>> = {
  java: {
    kind: 'glyph',
    accent: '#e0bb8a',
    path: 'M4 8h11v5a4.5 4.5 0 0 1-4.5 4.5h-2A4.5 4.5 0 0 1 4 13V8Zm11 1.5h1.8a2.7 2.7 0 0 1 0 5.4H15M6 5.5c0-.8.9-1.2.9-2S6 2 6 2M9.4 5.5c0-.8.9-1.2.9-2s-.9-1.5-.9-1.5',
  },
}

const FALLBACK = '#a99ab7'

/** The single hue associated with a technology, used for hover tints. */
export function getTechAccent(key: TechKey): string {
  const brand = brands[key]
  if (brand) return `#${brand.icon.hex}`
  const line = lines[key]
  if (line) return line.accent
  const glyph = glyphs[key]
  if (glyph) return glyph.accent
  return FALLBACK
}
