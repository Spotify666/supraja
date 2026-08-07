import Section from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import { Stat } from '../components/charts/Charts.jsx'
import { Stagger, StaggerItem, Reveal } from '../lib/motion.jsx'
import { executiveSummary as d } from '../data/content.js'

const icons = ['trend', 'handshake', 'compass', 'money']

export default function ExecutiveSummary() {
  return (
    <Section id="summary" tone="light" kicker={d.kicker} title={d.title} lede={d.lede}>
      <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {d.stats.map((s, i) => (
          <StaggerItem key={s.label} className="h-full">
            <div className="h-full rounded-2xl border border-line bg-surface p-6 flex flex-col">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-pine-950 text-gold mb-5">
                <Icon name={icons[i]} size={20} />
              </span>
              <Stat label={s.label} value={s.value} desc={s.desc} />
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.1}>
        <p className="mt-10 text-muted italic">{d.close}</p>
      </Reveal>
    </Section>
  )
}
