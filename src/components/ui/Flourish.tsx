/**
 * The site's one decorative mark: a small drawn sprig, used sparingly to sign
 * a page off. It is inline SVG with no animation and no filter, so it costs
 * one paint and nothing thereafter.
 */
export function Flourish({ className = '' }: { className?: string }) {
 return (
 <svg
 viewBox="0 0 120 40"
 fill="none"
 aria-hidden="true"
 focusable="false"
 className={className}
 strokeWidth="1.4"
 strokeLinecap="round"
 >
 {/* the stem: a single drawn curve rather than a straight rule */}
 <path
 d="M2 30c22-3 38-11 52-24"
 stroke="var(--color-champagne)"
 strokeOpacity="0.75"
 />
 {/* leaves, alternating along the stem */}
 <path d="M22 25.5c1.5-6 5-9.5 9.5-11-1 6-4 9.5-9.5 11Z" stroke="var(--color-accent)" strokeOpacity="0.85" />
 <path d="M34 20.5c4 2.5 7 6 8 11-5-1-8-4.5-8-11Z" stroke="var(--color-accent)" strokeOpacity="0.6" />
 <path d="M44 14.5c-1-5.5.5-9.5 4-12 1.5 5.5-.5 9.5-4 12Z" stroke="var(--color-champagne)" strokeOpacity="0.8" />
 {/* a small dot to close the composition */}
 <circle cx="56" cy="5.5" r="1.6" fill="var(--color-accent)" fillOpacity="0.9" stroke="none" />
 </svg>
 )
}
