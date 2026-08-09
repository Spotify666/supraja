import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { EASE_OUT, useLite, useTypeScale } from '../lib/motion.jsx'
import Icon from './Icon.jsx'

// Sticky, quiet nav. The logo is also the discreet "break-glass" trigger:
// double-click / double-tap, or focus it and press Enter twice, to reveal
// the source-documents affordance. On phones/tablets a menu button opens a
// panel that jumps between the nine topics.
export default function Nav({ sections, onVaultHint }) {
  const [active, setActive] = useState(sections[0]?.id)
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 34, mass: 0.4 })
  const lastEnter = useRef(0)
  const { lite, setLite } = useLite()
  const { scale, setScale } = useTypeScale()
  const cycleScale = () => setScale(scale === 's' ? 'm' : scale === 'm' ? 'l' : 's')

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

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function logoKey(e) {
    if (e.key === 'Enter') {
      const now = Date.now()
      if (now - lastEnter.current < 600) onVaultHint()
      lastEnter.current = now
    }
  }

  const solidBar = solid || menuOpen

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        solidBar ? 'bg-pine-950/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.06)]' : 'bg-transparent'
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
          <span className="grid place-items-center rounded-md bg-paper px-2 py-1 sm:px-2.5 sm:py-1.5 shadow-sm">
            <img src={`${import.meta.env.BASE_URL}logo-lockup.webp`} alt="Supraja Hospitals" className="h-5 sm:h-6 w-auto block" width="220" height="60" />
          </span>
          <span className="hidden xl:flex items-center gap-2 border-l border-pine-800 pl-3">
            <img src={`${import.meta.env.BASE_URL}dhanturi-emblem.png`} alt="" aria-hidden="true" className="h-7 w-auto block" width="28" height="32" />
            <span className="block text-mist-300 text-[10px] tracking-[0.14em]">A DHANTURI GROUP ENTERPRISE</span>
          </span>
        </button>

        {/* Desktop section links — shown from ~960px so phone "desktop mode" gets the inline bar */}
        <nav aria-label="Sections" className="hidden min-[960px]:flex items-center gap-0.5">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`focus-ring px-2.5 py-1.5 rounded-md text-[12.5px] font-medium whitespace-nowrap transition-colors duration-200 ${
                active === s.id ? 'text-paper bg-pine-800' : 'text-mist-300 hover:text-paper'
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          {/* Text size S / M / L */}
          <div className="flex items-center rounded-md bg-pine-900/60 p-0.5" role="group" aria-label="Text size">
            {['s', 'm', 'l'].map((sz) => (
              <button
                key={sz}
                type="button"
                onClick={() => setScale(sz)}
                aria-pressed={scale === sz}
                title={`Text size: ${sz === 's' ? 'Small' : sz === 'm' ? 'Medium' : 'Large'}`}
                className={`focus-ring w-6 h-7 rounded font-display leading-none transition-colors ${
                  sz === 's' ? 'text-[11px]' : sz === 'm' ? 'text-[13px]' : 'text-[15px]'
                } ${scale === sz ? 'bg-pine-800 text-gold' : 'text-mist-300 hover:text-paper'}`}
              >
                A
              </button>
            ))}
          </div>

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

          {/* Phone / small-tablet menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="focus-ring min-[960px]:hidden grid place-items-center w-9 h-9 rounded-md text-paper hover:bg-pine-800 transition-colors"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open sections menu'}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile / tablet section panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            aria-label="Sections"
            className="min-[960px]:hidden overflow-hidden border-t border-pine-800 bg-pine-950/98 backdrop-blur-md"
            initial={lite ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={lite ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE_OUT }}
          >
            <ul className="max-h-[70vh] overflow-y-auto px-4 py-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5" style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}>
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      setMenuOpen(false)
                      const el = document.getElementById(s.id)
                      // let the scroll-lock release before scrolling to the target
                      setTimeout(() => el?.scrollIntoView({ behavior: lite ? 'auto' : 'smooth', block: 'start' }), 70)
                    }}
                    className={`focus-ring flex items-center gap-3 rounded-xl px-4 py-3.5 transition-colors ${
                      active === s.id ? 'bg-pine-800 text-paper' : 'text-mist-200 hover:bg-pine-900'
                    }`}
                  >
                    <span className={`font-display font-semibold tabular-nums ${active === s.id ? 'text-gold' : 'text-pine-600'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
