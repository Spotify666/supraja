import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EASE_OUT, useLite } from '../lib/motion.jsx'
import Icon from './Icon.jsx'

// A framed figure whose image opens to a full-screen, pinch-zoomable view on tap.
// Detailed charts stay legible on phones without shrinking the layout.
export default function ImageFigure({ src, alt, caption, frame = 'paper' }) {
  const [open, setOpen] = useState(false)
  const { lite } = useLite()

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <figure className={`rounded-2xl border border-line overflow-hidden ${frame === 'paper' ? 'bg-paper' : 'bg-surface'}`}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="focus-ring group relative block w-full"
          aria-label="Enlarge diagram"
        >
          <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
          <span className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-pine-950/85 text-paper text-xs font-medium px-3 py-1.5 opacity-90 group-hover:opacity-100">
            <Icon name="expand" size={14} /> Tap to enlarge
          </span>
        </button>
        {caption && <figcaption className="px-5 py-3 text-sm text-muted border-t border-line">{caption}</figcaption>}
      </figure>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-pine-950/90 backdrop-blur-sm grid place-items-center p-3 sm:p-6"
            initial={lite ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="focus-ring absolute top-4 right-4 grid place-items-center w-10 h-10 rounded-full bg-pine-900/90 text-paper hover:bg-pine-800"
            >
              <Icon name="close" size={20} />
            </button>
            {/* overflow-auto enables scroll/zoom of large charts on small screens */}
            <div className="max-w-full max-h-full overflow-auto rounded-xl">
              <img src={src} alt={alt} className="block max-w-none w-auto" style={{ minWidth: 'min(100%, 900px)' }} onClick={(e) => e.stopPropagation()} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
