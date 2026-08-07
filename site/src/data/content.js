// ---------------------------------------------------------------------------
// CONTENT — transcribed verbatim from the two source files:
//   1. "Supraja Medical Tourism Board Deck.pptx"  (the deck's flow leads)
//   2. "MVT Final.docx"                            (the working document)
// Substantive statements and numbers must trace back to those files.
// ---------------------------------------------------------------------------

export const meta = {
  org: 'SUPRAJA HOSPITALS',
  group: 'DHANTURI GROUP',
  footerLine: 'SUPRAJA HOSPITALS · DHANTURI GROUP',
  dateline: 'A Dhanturi Group Enterprise · Hyderabad, India · July 2026',
}

export const hero = {
  kicker: 'A STAKEHOLDER BRIEFING IN THREE PARTS',
  title: 'Medical Tourism: The Industry, Our Plan, and the Uganda Opportunity',
  parts: [
    {
      n: '01',
      title: 'The Industry',
      desc: 'Market, technicalities, permissions, competitors, financials, scope and how this business expands',
    },
    {
      n: '02',
      title: 'Our Plan of Action',
      desc: 'A generic, repeatable methodology and timeline — built before any single country enters the conversation',
    },
    {
      n: '03',
      title: 'The Uganda Opportunity',
      desc: 'The market assessed on its own merits first — then the specific advantage we bring to it',
    },
  ],
}

export const executiveSummary = {
  kicker: 'EXECUTIVE SUMMARY',
  title: 'The Case in One Page',
  lede: 'Supraja Hospitals can build a defensible, high-margin international patient pipeline — anchored by a real Uganda government relationship and Dhanturi Group hospitality that no competitor in this field can replicate.',
  stats: [
    {
      label: 'THE MARKET',
      value: '$7–13B',
      desc: "India's medical tourism market; global market $31B+ and growing",
    },
    {
      label: 'THE EDGE',
      value: '2 Unmatched Assets',
      desc: 'A direct Uganda government relationship + Dhanturi Group hospitality',
    },
    {
      label: 'THE PLAN',
      value: '36 Months',
      desc: 'A phased, disciplined build — accreditation first, institutional access last',
    },
    {
      label: 'THE RETURN',
      value: '₹6.1 Cr EBITDA',
      desc: '3-year cumulative, on ₹1.4 Cr invested — break-even by Month 22',
    },
  ],
  close: 'What follows: the industry, in full — then our plan — then why Uganda, and why us.',
}

// ---------------------------------------------------------------------------
// PART ONE · THE INDUSTRY
// ---------------------------------------------------------------------------

export const whatIsMVT = {
  kicker: 'PART ONE · THE INDUSTRY',
  title: 'What Is Medical Tourism, Precisely?',
  termLine: 'Medical Tourism (also “medical travel,” “health tourism,” or “medical value travel / MVT”)',
  definition:
    'The practice of travelling across an international border specifically to receive medical treatment — typically for lower cost, shorter waiting times, or access to care unavailable at home.',
  preference:
    'Industry practitioners increasingly prefer “medical value travel” over “tourism” — it signals a deliberate healthcare decision, not a leisure trip with a procedure attached.',
  flowsTitle: 'TWO DIRECTIONS OF FLOW',
  flows: [
    {
      title: 'Inbound medical tourism',
      desc: "Foreign patients travelling into a country for care. This is the opportunity we're evaluating — India as the destination, a priority source country still to be discussed.",
    },
    {
      title: 'Outbound medical tourism',
      desc: "Domestic patients travelling elsewhere for care — the reason many source-country referral systems exist in the first place, as we'll see later.",
    },
  ],
  related:
    'Related term: Wellness tourism — travel for preventive/lifestyle wellbeing, not treatment of a diagnosed condition. A distinct, adjacent industry.',
}

export const globalIndustry = {
  kicker: 'PART ONE · THE INDUSTRY',
  title: 'A $31 Billion Global Industry, With Distinct National Specialities',
  destinations: [
    { name: 'Turkey', knownFor: 'Dental · hair transplant · cosmetic', savings: '50–75% lower', coords: [35.24, 38.96] },
    { name: 'Thailand', knownFor: 'Cosmetic surgery · wellness', savings: '50–70% lower', coords: [100.99, 15.87] },
    { name: 'India', knownFor: 'Cardiac · orthopedic · oncology', savings: '60–85% lower', coords: [78.96, 20.59], home: true },
    { name: 'Mexico', knownFor: 'Dental · bariatric · cosmetic', savings: '40–65% lower', coords: [-102.55, 23.63] },
    { name: 'South Korea', knownFor: 'Facial cosmetic · dermatology', savings: '30–50% lower', coords: [127.77, 35.91] },
  ],
  savingsHeader: 'Typical Savings vs. US/UK',
  stats: [
    { value: '$31B+', desc: 'Global market, 2024' },
    { value: '$7–13B', desc: "India's market size" },
    { value: '130,000+', desc: 'Medical arrivals to India, Jan–Apr 2025 alone' },
    { value: '#1', desc: "India's rank for Nigerian patients — ahead of UK & US" },
  ],
}

export const whatPatientsTravelFor = {
  kicker: 'PART ONE · THE INDUSTRY',
  title: 'What Patients Actually Travel For',
  chartLabel: 'Share of global medical tourism cases',
  chart: [
    { category: 'Cosmetic', value: 25 },
    { category: 'Dental', value: 15 },
    { category: 'Fertility', value: 12 },
    { category: 'Orthopedic', value: 10 },
    { category: 'Ophthalmic', value: 10 },
    { category: 'Cardiac', value: 8 },
    { category: 'Bariatric', value: 7 },
  ],
  indiaTitle: 'INDIA SPECIALISES DIFFERENTLY',
  indiaIntro:
    "Unlike Turkey and Thailand's cosmetic/dental-led volumes, India built its reputation on complex, high-acuity medicine:",
  indiaSpecialties: ['Cardiac surgery', 'Orthopedic surgery', 'Oncology', 'Organ transplant'],
  indiaClose: 'This is precisely the specialty mix our hospital already runs — a direct fit, not a stretch.',
}

export const vocabulary = {
  kicker: 'PART ONE · THE INDUSTRY',
  title: "The Vocabulary You'll Hear in Every Conversation From Here",
  terms: [
    {
      term: 'Facilitator',
      desc: 'An intermediary connecting patients with hospitals and arranging travel, visas, and accommodation — typically paid a commission by the hospital.',
    },
    {
      term: 'IPD',
      desc: "International Patient Department — the hospital's dedicated unit for coordinating foreign patients end to end.",
    },
    {
      term: 'Source vs. Destination Country',
      desc: 'Source = where the patient lives. Destination = where treatment happens.',
    },
    {
      term: 'Accreditation (NABH / JCI)',
      desc: 'Independent quality certifications that signal a hospital meets international-grade safety and care standards.',
    },
    {
      term: 'e-Medical Visa',
      desc: "India's dedicated visa category for foreign patients (plus one attendant visa each for up to two companions).",
    },
    {
      term: 'Package / Bundled Pricing',
      desc: 'An all-inclusive quoted price covering procedure and stay — the industry-standard way international patients are quoted.',
    },
  ],
}

export const fivePlayers = {
  kicker: 'PART ONE · THE INDUSTRY',
  title: 'Five Players Make This Industry Work',
  players: [
    {
      name: 'The Hospital',
      desc: 'Clinical care, accreditation, pricing, and the invitation letter that starts the visa process.',
      icon: 'hospital',
      owned: true,
    },
    {
      name: 'The Facilitator',
      desc: 'Sources and screens patients, negotiates on their behalf — for a commission (typically 7.5–30%).',
      icon: 'handshake',
      owned: false,
    },
    {
      name: 'Hospitality Partner',
      desc: 'Pre- and post-op accommodation for patient and attendant — often the most overlooked link.',
      icon: 'hotel',
      owned: true,
    },
    {
      name: 'Visa & Immigration Authority',
      desc: "Issues the e-medical visa based on the hospital's documentation.",
      icon: 'passport',
      owned: false,
    },
    {
      name: 'Insurer / Payer',
      desc: 'Government schemes, private insurance, or self-pay — increasingly with direct-billing arrangements.',
      icon: 'money',
      owned: true,
    },
  ],
  close:
    "Supraja Hospitals and Dhanturi Group's hotels can natively own three of these five roles — a structural advantage over any single-role competitor.",
}

export const patientJourney = {
  kicker: 'PART ONE · THE INDUSTRY',
  title: 'The Technicalities: How a Patient Actually Moves Through the System',
  steps: [
    { n: 1, title: 'Inquiry & Records', desc: 'Patient reports received; remote specialist review', icon: 'file' },
    { n: 2, title: 'Invitation Letter', desc: 'Hospital issues letter; e-medical visa applied for', icon: 'passport' },
    { n: 3, title: 'Travel & Arrival', desc: 'Airport pickup; pre-admission workup', icon: 'plane' },
    { n: 4, title: 'Treatment', desc: 'Procedure, inpatient stay, discharge planning', icon: 'stethoscope' },
    { n: 5, title: 'Recovery Stay', desc: 'Accommodation and rest before travel home', icon: 'bed' },
    { n: 6, title: 'Follow-Up', desc: 'Scheduled teleconsultations after return home', icon: 'heartbeat' },
  ],
}

export const accreditation = {
  kicker: 'PART ONE · THE INDUSTRY',
  title: 'Accreditation: The Trust Signal That Makes Everything Else Possible',
  nabh: {
    name: 'NABH',
    points: [
      "India's national hospital accreditation body, under the Quality Council of India",
      'ISQua-recognised — internationally benchmarked, not just a local rubber stamp',
      '1,700+ hospitals accredited nationally; the credential “Heal in India” promotes',
      'Realistic target for a 100-bed hospital: ~10–12 months, ₹90–150 lakh',
    ],
  },
  jci: {
    name: 'JCI',
    points: [
      'Joint Commission International — the higher, globally-branded accreditation tier',
      'Only ~63 hospitals in India hold it — materially higher cost and rigour than NABH',
      'Typically pursued after a hospital has proven, meaningful international volume',
      'Our plan: a later-phase goal, not a Day-1 requirement',
    ],
  },
}

export const permissions = {
  kicker: 'PART ONE · THE INDUSTRY',
  title: 'Permissions: What It Legally Takes to Treat a Foreign Patient',
  hospitalSide: {
    title: 'Hospital-Side Permissions',
    items: [
      'Clinical Establishments Act / state registration',
      'AERB clearance for imaging equipment',
      'Licensed pharmacy with a registered pharmacist',
      'Fire & biomedical waste management compliance',
      'NABH / JCI accreditation (the credibility layer above)',
    ],
  },
  patientSide: {
    title: 'Patient-Side Permissions',
    items: [
      'Referral letter + medical reports from home doctor',
      'Hospital invitation letter (signed, stamped, itemised)',
      'e-Medical Visa ("MED") + e-Medical Attendant Visa ("MED-X")',
      'Yellow fever vaccination card if arriving from an endemic country',
      'FRRO registration & biometric validation on arrival if stay extends',
    ],
  },
}

export const competitiveField = {
  kicker: 'PART ONE · THE INDUSTRY',
  title: 'The Competitive Field: Real Numbers, Not Estimates',
  nationalTitle: 'NATIONAL GIANTS (FY25 FIGURES)',
  nationalHeaders: ['Chain', 'Footprint', 'Scale'],
  national: [
    { chain: 'Apollo Hospitals', footprint: '73 hospitals · 8,050+ beds', scale: '₹21,794 Cr revenue', revenue: 21794 },
    { chain: 'Fortis Healthcare', footprint: '33 hospitals · 5,800 beds', scale: '₹7,783 Cr revenue', revenue: 7783 },
    { chain: 'Max Healthcare', footprint: '20 hospitals · 3,454 beds', scale: '₹7,028 Cr revenue', revenue: 7028 },
    { chain: 'Narayana Health', footprint: '42 hospitals · 5,554 beds', scale: '₹5,483 Cr revenue', revenue: 5483 },
  ],
  localTitle: 'HYDERABAD — OUR ACTUAL LOCAL COMPETITION',
  localHeaders: ['Hospital', 'Footprint', 'Scale & Notes'],
  local: [
    { name: 'KIMS Hospitals', footprint: '27 hospitals nationally', notes: '8,300+ beds (1,000-bed Secunderabad flagship)' },
    { name: 'Yashoda Hospitals', footprint: '4 Hyderabad hospitals', notes: '2,756 beds · decades-old dedicated IPD' },
    { name: 'Apollo Hyderabad', footprint: 'Single flagship, 1988', notes: '530 beds · first JCI stroke-care certification in the world' },
    { name: 'Continental Hospitals', footprint: 'Part of IHH Healthcare', notes: '84 hospitals, 16,000+ beds, across 10 countries' },
  ],
}

export const industryFinancials = {
  kicker: 'PART ONE · THE INDUSTRY',
  title: 'Industry Financials: What This Business Actually Earns',
  packagesTitle: 'TYPICAL PACKAGE PRICING BY SPECIALTY',
  packages: [
    { specialty: 'Cardiac surgery', price: '$7,500', value: 7500 },
    { specialty: 'Orthopedic joint replacement', price: '$6,500', value: 6500 },
    { specialty: 'Oncology (surgical + adjuvant)', price: '$12,000', value: 12000 },
    { specialty: 'Nephrology / transplant workup', price: '$16,000', value: 16000 },
    { specialty: 'General / diagnostic-led', price: '$3,500', value: 3500 },
  ],
  arpobTitle: 'ARPOB IS RISING — AND MEDICAL TOURISM IS PART OF WHY',
  arpobIntro: 'Average Revenue Per Occupied Bed (ARPOB), FY25 YoY, for listed Indian hospital chains:',
  arpob: [
    { chain: 'Fortis Healthcare', value: '₹66,301', num: 66301, yoy: '+9% YoY' },
    { chain: 'Apollo Hospitals', value: '₹60,588', num: 60588, yoy: '' },
    { chain: 'KIMS Hospitals', value: '₹39,158', num: 39158, yoy: '+23% YoY — highest' },
  ],
  arpobClose:
    'Industry analysts attribute the jump specifically to rising insurance coverage and increased medical tourism volumes across major chains.',
  notes: [
    'Facilitator commission: 7.5–30% of package value, industry-wide range',
    'NABH accreditation investment: ₹90–150 lakh, one-time cost of entry',
  ],
}

export const howBusinessesScale = {
  kicker: 'PART ONE · THE INDUSTRY',
  title: 'How Medical Tourism Businesses Scale: Corridor by Corridor',
  patternTitle: 'THE PATTERN, GENERALISED',
  pattern: [
    'Prove the model in one corridor first — accreditation, one channel, disciplined unit economics',
    'Let that corridor fund and validate the playbook before touching a second market',
    'Replicate the same sequence — not a new invention each time — in adjacent geographies',
    'Scale is a byproduct of discipline in the first market, not a separate initiative',
  ],
  examples: [
    {
      name: 'IHH Healthcare',
      sub: "(parent of Hyderabad's Continental Hospitals)",
      desc: 'Operates 84 hospitals and 16,000+ beds across 10 countries — proof that a healthcare group can scale a single trusted model across many geographies, one at a time.',
    },
    {
      name: 'Shalby Hospitals',
      sub: 'an Indian chain',
      desc: 'Shalby Hospitals, an Indian chain, has built a physical presence across several East African countries — replicating the same clinical model market by market.',
    },
  ],
}

// ---------------------------------------------------------------------------
// PART TWO · OUR PLAN OF ACTION
// ---------------------------------------------------------------------------

export const partTwoDivider = {
  part: 'PART TWO',
  title: 'Our Plan of Action',
  desc: 'A repeatable methodology, timeline, and governance model — built before any single country enters the conversation.',
}

export const methodology = {
  kicker: 'PART TWO · OUR PLAN OF ACTION',
  title: 'One Methodology, Repeatable in Any Corridor We Choose',
  intro: 'The same four-phase sequence, applied to whichever corridor we prioritise:',
  phases: [
    {
      phase: 'PHASE 0',
      name: 'Foundations',
      desc: 'NABH gap analysis begins. IPD owner appointed. Transparent pricing drafted. Priority-corridor research and relationship-mapping begins.',
    },
    {
      phase: 'PHASE 1',
      name: 'Channel Pilot',
      desc: 'First facilitator agreements signed in the priority corridor. Real patients treated. Full patient-journey SOP tested end to end.',
    },
    {
      phase: 'PHASE 2',
      name: 'Accreditation Lock-In',
      desc: 'NABH on-site assessment completed and awarded. IPD fully staffed. Listed on the Heal in India portal.',
    },
    {
      phase: 'PHASE 3',
      name: 'Institutional Activation',
      desc: "Formal engagement with the priority corridor's health authorities and referral hospitals. MoU or listed-provider status negotiated.",
    },
  ],
  phase4:
    'Phase 4 — Scale & Diversify: JCI evaluation, a light-touch presence in the priority corridor, and replication of the same playbook in adjacent markets.',
}

export const timeline36 = {
  kicker: 'PART TWO · OUR PLAN OF ACTION',
  title: 'A Disciplined, 36-Month Build',
  rows: [
    { months: 'Months 0–3', phase: 'Phase 0 — Foundations', desc: 'NABH engagement begins; IPD ownership assigned; pricing drafted', start: 0, end: 3 },
    { months: 'Months 3–9', phase: 'Phase 1 — Channel Pilot', desc: 'First real patients treated via a facilitator channel; SOP proven', start: 3, end: 9 },
    { months: 'Months 9–15', phase: 'Phase 2 — Accreditation', desc: 'NABH awarded; IPD fully staffed; Heal in India listing secured', start: 9, end: 15 },
    { months: 'Months 15–24', phase: 'Phase 3 — Institutional Activation', desc: 'Formal government/referral-hospital engagement in the priority corridor', start: 15, end: 24 },
    { months: 'Months 24–36', phase: 'Phase 4 — Scale & Diversify', desc: 'JCI evaluated; playbook replicated in a second corridor', start: 24, end: 36 },
  ],
}

export const priceOfCredibility = {
  kicker: 'PART TWO · OUR PLAN OF ACTION',
  title: 'The Price of Credibility: Time and Capital',
  steps: [
    { n: 1, title: 'Gap Analysis', time: '1–2 months' },
    { n: 2, title: 'Documentation & SOPs', time: '3–6 months' },
    { n: 3, title: 'Staff Training', time: '3+ months' },
    { n: 4, title: 'Assessment & Award', time: '2–4 months' },
  ],
  stats: [
    { value: '10–12 months', desc: 'Realistic total timeline' },
    { value: '₹90–150 lakh', desc: 'All-in accreditation investment' },
    { value: '1,700+', desc: 'NABH-accredited hospitals nationally' },
    { value: '2–3 yrs', desc: 'Accreditation validity period' },
  ],
  close:
    'JCI accreditation is a later-phase goal, pursued once volume justifies its materially higher cost — not a launch requirement.',
}

export const goToMarket = {
  kicker: 'PART TWO · OUR PLAN OF ACTION',
  title: 'Go-To-Market: Two Channel Types, One Built to Outlast the Other',
  facilitator: {
    title: 'Private Facilitator Channel',
    points: [
      'Fast to start — established facilitator networks exist in nearly every source market',
      '7.5–30% commission of package value, compressing margins',
      'Commoditised and competitive — no loyalty, no durable relationship',
      'Use this channel first, in any corridor: prove the model and fund Phase 1',
    ],
  },
  institutional: {
    title: 'Institutional Channel',
    points: [
      'Opened through institutional relationships in the priority corridor',
      'Pre-vetted, higher-trust, batched referrals — no commission drag',
      'Materially higher margin per patient vs. the facilitator channel',
      'Slower to build — requires accreditation and proof points first',
    ],
  },
}

export const fiveRoles = {
  kicker: 'PART TWO · OUR PLAN OF ACTION',
  title: 'Five Roles, Lean From Day One, Own the Whole Patient Experience',
  roles: [
    { title: 'Case Intake & Triage Coordinator', desc: 'Receives inquiries, routes to specialists, issues cost estimates', icon: 'users' },
    { title: 'Visa & Documentation Officer', desc: 'Manages invitation letters and visa liaison', icon: 'file' },
    { title: 'Patient Concierge', desc: 'Airport pickup, accommodation, ground logistics', icon: 'plane' },
    { title: 'Billing & Package Manager', desc: 'Owns transparent, itemised, published pricing', icon: 'money' },
    { title: 'Follow-Up Coordinator', desc: 'Post-discharge teleconsultations — the biggest trust driver', icon: 'heartbeat' },
  ],
  close: 'Lean, but clearly owned, from Phase 0 — not an afterthought once patients start arriving.',
}

export const risksKpis = {
  kicker: 'PART TWO · OUR PLAN OF ACTION',
  title: "What Could Go Wrong, and How We'll Know",
  risksTitle: 'KEY RISKS & MITIGATIONS',
  risks: [
    { risk: 'Sector overbilling reputation risk', mitigation: 'Transparent, itemised, published pricing from day one' },
    { risk: 'Facilitator fee-splitting exposure', mitigation: 'Written, disclosed commission agreements only' },
    { risk: 'Single-relationship dependency in any corridor', mitigation: 'Formalise into a written institutional MoU as early as possible' },
    { risk: 'Under-resourced IPD under real volume', mitigation: 'Lean but clearly-owned function from Phase 0' },
  ],
  kpisTitle: "KPIs WE'LL TRACK FROM DAY ONE",
  kpis: [
    'Inquiry-to-treatment-plan turnaround (target: under 72 hours)',
    'Visa-application-to-arrival conversion rate',
    'Patient volume by channel — facilitator vs. institutional share, tracked monthly',
    'Average package value and gross margin by procedure type',
    'Repeat / referred-by-previous-patient volume — the best signal of a self-sustaining pipeline',
  ],
}

// ---------------------------------------------------------------------------
// PART THREE · THE UGANDA OPPORTUNITY
// ---------------------------------------------------------------------------

export const partThreeDivider = {
  part: 'PART THREE',
  title: 'Applying the Playbook: Uganda',
  desc: 'First, the market on its own merits. Then — what makes us the right ones to enter it.',
}

export const ugandaMarket = {
  kicker: 'PART THREE · UGANDA — MARKET OVERVIEW',
  title: "46 Million People, a System That Can't Keep Up",
  stats: [
    { value: '~46M', desc: 'Population, East Africa' },
    { value: '~$52B', desc: 'GDP, current prices (2024)' },
    { value: '~$980', desc: 'GDP per capita (rising toward lower-middle-income)' },
    { value: '6.8%', desc: 'Projected 2026 GDP growth' },
  ],
  contextTitle: 'ECONOMIC CONTEXT',
  context: [
    'Agriculture remains the economic mainstay: 24% of GDP, 72% of the labour force',
    'Poverty estimated at 51.5% (FY2024–25), declining but still high',
    'Crude oil exports begin in late 2026 (TotalEnergies / CNOOC partnership) — a genuine growth catalyst on the horizon',
    'Landlocked, bordered by Kenya, Tanzania, DRC, Rwanda and South Sudan — a natural regional hub position',
  ],
}

export const ugandaHealth = {
  kicker: 'PART THREE · UGANDA — MARKET OVERVIEW',
  title: "Uganda's Healthcare System: Structure and the Gap We'd Be Filling",
  structureTitle: 'SYSTEM STRUCTURE',
  structure: [
    '~8,400 total health facilities nationally; 41% government, ~35–40% private / faith-based',
    'Mulago National Referral Hospital: ~1,600 beds, Kampala, tertiary care, linked to Makerere University',
    '14 Regional Referral Hospitals provide secondary care across the country',
    'Health spending: only 5.6–6.3% of GDP — well below the 15% Abuja Declaration target',
  ],
  gapTitle: 'THE GAP, IN ONE NUMBER',
  gapValue: '0.15',
  gapDesc:
    'registered doctors per 1,000 people (~7,000 doctors for ~46M population) — roughly 15% of the WHO benchmark of ~1 per 1,000',
  burdenTitle: 'DISEASE BURDEN',
  burden:
    'HIV: 5.1% adult prevalence (~1.4M living with HIV) · Malaria: highly endemic · TB: ~198/100,000 · Hypertension: 26–29% of adults, rising',
}

export const ugandaPay = {
  kicker: 'PART THREE · UGANDA — MARKET OVERVIEW',
  title: 'How Ugandans Actually Pay for Healthcare Today',
  oopValue: '38–42%',
  oopDesc:
    "of Uganda's total health expenditure is paid out-of-pocket by patients — among the highest rates in East Africa, and the reality that self-pay and family-financed treatment will remain the dominant near-term payment mode.",
  cols: [
    {
      title: 'What exists today',
      desc: 'Private health insurance covers ~5% of the population; community-based insurance ~0.2%. Medical crowdfunding for expensive treatment is common and normalised. Future oil revenue is discussed as a possible NHIS funding source.',
    },
    {
      title: 'The National Health Insurance Scheme — still not law',
      desc: 'Passed by Parliament in March 2021, but President Museveni has never assented to it. As of 2026 it remains stalled, pending re-tabling — a real reform on the horizon, not a mechanism to plan around today.',
    },
  ],
}

export const corridorExists = {
  kicker: 'PART THREE · UGANDA — MARKET OVERVIEW',
  title: "The India–Uganda Corridor Already Exists — We Didn't Invent It",
  proofs: [
    '2009 — India funds a telemedicine centre at Mulago National Referral Hospital, linking it to 11 partner hospitals in India.',
    "Uganda's Ministry of Health runs a formal medical-referral committee that reviews and approves patient travel abroad for cardiac, cancer, transplant, and complex orthopedic cases.",
    "Mulago's committee alone referred 225 patients to India between mid-2014 and early 2018.",
    "Uganda's Auditor General has documented government spending in the tens of billions of shillings on treatment abroad, India consistently among the top destinations.",
    'A historic Indian-origin business community in Uganda — disrupted by the 1972 expulsions, rebuilt since — gives the relationship cultural as well as clinical roots.',
  ],
}

export const logistics = {
  kicker: 'PART THREE · UGANDA — MARKET OVERVIEW',
  title: 'The Logistics Are Solvable: Politics, Connectivity, and Visas',
  cols: [
    {
      title: 'Political Environment',
      icon: 'scale',
      points: [
        "Jan 15, 2026: Museveni (NRM) re-elected to a 7th term with 71.65% of the vote over Bobi Wine's 24.72%",
        'International observers, including the US Senate and Human Rights Watch, criticised the election as marred by repression and an internet shutdown',
        'Practical read: continuity of the same administration, alongside real international scrutiny — both worth planning for',
      ],
    },
    {
      title: 'Connectivity',
      icon: 'plane',
      points: [
        'No direct Entebbe–Hyderabad flights',
        '~11–12 hours one-stop via Addis Ababa (Ethiopian), Doha (Qatar), or Dubai (Emirates / Flydubai)',
        'Uganda Airlines flies direct Entebbe–Mumbai as an alternate gateway',
      ],
    },
    {
      title: 'Visas',
      icon: 'passport',
      points: [
        'e-Medical Visa + e-Medical Attendant Visa available to Ugandan nationals',
        'Processing typically 5–10 working days',
        'Uganda is yellow-fever-endemic — a valid vaccination card is mandatory on arrival',
      ],
    },
  ],
}

export const marketProven = {
  kicker: 'PART THREE · UGANDA — MARKET OVERVIEW',
  title: 'The Market Is Already Proven — By Everyone Except Us',
  intro: 'Objective evidence the demand is real — and a map of the field before we discuss our own position in it.',
  cols: [
    {
      title: 'Hospital Chains with a Physical Presence',
      desc: "Shalby Hospitals operates directly across Kenya, Tanzania, Ethiopia, and Uganda — a working template for an Indian chain's East Africa footprint.",
    },
    {
      title: 'Facilitators Actively Marketing to Uganda',
      desc: 'Tour2india4health, CMCS Health, HBG Medical Assistance, My1Health, Wellness Destination India, and others run established Uganda-facing patient pipelines today.',
    },
    {
      title: 'Large Chains with Brand Recognition',
      desc: 'Apollo and Yashoda carry general brand awareness among African patients, without a dedicated Uganda institutional relationship.',
    },
  ],
}

export const ourAdvantage = {
  kicker: 'PART THREE · OUR ADVANTAGE',
  title: "Here's What We Bring That Nobody Else in This Field Has",
  assets: [
    {
      title: 'Clinical Base',
      icon: 'hospital',
      desc: 'A 100-bed multi-specialty hospital already running cardiology, orthopedics, nephrology, dialysis, and ICU/NICU care — the exact specialties Ugandan patients travel abroad for.',
    },
    {
      title: 'Hospitality Integration',
      icon: 'hotel',
      desc: "Dhanturi Group's hotels solve the #1 patient complaint in this corridor — accommodation, food, and comfort during a 1–3 week recovery stay — natively, not outsourced.",
    },
    {
      title: 'A Direct Government Relationship',
      icon: 'handshake',
      desc: "A close family member's prior professional experience in Uganda has built real standing with Ugandan government contacts — a potential institutional referral channel none of the players on the previous slide have.",
    },
  ],
  close:
    'Institutional referrals, once formalised, run at zero facilitator commission — turning this relationship into the single highest-leverage asset in this entire plan.',
}

export const businessCase = {
  kicker: 'PART THREE · OUR ADVANTAGE',
  title: 'The Business Case, In Four Numbers',
  stats: [
    { value: '₹1.4 Cr', desc: 'Year-0 investment required', icon: 'money' },
    { value: '₹29.0 Cr', desc: '3-year cumulative revenue', icon: 'trend' },
    { value: '₹6.1 Cr', desc: '3-year cumulative EBITDA', icon: 'chartpie' },
    { value: 'Month 22', desc: 'Break-even, early in Year 2', icon: 'clock' },
  ],
  note: 'Base-case planning estimate — see appendix financial model for full assumptions, monthly build, and sensitivity analysis.',
}

export const compounding = {
  kicker: 'PART THREE · OUR ADVANTAGE',
  title: 'From Investment to Compounding Returns',
  series: [
    { year: 'Year 1', revenue: 2.04, ebitda: -0.2 },
    { year: 'Year 2', revenue: 9.3, ebitda: 1.68 },
    { year: 'Year 3', revenue: 17.7, ebitda: 4.61 },
  ],
  labels: { revenue: 'Revenue (₹ Cr)', ebitda: 'EBITDA (₹ Cr)' },
}

export const institutionalWorth = {
  kicker: 'PART THREE · OUR ADVANTAGE',
  title: 'Why the Institutional Channel Is Worth Building Patiently',
  chart: [
    { channel: 'Facilitator-Sourced', value: 1.96 },
    { channel: 'Institutional-Sourced', value: 3.46 },
  ],
  chartLabel: 'Net contribution per patient (₹ lakh)',
  assumptions: ['Blended package price: ₹7.5 lakh (~$8,750)', 'Facilitator commission: 20% of package value'],
  deltaValue: '₹1.5 lakh',
  deltaDesc: 'Margin advantage per patient when sourced through the institutional channel instead of a facilitator.',
  close:
    'This is the direct financial value of the Uganda government relationship — it compounds with every institutionally-referred patient.',
}

export const scenarios = {
  kicker: 'PART THREE · OUR ADVANTAGE',
  title: 'Resilient Even in the Conservative Case',
  chart: [
    { scenario: 'Conservative', value: 0.19 },
    { scenario: 'Base', value: 6.09 },
    { scenario: 'Optimistic', value: 11.31 },
  ],
  chartLabel: '3-Year EBITDA (₹ Cr)',
  leversTitle: 'SCENARIO LEVERS',
  levers: [
    { name: 'Conservative', desc: '0.65x volume · 90% price realisation · 1.15x fixed costs' },
    { name: 'Base', desc: 'Roadmap-assumed volume ramp and published pricing' },
    { name: 'Optimistic', desc: '1.35x volume · 105% price realisation · 1.05x fixed costs' },
  ],
}

export const firstProofPoint = {
  kicker: 'PART THREE · OUR ADVANTAGE',
  title: 'Uganda Is the First Proof Point, Not the Last',
  intro:
    'Once the Uganda corridor is proven, the same four-phase playbook from Part Two replicates — not reinvents — across adjacent markets.',
  markets: ['Kenya', 'Tanzania', 'Rwanda', 'Burundi', 'South Sudan', 'Ethiopia', 'Zambia', 'Zimbabwe', 'Nigeria', 'Middle East'],
  close:
    "Sequencing, prioritisation, and market-specific due diligence for each of these is a separate research phase — undertaken only once Uganda's Phase 2 (accreditation) is complete.",
}

// ---------------------------------------------------------------------------
// THE DHANTURI ECOSYSTEM (from MVT Final.docx, section 3)
// ---------------------------------------------------------------------------

export const ecosystem = {
  kicker: 'SUPRAJA + DHANTURI HOSPITALITY',
  title: 'Supraja + Dhanturi Hospitality = The X-Factor',
  intro: ['This is not just a hotel business.', 'It creates an integrated recovery ecosystem.'],
  problem: [
    'Most hospitals discharge patients once treatment is complete.',
    'International patients still require:',
  ],
  needs: ['Accommodation', 'Food', 'Transportation', 'Attendant support', 'Emotional comfort', 'Safe recovery'],
  punch: ["Normally hospitals outsource this.", "Supraja doesn't have to."],
  flowTitle: 'Proposed Integrated Model',
  flow: [
    'Patient lands in Hyderabad',
    'Airport Pickup',
    'Dhanturi Gorup of Hotels',
    'Pre-operative Assessment',
    'Supraja Hospital',
    'Treatment',
    'Recovery',
    'Recovery Stay at the Hotels',
    'Tourism (optional)',
    'Airport Drop',
    'Teleconsultation',
  ],
  benefits: [
    {
      title: 'Higher Revenue',
      desc: 'Revenue generated from: Hospital · Hotel · Transport · Food · Pharmacy · Diagnostics · Rehabilitation',
    },
    { title: 'Better Patient Experience', desc: 'Single organisation manages the entire journey. Less confusion. Greater trust.' },
    { title: 'Better Clinical Outcomes', desc: 'Patients recover in a controlled environment instead of unsuitable hotels.' },
    { title: 'Stronger Brand', desc: 'Market Supraja as: A Complete International Patient Care Platform — rather than simply a hospital.' },
  ],
}

// ---------------------------------------------------------------------------
// THE MODEL / COMMERCIALS (MVT Final.docx §6, with deck base case alongside)
// ---------------------------------------------------------------------------

export const financialModel = {
  kicker: 'THE MODEL',
  title: 'Medical Tourism Financial Model (Realistic Base Case)',
  formula: 'Surgery cost + Services + 10-20% (margin)',
  formulaNote:
    'The economics work because international patients typically generate significantly higher revenue per case than domestic patients.',
  assumptionsTitle: 'Assumptions',
  assumptions: [
    'We start with Uganda as our first market.',
    "We don't spend heavily on international marketing initially.",
    'We primarily acquire patients through facilitators and our Uganda relationship.',
    'The hospital already exists, so this investment is only for building the medical tourism division.',
  ],
  investmentTitle: 'Initial Investment',
  investment: [
    { item: 'International Patient Department (IPD) Setup', cost: 20 },
    { item: 'NABH Preparation', cost: 35 },
    { item: 'Website, Branding & Marketing', cost: 20 },
    { item: 'Staff Recruitment & Training', cost: 15 },
    { item: 'CRM & Digital Systems', cost: 10 },
    { item: 'Working Capital', cost: 25 },
  ],
  investmentTotal: '₹1.25 Crore',
  investmentUnit: 'Cost (₹ Lakhs)',
  stakeholderMsg1:
    '"This is not an investment to build a new hospital. It is an investment to build an international patient business."',
  growthTitle: 'Patient Growth Plan',
  growth: [
    { year: 'Year 1', perMonth: 5, perYear: 60 },
    { year: 'Year 2', perMonth: 12, perYear: 144 },
    { year: 'Year 3', perMonth: 20, perYear: 240 },
  ],
  growthWhy: [
    'Year 1: We are building relationships and trust.',
    'Year 2: Facilitator network grows, NABH accreditation is in place, and referrals increase.',
    'Year 3: Government partnerships and patient referrals start generating consistent business.',
  ],
  revenuePerPatientTitle: 'Average Revenue Per Patient',
  revenuePerPatient: [
    { source: 'Hospital Treatment', value: '₹4.80 Lakhs' },
    { source: 'Diagnostics & Pharmacy', value: '₹20,000' },
    { source: 'Hotel & Recovery Stay', value: '₹25,000' },
    { source: 'Transport & Other Services', value: '₹17,000' },
  ],
  revenuePerPatientTotal: '₹5.42 Lakhs',
  stakeholderMsg2:
    '"We are not earning only from surgery. Every international patient also generates revenue through diagnostics, pharmacy, accommodation, transport, and follow-up care."',
  annualTitle: 'Annual Revenue · Operating Expenses · Profit (EBITDA)',
  annual: [
    { year: 'Year 1', patients: 60, revenue: '₹3.25 Crore', revNum: 3.25, opex: '₹2.80 Crore', opexNum: 2.8, ebitda: '₹45 Lakhs', ebitdaNum: 0.45 },
    { year: 'Year 2', patients: 144, revenue: '₹7.80 Crore', revNum: 7.8, opex: '₹6.40 Crore', opexNum: 6.4, ebitda: '₹1.40 Crore', ebitdaNum: 1.4 },
    { year: 'Year 3', patients: 240, revenue: '₹13.00 Crore', revNum: 13.0, opex: '₹10.00 Crore', opexNum: 10.0, ebitda: '₹3.00 Crore', ebitdaNum: 3.0 },
  ],
  opexIncludes: [
    'Staff salaries',
    'Marketing',
    'Facilitator commissions',
    'Patient logistics',
    'International travel',
    'Administration',
  ],
  breakEvenTitle: 'Break-even',
  breakEven: [
    'We expect to recover the initial investment in approximately 2.5 to 3 years.',
    'This is a realistic timeline for a new international patient program.',
  ],
  // The two source files carry different base cases. Surfaced, not reconciled.
  conflictNote: {
    title: 'Two base cases, two documents',
    body: 'The board deck and the MVT working document each state their own base case. Both are shown here exactly as written — the deck: ₹1.4 Cr Year-0 investment, ₹29.0 Cr 3-year cumulative revenue, ₹6.1 Cr 3-year cumulative EBITDA, break-even Month 22. The working document: ₹1.25 Crore total investment, ₹13.00 Crore Year-3 revenue, ₹3.00 Crore Year-3 EBITDA, break-even in approximately 2.5 to 3 years.',
  },
}

export const keysToSuccess = {
  kicker: 'KEYS TO SUCCESS',
  title: 'Medical tourism is not won by the cheapest hospital.',
  subtitle: 'It is won by the hospital that builds the most trusted and seamless patient journey.',
  factors: [
    { n: 1, title: 'Clinical Excellence', desc: 'Strong outcomes, experienced doctors, internationally accepted standards.' },
    { n: 2, title: 'Trust & Transparency', desc: 'Clear package pricing, ethical communication, no hidden costs.' },
    { n: 3, title: 'End-to-End Patient Experience', desc: 'Airport pickup, accommodation, translators, logistics, follow-up.' },
    { n: 4, title: 'Strategic Market Development', desc: 'Build both facilitator relationships and institutional partnerships, gradually shifting toward direct referrals.' },
    { n: 5, title: 'Operational Discipline', desc: 'Dedicated IPD, standard operating procedures, fast response times, multilingual support, and continuous patient engagement.' },
    { n: 6, title: 'Integrated Hospitality', desc: 'Use Dhanturi Hotels to provide a recovery environment that enhances both patient satisfaction and overall value.' },
    { n: 7, title: 'Scalable Corridor Strategy', desc: 'Prove the model in Uganda first, document the playbook, then replicate it across East Africa before expanding to other regions.' },
  ],
  oneMessage: {
    title: 'One message for stakeholders',
    body: 'The opportunity is not simply to attract foreign patients. The objective is to build an integrated international healthcare platform where Supraja Hospitals delivers the clinical care and Dhanturi Group delivers the recovery and hospitality experience, creating a differentiated model that can be scaled corridor by corridor across Africa.',
  },
}

export const theAsk = {
  kicker: 'THE ASK',
  title: 'What We Need to Move to Phase 0',
  asks: [
    {
      title: '₹1.4 Cr',
      icon: 'target',
      desc: 'Year-0 capital commitment for accreditation, IPD build-out, and Dhanturi hotel refurbishment',
    },
    {
      title: 'Family Endorsement',
      icon: 'handshake',
      desc: 'To formally engage the Uganda relationship as an institutional channel, not an informal favour',
    },
    {
      title: 'Operational Mandate',
      icon: 'gears',
      desc: 'Authority to appoint an IPD owner and begin the NABH engagement immediately',
    },
  ],
  close:
    'In return: a proven, phased plan with a Year-2 break-even and a defensible, differentiated position in a corridor no competitor has locked down.',
}

export const closing = {
  kicker: 'FROM A HYDERABAD HOSPITAL',
  title: "To East Africa's Most Trusted Indian Care Partner",
  lines: ['Clinical excellence. Institutional trust. Genuine hospitality.', 'Built on a family relationship, not a facilitator fee.'],
  thanks: 'Thank you.',
}

// Geo data for the globe/map visualisations (coordinates are cartographic
// reference points only — all substantive claims come from the source files).
export const geo = {
  hyderabad: { name: 'Hyderabad', coords: [78.4867, 17.385] },
  entebbe: { name: 'Entebbe', coords: [32.4435, 0.0464] },
  hubs: [
    { name: 'Addis Ababa', coords: [38.7578, 8.9806], carrier: 'Ethiopian' },
    { name: 'Doha', coords: [51.531, 25.2854], carrier: 'Qatar' },
    { name: 'Dubai', coords: [55.2708, 25.2048], carrier: 'Emirates / Flydubai' },
  ],
  mumbai: { name: 'Mumbai', coords: [72.8777, 19.076] },
  expansionMarkets: [
    { name: 'Uganda', coords: [32.2903, 1.3733], first: true },
    { name: 'Kenya', coords: [37.9062, -0.0236] },
    { name: 'Tanzania', coords: [34.8888, -6.369] },
    { name: 'Rwanda', coords: [29.8739, -1.9403] },
    { name: 'Burundi', coords: [29.9189, -3.3731] },
    { name: 'South Sudan', coords: [31.307, 6.877] },
    { name: 'Ethiopia', coords: [40.4897, 9.145] },
    { name: 'Zambia', coords: [27.8493, -13.1339] },
    { name: 'Zimbabwe', coords: [29.1549, -19.0154] },
    { name: 'Nigeria', coords: [8.6753, 9.082] },
    { name: 'Middle East', coords: [45.0792, 23.8859] },
  ],
}
