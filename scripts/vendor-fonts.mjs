/**
 * Copies the variable font families into src/assets/fonts as latin-only
 * woff2 files and prints the matching @font-face block, so the site ships no
 * third-party font request and no unused language subsets.
 * Run with `npm run fonts`.
 */
import { copyFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

const FAMILIES = [
  {
    module: '@fontsource-variable/fraunces',
    file: 'fraunces-latin-opsz-normal.woff2',
    family: 'Fraunces Variable',
    // Carries the weight axis plus optical size. No font-variation-settings
    // here on purpose: leaving opsz unset lets the default
    // `font-optical-sizing: auto` derive it from the computed font-size, so a
    // 100px heading gets hairline high-contrast serifs and a 14px subhead
    // gets sturdy ones from the same file.
  },
  {
    module: '@fontsource-variable/inter',
    file: 'inter-latin-wght-normal.woff2',
    family: 'Inter Variable',
  },
  {
    module: '@fontsource-variable/jetbrains-mono',
    file: 'jetbrains-mono-latin-wght-normal.woff2',
    family: 'JetBrains Mono Variable',
  },
]

const LATIN = 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'

const DEST = 'src/assets/fonts'
await mkdir(DEST, { recursive: true })

const blocks = []
for (const { module, file, family } of FAMILIES) {
  const src = join('node_modules', ...module.split('/'), 'files', file)
  await copyFile(src, join(DEST, file))
  blocks.push(
    `@font-face {\n` +
      `  font-family: '${family}';\n` +
      `  font-style: normal;\n` +
      `  font-display: swap;\n` +
      `  font-weight: 100 900;\n` +
      `  src: url('./assets/fonts/${file}') format('woff2-variations');\n` +
      `  unicode-range: ${LATIN};\n` +
      `}`,
  )
  console.log(`src/assets/fonts/${file}`)
}

console.log('\n--- paste into index.css ---\n')
console.log(blocks.join('\n\n'))
