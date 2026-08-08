import { lazy, Suspense, useState, useCallback } from 'react'
import { LiteProvider } from './lib/motion.jsx'
import Nav from './components/Nav.jsx'
import Hero from './sections/Hero.jsx'
import ExecutiveSummary from './sections/ExecutiveSummary.jsx'
import {
  WhatIsMVT,
  GlobalIndustry,
  PatientsTravelFor,
  Vocabulary,
  FivePlayers,
  PatientJourneySteps,
  Accreditation,
  Permissions,
  CompetitiveField,
  IndustryFinancials,
  HowScale,
} from './sections/Industry.jsx'
import { PartTwo, Methodology, Timeline, PriceOfCredibility, GoToMarket, FiveRoles, RisksKpis } from './sections/Plan.jsx'
import {
  PartThree,
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
import { KeysToSuccess, TheAsk, Closing } from './sections/Ask.jsx'
import { IndiaSources, AfricaMarket } from './sections/Markets.jsx'
import { Roadmap } from './sections/Roadmap.jsx'

const SourceVault = lazy(() => import('./components/SourceVault.jsx'))

const NAV_SECTIONS = [
  { id: 'summary', label: 'Summary' },
  { id: 'industry', label: 'The Industry' },
  { id: 'plan', label: 'Our Plan' },
  { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'africa', label: 'Africa' },
  { id: 'uganda', label: 'Uganda' },
  { id: 'model', label: 'The Model' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'ask', label: 'The Ask' },
]

export default function App() {
  const [vaultOpen, setVaultOpen] = useState(false)
  const openVault = useCallback(() => setVaultOpen(true), [])
  return (
    <LiteProvider>
      <a
        href="#summary"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-paper focus:text-ink focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>
      <Nav sections={NAV_SECTIONS} onVaultHint={openVault} />
      <main>
        <Hero />
        <ExecutiveSummary />
        {/* Part One — the deck's own order */}
        <WhatIsMVT />
        <GlobalIndustry />
        <PatientsTravelFor />
        {/* NEW: where medical tourists to India come from (source markets) */}
        <IndiaSources />
        <Vocabulary />
        <FivePlayers />
        <PatientJourneySteps />
        <Accreditation />
        <Permissions />
        <CompetitiveField />
        <IndustryFinancials />
        <HowScale />
        {/* Part Two */}
        <PartTwo />
        <Methodology />
        <Timeline />
        <PriceOfCredibility />
        <GoToMarket />
        <FiveRoles />
        <RisksKpis />
        {/* Supraja + Dhanturi Hospitality (X-Factor) — doc section 3, placed before Uganda */}
        <Ecosystem />
        {/* NEW: Target Market — Africa (FTA table, medical share, priority tiers) */}
        <AfricaMarket />
        {/* Part Three */}
        <PartThree />
        <UgandaMarket />
        <UgandaHealth />
        <UgandaPay />
        <CorridorExists />
        <LogisticsGlobe />
        <MarketProven />
        <OurAdvantage />
        <BusinessCase />
        <Compounding />
        <InstitutionalWorth />
        <Scenarios />
        <FirstProofPoint />
        {/* The model, keys, roadmap, ask, close */}
        <Model />
        <KeysToSuccess />
        {/* NEW: 9-month implementation roadmap (Timeline) */}
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
