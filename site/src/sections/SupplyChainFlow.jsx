import Section from '../components/Section.jsx'
import ImageFigure from '../components/ImageFigure.jsx'
import { Reveal } from '../lib/motion.jsx'

// Supply Chain overview flow chart (client-supplied diagram).
export function SupplyChainFlow() {
  return (
    <Section id="supply-flow" tone="light" wide>
      <Reveal>
        <ImageFigure
          src={`${import.meta.env.BASE_URL}IMG-20260809-WA0003.jpg`}
          alt="Medical Tourism / International Patient Services — Channels (Direct, Local) and Operations (Direct, Local), with patient support services and countries served."
          caption="International patient services: two Channels (Direct · Local) and two Operations tracks (Direct · Local), over a common base of patient-support services. Tap to enlarge."
        />
      </Reveal>
    </Section>
  )
}
