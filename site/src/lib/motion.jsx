import { createContext, useContext, useMemo, useState, useEffect, useRef } from 'react'
import { motion, useReducedMotion, useInView, animate } from 'framer-motion'

// Motion rulebook: ease-out entrances, UI transitions <= ~300ms for
// interactions, slightly longer for scroll reveals; transform/opacity only.
export const EASE_OUT = [0.22, 1, 0.36, 1]
export const EASE_SWIFT = [0.32, 0.72, 0, 1]

const LiteContext = createContext({ lite: false, setLite: () => {} })

export function LiteProvider({ children }) {
  const prefersReduced = useReducedMotion()
  const [liteChoice, setLite] = useState(null) // null = follow OS preference
  const lite = liteChoice === null ? !!prefersReduced : liteChoice
  const value = useMemo(() => ({ lite, setLite }), [lite])
  return <LiteContext.Provider value={value}>{children}</LiteContext.Provider>
}

export function useLite() {
  return useContext(LiteContext)
}

// --- Text size (S / M / L) --------------------------------------------------
// Scales the root font-size, so every rem-based size (body, labels, and the
// rem part of the fluid heading clamps) scales together. Persisted per browser.
const SCALES = { s: '90%', m: '100%', l: '112%' }
const TypeScaleContext = createContext({ scale: 'm', setScale: () => {} })

export function TypeScaleProvider({ children }) {
  const [scale, setScale] = useState('m')

  useEffect(() => {
    const saved = typeof localStorage !== 'undefined' && localStorage.getItem('supraja-type')
    if (saved && SCALES[saved]) setScale(saved)
  }, [])

  useEffect(() => {
    document.documentElement.style.fontSize = SCALES[scale] || '100%'
    try {
      localStorage.setItem('supraja-type', scale)
    } catch {
      /* ignore */
    }
  }, [scale])

  const value = useMemo(() => ({ scale, setScale }), [scale])
  return <TypeScaleContext.Provider value={value}>{children}</TypeScaleContext.Provider>
}

export function useTypeScale() {
  return useContext(TypeScaleContext)
}

export function Reveal({ children, delay = 0, y = 18, className, once = true, amount = 0.25 }) {
  const { lite } = useLite()
  if (lite) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.55, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({ children, className, gap = 0.07, amount = 0.15 }) {
  const { lite } = useLite()
  if (lite) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount, margin: '0px 0px -40px 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
}

export function StaggerItem({ children, className }) {
  const { lite } = useLite()
  if (lite) return <div className={className}>{children}</div>
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  )
}

// Animated count-up that leaves prefixes/suffixes intact: "₹21,794 Cr" etc.
export function CountUp({ value, className }) {
  const { lite } = useLite()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const match = String(value).match(/^([^0-9-]*)(-?[\d,]+(?:\.\d+)?)(.*)$/)
  const [display, setDisplay] = useState(lite || !match ? value : match[1] + '0' + match[3])

  useEffect(() => {
    if (lite || !match) {
      setDisplay(value)
      return
    }
    if (!inView) return
    const target = parseFloat(match[2].replace(/,/g, ''))
    const decimals = (match[2].split('.')[1] || '').length
    const useCommas = match[2].includes(',')
    const controls = animate(0, target, {
      duration: 1.1,
      ease: EASE_OUT,
      onUpdate: (v) => {
        let s = v.toFixed(decimals)
        if (useCommas) s = Number(s).toLocaleString('en-IN', { minimumFractionDigits: decimals })
        setDisplay(match[1] + s + match[3])
      },
      // Snap to the exact verbatim source string so the final number is never
      // an animation-rounded approximation (e.g. 28.9 instead of 29.0).
      onComplete: () => setDisplay(value),
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, lite, value])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
