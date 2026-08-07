import Section from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import { Reveal, Stagger, StaggerItem } from '../lib/motion.jsx'
import { ecosystem as d } from '../data/content.js'

// Steps of the integrated model that Dhanturi hospitality owns.
const hotelSteps = new Set(['Dhanturi Gorup of Hotels', 'Recovery Stay at the Hotels', 'Tourism (optional)'])
const hospitalSteps = new Set(['Pre-operative Assessment', 'Supraja Hospital', 'Treatment', 'Recovery', 'Teleconsultation'])

export default function Ecosystem() {
  return (
    <Section id="ecosystem" tone="tint" kicker={d.kicker} title={d.title}>
      <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start [&>*]:min-w-0">
        <div>
          <Reveal>
            <div className="space-y-1.5">
              {d.intro.map((l, i) => (
                <p key={l} className={i === 0 ? 'font-display font-semibold text-pine-950 text-2xl' : 'text-ink text-lg'}>
                  {l}
                </p>
              ))}
            </div>
            <div className="mt-7 space-y-2 text-ink leading-relaxed">
              {d.problem.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-2.5">
              {d.needs.map((n) => (
                <li key={n} className="flex items-center gap-2.5 rounded-lg bg-paper border border-line px-3.5 py-2.5 text-sm font-medium text-ink">
                  <span className="w-1.5 h-1.5 rounded-full bg-pine-600 shrink-0" />
                  {n}
                </li>
              ))}
            </ul>
            <div className="mt-7 space-y-1">
              {d.punch.map((p, i) => (
                <p key={p} className={i === 1 ? 'font-display font-semibold text-pine-950 text-2xl' : 'text-muted'}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Stagger className="mt-10 grid sm:grid-cols-2 gap-3">
            {d.benefits.map((b) => (
              <StaggerItem key={b.title} className="h-full">
                <div className="h-full rounded-xl bg-paper border border-line p-5">
                  <h3 className="font-semibold text-pine-950">{b.title}</h3>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed">{b.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-pine-950 text-paper p-7 sm:p-8 lg:sticky lg:top-24">
            <p className="kicker text-gold mb-6">{d.flowTitle}</p>
            <ol className="relative">
              {d.flow.map((step, i) => {
                const isHotel = hotelSteps.has(step)
                const isHospital = hospitalSteps.has(step)
                return (
                  <li key={step} className="relative flex gap-4 pb-4 last:pb-0">
                    {i < d.flow.length - 1 && (
                      <span className="absolute left-[15px] top-8 bottom-0 w-px bg-pine-800" aria-hidden="true" />
                    )}
                    <span
                      className={`shrink-0 grid place-items-center w-8 h-8 rounded-full mt-0 ${
                        isHotel ? 'bg-gold text-pine-950' : isHospital ? 'bg-pine-700 text-paper' : 'bg-pine-800 text-mist-200'
                      }`}
                    >
                      <Icon name={isHotel ? 'hotel' : isHospital ? 'hospital' : 'plane'} size={15} />
                    </span>
                    <span className={`pt-1 font-medium ${isHotel ? 'text-gold' : 'text-paper'}`}>{step}</span>
                  </li>
                )
              })}
            </ol>
            <div className="mt-7 pt-5 border-t border-pine-800 flex flex-wrap gap-x-6 gap-y-2 text-xs text-mist-300">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" /> Dhanturi hospitality
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-pine-700" /> Supraja clinical care
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-pine-800" /> Logistics
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
