import { lazy, Suspense, useRef } from 'react'
import { useScroll, useTransform, useSpring } from 'framer-motion'
import Section, { Divider } from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import { Stat, HBars, Columns } from '../components/charts/Charts.jsx'
import { ExpansionMap } from '../components/GeoMaps.jsx'
import { Reveal, Stagger, StaggerItem } from '../lib/motion.jsx'
import {
  partThreeDivider,
  ugandaMarket,
  ugandaHealth,
  ugandaPay,
  corridorExists,
  logistics,
  marketProven,
  ourAdvantage,
  businessCase,
  compounding,
  institutionalWorth,
  scenarios,
  firstProofPoint,
} from '../data/content.js'

const GlobeMorph = lazy(() => import('../components/GlobeMorph.jsx'))

export function PartThree() {
  return <Divider id="uganda" part={partThreeDivider.part} title={partThreeDivider.title} desc={partThreeDivider.desc} />
}

export function UgandaMarket() {
  const d = ugandaMarket
  return (
    <Section id="uganda-market" tone="light" kicker={d.kicker} title={d.title} wide>
      <Stagger className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {d.stats.map((s) => (
          <StaggerItem key={s.desc}>
            <Stat value={s.value} desc={s.desc} />
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.1}>
        <div className="mt-12 rounded-2xl bg-surface border border-line p-7 sm:p-8">
          <p className="kicker text-pine-600 mb-5">{d.contextTitle}</p>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3.5 text-[15px] leading-relaxed text-ink">
            {d.context.map((c) => (
              <li key={c} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pine-600 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}

export function UgandaHealth() {
  const d = ugandaHealth
  return (
    <Section id="uganda-health" tone="surface" kicker={d.kicker} title={d.title} wide>
      <div className="mt-12 grid lg:grid-cols-5 gap-4 items-stretch [&>*]:min-w-0">
        <Reveal className="lg:col-span-2">
          <div className="h-full rounded-2xl bg-pine-950 text-paper p-8 flex flex-col justify-center">
            <p className="kicker text-gold">{d.gapTitle}</p>
            <p className="font-display font-bold text-gold leading-none mt-4" style={{ fontSize: 'clamp(4rem, 10vw, 7.5rem)' }}>
              {d.gapValue}
            </p>
            <p className="mt-4 text-mist-200 leading-relaxed">{d.gapDesc}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="h-full rounded-2xl bg-paper border border-line p-7 sm:p-8 flex flex-col">
            <p className="kicker text-pine-600 mb-5">{d.structureTitle}</p>
            <ul className="space-y-3.5 text-[15px] leading-relaxed text-ink">
              {d.structure.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pine-600 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <p className="kicker text-pine-600 mb-2.5">{d.burdenTitle}</p>
              <p className="text-sm text-muted leading-relaxed rounded-xl bg-surface border border-line px-5 py-4">{d.burden}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export function UgandaPay() {
  const d = ugandaPay
  return (
    <Section id="uganda-pay" tone="light" kicker={d.kicker} title={d.title}>
      <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start [&>*]:min-w-0">
        <Reveal>
          <p className="font-display font-bold text-pine-950 leading-none" style={{ fontSize: 'clamp(4rem, 9vw, 7rem)' }}>
            {d.oopValue}
          </p>
          <p className="mt-5 text-ink leading-relaxed" style={{ fontSize: 'var(--step-1)' }}>
            {d.oopDesc}
          </p>
        </Reveal>
        <div className="space-y-4">
          {d.cols.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="rounded-2xl bg-surface border border-line p-6">
                <h3 className="font-semibold text-pine-950">{c.title}</h3>
                <p className="mt-2.5 text-sm text-muted leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function CorridorExists() {
  const d = corridorExists
  return (
    <Section id="corridor" tone="surface" kicker={d.kicker} title={d.title}>
      <Stagger className="mt-12 relative space-y-0" gap={0.1}>
        {d.proofs.map((p, i) => (
          <StaggerItem key={p}>
            <div className="relative flex gap-5 pb-8 last:pb-0">
              {i < d.proofs.length - 1 && <span className="absolute left-[13px] top-8 bottom-0 w-px bg-mist-200" aria-hidden="true" />}
              <span className="shrink-0 grid place-items-center w-7 h-7 rounded-full bg-pine-950 text-gold mt-0.5">
                <span className="w-2 h-2 rounded-full bg-gold" />
              </span>
              <p className="text-ink leading-relaxed max-w-3xl" style={{ fontSize: 'var(--step-0)' }}>
                {p}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}

// The signature geo interaction: globe -> map as this section scrolls.
export function LogisticsGlobe() {
  const d = logistics
  const wrapRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start end', 'end start'] })
  const raw = useTransform(scrollYProgress, [0.05, 0.45], [0, 1])
  const progress = useSpring(raw, { stiffness: 90, damping: 24, mass: 0.6 })

  return (
    <section id="logistics" ref={wrapRef} className="bg-pine-950 text-paper">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        <Reveal>
          <header className="max-w-3xl">
            <p className="kicker text-gold">{d.kicker}</p>
            <h2 className="font-display font-semibold mt-3 leading-[1.08] tracking-tight" style={{ fontSize: 'var(--step-3)' }}>
              {d.title}
            </h2>
          </header>
        </Reveal>
        <div className="mt-10 rounded-2xl overflow-hidden bg-pine-950 ring-1 ring-pine-800">
          <Suspense fallback={<div className="aspect-[16/9] sm:aspect-[21/9] bg-pine-900 animate-pulse" aria-hidden="true" />}>
            <GlobeMorph progress={progress} className="w-full aspect-[16/10] sm:aspect-[21/9] block" />
          </Suspense>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {d.cols.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-pine-900/70 ring-1 ring-pine-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-pine-800 text-gold">
                    <Icon name={c.icon} size={20} />
                  </span>
                  <h3 className="font-semibold" style={{ fontSize: 'var(--step-1)' }}>
                    {c.title}
                  </h3>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed text-mist-200">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function MarketProven() {
  const d = marketProven
  return (
    <Section id="proven" tone="light" kicker={d.kicker} title={d.title} lede={d.intro}>
      <Stagger className="mt-12 grid md:grid-cols-3 gap-4">
        {d.cols.map((c) => (
          <StaggerItem key={c.title} className="h-full">
            <div className="h-full rounded-2xl border border-line bg-surface p-7">
              <h3 className="font-semibold text-pine-950 leading-snug">{c.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{c.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}

export function OurAdvantage() {
  const d = ourAdvantage
  return (
    <Section id="advantage" tone="dark" kicker={d.kicker} title={d.title}>
      <Stagger className="mt-12 grid md:grid-cols-3 gap-4" gap={0.12}>
        {d.assets.map((a) => (
          <StaggerItem key={a.title} className="h-full">
            <div className="h-full rounded-2xl bg-pine-900/70 ring-1 ring-pine-800 p-7">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-pine-800 text-gold mb-5">
                <Icon name={a.icon} size={22} />
              </span>
              <h3 className="font-display font-semibold text-xl">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-200">{a.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.15}>
        <p className="mt-10 max-w-3xl text-gold-soft font-medium leading-relaxed" style={{ fontSize: 'var(--step-1)' }}>
          {d.close}
        </p>
      </Reveal>
    </Section>
  )
}

export function BusinessCase() {
  const d = businessCase
  return (
    <Section id="business-case" tone="light" kicker={d.kicker} title={d.title} wide>
      <Stagger className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {d.stats.map((s) => (
          <StaggerItem key={s.desc} className="h-full">
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-pine-950 text-gold mb-5">
                <Icon name={s.icon} size={20} />
              </span>
              <Stat value={s.value} desc={s.desc} />
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.1}>
        <p className="mt-8 text-sm text-muted italic">{d.note}</p>
      </Reveal>
    </Section>
  )
}

export function Compounding() {
  const d = compounding
  return (
    <Section id="returns" tone="surface" kicker={d.kicker} title={d.title}>
      <Reveal className="mt-12 max-w-3xl">
        <Columns
          data={d.series.map((s) => ({ label: s.year, revenue: s.revenue, ebitda: s.ebitda }))}
          series={[
            { key: 'revenue', label: d.labels.revenue },
            { key: 'ebitda', label: d.labels.ebitda },
          ]}
          height={320}
        />
      </Reveal>
    </Section>
  )
}

export function InstitutionalWorth() {
  const d = institutionalWorth
  return (
    <Section id="institutional" tone="light" kicker={d.kicker} title={d.title} wide>
      <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start [&>*]:min-w-0">
        <Reveal>
          <p className="text-sm font-medium text-muted mb-6">{d.chartLabel}</p>
          <HBars
            data={d.chart.map((c) => ({ label: c.channel, value: c.value, display: `₹${c.value} lakh` }))}
            displayKey="display"
            accentIndex={1}
          />
          <ul className="mt-6 space-y-1.5 text-sm text-muted">
            {d.assumptions.map((a) => (
              <li key={a}>· {a}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-pine-950 text-paper p-8">
            <p className="font-display font-bold text-gold leading-none" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>
              {d.deltaValue}
            </p>
            <p className="mt-3 text-mist-200 leading-relaxed">{d.deltaDesc}</p>
            <p className="mt-5 pt-5 border-t border-pine-800 text-gold-soft leading-relaxed">{d.close}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export function Scenarios() {
  const d = scenarios
  return (
    <Section id="scenarios" tone="surface" kicker={d.kicker} title={d.title} wide>
      <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start [&>*]:min-w-0">
        <Reveal>
          <p className="text-sm font-medium text-muted mb-6">{d.chartLabel}</p>
          <HBars
            data={d.chart.map((c) => ({ label: c.scenario, value: c.value, display: `₹${c.value} Cr` }))}
            displayKey="display"
            accentIndex={1}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="kicker text-pine-600 mb-4">{d.leversTitle}</p>
          <div className="space-y-3">
            {d.levers.map((l) => (
              <div key={l.name} className="rounded-xl border border-line bg-paper p-5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                <span className="font-semibold text-pine-950 w-32 shrink-0">{l.name}</span>
                <span className="text-sm text-muted">{l.desc}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export function FirstProofPoint() {
  const d = firstProofPoint
  return (
    <Section id="expansion" tone="dark" kicker={d.kicker} title={d.title} lede={d.intro} wide>
      <Reveal className="mt-10">
        <ExpansionMap />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {d.markets.map((m) => (
            <span key={m} className="rounded-full px-4 py-1.5 text-sm font-medium bg-pine-900 text-mist-200 ring-1 ring-pine-800">
              {m}
            </span>
          ))}
        </div>
        <p className="mt-8 text-mist-300 text-sm leading-relaxed max-w-3xl">{d.close}</p>
      </Reveal>
    </Section>
  )
}
