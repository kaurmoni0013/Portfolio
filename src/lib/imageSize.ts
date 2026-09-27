/** Intrinsic pixel size of each screenshot, so the browser reserves the right
 *  box before the image loads and the page does not shift as it arrives. */
export const IMAGE_SIZE: Record<string, { w: number; h: number }> = {
  mediqueue: { w: 935, h: 766 },
  'orbit-ai': { w: 1400, h: 707 },
  'solar-system': { w: 900, h: 749 },
  'tic-tac-toe': { w: 800, h: 732 },
  'love-calculator': { w: 571, h: 799 },
  'random-quote': { w: 800, h: 779 },
}

export function sizeFor(id: string) {
  return IMAGE_SIZE[id] ?? { w: 800, h: 500 }
}
