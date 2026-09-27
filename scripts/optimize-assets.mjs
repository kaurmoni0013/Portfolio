/**
 * One-off asset optimisation: re-encodes the portfolio's own screenshots and
 * logos to WebP at sensible display widths, then removes the PNG originals.
 * Run with `npm run assets`.
 */
import { readdir, rename, rm, stat } from 'node:fs/promises'
import { join } from 'node:path'
import sharp from 'sharp'

const PUBLIC = 'public'

/** Max display width, in CSS pixels, for each asset. */
const WIDTHS = {
  'portrait.png': 900,
  'projects/mediqueue.png': 1200,
  'projects/orbit-ai.png': 1400,
  'projects/solar-system.png': 900,
  'projects/tic-tac-toe.png': 800,
  'projects/love-calculator.png': 700,
  'projects/random-quote.png': 800,
  'certs/nptel.png': 160,
  'certs/sih.png': 160,
  'certs/hacknexus.png': 160,
  'certs/buildx.png': 160,
}

const toWebp = (name) => name.replace(/\.png$/, '.webp')

async function walk(dir, base = '') {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const rel = base ? `${base}/${entry.name}` : entry.name
    if (entry.isDirectory()) files.push(...(await walk(join(dir, entry.name), rel)))
    else files.push(rel)
  }
  return files
}

const before = await stat(join(PUBLIC, 'portrait.png')).size
const files = await walk(PUBLIC)

for (const file of files) {
  if (!file.endsWith('.png')) continue

  const src = join(PUBLIC, file)
  const dest = join(PUBLIC, toWebp(file))
  const width = WIDTHS[file]

  let pipeline = sharp(src)
  if (width) pipeline = pipeline.resize({ width, withoutEnlargement: true })
  await pipeline.webp({ quality: 82, effort: 5 }).toFile(dest)

  const [a, b] = await Promise.all([stat(src), stat(dest)])
  console.log(
    `${file.padEnd(32)} ${String(Math.round(a.size / 1024)).padStart(4)}KB -> ${String(
      Math.round(b.size / 1024),
    ).padStart(4)}KB`,
  )

  await rm(src)
  if (!width) await rename(dest, src)
}

void before
console.log('done')
