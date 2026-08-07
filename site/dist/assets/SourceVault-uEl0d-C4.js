import{A as e,C as t,D as n,E as r,O as i,S as a,T as o,_ as s,b as c,g as l,k as u,v as d,w as f,x as p,y as m}from"./index-Ba3LVaVI.js";var h=e(u(),1);function g(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function _(...e){return t=>{let n=!1,r=e.map(e=>{let r=g(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():g(e[t],null)}}}}function v(...e){return h.useCallback(_(...e),e)}var y=i(),b=class extends h.Component{getSnapshotBeforeUpdate(e){let n=this.props.childRef.current;if(t(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=n.offsetParent,r=t(e)&&e.offsetWidth||0,i=t(e)&&e.offsetHeight||0,a=getComputedStyle(n),o=this.props.sizeRef.current;o.height=parseFloat(a.height),o.width=parseFloat(a.width),o.top=n.offsetTop,o.left=n.offsetLeft,o.right=r-o.width-o.left,o.bottom=i-o.height-o.top,o.direction=a.direction}return null}componentDidUpdate(){}render(){return this.props.children}};function x({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:o}){let s=(0,h.useId)(),c=(0,h.useRef)(null),l=(0,h.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:`ltr`}),{nonce:u}=(0,h.useContext)(a),d=v(c,o===!1?void 0:e.props?.ref??e?.ref);return(0,h.useInsertionEffect)(()=>{let{width:e,height:a,top:d,left:f,right:p,bottom:m,direction:h}=l.current;if(t||o===!1||!c.current||!e||!a)return;let g=h===`rtl`,_=n===`left`?g?`right: ${p}`:`left: ${f}`:g?`left: ${f}`:`right: ${p}`,v=r===`bottom`?`bottom: ${m}`:`top: ${d}`;c.current.dataset.motionPopId=s;let y=document.createElement(`style`);u&&(y.nonce=u);let b=i??document.head;return b.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${a}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),()=>{c.current?.removeAttribute(`data-motion-pop-id`),b.contains(y)&&b.removeChild(y)}},[t]),(0,y.jsx)(b,{isPresent:t,childRef:c,sizeRef:l,pop:o,children:o===!1?e:h.cloneElement(e,{ref:d})})}var S=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:a,presenceAffectsLayout:s,mode:c,anchorX:l,anchorY:u,root:d})=>{let p=r(C),m=(0,h.useId)(),g=(0,h.useRef)(n),_=(0,h.useRef)(i);o(()=>{g.current=n,_.current=i});let v=!0,b=(0,h.useMemo)(()=>(v=!1,{id:m,initial:t,isPresent:n,custom:a,onExitComplete:e=>{p.set(e,!0);for(let e of p.values())if(!e)return;i&&i()},register:e=>(p.set(e,!1),()=>{p.delete(e),!g.current&&!p.size&&_.current?.()})}),[n,p,i]);return s&&v&&(b={...b}),(0,h.useMemo)(()=>{p.forEach((e,t)=>p.set(t,!1))},[n]),h.useEffect(()=>{!n&&!p.size&&i&&i()},[n]),e=(0,y.jsx)(x,{pop:c===`popLayout`,isPresent:n,anchorX:l,anchorY:u,root:d,children:e}),(0,y.jsx)(f.Provider,{value:b,children:e})};function C(){return new Map}var w=e=>e.key||``;function T(e){let t=[];return h.Children.forEach(e,e=>{(0,h.isValidElement)(e)&&t.push(e)}),t}var E=({children:e,custom:t,initial:i=!0,onExitComplete:a,presenceAffectsLayout:s=!0,mode:c=`sync`,propagate:l=!1,anchorX:u=`left`,anchorY:d=`top`,root:f})=>{let[m,g]=p(l),_=(0,h.useMemo)(()=>T(e),[e]),v=l&&!m?[]:_.map(w),b=(0,h.useRef)(!0),x=(0,h.useRef)(_),C=r(()=>new Map),E=(0,h.useRef)(new Set),[D,O]=(0,h.useState)(_),[k,A]=(0,h.useState)(_);o(()=>{l&&!m&&!k.length&&g?.()},[m,l,k.length,g]),o(()=>{b.current=!1,x.current=_;for(let e=0;e<k.length;e++){let t=w(k[e]);v.includes(t)?(C.delete(t),E.current.delete(t)):C.get(t)!==!0&&C.set(t,!1)}},[k,v.length,v.join(`-`)]);let j=[];if(_!==D){let e=[..._];for(let t=0;t<k.length;t++){let n=k[t],r=w(n);v.includes(r)||(e.splice(t,0,n),j.push(n))}return c===`wait`&&j.length&&(e=j),A(T(e)),O(_),null}let{forceRender:M}=(0,h.useContext)(n);return(0,y.jsx)(y.Fragment,{children:k.map(e=>{let n=w(e),r=l&&!m?!1:_===k||v.includes(n);return(0,y.jsx)(S,{isPresent:r,initial:!b.current||i?void 0:!1,custom:t,presenceAffectsLayout:s,mode:c,root:f,onExitComplete:r?void 0:()=>{if(E.current.has(n))return;if(C.has(n))E.current.add(n),C.set(n,!0);else return;let e=!0;C.forEach(t=>{t||(e=!1)}),e&&(M?.(),A(x.current),l&&g?.(),a&&a())},anchorX:u,anchorY:d,children:e},n)})})},D=`**1. What is Medical Tourism?**

**Executive Summary**

Medical tourism (more accurately called\xA0**Medical Value Travel - MVT**) is when a patient travels to another country specifically to receive medical treatment that is either unavailable, unaffordable, delayed, or of lower quality in their home country.

India has become one of the world's leading medical tourism destinations because it combines\xA0**world-class clinical expertise, internationally accredited hospitals, advanced technology, English-speaking doctors, and significantly lower treatment costs**\xA0than developed countries. Government initiatives such as the e-Medical Visa, Heal in India, and NABH accreditation have further strengthened India's position.

**Why do patients travel?**

Patients generally travel for one or more of these reasons:

| **Reason** | **Example** |
| --- | --- |
| Lower cost | Cardiac surgery costing ₹1 crore in the US may cost ₹6–10 lakh in India. |
| Better quality | Access to experienced specialists and advanced medical technology. |
| Shorter waiting time | Procedures available within days instead of months. |
| Treatment unavailable locally | Complex oncology, transplant, cardiac surgery, advanced orthopedics. |
| Second opinion | Patients seek internationally recognised specialists before major procedures. |

**India's Competitive Advantage**

India is particularly strong in:

* Cardiology & Cardiac Surgery
* Oncology
* Orthopedics & Joint Replacement
* Neurosurgery
* Organ Transplant
* Nephrology & Dialysis
* IVF & Fertility
* Robotic Surgery

  Estimated Distribution of India's Medical Tourism Cases by Specialty

| **Specialty** | **Estimated Share** | **Why India Excels** |
| --- | --- | --- |
| **Cardiology & Cardiac Surgery** | **22–25%** | Internationally renowned cardiac surgeons, advanced cath labs, CABG and valve replacement at significantly lower costs. |
| **Oncology (Cancer Care)** | **16–18%** | Comprehensive cancer centers, radiation therapy, surgical oncology, hematology, and precision medicine. |
| **Orthopedics & Joint Replacement** | **15–17%** | High-quality knee, hip, spine, and sports medicine procedures with shorter waiting times. |
| **Neurosurgery** | **8–10%** | Brain and spine surgery, neuro-oncology, epilepsy surgery, and minimally invasive techniques. |
| **Organ Transplant** | **7–9%** | Liver, kidney, and bone marrow transplant programs in leading tertiary hospitals (subject to regulatory eligibility). |
| **Nephrology & Dialysis** | **7–8%** | Long-term dialysis programs and kidney disease management integrated with transplant services. |
| **IVF & Fertility** | **10–12%** | High success rates, advanced reproductive technologies, and competitive pricing. |
| **Robotic Surgery** | **4–6%** | Growing use across urology, gynecology, gastrointestinal, and oncology procedures; usually counted within other specialties rather than as a standalone segment. |

Unlike countries such as Turkey (cosmetic surgery) or Thailand (wellness and cosmetic procedures), India has built its reputation on\xA0**complex tertiary and quaternary healthcare**.

**Market Size**

## ***Competitors****:* Estimated Share of India's Organized Medical Tourism Market

| **Hospital Group** | **Estimated Share** | **Rationale** |
| --- | --- | --- |
| Apollo Hospitals | **22–25%** | India's largest international brand with dedicated international offices, multiple JCI/NABH hospitals, and strong presence in Africa, Bangladesh, Middle East, and Southeast Asia. |
| Manipal Hospitals | **14–17%** | Largest private hospital network by bed capacity, rapidly expanding international business and transplant services. |
| Fortis Healthcare | **10–12%** | Strong North India presence, international insurance partnerships, and established IPDs. |
| Max Healthcare | **8–10%** | Dominant in NCR with rapidly growing international patient volumes. |
| Narayana Health | **7–9%** | Highly competitive pricing, especially for cardiac surgery, attracting patients from Africa and South Asia. |
| Others (Medanta, Aster, KIMS, Yashoda, CARE, etc.) | **30–35%** | Fragmented among regional and specialty providers. |

# Estimated Share Within Hyderabad's International Patient Market

For\xA0**Hyderabad only**, the market is concentrated among a few hospital groups.

| **Hospital** | **Estimated Share** | **Strength** |
| --- | --- | --- |
| Yashoda Hospitals | **25–30%** | One of Hyderabad's strongest IPDs with long-standing African and Middle Eastern relationships. |
| KIMS Hospitals | **18–22%** | Large network, multiple specialties, strong Gulf and African inflow. |
| Apollo Hyderabad | **12–15%** | Global brand with established referral channels. |
| CARE Hospitals | **10–12%** | Strong cardiac and transplant reputation. |
| AIG Hospitals | **8–10%** | Gastroenterology, liver sciences, robotic surgery. |
| Continental Hospitals | **5–8%** | Part of IHH Healthcare, growing international business. |
| Medicover Hospitals | **4–6%** | Expanding international outreach, especially in diagnostics and oncology. |
| Sunshine Hospitals | **3–5%** | Strong orthopedics and trauma care. |
| Others | **5–8%** | Smaller multispecialty and specialty hospitals. |

## African Market Position

If your strategy focuses on Africa, the competitive landscape changes.

| **Hospital** | **Africa Presence** |
| --- | --- |
| Apollo | ★★★★★ |
| Yashoda | ★★★★★ |
| KIMS | ★★★★☆ |
| CARE | ★★★★☆ |
| Narayana | ★★★★☆ |
| Manipal | ★★★★☆ |
| Continental | ★★★☆☆ |
| AIG | ★★★☆☆ |
| Medicover | ★★☆☆☆ |
| Sunshine | ★★☆☆☆ |

**Why this matters for Supraja**

Supraja should\xA0**not**\xA0compete on price alone.

Instead, the positioning should be:

**Affordable international-quality healthcare with personalised hospitality and end-to-end patient management.**

**2. Supply Chain & Operations**

Medical tourism is essentially an\xA0**international healthcare supply chain**, where the hospital manages the patient journey from the moment treatment is considered until the patient safely returns home.

**Stage 1 – Market Development**

There are two customer acquisition models:

**A. Direct Market Development**

The hospital actively develops the market.

Activities include:

* Medical camps
* Health awareness programs
* Doctor seminars
* Government meetings
* Embassy engagement
* Corporate partnerships
* Digital marketing

This creates direct trust with patients and institutions.

**B. Channel Partner Model**

Local facilitators identify patients and connect them with Indian hospitals.

Their responsibilities include:

* Patient counselling
* Translation
* Collecting medical records
* Travel assistance
* Initial consultations
* Documentation

The facilitator earns a commission from the hospital after successful treatment.

This model provides faster market entry but lower margins.

**Stage 2 – Patient Qualification**

Before the patient travels:

* Medical reports collected
* Specialist review
* Treatment plan prepared
* Cost estimate shared
* Video consultation
* Patient confirms treatment

Only after clinical approval does the hospital issue an invitation letter.

**Stage 3 – Visa & Documentation**

Hospital issues:

* Medical Invitation Letter
* Cost Estimate
* Doctor Recommendation
* Admission Confirmation

Patient applies for:

* Medical Visa
* Medical Attendant Visa

**Stage 4 – Arrival & Logistics**

Your notes correctly identify this as one of the biggest differentiators.

The patient should never feel "lost."

Services include:

* Airport pickup
* SIM card assistance
* Currency exchange guidance
* Hotel/guest house check-in
* Local transportation
* Interpreter
* Dedicated relationship manager

**Stage 5 – Clinical Care**

Hospital manages:

* Registration
* Admission
* Diagnostics
* Surgery
* ICU
* Inpatient stay
* Rehabilitation

Operations team coordinates everything outside clinical care.

**Stage 6 – Recovery**

Recovery may continue outside the hospital.

This includes:

* Guest house
* Hotel stay
* Diet planning
* Physiotherapy
* Nursing support
* Follow-up appointments

**Stage 7 – Return & Follow-up**

After discharge:

* Teleconsultations
* Digital prescriptions
* Report sharing
* Local doctor coordination
* Future reviews

This stage generates repeat patients and referrals.

**3. Supraja + Dhanturi Hospitality = The X-Factor**

This is\xA0**not just a hotel business**.

It creates an integrated recovery ecosystem.

Most hospitals discharge patients once treatment is complete.

International patients still require:

* Accommodation
* Food
* Transportation
* Attendant support
* Emotional comfort
* Safe recovery

Normally hospitals outsource this.

Supraja doesn't have to.

**Proposed Integrated Model**

Patient lands in Hyderabad

↓

Airport Pickup

↓

Dhanturi Gorup of Hotels

↓

Pre-operative Assessment

↓

Supraja Hospital

↓

Treatment

↓

Recovery

↓

Recovery Stay at the Hotels

↓

Tourism (optional)

↓

Airport Drop

↓

Teleconsultation

**Business Benefits**

**Higher Revenue**

Revenue generated from:

* Hospital
* Hotel
* Transport
* Food
* Pharmacy
* Diagnostics
* Rehabilitation

**Better Patient Experience**

Single organisation manages the entire journey.

Less confusion.

Greater trust.

**Better Clinical Outcomes**

Patients recover in a controlled environment instead of unsuitable hotels.

**Stronger Brand**

Market Supraja as:

**A Complete International Patient Care Platform**

rather than simply a hospital.

**4. Basic Setup & Requirements**

**Clinical**

* State hospital registration
* Biomedical waste compliance
* Fire safety
* Pharmacy licence
* Blood bank approvals (if applicable)
* AERB approvals for radiology equipment
* Infection control programme

**Accreditation**

Priority:

NABH

Future:

JCI (after international volumes justify the investment)

**International Patient Department (IPD)**

Dedicated team:

* International Business Head
* Marketing Manager
* Case Coordinator
* Visa Officer
* Patient Relationship Executive
* Translator
* Operations Executive
* Billing Executive

**Systems**

* CRM
* Telemedicine
* WhatsApp Business
* Digital Medical Records
* International Billing
* Foreign Currency Payments

**SOPs**

Standard operating procedures for:

* Airport pickup
* Admission
* Billing
* Language support
* Discharge
* Follow-up
* Emergency escalation

**5. Uganda – The Beginning of an African Strategy**

Uganda should not be viewed as the end market.

It should be the\xA0**pilot corridor**.

**Why Uganda?**

* Existing relationship
* Growing demand for specialised healthcare
* Limited tertiary care capacity
* Patients already travelling abroad
* English-speaking population
* Strong diplomatic relationship with India

**Long-Term Vision**

Uganda

↓

Somalia

↓

Kenya

↓

Tanzania

↓

Rwanda

↓

South Sudan

↓

Ethiopia

↓

Zambia

↓

Zimbabwe

↓

West Africa

The objective is to\xA0**replicate the same operating model**\xA0in each corridor rather than reinventing it.

**Expansion Strategy**

Year 1

Uganda

Year 2

East Africa

Year 3

Southern Africa

Year 4+

West Africa & Middle East

Each new country builds on the experience, systems, and partnerships established in the previous one.

**6. Financial Model

Surgery cost + Services + 10-20% (margin)**

The economics work because international patients typically generate significantly higher revenue per case than domestic patients.

**Revenue Streams**

* Surgery
* Consultation
* Diagnostics
* ICU
* Pharmacy
* Rehabilitation
* Hotel
* Airport transfer
* Visa assistance
* Teleconsultation

**Cost Structure**

Fixed:

* IPD salaries
* Marketing
* Accreditation
* Technology
* Office

Variable:

* Facilitator commission
* Transport
* Translation
* Patient support
* Hotel services

**Margin Improvement**

Early stage:

Facilitator model

↓

Higher commission

↓

Lower margins

Later stage:

Government referrals

↓

Direct institutional patients

↓

Minimal commission

↓

Higher profitability

# This transition is one of the biggest value drivers in the strategy. Medical Tourism Financial Model (Realistic Base Case)

## Assumptions

* We start with\xA0**Uganda as our first market**.
* We don't spend heavily on international marketing initially.
* We primarily acquire patients through facilitators and our Uganda relationship.
* The hospital already exists, so this investment is only for building the medical tourism division.

# Initial Investment

| **Investment** | **Cost (₹ Lakhs)** |
| --- | --- |
| International Patient Department (IPD) Setup | 20 |
| NABH Preparation | 35 |
| Website, Branding & Marketing | 20 |
| Staff Recruitment & Training | 15 |
| CRM & Digital Systems | 10 |
| Working Capital | 25 |
| **Total Investment** | **₹1.25 Crore** |

**Message to stakeholders:**

"This is not an investment to build a new hospital. It is an investment to build an international patient business."

# Patient Growth Plan

| **Year** | **Patients per Month** | **Patients per Year** |
| --- | --- | --- |
| Year 1 | 5 | 60 |
| Year 2 | 12 | 144 |
| Year 3 | 20 | 240 |

### Why is this realistic?

* **Year 1:**\xA0We are building relationships and trust.
* **Year 2:**\xA0Facilitator network grows, NABH accreditation is in place, and referrals increase.
* **Year 3:**\xA0Government partnerships and patient referrals start generating consistent business.

# Average Revenue Per Patient

Each international patient contributes revenue across multiple services.

| **Revenue Source** | **Average Revenue** |
| --- | --- |
| Hospital Treatment | ₹4.80 Lakhs |
| Diagnostics & Pharmacy | ₹20,000 |
| Hotel & Recovery Stay | ₹25,000 |
| Transport & Other Services | ₹17,000 |
| **Total Revenue per Patient** | **₹5.42 Lakhs** |

**Message to stakeholders:**

"We are not earning only from surgery. Every international patient also generates revenue through diagnostics, pharmacy, accommodation, transport, and follow-up care."

# Annual Revenue

| **Year** | **Patients** | **Revenue** |
| --- | --- | --- |
| Year 1 | 60 | **₹3.25 Crore** |
| Year 2 | 144 | **₹7.80 Crore** |
| Year 3 | 240 | **₹13.00 Crore** |

# Operating Expenses

| **Year** | **Operating Cost** |
| --- | --- |
| Year 1 | ₹2.80 Crore |
| Year 2 | ₹6.40 Crore |
| Year 3 | ₹10.00 Crore |

These include:

* Staff salaries
* Marketing
* Facilitator commissions
* Patient logistics
* International travel
* Administration

# Profit (EBITDA)

| **Year** | **EBITDA** |
| --- | --- |
| Year 1 | **₹45 Lakhs** |
| Year 2 | **₹1.40 Crore** |
| Year 3 | **₹3.00 Crore** |

# Break-even

We expect to recover the initial investment in approximately\xA0**2.5 to 3 years**.

This is a realistic timeline for a new international patient program.

**7. Keys to Success**

Medical tourism is\xA0**not**\xA0won by the cheapest hospital.

It is won by the hospital that builds the most trusted and seamless patient journey.

The critical success factors are:

1. **Clinical Excellence**\xA0– Strong outcomes, experienced doctors, internationally accepted standards.
2. **Trust & Transparency**\xA0– Clear package pricing, ethical communication, no hidden costs.
3. **End-to-End Patient Experience**\xA0– Airport pickup, accommodation, translators, logistics, follow-up.
4. **Strategic Market Development**\xA0– Build both facilitator relationships and institutional partnerships, gradually shifting toward direct referrals.
5. **Operational Discipline**\xA0– Dedicated IPD, standard operating procedures, fast response times, multilingual support, and continuous patient engagement.
6. **Integrated Hospitality**\xA0– Use Dhanturi Hotels to provide a recovery environment that enhances both patient satisfaction and overall value.
7. **Scalable Corridor Strategy**\xA0– Prove the model in Uganda first, document the playbook, then replicate it across East Africa before expanding to other regions.

**One message for stakeholders**

The opportunity is\xA0**not simply to attract foreign patients**. The objective is to build an integrated international healthcare platform where\xA0**Supraja Hospitals delivers the clinical care and Dhanturi Group delivers the recovery and hospitality experience**, creating a differentiated model that can be scaled corridor by corridor across Africa.
`,O=35,k=e=>`./slides/slide-${String(e).padStart(2,`0`)}.webp`,A=e=>`./slides/thumb-${String(e).padStart(2,`0`)}.webp`;function j(){let[e,t]=(0,h.useState)(1),[n,r]=(0,h.useState)(!1),i=(0,h.useRef)(null),a=(0,h.useRef)(null),{lite:o}=m(),s=(0,h.useCallback)(e=>t(Math.min(O,Math.max(1,e))),[]);(0,h.useEffect)(()=>{let t=t=>{t.key===`ArrowRight`||t.key===`PageDown`?s(e+1):t.key===`ArrowLeft`||t.key===`PageUp`?s(e-1):t.key===`Home`?s(1):t.key===`End`?s(O):t.key.toLowerCase()===`g`?r(e=>!e):t.key.toLowerCase()===`f`&&u()};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e,s]),(0,h.useEffect)(()=>{(a.current?.querySelector(`[data-thumb="${e}"]`))?.scrollIntoView({block:`nearest`,inline:`center`,behavior:o?`auto`:`smooth`})},[e,o]);function u(){let e=i.current;document.fullscreenElement?document.exitFullscreen?.():e?.requestFullscreen?.()}return n?(0,y.jsx)(`div`,{className:`h-full overflow-y-auto rail p-4 sm:p-6`,role:`listbox`,"aria-label":`Jump to slide`,children:(0,y.jsx)(`div`,{className:`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3`,children:Array.from({length:O},(e,t)=>t+1).map(n=>(0,y.jsxs)(`button`,{type:`button`,onClick:()=>{t(n),r(!1)},className:`focus-ring relative rounded-lg overflow-hidden border-2 transition-colors ${n===e?`border-gold`:`border-transparent hover:border-mist-300`}`,children:[(0,y.jsx)(`img`,{src:A(n),alt:`Slide ${n}`,loading:`lazy`,className:`w-full h-auto block`}),(0,y.jsx)(`span`,{className:`absolute bottom-1 right-1.5 text-[10px] font-semibold text-paper bg-pine-950/80 rounded px-1.5 py-0.5`,children:n})]},n))})}):(0,y.jsxs)(`div`,{className:`h-full flex flex-col`,children:[(0,y.jsxs)(`div`,{ref:i,className:`relative flex-1 min-h-0 grid place-items-center bg-pine-950 select-none`,children:[(0,y.jsx)(E,{mode:`wait`,initial:!1,children:(0,y.jsx)(c.img,{src:k(e),alt:`Board deck, slide ${e} of ${O}`,className:`absolute inset-0 w-full h-full object-contain`,initial:!o&&{opacity:0,x:24},animate:{opacity:1,x:0},exit:o?void 0:{opacity:0,x:-18,transition:{duration:.12}},transition:{duration:.22,ease:d},draggable:!1},e)}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>s(e-1),disabled:e===1,"aria-label":`Previous slide`,className:`focus-ring absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-pine-900/80 text-paper disabled:opacity-30 hover:bg-pine-800 transition-colors`,children:(0,y.jsx)(l,{name:`chevronLeft`})}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>s(e+1),disabled:e===O,"aria-label":`Next slide`,className:`focus-ring absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-pine-900/80 text-paper disabled:opacity-30 hover:bg-pine-800 transition-colors`,children:(0,y.jsx)(l,{name:`chevronRight`})}),(0,y.jsxs)(`div`,{className:`absolute top-3 right-3 flex items-center gap-2`,children:[(0,y.jsxs)(`span`,{className:`text-xs font-medium text-mist-200 tabular-nums bg-pine-900/80 rounded-md px-2.5 py-1.5`,children:[e,` / `,O]}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>r(!0),"aria-label":`Slide grid (G)`,className:`focus-ring grid place-items-center w-9 h-9 rounded-md bg-pine-900/80 text-paper hover:bg-pine-800 transition-colors`,children:(0,y.jsx)(l,{name:`grid`,size:17})}),(0,y.jsx)(`button`,{type:`button`,onClick:u,"aria-label":`Fullscreen (F)`,className:`focus-ring grid place-items-center w-9 h-9 rounded-md bg-pine-900/80 text-paper hover:bg-pine-800 transition-colors`,children:(0,y.jsx)(l,{name:`expand`,size:17})})]})]}),(0,y.jsx)(`div`,{ref:a,className:`rail shrink-0 flex gap-2 overflow-x-auto px-3 py-2.5 bg-pine-950 border-t border-pine-800`,children:Array.from({length:O},(e,t)=>t+1).map(n=>(0,y.jsx)(`button`,{type:`button`,"data-thumb":n,onClick:()=>t(n),"aria-label":`Slide ${n}`,"aria-current":n===e,className:`focus-ring shrink-0 rounded-md overflow-hidden border-2 transition-all ${n===e?`border-gold opacity-100`:`border-transparent opacity-55 hover:opacity-90`}`,children:(0,y.jsx)(`img`,{src:A(n),alt:``,loading:`lazy`,className:`h-12 w-auto block`})},n))})]})}function M(e,t){let n=[],r=e,i=0;for(;r.length;){let e=r.match(/\*\*(.+?)\*\*|\*(.+?)\*/);if(!e){n.push(r);break}e.index>0&&n.push(r.slice(0,e.index)),e[1]===void 0?n.push((0,y.jsx)(`em`,{children:e[2]},`${t}-${i++}`)):n.push((0,y.jsx)(`strong`,{children:e[1]},`${t}-${i++}`)),r=r.slice(e.index+e[0].length)}return n}function N(e){let t=e.split(`
`),n=[],r=0;for(;r<t.length;){let e=t[r];if(!e.trim()){r++;continue}if(/^#{1,6}\s/.test(e)){let t=e.match(/^#+/)[0].length;n.push({type:`h`,level:t,text:e.replace(/^#+\s*/,``).replace(/[*_]/g,``)}),r++}else if(e.trim().startsWith(`|`)){let e=[];for(;r<t.length&&t[r].trim().startsWith(`|`);){let n=t[r].trim().replace(/^\||\|$/g,``).split(`|`).map(e=>e.trim());n.every(e=>/^[-: ]+$/.test(e))||e.push(n),r++}n.push({type:`table`,rows:e})}else if(/^[*+-]\s/.test(e.trim())){let e=[];for(;r<t.length&&(/^\s*[*+-]\s/.test(t[r])||t[r].trim()&&/^\s{2,}/.test(t[r])&&!t[r].trim().startsWith(`|`));)/^\s*[*+-]\s/.test(t[r])?e.push(t[r].replace(/^\s*[*+-]\s*/,``)):e.length&&(e[e.length-1]+=` `+t[r].trim()),r++;n.push({type:`ul`,items:e})}else n.push({type:`p`,text:e.trim()}),r++}return n}function P(){let e=(0,h.useMemo)(()=>N(D),[]),[t,n]=(0,h.useState)(``),r=(0,h.useRef)(null),i=(0,h.useMemo)(()=>{let t=[];return e.forEach((e,n)=>{let r=e.type===`h`?e.text:e.type===`p`&&/^\*\*\d\.\s.+\*\*$/.test(e.text)?e.text.replace(/\*\*/g,``):null;r&&e.type===`p`?t.push({i:n,text:r}):e.type===`h`&&e.level<=1&&t.push({i:n,text:e.text})}),t},[e]),a=t.trim().toLowerCase(),o=(0,h.useMemo)(()=>{if(!a)return new Set;let t=new Set;return e.forEach((e,n)=>{(e.type===`table`?e.rows.flat().join(` `):e.type===`ul`?e.items.join(` `):e.text||``).toLowerCase().includes(a)&&t.add(n)}),t},[a,e]);function s(e){r.current?.querySelector(`[data-block="${e}"]`)?.scrollIntoView({behavior:`smooth`,block:`start`})}return(0,y.jsxs)(`div`,{className:`h-full flex min-h-0`,children:[(0,y.jsxs)(`aside`,{className:`hidden md:flex flex-col w-64 shrink-0 border-r border-line bg-surface`,children:[(0,y.jsxs)(`div`,{className:`p-3 border-b border-line`,children:[(0,y.jsx)(`input`,{type:`search`,value:t,onChange:e=>n(e.target.value),placeholder:`Search the document…`,"aria-label":`Search the document`,className:`focus-ring w-full text-sm rounded-md border border-line bg-paper px-3 py-2 placeholder:text-muted`}),a&&(0,y.jsxs)(`p`,{className:`text-[11px] text-muted mt-1.5`,children:[o.size,` matching block`,o.size===1?``:`s`,` highlighted`]})]}),(0,y.jsx)(`nav`,{className:`rail overflow-y-auto p-2`,"aria-label":`Document outline`,children:i.map(e=>(0,y.jsx)(`button`,{type:`button`,onClick:()=>s(e.i),className:`focus-ring block w-full text-left text-[13px] leading-snug text-ink hover:bg-mist-100 rounded-md px-2.5 py-2 transition-colors`,children:e.text},e.i))})]}),(0,y.jsx)(`div`,{ref:r,className:`rail flex-1 min-w-0 overflow-y-auto bg-paper`,children:(0,y.jsxs)(`article`,{className:`max-w-2xl mx-auto px-5 sm:px-8 py-8 sm:py-10`,children:[(0,y.jsx)(`p`,{className:`kicker text-pine-600 mb-6`,children:`MVT FINAL · WORKING DOCUMENT · VERBATIM`}),e.map((e,t)=>{let n=o.has(t)?`bg-gold-tint outline outline-1 outline-gold-soft rounded-sm`:``;return e.type===`h`?(0,y.jsx)(`h3`,{"data-block":t,className:`font-display font-semibold text-ink mt-8 mb-3 text-xl leading-snug ${n}`,children:e.text},t):e.type===`table`?(0,y.jsx)(`div`,{"data-block":t,className:`my-5 overflow-x-auto rounded-lg border border-line ${n}`,children:(0,y.jsxs)(`table`,{className:`w-full text-sm border-collapse`,children:[(0,y.jsx)(`thead`,{children:(0,y.jsx)(`tr`,{className:`bg-surface text-left`,children:e.rows[0]?.map((e,t)=>(0,y.jsx)(`th`,{className:`px-3 py-2.5 font-semibold text-pine-950 border-b border-line whitespace-nowrap`,children:e.replace(/\*\*/g,``)},t))})}),(0,y.jsx)(`tbody`,{children:e.rows.slice(1).map((e,n)=>(0,y.jsx)(`tr`,{className:`border-b border-line last:border-0`,children:e.map((e,r)=>(0,y.jsx)(`td`,{className:`px-3 py-2.5 align-top text-ink`,children:M(e,`${t}-${n}-${r}`)},r))},n))})]})},t):e.type===`ul`?(0,y.jsx)(`ul`,{"data-block":t,className:`list-disc pl-5 my-3 space-y-1.5 text-[15px] leading-relaxed text-ink ${n}`,children:e.items.map((e,n)=>(0,y.jsx)(`li`,{children:M(e,`${t}-${n}`)},n))},t):/^\*\*\d\.\s.+\*\*$/.test(e.text)?(0,y.jsx)(`h2`,{"data-block":t,className:`font-display font-semibold text-pine-950 mt-12 first:mt-0 mb-4 text-2xl leading-snug ${n}`,children:e.text.replace(/\*\*/g,``)},t):(0,y.jsx)(`p`,{"data-block":t,className:`my-3 text-[15px] leading-relaxed text-ink ${n}`,children:M(e.text,t)},t)})]})})]})}function F({open:e,onClose:t}){let[n,r]=(0,h.useState)(`deck`),i=(0,h.useRef)(null),{lite:a}=m();return(0,h.useEffect)(()=>{if(!e)return;let n=e=>{e.key===`Escape`&&t()};return window.addEventListener(`keydown`,n),document.body.style.overflow=`hidden`,i.current?.focus(),()=>{window.removeEventListener(`keydown`,n),document.body.style.overflow=``}},[e,t]),(0,y.jsx)(E,{children:e&&(0,y.jsx)(c.div,{className:`fixed inset-0 z-50 bg-pine-950/70 backdrop-blur-sm`,initial:!a&&{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.15}},transition:{duration:.25,ease:s},onMouseDown:e=>{e.target===e.currentTarget&&t()},children:(0,y.jsxs)(c.div,{ref:i,role:`dialog`,"aria-modal":`true`,"aria-label":`Source documents`,tabIndex:-1,className:`absolute inset-2 sm:inset-6 lg:inset-10 bg-paper rounded-2xl overflow-hidden flex flex-col shadow-2xl focus:outline-none`,initial:!a&&{opacity:0,y:22,scale:.985},animate:{opacity:1,y:0,scale:1},exit:a?void 0:{opacity:0,y:14,scale:.99,transition:{duration:.16}},transition:{duration:.3,ease:s},children:[(0,y.jsxs)(`div`,{className:`shrink-0 flex items-center justify-between gap-3 px-4 sm:px-6 h-14 border-b border-line bg-surface`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-2 min-w-0`,children:[(0,y.jsx)(`p`,{className:`kicker text-pine-600 hidden sm:block whitespace-nowrap`,children:`SOURCE DOCUMENTS`}),(0,y.jsxs)(`div`,{className:`flex rounded-lg bg-mist-100 p-0.5 ml-0 sm:ml-3`,role:`tablist`,"aria-label":`Source document`,children:[(0,y.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":n===`deck`,onClick:()=>r(`deck`),className:`focus-ring px-3.5 py-1.5 rounded-md text-[13px] font-medium transition-colors ${n===`deck`?`bg-paper text-pine-950 shadow-sm`:`text-muted hover:text-ink`}`,children:`Board Deck`}),(0,y.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":n===`doc`,onClick:()=>r(`doc`),className:`focus-ring px-3.5 py-1.5 rounded-md text-[13px] font-medium transition-colors ${n===`doc`?`bg-paper text-pine-950 shadow-sm`:`text-muted hover:text-ink`}`,children:`MVT Document`})]})]}),(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,y.jsx)(`p`,{className:`hidden md:block text-[11px] text-muted`,children:`← → navigate · G grid · F fullscreen · Esc close`}),(0,y.jsx)(`button`,{type:`button`,onClick:t,"aria-label":`Close source documents`,className:`focus-ring grid place-items-center w-9 h-9 rounded-md text-muted hover:text-ink hover:bg-mist-100 transition-colors`,children:(0,y.jsx)(l,{name:`close`,size:18})})]})]}),(0,y.jsx)(`div`,{className:`flex-1 min-h-0`,children:n===`deck`?(0,y.jsx)(j,{}):(0,y.jsx)(P,{})})]})})})}export{F as default};