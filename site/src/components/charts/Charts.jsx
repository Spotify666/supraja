import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EASE_OUT, useLite, CountUp } from '../../lib/motion.jsx'

// Chart series colors come only from brand tokens.
const SERIES = ['var(--pine-800)', 'var(--pine-600)', 'var(--mist-300)', 'var(--gold)', 'var(--pine-700)', 'var(--mist-200)', 'var(--pine-950)']

function useDrawn(amount = 0.35) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount })
  const { lite } = useLite()
  return [ref, lite || inView]
}

// Horizontal bars with value labels — draws in on view.
export function HBars({ data, max, valueKey = 'value', labelKey = 'label', displayKey, accentIndex = -1, unit = '', dark = false }) {
  const [ref, drawn] = useDrawn()
  const m = max ?? Math.max(...data.map((d) => Math.abs(d[valueKey])))
  const { lite } = useLite()
  return (
    <div ref={ref} className="space-y-4" role="img" aria-label={data.map((d) => `${d[labelKey]}: ${displayKey ? d[displayKey] : d[valueKey]}`).join('; ')}>
      {data.map((d, i) => {
        const pct = (Math.abs(d[valueKey]) / m) * 100
        const isAccent = i === accentIndex
        return (
          <div key={d[labelKey]}>
            <div className={`flex items-baseline justify-between gap-4 text-sm mb-1.5 ${dark ? 'text-mist-200' : 'text-ink'}`}>
              <span className="font-medium">{d[labelKey]}</span>
              <span className={`tabular-nums font-semibold ${isAccent ? 'text-gold' : dark ? 'text-paper' : 'text-pine-800'}`}>
                {displayKey ? d[displayKey] : `${d[valueKey]}${unit}`}
              </span>
            </div>
            <div className={`h-2.5 rounded-full overflow-hidden ${dark ? 'bg-pine-900' : 'bg-mist-100'}`}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: isAccent ? 'var(--gold)' : dark ? 'var(--pine-600)' : 'var(--pine-800)' }}
                initial={lite ? { width: `${pct}%` } : { width: 0 }}
                animate={drawn ? { width: `${pct}%` } : {}}
                transition={{ duration: 0.9, delay: i * 0.08, ease: EASE_OUT }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Donut for category shares.
export function Donut({ data, valueKey = 'value', labelKey = 'label', size = 300, centerLabel }) {
  const [ref, drawn] = useDrawn()
  const { lite } = useLite()
  const total = data.reduce((s, d) => s + d[valueKey], 0)
  const R = 84
  const C = 2 * Math.PI * R
  let acc = 0
  return (
    <div ref={ref} className="flex flex-col sm:flex-row items-center gap-8">
      <svg
        viewBox="0 0 220 220"
        width={size}
        height={size}
        className="shrink-0 max-w-full h-auto"
        role="img"
        aria-label={data.map((d) => `${d[labelKey]} ${d[valueKey]}%`).join(', ')}
      >
        <circle cx="110" cy="110" r={R} fill="none" stroke="var(--line)" strokeWidth="30" />
        {data.map((d, i) => {
          const frac = d[valueKey] / total
          const offset = acc
          acc += frac
          return (
            <motion.circle
              key={d[labelKey]}
              cx="110"
              cy="110"
              r={R}
              fill="none"
              stroke={SERIES[i % SERIES.length]}
              strokeWidth="30"
              strokeDasharray={`${frac * C - 2.5} ${C - frac * C + 2.5}`}
              strokeDashoffset={-offset * C + C / 4}
              initial={lite ? { opacity: 1 } : { opacity: 0 }}
              animate={drawn ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.09, ease: EASE_OUT }}
            />
          )
        })}
        {centerLabel && (
          <text x="110" y="106" textAnchor="middle" fontSize="26" fontWeight="700" fill="var(--pine-950)">
            {centerLabel[0]}
          </text>
        )}
        {centerLabel && (
          <text x="110" y="126" textAnchor="middle" fontSize="10.5" fill="var(--muted)">
            {centerLabel[1]}
          </text>
        )}
      </svg>
      <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-2.5 text-sm">
        {data.map((d, i) => (
          <li key={d[labelKey]} className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-[3px] shrink-0" style={{ background: SERIES[i % SERIES.length] }} />
            <span className="text-ink font-medium">{d[labelKey]}</span>
            <span className="text-muted tabular-nums ml-auto">{d[valueKey]}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Grouped/paired columns (e.g. Revenue vs EBITDA by year). Values may be negative.
export function Columns({ data, series, height = 300, unit = '' }) {
  const [ref, drawn] = useDrawn()
  const { lite } = useLite()
  const all = data.flatMap((d) => series.map((s) => d[s.key]))
  const maxV = Math.max(...all, 0)
  const minV = Math.min(...all, 0)
  const span = maxV - minV || 1
  const plotH = height - 58
  const zeroY = 10 + (maxV / span) * plotH

  return (
    <div ref={ref}>
      <div className="flex items-end justify-around gap-2" style={{ height }}>
        {data.map((d) => (
          <div key={d.label} className="flex flex-col items-center flex-1 min-w-0 h-full relative">
            <div className="absolute left-0 right-0 border-t border-line" style={{ top: zeroY }} aria-hidden="true" />
            <div className="flex items-end justify-center gap-2 sm:gap-3 w-full absolute" style={{ top: 0, height: plotH + 10 }}>
              {series.map((s, si) => {
                const v = d[s.key]
                const h = (Math.abs(v) / span) * plotH
                const isNeg = v < 0
                return (
                  <div key={s.key} className="relative flex flex-col items-center" style={{ height: '100%', justifyContent: 'flex-end' }}>
                    <span
                      className="absolute text-[11px] sm:text-xs font-semibold tabular-nums whitespace-nowrap"
                      style={{
                        bottom: isNeg ? 'auto' : `calc(100% - ${zeroY}px + ${h + 6}px)`,
                        top: isNeg ? `${zeroY + h + 2}px` : 'auto',
                        color: si === 0 ? 'var(--pine-800)' : 'var(--gold-ink)',
                      }}
                    >
                      {v}{unit}
                    </span>
                    <motion.div
                      className="w-7 sm:w-12 rounded-t-[4px]"
                      style={{
                        background: si === 0 ? 'var(--pine-800)' : 'var(--gold)',
                        position: 'absolute',
                        ...(isNeg
                          ? { top: zeroY, borderRadius: '0 0 4px 4px' }
                          : { bottom: `calc(100% - ${zeroY}px)` }),
                      }}
                      initial={lite ? { height: h } : { height: 0 }}
                      animate={drawn ? { height: h } : {}}
                      transition={{ duration: 0.8, delay: si * 0.12, ease: EASE_OUT }}
                    />
                  </div>
                )
              })}
            </div>
            <span className="absolute bottom-0 text-sm font-medium text-muted">{d.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6 mt-5 text-sm">
        {series.map((s, si) => (
          <span key={s.key} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-[3px]" style={{ background: si === 0 ? 'var(--pine-800)' : 'var(--gold)' }} />
            <span className="text-muted">{s.label}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// Big stat block with count-up.
export function Stat({ value, desc, label, dark = false, accent = false }) {
  return (
    <div>
      {label && <p className={`kicker text-[0.7rem] ${dark ? 'text-gold' : 'text-pine-600'}`}>{label}</p>}
      <p
        className={`font-display font-semibold tracking-tight mt-1 leading-[1.05] ${accent ? 'text-gold' : dark ? 'text-paper' : 'text-pine-950'}`}
        style={{ fontSize: String(value).length > 9 ? 'var(--step-2)' : 'var(--step-3)', overflowWrap: 'break-word' }}
      >
        <CountUp value={value} />
      </p>
      <p className={`mt-2.5 text-sm leading-relaxed ${dark ? 'text-mist-200' : 'text-muted'}`}>{desc}</p>
    </div>
  )
}
