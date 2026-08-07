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
        {(kicker || title) && (
          <Reveal>
            <header className="max-w-3xl">
              {kicker && <p className={`kicker ${kickerTone}`}>{kicker}</p>}
              {title && (
                <h2
                  className="font-display font-semibold mt-3 leading-[1.08] tracking-tight"
                  style={{ fontSize: 'var(--step-3)' }}
                >
                  {title}
                </h2>
              )}
              {lede && (
                <p className={`mt-5 leading-relaxed ${ledeTone}`} style={{ fontSize: 'var(--step-1)' }}>
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
