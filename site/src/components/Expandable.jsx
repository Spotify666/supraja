import { useState, useId } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { EASE_OUT, useLite } from '../lib/motion.jsx'
import Icon from './Icon.jsx'

// Topic-first disclosure: a headline row (always visible) that reveals its
// detail on click. Graphs/tables live OUTSIDE this — only prose/detail collapses.
// tone: 'light' (on light surfaces) | 'dark' (on pine surfaces)
export default function Expandable({ title, hint, children, defaultOpen = false, tone = 'light' }) {
  const [open, setOpen] = useState(defaultOpen)
  const { lite } = useLite()
  const id = useId()

  const dark = tone === 'dark'
  const wrap = dark ? 'border-pine-800 bg-pine-900/40' : 'border-line bg-paper'
  const titleColor = dark ? 'text-paper' : 'text-pine-950'
  const hintColor = dark ? 'text-mist-300' : 'text-muted'

  return (
    <div className={`rounded-xl border ${wrap} overflow-hidden`}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="focus-ring w-full flex items-center gap-3 text-left px-5 py-4 hover:bg-mist-100/40 transition-colors"
      >
        <span
          className={`shrink-0 grid place-items-center w-6 h-6 rounded-md transition-transform duration-200 ${
            dark ? 'bg-pine-800 text-gold' : 'bg-mist-100 text-pine-800'
          } ${open ? 'rotate-90' : ''}`}
        >
          <Icon name="chevronRight" size={14} />
        </span>
        <span className="min-w-0 flex-1">
          <span className={`block font-semibold ${titleColor}`}>{title}</span>
          {hint && <span className={`block text-sm mt-0.5 ${hintColor}`}>{hint}</span>}
        </span>
        <span className={`shrink-0 text-xs font-medium ${hintColor}`}>{open ? 'Hide' : 'Details'}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={lite ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={lite ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <div className={`px-5 pb-5 pt-1 text-[15px] leading-relaxed ${dark ? 'text-mist-200' : 'text-ink'}`}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
