import Section from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import { Reveal, Stagger, StaggerItem } from '../lib/motion.jsx'
import { keysToSuccess, theAsk, closing, meta } from '../data/content.js'

export function KeysToSuccess() {
  const d = keysToSuccess
  return (
    <Section id="keys" tone="surface" kicker={d.kicker} title={d.title} lede={d.subtitle}>
      <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4" gap={0.06}>
        {d.factors.map((f) => (
          <StaggerItem key={f.n} className="h-full">
            <div className="h-full rounded-2xl bg-paper border border-line p-6">
              <span className="font-display text-gold font-semibold text-2xl">{f.n}</span>
              <h3 className="font-semibold text-pine-950 mt-2">{f.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{f.desc}</p>
            </div>
          </StaggerItem>
        ))}
        <StaggerItem className="h-full">
          <div className="h-full rounded-2xl bg-pine-950 text-paper p-6">
            <p className="kicker text-gold text-[0.7rem]">{d.oneMessage.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-mist-200">{d.oneMessage.body}</p>
          </div>
        </StaggerItem>
      </Stagger>
    </Section>
  )
}

export function TheAsk() {
  const d = theAsk
  return (
    <Section id="ask" tone="light" kicker={d.kicker} title={d.title}>
      <Stagger className="mt-12 grid md:grid-cols-3 gap-4" gap={0.12}>
        {d.asks.map((a) => (
          <StaggerItem key={a.title} className="h-full">
            <div className="h-full rounded-2xl border border-line bg-surface p-7 text-center">
              <span className="mx-auto grid place-items-center w-14 h-14 rounded-2xl bg-pine-950 text-gold mb-5">
                <Icon name={a.icon} size={26} />
              </span>
              <h3 className="font-display font-semibold text-pine-950 text-2xl">{a.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{a.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.15}>
        <p className="mt-10 max-w-3xl mx-auto text-center font-medium text-pine-950 leading-relaxed" style={{ fontSize: 'var(--step-1)' }}>
          {d.close}
        </p>
      </Reveal>
    </Section>
  )
}

export function Closing() {
  const d = closing
  return (
    <section id="closing" className="relative bg-pine-950 text-paper overflow-hidden">
      <div aria-hidden="true" className="absolute -left-40 -bottom-52 w-[36rem] h-[36rem] rounded-full bg-pine-900 opacity-60" />
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12 py-24 sm:py-36 text-center">
        <Reveal>
          <p className="kicker text-gold">{d.kicker}</p>
          <h2 className="font-display font-bold mt-5 leading-[1.05] tracking-tight mx-auto max-w-4xl" style={{ fontSize: 'var(--step-4)' }}>
            {d.title}
          </h2>
          <div className="mt-8 space-y-1.5">
            {d.lines.map((l) => (
              <p key={l} className="text-mist-200" style={{ fontSize: 'var(--step-1)' }}>
                {l}
              </p>
            ))}
          </div>
          <p className="mt-12 font-display italic text-gold text-2xl">{d.thanks}</p>
        </Reveal>
      </div>
      <footer className="relative border-t border-pine-800">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <span className="inline-grid place-items-center rounded-lg bg-paper px-4 py-3 shadow-sm">
            <img
              src={`${import.meta.env.BASE_URL}logo-full.webp`}
              alt="Supraja Hospitals — A Unit of Dhanturi Hospitals Pvt. Ltd."
              className="h-11 sm:h-12 w-auto block"
              width="260"
              height="107"
            />
          </span>
          <span className="text-xs text-mist-300 tracking-wide text-center sm:text-right">{meta.dateline}</span>
        </div>
      </footer>
    </section>
  )
}
