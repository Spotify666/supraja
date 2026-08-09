import Section from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import { Reveal, Stagger, StaggerItem } from '../lib/motion.jsx'
import { supplyChain as d } from '../data/content.js'

function Item({ icon, title, desc, gold }) {
  return (
    <div className="flex gap-3 py-3 first:pt-0 last:pb-0">
      <span className={`shrink-0 grid place-items-center w-8 h-8 rounded-lg ${gold ? 'bg-gold-tint text-gold-ink' : 'bg-mist-100 text-pine-800'}`}>
        <Icon name={icon} size={16} />
      </span>
      <div className="min-w-0">
        <p className="font-semibold text-pine-950 text-sm leading-snug">{title}</p>
        <p className="text-muted text-xs leading-relaxed mt-0.5">{desc}</p>
      </div>
    </div>
  )
}

// A single Direct/Local column: header pill + item list with dashed dividers.
function ColumnCard({ label, items, gold }) {
  return (
    <div className="relative pt-6 flex flex-col items-center">
      {/* stub connecting up to the branch rail */}
      <span className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-6 bg-line" aria-hidden="true" />
      <span
        className={`mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide ${
          gold ? 'bg-gold-soft text-gold-ink' : 'bg-mist-200 text-pine-950'
        }`}
      >
        {label}
      </span>
      <div className={`w-full rounded-2xl border bg-paper p-5 ${gold ? 'border-gold-soft' : 'border-line'}`}>
        <div className="divide-y divide-dashed divide-line">
          {items.map((it) => (
            <Item key={it.title} {...it} gold={gold} />
          ))}
        </div>
      </div>
    </div>
  )
}

// A branch (Channels / Operations): header box + rail splitting to its two columns.
function Branch({ group }) {
  const gold = group.accent === 'gold'
  return (
    <div className="flex flex-col items-center">
      {/* stub down from the root rail */}
      <span className="w-px h-6 bg-line" aria-hidden="true" />
      <span
        className={`inline-flex items-center gap-2.5 rounded-xl px-6 py-3 font-semibold tracking-wide text-base shadow-sm ${
          gold ? 'bg-gold text-pine-950' : 'bg-pine-950 text-gold'
        }`}
      >
        <Icon name={group.icon} size={18} />
        {group.name}
      </span>

      {/* branch rail: vertical to a horizontal bar spanning the two columns */}
      <span className="w-px h-6 bg-line" aria-hidden="true" />
      <div className="relative w-full">
        <span className="hidden sm:block absolute top-0 left-1/4 right-1/4 h-px bg-line" aria-hidden="true" />
        <div className="grid sm:grid-cols-2 gap-5 [&>*]:min-w-0">
          {group.columns.map((c) => (
            <ColumnCard key={c.label} label={c.label} items={c.items} gold={gold} />
          ))}
        </div>
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
          <div className="rounded-2xl bg-pine-950 text-paper px-6 sm:px-10 py-5 text-center max-w-2xl shadow-sm">
            <p className="kicker text-gold text-[0.66rem] mb-1.5">International Patient Services</p>
            <p className="font-display font-semibold leading-snug" style={{ fontSize: 'var(--step-1)' }}>
              {d.root}
            </p>
          </div>
        </div>
      </Reveal>

      {/* Root rail splitting to the two branches */}
      <div className="relative mt-0">
        <span className="block w-px h-6 bg-line mx-auto" aria-hidden="true" />
        <span className="hidden lg:block absolute top-6 left-1/4 right-1/4 h-px bg-line" aria-hidden="true" />
        <Stagger className="grid lg:grid-cols-2 gap-10 lg:gap-8 [&>*]:min-w-0" gap={0.12}>
          {d.groups.map((g) => (
            <StaggerItem key={g.name}>
              <Branch group={g} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Patient support services — common base */}
      <Reveal delay={0.1}>
        <div className="mt-10 rounded-2xl bg-pine-950 text-paper p-6 sm:p-7">
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
