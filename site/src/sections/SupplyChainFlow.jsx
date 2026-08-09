import Section from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import { Reveal, Stagger, StaggerItem } from '../lib/motion.jsx'
import { supplyChain as d } from '../data/content.js'

function Item({ icon, title, desc }) {
  return (
    <div className="flex gap-3">
      <span className="shrink-0 grid place-items-center w-8 h-8 rounded-lg bg-mist-100 text-pine-800">
        <Icon name={icon} size={16} />
      </span>
      <div className="min-w-0">
        <p className="font-semibold text-pine-950 text-sm leading-snug">{title}</p>
        <p className="text-muted text-xs leading-relaxed mt-0.5">{desc}</p>
      </div>
    </div>
  )
}

function Column({ label, items, accent }) {
  return (
    <div className="rounded-2xl border border-line bg-paper p-5 sm:p-6 h-full">
      <p className={`kicker text-[0.66rem] mb-4 ${accent === 'gold' ? 'text-gold-ink' : 'text-pine-600'}`}>{label}</p>
      <div className="space-y-4">
        {items.map((it) => (
          <Item key={it.title} {...it} />
        ))}
      </div>
    </div>
  )
}

function Group({ group }) {
  const gold = group.accent === 'gold'
  return (
    <div>
      <div className="flex justify-center">
        <span
          className={`inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 font-semibold tracking-wide ${
            gold ? 'bg-gold text-pine-950' : 'bg-pine-950 text-gold'
          }`}
        >
          <Icon name={group.icon} size={18} />
          {group.name}
        </span>
      </div>
      {/* connector */}
      <div className="flex justify-center" aria-hidden="true">
        <span className={`w-px h-5 ${gold ? 'bg-gold/50' : 'bg-pine-800/40'}`} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4 [&>*]:min-w-0">
        {group.columns.map((c) => (
          <Column key={c.label} label={c.label} items={c.items} accent={group.accent} />
        ))}
      </div>
    </div>
  )
}

export function SupplyChainFlow() {
  return (
    <Section id="supply-flow" tone="surface" wide>
      {/* Root */}
      <Reveal>
        <div className="flex flex-col items-center">
          <div className="rounded-2xl bg-pine-950 text-paper px-6 sm:px-10 py-5 text-center max-w-2xl">
            <p className="kicker text-gold text-[0.66rem] mb-1.5">International Patient Services</p>
            <p className="font-display font-semibold leading-snug" style={{ fontSize: 'var(--step-1)' }}>
              {d.root}
            </p>
          </div>
          <span className="w-px h-6 bg-pine-800/40 mt-1" aria-hidden="true" />
        </div>
      </Reveal>

      {/* Two branches */}
      <Stagger className="grid lg:grid-cols-2 gap-8 lg:gap-10 [&>*]:min-w-0" gap={0.12}>
        {d.groups.map((g) => (
          <StaggerItem key={g.name}>
            <Group group={g} />
          </StaggerItem>
        ))}
      </Stagger>

      {/* Patient support services — common base */}
      <Reveal delay={0.1}>
        <div className="mt-8 rounded-2xl bg-pine-950 text-paper p-6 sm:p-7">
          <p className="kicker text-gold mb-5 text-center">{d.support.title}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {d.support.items.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center gap-2">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-pine-800 text-gold">
                  <Icon name={s.icon} size={20} />
                </span>
                <span className="text-xs text-mist-200 leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Countries served */}
      <Reveal delay={0.15}>
        <div className="mt-4 rounded-2xl border border-mist-200 bg-mist-100/60 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="flex items-center gap-2.5 shrink-0">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-pine-950 text-gold">
              <Icon name="target" size={18} />
            </span>
            <span className="kicker text-pine-600">{d.countries.title}</span>
          </span>
          <div className="flex flex-wrap gap-2">
            {d.countries.list.map((c) => (
              <span
                key={c}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium ${
                  c.startsWith('(') ? 'text-muted' : 'bg-paper border border-line text-pine-950'
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* discreet source fallback */}
      <Reveal delay={0.15}>
        <p className="mt-6 text-center">
          <a
            href={`${import.meta.env.BASE_URL}IMG-20260809-WA0003.jpg`}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 text-xs text-muted hover:text-pine-700 transition-colors"
          >
            <Icon name="expand" size={13} /> View original source diagram
          </a>
        </p>
      </Reveal>
    </Section>
  )
}
