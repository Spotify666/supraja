import Section, { Divider } from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import { Stat } from '../components/charts/Charts.jsx'
import { Reveal, Stagger, StaggerItem, useLite, EASE_OUT } from '../lib/motion.jsx'
import { motion } from 'framer-motion'
import {
  partTwoDivider,
  methodology,
  timeline36,
  priceOfCredibility,
  goToMarket,
  fiveRoles,
  risksKpis,
} from '../data/content.js'

export function PartTwo() {
  return <Divider id="plan" part={partTwoDivider.part} title={partTwoDivider.title} desc={partTwoDivider.desc} />
}

export function Methodology() {
  const d = methodology
  return (
    <Section id="methodology" tone="light" kicker={d.kicker} title={d.title} lede={d.intro} wide>
      <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4" gap={0.1}>
        {d.phases.map((p, i) => (
          <StaggerItem key={p.phase} className="h-full">
            <div className="relative h-full rounded-2xl border border-line bg-surface p-6">
              <p className="kicker text-[0.7rem] text-gold-ink bg-gold-soft inline-block rounded-full px-3 py-1">{p.phase}</p>
              <h3 className="font-display font-semibold text-pine-950 text-xl mt-4">{p.name}</h3>
              <p className="mt-2.5 text-sm text-muted leading-relaxed">{p.desc}</p>
              {i < d.phases.length - 1 && (
                <span className="hidden lg:grid absolute top-1/2 -right-4 -translate-y-1/2 place-items-center w-7 h-7 rounded-full bg-paper border border-line text-gold z-10">
                  <Icon name="arrowRight" size={14} />
                </span>
              )}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.15}>
        <p className="mt-8 rounded-xl bg-pine-950 text-mist-200 px-6 py-4 leading-relaxed">
          <span className="text-gold font-semibold">Phase 4 — Scale &amp; Diversify: </span>
          {d.phase4.replace('Phase 4 — Scale & Diversify: ', '')}
        </p>
      </Reveal>
    </Section>
  )
}

export function Timeline() {
  const d = timeline36
  const { lite } = useLite()
  const total = 36
  return (
    <Section id="timeline" tone="dark" kicker={d.kicker} title={d.title} wide>
      <div className="mt-14 space-y-7">
        {d.rows.map((r, i) => (
          <Reveal key={r.phase} delay={i * 0.05}>
            <div className="grid sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6 items-center">
              <p className="text-gold font-semibold tabular-nums text-sm sm:text-right">{r.months}</p>
              <div>
                <div className="h-8 rounded-lg bg-pine-900 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 rounded-lg"
                    style={{
                      left: `${(r.start / total) * 100}%`,
                      background: i === d.rows.length - 1 ? 'var(--gold)' : 'var(--pine-600)',
                    }}
                    initial={lite ? { width: `${((r.end - r.start) / total) * 100}%` } : { width: 0 }}
                    whileInView={{ width: `${((r.end - r.start) / total) * 100}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: EASE_OUT }}
                  />
                </div>
                <p className="mt-2 font-semibold text-paper">{r.phase}</p>
                <p className="text-mist-300 text-sm">{r.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
        {/* Month scale */}
        <div className="grid sm:grid-cols-[10rem_1fr] gap-6">
          <span className="hidden sm:block" />
          <div className="flex justify-between text-[11px] text-mist-300 tabular-nums px-0.5" aria-hidden="true">
            {[0, 6, 12, 18, 24, 30, 36].map((m) => (
              <span key={m}>M{m}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export function PriceOfCredibility() {
  const d = priceOfCredibility
  return (
    <Section id="credibility" tone="light" kicker={d.kicker} title={d.title}>
      <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {d.steps.map((s, i) => (
          <StaggerItem key={s.n} className="h-full">
            <div className="relative h-full rounded-2xl border border-line bg-surface p-6">
              <span className="font-display text-gold font-semibold text-2xl">{s.n}</span>
              <h3 className="font-semibold text-pine-950 mt-2">{s.title}</h3>
              <p className="text-muted text-sm mt-1 tabular-nums">{s.time}</p>
              {i < d.steps.length - 1 && (
                <span className="hidden lg:grid absolute top-1/2 -right-4 -translate-y-1/2 place-items-center w-7 h-7 rounded-full bg-paper border border-line text-pine-600 z-10">
                  <Icon name="arrowRight" size={14} />
                </span>
              )}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Stagger className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {d.stats.map((s) => (
          <StaggerItem key={s.desc}>
            <Stat value={s.value} desc={s.desc} />
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.1}>
        <p className="mt-10 text-muted italic max-w-3xl leading-relaxed">{d.close}</p>
      </Reveal>
    </Section>
  )
}

export function GoToMarket() {
  const d = goToMarket
  return (
    <Section id="gtm" tone="surface" kicker={d.kicker} title={d.title}>
      <div className="mt-12 grid md:grid-cols-2 gap-4">
        <Reveal>
          <div className="h-full rounded-2xl bg-paper border border-line p-7 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-mist-100 text-pine-800">
                <Icon name="money" size={20} />
              </span>
              <h3 className="font-semibold text-pine-950" style={{ fontSize: 'var(--step-1)' }}>
                {d.facilitator.title}
              </h3>
            </div>
            <ul className="space-y-3.5 text-[15px] leading-relaxed text-ink">
              {d.facilitator.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pine-600 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 kicker text-[0.68rem] text-pine-600">STARTS THE ENGINE</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl bg-pine-950 text-paper p-7 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-pine-800 text-gold">
                <Icon name="handshake" size={20} />
              </span>
              <h3 className="font-semibold" style={{ fontSize: 'var(--step-1)' }}>
                {d.institutional.title}
              </h3>
            </div>
            <ul className="space-y-3.5 text-[15px] leading-relaxed text-mist-200">
              {d.institutional.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 kicker text-[0.68rem] text-gold">BUILT TO OUTLAST</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export function FiveRoles() {
  const d = fiveRoles
  return (
    <Section id="roles" tone="light" kicker={d.kicker} title={d.title} wide>
      <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {d.roles.map((r) => (
          <StaggerItem key={r.title} className="h-full">
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-pine-950 text-gold mb-4">
                <Icon name={r.icon} size={20} />
              </span>
              <h3 className="font-semibold text-pine-950 leading-snug">{r.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{r.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.15}>
        <p className="mt-10 text-muted italic">{d.close}</p>
      </Reveal>
    </Section>
  )
}

export function RisksKpis() {
  const d = risksKpis
  return (
    <Section id="risks" tone="surface" kicker={d.kicker} title={d.title} wide>
      <div className="mt-12 grid lg:grid-cols-2 gap-10 [&>*]:min-w-0">
        <Reveal>
          <p className="kicker text-pine-600 mb-5">{d.risksTitle}</p>
          <div className="space-y-3">
            {d.risks.map((r) => (
              <div key={r.risk} className="rounded-xl border border-line bg-paper p-5">
                <p className="font-semibold text-pine-950">{r.risk}</p>
                <p className="mt-1.5 text-sm text-muted flex gap-2">
                  <Icon name="arrowRight" size={15} className="text-gold shrink-0 mt-0.5" />
                  {r.mitigation}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="kicker text-pine-600 mb-5">{d.kpisTitle}</p>
          <ol className="space-y-3">
            {d.kpis.map((k, i) => (
              <li key={k} className="flex gap-3.5 rounded-xl bg-mist-100/70 border border-mist-200 p-4 text-[15px] leading-relaxed text-ink">
                <span className="shrink-0 grid place-items-center w-7 h-7 rounded-full bg-pine-950 text-gold text-xs font-bold">
                  {i + 1}
                </span>
                {k}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  )
}
