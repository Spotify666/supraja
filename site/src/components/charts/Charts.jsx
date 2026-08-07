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

// "Nice" round numbers for axis ticks.
function niceNum(range, round) {
  const exp = Math.floor(Math.log10(range))
  const frac = range / 10 ** exp
  let nf
  if (round) nf = frac < 1.5 ? 1 : frac < 3 ? 2 : frac < 7 ? 5 : 10
  else nf = frac <= 1 ? 1 : frac <= 2 ? 2 : frac <= 5 ? 5 : 10
  return nf * 10 ** exp
}

function niceScale(dataMin, dataMax, targetSteps = 6) {
  const min = Math.min(0, dataMin)
  const max = Math.max(0, dataMax)
  const step = niceNum((max - min) / targetSteps || 1, true)
  const niceMin = Math.floor(min / step) * step
  const niceMax = Math.ceil(max / step) * step
  const ticks = []
  for (let v = niceMin; v <= niceMax + step / 2; v += step) ticks.push(Math.round(v / step) * step)
  return { niceMin, niceMax, ticks }
}

const BAR_COLORS = ['var(--pine-800)', 'var(--gold)', 'var(--pine-600)']
const LABEL_COLORS = ['var(--pine-800)', 'var(--gold-ink)', 'var(--pine-700)']

// Grouped column chart with a real Y axis, gridlines, a zero baseline, and
// value labels placed cleanly above (or below, for negatives) each bar.
// Values may be negative. Rendered as SVG so nothing overlaps.
export function Columns({ data, series, height = 320, unit = '', yLabel }) {
  const [ref, drawn] = useDrawn()
  const { lite } = useLite()

  const W = 780
  const H = height
  const ML = yLabel ? 58 : 46
  const MR = 14
  const MT = 26
  const MB = 40
  const plotW = W - ML - MR
  const plotH = H - MT - MB

  const all = data.flatMap((d) => series.map((s) => d[s.key]))
  const { niceMin, niceMax, ticks } = niceScale(Math.min(...all), Math.max(...all))
  const spanV = niceMax - niceMin || 1
  const y = (v) => MT + ((niceMax - v) / spanV) * plotH
  const zeroY = y(0)

  const groupW = plotW / data.length
  const innerW = groupW * 0.62
  const barGap = series.length > 1 ? 6 : 0
  const barW = (innerW - barGap * (series.length - 1)) / series.length
  const fmt = (v) => `${v}${unit}`

  return (
    <div ref={ref}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        className="h-auto block overflow-visible"
        role="img"
        aria-label={data
          .map((d) => `${d.label}: ${series.map((s) => `${s.label} ${fmt(d[s.key])}`).join(', ')}`)
          .join('; ')}
      >
        {/* Gridlines + Y tick labels */}
        {ticks.map((t) => (
          <g key={t}>
            <line
              x1={ML}
              x2={W - MR}
              y1={y(t)}
              y2={y(t)}
              stroke={t === 0 ? 'var(--muted)' : 'var(--line)'}
              strokeWidth={t === 0 ? 1.25 : 1}
            />
            <text x={ML - 8} y={y(t) + 4} textAnchor="end" fontSize="12" fill="var(--muted)" className="tabular-nums">
              {t}
            </text>
          </g>
        ))}

        {yLabel && (
          <text
            transform={`translate(14 ${MT + plotH / 2}) rotate(-90)`}
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            fill="var(--muted)"
          >
            {yLabel}
          </text>
        )}

        {/* Bars + value labels + category labels */}
        {data.map((d, di) => {
          const gx = ML + di * groupW + (groupW - innerW) / 2
          return (
            <g key={d.label}>
              {series.map((s, si) => {
                const v = d[s.key]
                const bx = gx + si * (barW + barGap)
                const isNeg = v < 0
                const barTop = isNeg ? zeroY : y(v)
                const barH = Math.abs(y(v) - zeroY)
                const labelY = isNeg ? zeroY + barH + 15 : barTop - 8
                return (
                  <g key={s.key}>
                    <motion.rect
                      x={bx}
                      width={barW}
                      rx="3"
                      fill={BAR_COLORS[si % BAR_COLORS.length]}
                      initial={lite ? { y: barTop, height: barH } : { y: zeroY, height: 0 }}
                      animate={drawn ? { y: barTop, height: barH } : {}}
                      transition={{ duration: 0.8, delay: 0.1 + si * 0.12 + di * 0.04, ease: EASE_OUT }}
                    />
                    <motion.text
                      x={bx + barW / 2}
                      y={labelY}
                      textAnchor="middle"
                      fontSize="12.5"
                      fontWeight="700"
                      fill={LABEL_COLORS[si % LABEL_COLORS.length]}
                      className="tabular-nums"
                      initial={lite ? { opacity: 1 } : { opacity: 0 }}
                      animate={drawn ? { opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + si * 0.12 + di * 0.04 }}
                    >
                      {fmt(v)}
                    </motion.text>
                  </g>
                )
              })}
              <text
                x={ML + di * groupW + groupW / 2}
                y={H - MB + 24}
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                fill="var(--ink)"
              >
                {d.label}
              </text>
            </g>
          )
        })}
      </svg>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 text-sm">
        {series.map((s, si) => (
          <span key={s.key} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-[3px]" style={{ background: BAR_COLORS[si % BAR_COLORS.length] }} />
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
