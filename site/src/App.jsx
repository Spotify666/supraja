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

const SourceVault = lazy(() => import('./components/SourceVault.jsx'))

const NAV_SECTIONS = [
  { id: 'summary', label: 'Summary' },
  { id: 'industry', label: 'The Industry' },
  { id: 'plan', label: 'Our Plan' },
  { id: 'uganda', label: 'Uganda' },
  { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'model', label: 'The Model' },
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
        {/* Part Three */}
        <PartThree />
        <UgandaMarket />
        <UgandaHealth />
        <UgandaPay />
        <CorridorExists />
        <LogisticsGlobe />
        <MarketProven />
        <OurAdvantage />
        {/* The Dhanturi ecosystem — the natural hook inside the journey */}
        <Ecosystem />
        <BusinessCase />
        <Compounding />
        <InstitutionalWorth />
        <Scenarios />
        <FirstProofPoint />
        {/* The model, keys, ask, close */}
        <Model />
        <KeysToSuccess />
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
