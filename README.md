# Moni Kaur — Portfolio

A single-page portfolio for Moni Kaur, B.Tech Computer Science & AI undergraduate (Arya College of Engineering & IT, Jaipur, 2028).

Every project, credential, metric and link on the page is taken from Moni's public GitHub profile and her previous portfolio. Nothing is invented: no testimonials, no follower counts, no fabricated outcomes, and no project that has no verifiable public source.

## Stack

- **Vite 8** + **React 19** + **TypeScript** (strict)
- **Tailwind CSS 4** via the Vite plugin, with design tokens declared in `@theme`
- **Framer Motion** for transitions and the few looping illustrations
- **Lucide** and **Simple Icons** for iconography
- **Oxlint** for linting

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # typecheck + production build into dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint
```

## Project layout

```
src/
  App.tsx                  page composition, skip link, preloader hand-off
  index.css                design tokens, base layer, utilities, keyframes
  assets/fonts/            self-hosted latin-only variable font files
  components/
    layout/                Backdrop, CustomCursor, Footer, Nav, Preloader
    sections/              one file per page section
    ui/                    Button, ProjectLinks, Reveal, Section, TechChip, ...
    visuals/               OrbitPanel, StateMachine, ChatStream
  data/                    all page content, as typed plain data
  lib/                     hooks and small helpers
public/
  certificates/            the actual NPTEL, SIH, HackNexus and BuildX PDFs
  projects/                project screenshots
```

Content lives entirely in `src/data/*`. Editing a project description, a certificate date or a skill note never requires touching a component.

## Performance and accessibility notes

- **Fonts are self-hosted.** Three latin-only variable faces are vendored into `src/assets/fonts` by `npm run fonts`, so there is no third-party font request and no unused language subsets in the build. `font-display: swap` with a system fallback stack keeps text visible if a face is slow.
- **Images are WebP.** `npm run assets` re-encodes the screenshots and certificate thumbnails to WebP at their display size and drops the PNG originals. Explicit `width`/`height` on every image reserves layout space, so nothing shifts as the page loads.
- **JavaScript is split** into cacheable `react`, `motion` and app chunks. All animation is `transform`/`opacity` only, and a global `prefers-reduced-motion` block disables loops and transitions.
- **Colour passes WCAG AA.** Every text step in the ink ramp clears 4.5:1 against the raised surface; `ink-5` exists purely for non-text marks. The accent has a dedicated `accent-soft` token because opacity-tinted accent text composites below the threshold.
- **Touch targets are 44px.** The `.tap` utility grows a small link's hit area with a pseudo-element, so tight mono labels stay visually small but comfortably tappable.
- **The mobile menu is a real dialog.** It carries `role="dialog"` and `aria-modal`, traps Tab, closes on Escape, and returns focus to the button that opened it.
- The contact form composes a `mailto:` and hands off to the visitor's own mail app. Nothing is stored or sent from the page.

## Deployment

`.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages on every push to `main`. The Vite `base` is relative (`./`), so the same build works at a user site or a project subpath.

## Licence

The code is Moni's. The certificate PDFs and project screenshots are her own documents and are included for her own portfolio.
