import Section from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import { HBars, Donut, Stat } from '../components/charts/Charts.jsx'
import { DestinationsMap } from '../components/GeoMaps.jsx'
import { Reveal, Stagger, StaggerItem } from '../lib/motion.jsx'
import {
  whatIsMVT,
  globalIndustry,
  whatPatientsTravelFor,
  vocabulary,
  fivePlayers,
  patientJourney,
  accreditation,
  permissions,
  competitiveField,
  industryFinancials,
  howBusinessesScale,
} from '../data/content.js'

function Card({ children, className = '', tone = 'paper' }) {
  const tones = {
    paper: 'bg-paper border border-line',
    surface: 'bg-surface border border-line',
    dark: 'bg-pine-950 text-paper',
    tint: 'bg-mist-100/70 border border-mist-200',
  }
  return <div className={`rounded-2xl p-6 sm:p-7 ${tones[tone]} ${className}`}>{children}</div>
}

export function WhatIsMVT() {
  const d = whatIsMVT
  return (
    <Section id="industry" tone="surface" kicker={d.kicker} title={d.title}>
      <div className="mt-12 grid lg:grid-cols-5 gap-4 items-start [&>*]:min-w-0">
        <div className="lg:col-span-3 space-y-4">
          <Card tone="dark">
            <p className="text-mist-300 text-sm mb-3">{d.termLine}</p>
            <p className="font-display leading-snug" style={{ fontSize: 'var(--step-2)' }}>
              {d.definition}
            </p>
          </Card>
          <Card tone="tint">
            <p className="text-ink leading-relaxed">{d.preference}</p>
          </Card>
          <p className="text-muted text-sm leading-relaxed px-1">{d.related}</p>
        </div>
        <div className="lg:col-span-2 space-y-4">
          <p className="kicker text-pine-600">{d.flowsTitle}</p>
          {d.flows.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <Card tone={i === 0 ? 'paper' : 'surface'}>
                <div className="flex items-center gap-3 mb-2.5">
                  <span className={`grid place-items-center w-8 h-8 rounded-lg ${i === 0 ? 'bg-pine-800 text-paper' : 'bg-mist-200 text-pine-950'}`}>
                    <Icon name="plane" size={16} className={i === 1 ? 'rotate-180' : ''} />
                  </span>
                  <h3 className="font-semibold text-ink">{f.title}</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function GlobalIndustry() {
  const d = globalIndustry
  return (
    <Section id="global" tone="light" kicker={d.kicker} title={d.title} wide>
      <Reveal className="mt-10">
        <DestinationsMap markers={d.destinations} />
      </Reveal>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full text-sm sm:text-[15px] border-collapse min-w-[560px]">
          <thead>
            <tr className="bg-pine-950 text-paper text-left">
              <th className="px-4 sm:px-5 py-3.5 font-semibold">Destination</th>
              <th className="px-4 sm:px-5 py-3.5 font-semibold">Known For</th>
              <th className="px-4 sm:px-5 py-3.5 font-semibold">{d.savingsHeader}</th>
            </tr>
          </thead>
          <tbody>
            {d.destinations.map((r) => (
              <tr key={r.name} className={`border-b border-line last:border-0 ${r.home ? 'bg-gold-tint' : 'bg-paper'}`}>
                <td className={`px-4 sm:px-5 py-3.5 font-semibold ${r.home ? 'text-gold-ink' : 'text-pine-950'}`}>{r.name}</td>
                <td className="px-4 sm:px-5 py-3.5 text-ink">{r.knownFor}</td>
                <td className="px-4 sm:px-5 py-3.5 tabular-nums font-medium text-pine-800">{r.savings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Stagger className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {d.stats.map((s) => (
          <StaggerItem key={s.value}>
            <Stat value={s.value} desc={s.desc} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}

export function PatientsTravelFor() {
  const d = whatPatientsTravelFor
  return (
    <Section id="travel-for" tone="surface" kicker={d.kicker} title={d.title}>
      <div className="mt-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center [&>*]:min-w-0">
        <Reveal>
          <p className="text-sm font-medium text-muted mb-6">{d.chartLabel} (%)</p>
          <Donut data={d.chart} labelKey="category" size={290} />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-pine-950 text-paper p-7 sm:p-9">
            <p className="kicker text-gold">{d.indiaTitle}</p>
            <p className="mt-4 text-mist-200 leading-relaxed">{d.indiaIntro}</p>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {d.indiaSpecialties.map((s) => (
                <li key={s} className="flex items-center gap-2.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 pt-5 border-t border-pine-800 text-gold-soft font-medium leading-relaxed">{d.indiaClose}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export function Vocabulary() {
  const d = vocabulary
  return (
    <Section id="vocabulary" tone="light" kicker={d.kicker} title={d.title}>
      <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {d.terms.map((t) => (
          <StaggerItem key={t.term} className="h-full">
            <div className="h-full rounded-2xl border border-line bg-surface p-6 hover:border-mist-300 transition-colors duration-200">
              <h3 className="font-display font-semibold text-pine-950 text-xl">{t.term}</h3>
              <p className="mt-2.5 text-muted text-sm leading-relaxed">{t.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}

export function FivePlayers() {
  const d = fivePlayers
  return (
    <Section id="players" tone="surface" kicker={d.kicker} title={d.title} wide>
      <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {d.players.map((p) => (
          <StaggerItem key={p.name} className="h-full">
            <div
              className={`h-full rounded-2xl p-6 ${
                p.owned ? 'bg-pine-950 text-paper' : 'bg-paper border border-line'
              }`}
            >
              <span className={`grid place-items-center w-10 h-10 rounded-xl mb-4 ${p.owned ? 'bg-pine-800 text-gold' : 'bg-mist-100 text-pine-800'}`}>
                <Icon name={p.icon} size={20} />
              </span>
              <h3 className="font-semibold leading-snug">{p.name}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${p.owned ? 'text-mist-200' : 'text-muted'}`}>{p.desc}</p>
              {p.owned && <p className="mt-3 kicker text-[0.65rem] text-gold">NATIVELY OURS</p>}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.15}>
        <p className="mt-10 max-w-3xl font-medium text-pine-950 leading-relaxed" style={{ fontSize: 'var(--step-1)' }}>
          {d.close}
        </p>
      </Reveal>
    </Section>
  )
}

export function PatientJourneySteps() {
  const d = patientJourney
  return (
    <Section id="journey" tone="dark" kicker={d.kicker} title={d.title}>
      <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10" gap={0.09}>
        {d.steps.map((s) => (
          <StaggerItem key={s.n}>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-pine-800 text-gold shrink-0">
                  <Icon name={s.icon} size={20} />
                </span>
                <span className="mt-2 font-display text-gold font-semibold">{s.n}</span>
              </div>
              <div>
                <h3 className="font-semibold text-paper" style={{ fontSize: 'var(--step-1)' }}>
                  {s.title}
                </h3>
                <p className="mt-1.5 text-mist-200 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}

export function Accreditation() {
  const d = accreditation
  return (
    <Section id="accreditation" tone="light" kicker={d.kicker} title={d.title}>
      <div className="mt-12 grid md:grid-cols-2 gap-4">
        {[d.nabh, d.jci].map((a, i) => (
          <Reveal key={a.name} delay={i * 0.1}>
            <div className={`h-full rounded-2xl p-7 sm:p-8 ${i === 0 ? 'bg-pine-950 text-paper' : 'bg-surface border border-line'}`}>
              <div className="flex items-center gap-3">
                <span className={`grid place-items-center w-11 h-11 rounded-xl ${i === 0 ? 'bg-pine-800 text-gold' : 'bg-mist-100 text-pine-800'}`}>
                  <Icon name="shield" size={22} />
                </span>
                <h3 className="font-display font-semibold text-3xl">{a.name}</h3>
              </div>
              <ul className={`mt-6 space-y-3.5 text-[15px] leading-relaxed ${i === 0 ? 'text-mist-200' : 'text-ink'}`}>
                {a.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${i === 0 ? 'bg-gold' : 'bg-pine-600'}`} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Permissions() {
  const d = permissions
  return (
    <Section id="permissions" tone="surface" kicker={d.kicker} title={d.title}>
      <div className="mt-12 grid md:grid-cols-2 gap-4">
        {[d.hospitalSide, d.patientSide].map((side, i) => (
          <Reveal key={side.title} delay={i * 0.1}>
            <div className="h-full rounded-2xl bg-paper border border-line p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-mist-100 text-pine-800">
                  <Icon name={i === 0 ? 'building' : 'passport'} size={20} />
                </span>
                <h3 className="font-semibold text-pine-950" style={{ fontSize: 'var(--step-1)' }}>
                  {side.title}
                </h3>
              </div>
              <ol className="space-y-3">
                {side.items.map((item, n) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                    <span className="shrink-0 grid place-items-center w-6 h-6 rounded-full bg-mist-100 text-pine-800 text-xs font-bold mt-0.5">
                      {n + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function CompetitiveField() {
  const d = competitiveField
  return (
    <Section id="competition" tone="light" kicker={d.kicker} title={d.title} wide>
      <div className="mt-12 grid lg:grid-cols-2 gap-10 [&>*]:min-w-0">
        <Reveal>
          <p className="kicker text-pine-600 mb-4">{d.nationalTitle}</p>
          <HBars
            data={d.national.map((n) => ({ label: n.chain, value: n.revenue, display: n.scale, sub: n.footprint }))}
            displayKey="display"
          />
          <ul className="mt-4 space-y-1 text-[13px] text-muted">
            {d.national.map((n) => (
              <li key={n.chain}>
                <span className="font-medium text-ink">{n.chain}</span> — {n.footprint}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="kicker text-pine-600 mb-4">{d.localTitle}</p>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full text-sm border-collapse min-w-[460px]">
              <thead>
                <tr className="bg-surface text-left">
                  {d.localHeaders.map((h) => (
                    <th key={h} className="px-4 py-3 font-semibold text-pine-950 border-b border-line">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.local.map((r) => (
                  <tr key={r.name} className="border-b border-line last:border-0">
                    <td className="px-4 py-3.5 font-semibold text-pine-950 whitespace-nowrap">{r.name}</td>
                    <td className="px-4 py-3.5 text-ink">{r.footprint}</td>
                    <td className="px-4 py-3.5 text-muted">{r.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export function IndustryFinancials() {
  const d = industryFinancials
  return (
    <Section id="financials" tone="surface" kicker={d.kicker} title={d.title} wide>
      <div className="mt-12 grid lg:grid-cols-2 gap-10 [&>*]:min-w-0">
        <Reveal>
          <p className="kicker text-pine-600 mb-4">{d.packagesTitle}</p>
          <HBars data={d.packages.map((p) => ({ label: p.specialty, value: p.value, display: p.price }))} displayKey="display" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="kicker text-pine-600 mb-4">{d.arpobTitle}</p>
          <p className="text-sm text-muted mb-5">{d.arpobIntro}</p>
          <HBars
            data={d.arpob.map((a) => ({ label: a.chain, value: a.num, display: a.yoy ? `${a.value} · ${a.yoy}` : a.value }))}
            displayKey="display"
          />
          <p className="mt-5 text-sm text-muted leading-relaxed">{d.arpobClose}</p>
        </Reveal>
      </div>
      <Reveal delay={0.1}>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {d.notes.map((n) => (
            <div key={n} className="rounded-xl bg-gold-tint border border-gold-soft px-5 py-4 text-[15px] font-medium text-gold-ink">
              {n}
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}

export function HowScale() {
  const d = howBusinessesScale
  return (
    <Section id="scale-pattern" tone="light" kicker={d.kicker} title={d.title}>
      <div className="mt-12 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          <p className="kicker text-pine-600 mb-6">{d.patternTitle}</p>
          <Stagger className="space-y-5">
            {d.pattern.map((p, i) => (
              <StaggerItem key={p}>
                <div className="flex gap-4 items-start">
                  <span className="shrink-0 grid place-items-center w-9 h-9 rounded-full bg-pine-950 text-gold font-display font-semibold">
                    {i + 1}
                  </span>
                  <p className="text-ink leading-relaxed pt-1.5">{p}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <div className="lg:col-span-2 space-y-4">
          {d.examples.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.1}>
              <div className="rounded-2xl bg-surface border border-line p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="grid place-items-center w-9 h-9 rounded-lg bg-mist-100 text-pine-800">
                    <Icon name="building" size={18} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-pine-950 leading-tight">{e.name}</h3>
                    <p className="text-xs text-muted">{e.sub}</p>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed">{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
