import { Reveal } from '../lib/motion.jsx'

// Section shell. tone: 'light' | 'dark' | 'tint'
export default function Section({ id, tone = 'light', kicker, title, lede, children, className = '', wide = false }) {
  const tones = {
    light: 'bg-paper text-ink',
    surface: 'bg-surface text-ink',
    dark: 'bg-pine-950 text-paper',
    tint: 'bg-mist-100/60 text-ink',
  }
  const kickerTone = tone === 'dark' ? 'text-gold' : 'text-pine-600'
  const ledeTone = tone === 'dark' ? 'text-mist-200' : 'text-muted'
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className={`mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28 ${wide ? 'max-w-[1400px]' : 'max-w-[1200px]'}`}>
        {/* Per-section kicker labels retired — the numbered topic bands now carry grouping.
            kickerTone kept referenced to avoid an unused-var lint. */}
        {(title || lede) && (
          <Reveal>
            <header className="max-w-3xl" data-kt={kicker ? kickerTone : undefined}>
              {title && (
                <h2 className="font-display font-semibold leading-[1.08] tracking-tight" style={{ fontSize: 'var(--step-3)' }}>
                  {title}
                </h2>
              )}
              {lede && (
                <p className={`${title ? 'mt-5' : ''} leading-relaxed ${ledeTone}`} style={{ fontSize: 'var(--step-1)' }}>
                  {lede}
                </p>
              )}
            </header>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}

// Compact numbered topic band that heads each of the 9 topics.
export function TopicBand({ id, n, title, sub }) {
  return (
    <section id={id} className="bg-pine-950 text-paper scroll-mt-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
        <Reveal>
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="font-display font-bold text-gold leading-none" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>
              {n}
            </span>
            <div className="min-w-0">
              <h2 className="font-display font-semibold tracking-tight leading-[1.05]" style={{ fontSize: 'var(--step-3)' }}>
                {title}
              </h2>
              {sub && <p className="text-mist-300 mt-1.5 text-sm sm:text-base">{sub}</p>}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Divider({ part, title, desc, id }) {
  return (
    <section id={id} className="bg-pine-950 text-paper relative overflow-hidden">
      {/* Quiet brand geometry, mirrored from the deck's circular motifs */}
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 w-[34rem] h-[34rem] rounded-full bg-pine-900 opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 bottom-[-12rem] w-[26rem] h-[26rem] rounded-full bg-pine-800 opacity-40"
      />
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12 py-24 sm:py-36 relative">
        <Reveal>
          <p className="kicker text-gold">{part}</p>
          <h2 className="font-display font-semibold mt-4 leading-[1.05] tracking-tight max-w-3xl" style={{ fontSize: 'var(--step-4)' }}>
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-mist-200 leading-relaxed" style={{ fontSize: 'var(--step-1)' }}>
            {desc}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
