import Section from '../components/Section.jsx'
import { HBars, Columns } from '../components/charts/Charts.jsx'
import { Reveal } from '../lib/motion.jsx'
import { financialModel as d } from '../data/content.js'

export default function Model() {
  return (
    <Section id="model" tone="light" kicker={d.kicker} title={d.title} wide>
      <Reveal>
        <div className="mt-10 rounded-2xl bg-pine-950 text-paper p-7 sm:p-9 max-w-3xl">
          <p className="font-display font-semibold leading-snug" style={{ fontSize: 'var(--step-2)' }}>
            {d.formula}
          </p>
          <p className="mt-3 text-mist-200 leading-relaxed">{d.formulaNote}</p>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10 max-w-3xl">
          <p className="kicker text-pine-600 mb-4">{d.assumptionsTitle}</p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {d.assumptions.map((a) => (
              <li key={a} className="flex gap-3 rounded-xl bg-surface border border-line p-4 text-sm leading-relaxed text-ink">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pine-600 shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mt-14 grid lg:grid-cols-2 gap-x-14 gap-y-12 [&>*]:min-w-0">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4 mb-5">
            <p className="kicker text-pine-600">{d.investmentTitle}</p>
            <p className="text-sm text-muted">{d.investmentUnit}</p>
          </div>
          <HBars data={d.investment.map((i) => ({ label: i.item, value: i.cost, display: String(i.cost) }))} displayKey="display" />
          <div className="mt-5 flex items-baseline justify-between border-t-2 border-pine-950 pt-4">
            <span className="font-semibold text-pine-950">Total Investment</span>
            <span className="font-display font-bold text-pine-950 text-2xl tabular-nums">{d.investmentTotal}</span>
          </div>
          <blockquote className="mt-6 rounded-xl bg-gold-tint border border-gold-soft p-5 text-gold-ink font-medium leading-relaxed">
            {d.stakeholderMsg1}
          </blockquote>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="kicker text-pine-600 mb-5">{d.growthTitle}</p>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-surface text-left">
                  <th className="px-4 py-3 font-semibold text-pine-950 border-b border-line">Year</th>
                  <th className="px-4 py-3 font-semibold text-pine-950 border-b border-line">Patients per Month</th>
                  <th className="px-4 py-3 font-semibold text-pine-950 border-b border-line">Patients per Year</th>
                </tr>
              </thead>
              <tbody>
                {d.growth.map((g) => (
                  <tr key={g.year} className="border-b border-line last:border-0">
                    <td className="px-4 py-3 font-semibold text-pine-950">{g.year}</td>
                    <td className="px-4 py-3 tabular-nums text-ink">{g.perMonth}</td>
                    <td className="px-4 py-3 tabular-nums font-semibold text-pine-800">{g.perYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 font-semibold text-pine-950 text-sm">Why is this realistic?</p>
          <ul className="mt-2.5 space-y-2 text-sm text-muted leading-relaxed">
            {d.growthWhy.map((w) => (
              <li key={w} className="flex gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pine-600 shrink-0" />
                {w}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <p className="kicker text-pine-600 mb-5">{d.revenuePerPatientTitle}</p>
          <div className="rounded-2xl border border-line overflow-hidden">
            {d.revenuePerPatient.map((r) => (
              <div key={r.source} className="flex items-baseline justify-between gap-4 px-5 py-3.5 border-b border-line bg-paper">
                <span className="text-ink text-[15px]">{r.source}</span>
                <span className="tabular-nums font-semibold text-pine-800">{r.value}</span>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-4 px-5 py-4 bg-pine-950 text-paper">
              <span className="font-semibold">Total Revenue per Patient</span>
              <span className="font-display font-bold text-gold text-xl tabular-nums">{d.revenuePerPatientTotal}</span>
            </div>
          </div>
          <blockquote className="mt-6 rounded-xl bg-gold-tint border border-gold-soft p-5 text-gold-ink font-medium leading-relaxed">
            {d.stakeholderMsg2}
          </blockquote>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="kicker text-pine-600 mb-5">{d.annualTitle}</p>
          <Columns
            data={d.annual.map((a) => ({ label: a.year, revenue: a.revNum, ebitda: a.ebitdaNum }))}
            series={[
              { key: 'revenue', label: 'Revenue (₹ Cr)' },
              { key: 'ebitda', label: 'EBITDA (₹ Cr)' },
            ]}
            height={340}
            yLabel="₹ Crore"
          />
          <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full text-sm border-collapse min-w-[520px]">
              <thead>
                <tr className="bg-surface text-left">
                  {['Year', 'Patients', 'Revenue', 'Operating Cost', 'EBITDA'].map((h) => (
                    <th key={h} className="px-4 py-3 font-semibold text-pine-950 border-b border-line whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.annual.map((a) => (
                  <tr key={a.year} className="border-b border-line last:border-0">
                    <td className="px-4 py-3 font-semibold text-pine-950">{a.year}</td>
                    <td className="px-4 py-3 tabular-nums text-ink">{a.patients}</td>
                    <td className="px-4 py-3 tabular-nums text-ink">{a.revenue}</td>
                    <td className="px-4 py-3 tabular-nums text-ink">{a.opex}</td>
                    <td className="px-4 py-3 tabular-nums font-semibold text-pine-800">{a.ebitda}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted">
            Operating costs include: {d.opexIncludes.join(' · ')}
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid lg:grid-cols-2 gap-4 items-stretch">
        <Reveal>
          <div className="h-full rounded-2xl bg-surface border border-line p-7">
            <p className="kicker text-pine-600 mb-3">{d.breakEvenTitle}</p>
            {d.breakEven.map((b, i) => (
              <p key={b} className={i === 0 ? 'text-ink font-medium leading-relaxed' : 'mt-2 text-sm text-muted'}>
                {b}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          {/* The two source files state different base cases — surfaced, not merged. */}
          <div className="h-full rounded-2xl border-2 border-gold-soft bg-gold-tint p-7">
            <p className="kicker text-gold-ink mb-3">{d.conflictNote.title}</p>
            <p className="text-sm leading-relaxed text-gold-ink">{d.conflictNote.body}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
