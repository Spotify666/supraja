import Section from '../components/Section.jsx'
import Expandable from '../components/Expandable.jsx'
import { HBars } from '../components/charts/Charts.jsx'
import { Reveal, Stagger, StaggerItem } from '../lib/motion.jsx'
import { indiaSources, africaMarket } from '../data/content.js'

// Western thousands grouping to match the source figures exactly (e.g. 482,336)
const nf = (n) => n.toLocaleString('en-US')

// §1 — Where medical tourists to India come from (source markets)
export function IndiaSources() {
  const d = indiaSources
  return (
    <Section id="sources" tone="light" kicker={d.kicker} title={d.title} lede={d.lede} wide>
      <div className="mt-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start [&>*]:min-w-0">
        <Reveal>
          <p className="text-sm font-medium text-muted mb-6">{d.chartLabel}</p>
          <HBars
            data={d.top.map((t, i) => ({ label: t.country, value: t.value, display: nf(t.value) }))}
            displayKey="display"
            accentIndex={0}
          />
          <p className="mt-5 text-xs text-muted">
            Bangladesh dwarfs every other market — bars are to scale, so smaller markets read as slivers.
          </p>
        </Reveal>

        <div className="space-y-4">
          <Reveal>
            <div className="rounded-2xl bg-pine-950 text-paper p-6 sm:p-7">
              <p className="kicker text-gold mb-3">{d.othersLabel}</p>
              <div className="flex flex-wrap gap-2">
                {d.others.map((o) => (
                  <span key={o} className="rounded-full bg-pine-900 ring-1 ring-pine-800 px-3.5 py-1.5 text-sm font-medium text-mist-200">
                    {o}
                  </span>
                ))}
              </div>
              <p className="mt-5 pt-4 border-t border-pine-800 text-gold-soft text-sm leading-relaxed">{d.keyPoint}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <Expandable title="Why this matters for Supraja" hint="India vs. Hyderabad source mix" defaultOpen>
              <div className="space-y-3">
                {d.conclusions.map((c) => (
                  <p key={c.label}>
                    <span className="font-semibold text-pine-950">{c.label}: </span>
                    {c.text}
                  </p>
                ))}
              </div>
            </Expandable>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

// §5 — Target Market: Africa (FTA table, medical share, priority tiers)
export function AfricaMarket() {
  const d = africaMarket
  const maxFtas = Math.max(...d.rows.map((r) => r.ftas))
  return (
    <Section id="africa" tone="surface" kicker={d.kicker} title={d.title} lede={d.summary} wide>
      <div className="mt-10 grid lg:grid-cols-5 gap-6 lg:gap-10 items-start [&>*]:min-w-0">
        {/* The table is the star — always visible */}
        <Reveal className="lg:col-span-3">
          <p className="kicker text-pine-600 mb-4">{d.tableTitle}</p>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full text-sm sm:text-[15px] border-collapse min-w-[440px]">
              <thead>
                <tr className="bg-pine-950 text-paper text-left">
                  <th className="px-4 sm:px-5 py-3 font-semibold">{d.headers[0]}</th>
                  <th className="px-4 sm:px-5 py-3 font-semibold text-right">{d.headers[1]}</th>
                  <th className="px-4 sm:px-5 py-3 font-semibold">{d.headers[2]}</th>
                </tr>
              </thead>
              <tbody>
                {d.rows.map((r) => (
                  <tr key={r.country} className="border-b border-line last:border-0 bg-paper">
                    <td className="px-4 sm:px-5 py-3 font-semibold text-pine-950 whitespace-nowrap">{r.country}</td>
                    <td className="px-4 sm:px-5 py-3 tabular-nums text-right text-ink">{nf(r.ftas)}</td>
                    <td className="px-4 sm:px-5 py-3">
                      <div className="flex items-center gap-2.5">
                        <span className="tabular-nums font-semibold text-pine-800 w-14 shrink-0">{r.share.toFixed(1)}%</span>
                        <span className="hidden sm:block h-2 rounded-full bg-mist-100 flex-1 overflow-hidden max-w-[120px]">
                          <span className="block h-full rounded-full bg-gold" style={{ width: `${r.share}%` }} />
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">Sorted by medical share (2024). FTAs = foreign tourist arrivals to India.</p>
        </Reveal>

        {/* Priority tiers + the definition note */}
        <div className="lg:col-span-2 space-y-4">
          <p className="kicker text-pine-600">{d.tiersTitle}</p>
          <Stagger className="space-y-3">
            {d.tiers.map((t, i) => (
              <StaggerItem key={t.tier}>
                <div className={`rounded-2xl p-5 ${i === 0 ? 'bg-pine-950 text-paper' : 'bg-paper border border-line'}`}>
                  <div className="flex items-baseline gap-2.5 mb-3">
                    <span className={`font-display font-semibold text-lg ${i === 0 ? 'text-gold' : 'text-pine-800'}`}>{t.tier}</span>
                    <span className={`kicker text-[0.65rem] ${i === 0 ? 'text-mist-200' : 'text-muted'}`}>{t.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t.countries.map((c) => (
                      <span
                        key={c}
                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                          i === 0 ? 'bg-gold text-pine-950' : i === 1 ? 'bg-mist-100 text-pine-950' : 'bg-surface border border-line text-muted'
                        }`}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <Expandable title="What “medical share” means" hint="Read before interpreting the table" tone="light">
              {d.note.replace('Important: ', '')}
            </Expandable>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
