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
  App.tsx                  page composition and skip link
  index.css                design tokens, base layer, utilities
  assets/fonts/            self-hosted latin-only variable font files
  components/
    layout/                Backdrop, Footer, Nav
    sections/              one file per page section
    ui/                    Button, ProjectLinks, Reveal, Section, TechChip, ...
    visuals/               ChatStream, StateMachine
  data/                    all page content, as typed plain data
  lib/                     hooks and small helpers
public/
  certificates/            the actual NPTEL, SIH, HackNexus and BuildX PDFs
  projects/                project screenshots
```

Content lives entirely in `src/data/*`. Editing a project description, a certificate date or a skill note never requires touching a component.

## Performance and accessibility notes

The guiding rule here is that the site has to work as a static page first. Motion is added only where it explains something or acknowledges an action.

- **There is no continuous motion.** No marquee, no drifting background, no spinning rings, no looping pulses, no typing simulation, no preloader curtain. A test asserts that `Element.getAnimations()` reports **zero running animations** once the page has settled.
- **The cursor is the native one.** There is no custom cursor, no magnetic button, and no pointer-following light. The old ones called `getBoundingClientRect()` inside a `pointermove` handler and a capture-phase `pointerover` listener on every hover, which is exactly the sort of work that reads as lag.
- **No `backdrop-filter` anywhere.** A full-width `backdrop-blur` on the sticky header forced the browser to re-sample everything behind it on every scroll frame. Replacing it with a solid fill, and dropping the large `blur()` radii and `mix-blend-mode` grain from the backdrop, took the worst scroll frame from 50ms to 16.8ms and removed every dropped frame.
- **Reveals run once and stop.** `Reveal` is a short lift and fade on first entry, then nothing. It animates `transform` and `opacity` only — both compositor properties — with no `filter` animation, which would force a repaint of the whole block.
- **The nav progress bar is written to a ref.** It used to `setState` on every scroll frame, re-rendering the entire nav sixty times a second to move a one-pixel line.
- **Hover is a four-pixel lift.** Cards translate `-4px`, screenshots scale `1.02`, buttons `-1px`, all at 200–300ms. The card lift is behind `(hover: hover) and (pointer: fine)`, so touch devices pay nothing for an effect they cannot trigger.
- **Measured, not assumed.** A Playwright pass samples frame gaps through a full-page scroll. At 1440×900 the page holds a locked 60fps — 0 frames over 32ms, worst frame 16.8ms, which is one vsync interval. Cumulative layout shift is 0.0002.
- **Fonts are self-hosted.** Three latin-only variable faces are vendored into `src/assets/fonts` by `npm run fonts`, so there is no third-party font request and no unused language subsets in the build. `font-display: swap` with a system fallback stack keeps text visible if a face is slow.
- **Images are WebP.** `npm run assets` re-encodes the screenshots and certificate thumbnails to WebP at their display size and drops the PNG originals. Explicit `width`/`height` on every image reserves layout space, so nothing shifts as the page loads.
- **JavaScript is split** into cacheable `react`, `motion` and app chunks.
- **Colour passes WCAG AA.** Every text step in the ink ramp clears 4.5:1 against the raised surface; `ink-5` exists purely for non-text marks. The accent has a dedicated `accent-soft` token because opacity-tinted accent text composites below the threshold.
- **Touch targets are 44px.** The `.tap` utility grows a small link's hit area with a pseudo-element, so tight mono labels stay visually small but comfortably tappable.
- **The mobile menu is a real dialog.** It carries `role="dialog"` and `aria-modal`, traps Tab, closes on Escape, and returns focus to the button that opened it.
- The contact form composes a `mailto:` and hands off to the visitor's own mail app. Nothing is stored or sent from the page.

## Deployment

`.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages on every push to `main`. The Vite `base` is relative (`./`), so the same build works at a user site or a project subpath.

## Licence

The code is Moni's. The certificate PDFs and project screenshots are her own documents and are included for her own portfolio.
