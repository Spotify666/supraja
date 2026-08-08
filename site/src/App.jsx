import { lazy, Suspense, useState, useCallback } from 'react'
import { LiteProvider } from './lib/motion.jsx'
import { TopicBand } from './components/Section.jsx'
import Nav from './components/Nav.jsx'
import Hero from './sections/Hero.jsx'
import ExecutiveSummary from './sections/ExecutiveSummary.jsx'
import { GlobalIndustry, PatientsTravelFor, PatientJourneySteps, Accreditation, Permissions, CompetitiveField } from './sections/Industry.jsx'
import { GoToMarket, FiveRoles, RisksKpis } from './sections/Plan.jsx'
import {
  UgandaMarket,
  UgandaHealth,
  UgandaPay,
  CorridorExists,
  LogisticsGlobe,
  MarketProven,
  OurAdvantage,
  BusinessCase,
  Compounding,
  InstitutionalWorth,
  Scenarios,
  FirstProofPoint,
} from './sections/Uganda.jsx'
import Ecosystem from './sections/Ecosystem.jsx'
import Model from './sections/Model.jsx'
import { TheAsk, Closing } from './sections/Ask.jsx'
import { IndiaSources, AfricaMarket } from './sections/Markets.jsx'
import { Roadmap } from './sections/Roadmap.jsx'

const SourceVault = lazy(() => import('./components/SourceVault.jsx'))

// Nav mirrors the 9 topics, in order.
const NAV_SECTIONS = [
  { id: 'industry', label: 'Industry' },
  { id: 'supply', label: 'Supply Chain' },
  { id: 'xfactor', label: 'X-Factor' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'targetmarket', label: 'Africa' },
  { id: 'uganda', label: 'Uganda' },
  { id: 'financials', label: 'Financials' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'timeline', label: 'Timeline' },
]

export default function App() {
  const [vaultOpen, setVaultOpen] = useState(false)
  const openVault = useCallback(() => setVaultOpen(true), [])
  return (
    <LiteProvider>
      <a
        href="#industry"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-paper focus:text-ink focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>
      <Nav sections={NAV_SECTIONS} onVaultHint={openVault} />
      <main>
        <Hero />

        {/* 1 · INDUSTRY */}
        <TopicBand id="industry" n="01" title="Industry" sub="Market, demand, India's edge, and the competitive field" />
        <ExecutiveSummary />
        <GlobalIndustry />
        <PatientsTravelFor />
        <IndiaSources />
        <CompetitiveField />

        {/* 2 · SUPPLY CHAIN */}
        <TopicBand id="supply" n="02" title="Supply Chain" sub="How a patient moves through the system, and the channels that bring them" />
        <PatientJourneySteps />
        <GoToMarket />

        {/* 3 · THE X-FACTOR */}
        <TopicBand id="xfactor" n="03" title="The X-Factor" sub="Supraja + Dhanturi hospitality as one integrated recovery ecosystem" />
        <Ecosystem />

        {/* 4 · REQUIREMENTS */}
        <TopicBand id="requirements" n="04" title="Requirements" sub="Accreditation, permissions, and the IPD team to run it" />
        <Accreditation />
        <Permissions />
        <FiveRoles />

        {/* 5 · TARGET MARKET — AFRICA */}
        <TopicBand id="targetmarket" n="05" title="Target Market — Africa" sub="Where the established demand is, and how we tier it" />
        <AfricaMarket />

        {/* 6 · UGANDA STRATEGY */}
        <TopicBand id="uganda" n="06" title="Uganda Strategy" sub="The first proof point — market, corridor, and our advantage" />
        <UgandaMarket />
        <UgandaHealth />
        <UgandaPay />
        <CorridorExists />
        <LogisticsGlobe />
        <MarketProven />
        <FirstProofPoint />

        {/* 7 · FINANCIAL MODEL */}
        <TopicBand id="financials" n="07" title="Financial Model" sub="Investment, returns, and the economics of the institutional channel" />
        <Model />
        <BusinessCase />
        <Compounding />
        <InstitutionalWorth />
        <Scenarios />

        {/* 8 · CONCLUSION */}
        <TopicBand id="conclusion" n="08" title="Conclusion" sub="What could go wrong — and what we bring that nobody else has" />
        <RisksKpis />
        <OurAdvantage />

        {/* 9 · TIMELINE */}
        <TopicBand id="timeline" n="09" title="Timeline" sub="The 9-month build-launch-scale roadmap" />
        <Roadmap />

        <TheAsk />
        <Closing />
      </main>
      {vaultOpen && (
        <Suspense fallback={null}>
          <SourceVault open={vaultOpen} onClose={() => setVaultOpen(false)} />
        </Suspense>
      )}
    </LiteProvider>
  )
}
