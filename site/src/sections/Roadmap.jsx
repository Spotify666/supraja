import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Section from '../components/Section.jsx'
import { EASE_OUT, useLite } from '../lib/motion.jsx'
import { roadmap as d } from '../data/content.js'

// §9 — 9-month implementation roadmap, rebuilt natively in brand colours
// (the source graphic used off-brand blues/oranges; here it's pine + gold).
export function Roadmap() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const { lite } = useLite()
  const drawn = lite || inView
  const N = d.months
  const cols = Array.from({ length: N }, (_, i) => i + 1)

  return (
    <Section id="roadmap" tone="dark" kicker={d.kicker} title={d.title} lede={d.subtitle} wide>
      <div ref={ref} className="mt-12 overflow-x-auto">
        <div className="min-w-[720px]">
          {/* Month header */}
          <div className="grid" style={{ gridTemplateColumns: `minmax(200px,1.4fr) repeat(${N}, 1fr)` }}>
            <div className="px-3 py-2 text-xs font-semibold tracking-wide text-mist-300">WORKSTREAM</div>
            {cols.map((m) => (
              <div key={m} className="px-1 py-2 text-center text-xs font-semibold text-mist-300 border-l border-pine-800">
                M{m}
              </div>
            ))}
          </div>

          {/* Rows */}
          {d.workstreams.map((w, ri) => {
            const leftPct = ((w.start - 1) / N) * 100
            const widthPct = ((w.end - w.start + 1) / N) * 100
            const accent = w.milestone || w.n === 8
            return (
              <div
                key={w.n}
                className="grid items-center border-t border-pine-800/60"
                style={{ gridTemplateColumns: `minmax(200px,1.4fr) repeat(${N}, 1fr)` }}
              >
                <div className="px-3 py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="shrink-0 grid place-items-center w-6 h-6 rounded-md bg-pine-800 text-gold text-xs font-bold">
                      {w.n}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-paper text-sm leading-tight truncate">{w.name}</p>
                      <p className="text-[11px] text-mist-300 truncate">{w.focus}</p>
                    </div>
                  </div>
                </div>
                {/* Track spanning all month columns */}
                <div className="relative col-span-full h-9" style={{ gridColumn: `2 / span ${N}` }}>
                  {/* faint month gridlines */}
                  <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${N}, 1fr)` }} aria-hidden="true">
                    {cols.map((m) => (
                      <div key={m} className="border-l border-pine-800/50" />
                    ))}
                  </div>
                  {w.milestone ? (
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 flex items-center gap-2"
                      style={{ left: `calc(${leftPct}% + 4px)` }}
                      initial={lite ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                      animate={drawn ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + ri * 0.06, ease: EASE_OUT }}
                    >
                      <span className="grid place-items-center w-7 h-7 rounded-full bg-gold text-pine-950">★</span>
                      <span className="text-xs font-semibold text-gold whitespace-nowrap">{w.phase}</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 h-7 rounded-md flex items-center px-3"
                      style={{ left: `${leftPct}%`, background: accent ? 'var(--gold)' : 'var(--pine-600)' }}
                      initial={lite ? { width: `${widthPct}%` } : { width: 0 }}
                      animate={drawn ? { width: `${widthPct}%` } : {}}
                      transition={{ duration: 0.7, delay: 0.15 + ri * 0.07, ease: EASE_OUT }}
                    >
                      <span className={`text-xs font-semibold whitespace-nowrap ${accent ? 'text-pine-950' : 'text-paper'}`}>
                        {w.phase}
                      </span>
                    </motion.div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Key milestones */}
      <div className="mt-10">
        <p className="kicker text-gold mb-5">Key Milestones</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {d.milestones.map((m, i) => (
            <motion.div
              key={m.title}
              className="rounded-2xl bg-pine-900/60 ring-1 ring-pine-800 p-5"
              initial={lite ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: EASE_OUT }}
            >
              <p className="font-display font-semibold text-gold text-lg">Month {m.month}</p>
              <p className="font-semibold text-paper mt-1">{m.title}</p>
              <p className="text-sm text-mist-300 mt-1 leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
