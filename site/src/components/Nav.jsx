import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useLite } from '../lib/motion.jsx'
import Icon from './Icon.jsx'

// Sticky, quiet nav. The logo is also the discreet "break-glass" trigger:
// double-click / double-tap, or focus it and press Enter twice, to reveal
// the source-documents affordance.
export default function Nav({ sections, onVaultHint }) {
  const [active, setActive] = useState(sections[0]?.id)
  const [solid, setSolid] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 34, mass: 0.4 })
  const lastEnter = useRef(0)
  const { lite, setLite } = useLite()

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-35% 0px -55% 0px' }
    )
    for (const s of sections) {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    }
    const onScroll = () => setSolid(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      obs.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [sections])

  function logoKey(e) {
    if (e.key === 'Enter') {
      const now = Date.now()
      if (now - lastEnter.current < 600) onVaultHint()
      lastEnter.current = now
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        solid ? 'bg-pine-950/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.06)]' : 'bg-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gold"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 flex items-center justify-between h-14 sm:h-16">
        <button
          type="button"
          onDoubleClick={onVaultHint}
          onKeyDown={logoKey}
          className="focus-ring flex items-center gap-2.5 sm:gap-3 text-left select-none cursor-default"
          aria-label="Supraja Hospitals — a Dhanturi Group enterprise"
          title="Supraja Hospitals"
        >
          {/* Official logo sits on a white chip so its maroon/teal reads crisply on the dark header */}
          <span className="grid place-items-center rounded-md bg-paper px-2 py-1 sm:px-2.5 sm:py-1.5 shadow-sm">
            <img
              src={`${import.meta.env.BASE_URL}logo-lockup.webp`}
              alt="Supraja Hospitals"
              className="h-5 sm:h-6 w-auto block"
              width="220"
              height="60"
            />
          </span>
          <span className="hidden md:flex items-center gap-2 border-l border-pine-800 pl-3">
            <img
              src={`${import.meta.env.BASE_URL}dhanturi-mark.svg`}
              alt=""
              aria-hidden="true"
              className="h-6 w-auto block"
              width="24"
              height="24"
            />
            <span className="block text-mist-300 text-[10px] tracking-[0.14em]">A DHANTURI GROUP ENTERPRISE</span>
          </span>
        </button>

        <nav aria-label="Sections" className="hidden lg:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`focus-ring px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors duration-200 ${
                active === s.id ? 'text-paper bg-pine-800' : 'text-mist-300 hover:text-paper'
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setLite(!lite)}
          className={`focus-ring grid place-items-center w-9 h-9 rounded-md transition-colors hover:bg-pine-800 ${
            lite ? 'text-mist-300 hover:text-paper' : 'text-gold'
          }`}
          aria-pressed={!lite}
          aria-label={lite ? 'Animations off — click to enable animations' : 'Animations on — click to reduce motion'}
          title={lite ? 'Animations off' : 'Animations on'}
        >
          <Icon name={lite ? 'motionOff' : 'motion'} size={18} />
        </button>
      </div>
    </header>
  )
}
