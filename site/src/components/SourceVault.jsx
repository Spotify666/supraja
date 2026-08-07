import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './Icon.jsx'
import { EASE_OUT, EASE_SWIFT, useLite } from '../lib/motion.jsx'
import mvtRaw from '../data/mvtDoc.md?raw'

const SLIDE_COUNT = 35
const slideSrc = (n) => `${import.meta.env.BASE_URL}slides/slide-${String(n).padStart(2, '0')}.webp`
const thumbSrc = (n) => `${import.meta.env.BASE_URL}slides/thumb-${String(n).padStart(2, '0')}.webp`

// ---------------------------------------------------------------------------
// Deck viewer — prev/next, arrow keys, thumbnail rail, grid, jump, fullscreen.
// ---------------------------------------------------------------------------
function SlideViewer() {
  const [idx, setIdx] = useState(1)
  const [grid, setGrid] = useState(false)
  const stageRef = useRef(null)
  const railRef = useRef(null)
  const { lite } = useLite()

  const go = useCallback((n) => setIdx(Math.min(SLIDE_COUNT, Math.max(1, n))), [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') go(idx + 1)
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') go(idx - 1)
      else if (e.key === 'Home') go(1)
      else if (e.key === 'End') go(SLIDE_COUNT)
      else if (e.key.toLowerCase() === 'g') setGrid((g) => !g)
      else if (e.key.toLowerCase() === 'f') toggleFullscreen()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [idx, go])

  useEffect(() => {
    const el = railRef.current?.querySelector(`[data-thumb="${idx}"]`)
    el?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: lite ? 'auto' : 'smooth' })
  }, [idx, lite])

  function toggleFullscreen() {
    const el = stageRef.current
    if (!document.fullscreenElement) el?.requestFullscreen?.()
    else document.exitFullscreen?.()
  }

  if (grid) {
    return (
      <div className="h-full overflow-y-auto rail p-4 sm:p-6" role="listbox" aria-label="Jump to slide">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {Array.from({ length: SLIDE_COUNT }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => {
                setIdx(n)
                setGrid(false)
              }}
              className={`focus-ring relative rounded-lg overflow-hidden border-2 transition-colors ${
                n === idx ? 'border-gold' : 'border-transparent hover:border-mist-300'
              }`}
            >
              <img src={thumbSrc(n)} alt={`Slide ${n}`} loading="lazy" className="w-full h-auto block" />
              <span className="absolute bottom-1 right-1.5 text-[10px] font-semibold text-paper bg-pine-950/80 rounded px-1.5 py-0.5">
                {n}
              </span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col">
      <div ref={stageRef} className="relative flex-1 min-h-0 grid place-items-center bg-pine-950 select-none">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={idx}
            src={slideSrc(idx)}
            alt={`Board deck, slide ${idx} of ${SLIDE_COUNT}`}
            className="absolute inset-0 w-full h-full object-contain"
            initial={lite ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={lite ? undefined : { opacity: 0, x: -18, transition: { duration: 0.12 } }}
            transition={{ duration: 0.22, ease: EASE_SWIFT }}
            draggable={false}
          />
        </AnimatePresence>
        <button
          type="button"
          onClick={() => go(idx - 1)}
          disabled={idx === 1}
          aria-label="Previous slide"
          className="focus-ring absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-pine-900/80 text-paper disabled:opacity-30 hover:bg-pine-800 transition-colors"
        >
          <Icon name="chevronLeft" />
        </button>
        <button
          type="button"
          onClick={() => go(idx + 1)}
          disabled={idx === SLIDE_COUNT}
          aria-label="Next slide"
          className="focus-ring absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-pine-900/80 text-paper disabled:opacity-30 hover:bg-pine-800 transition-colors"
        >
          <Icon name="chevronRight" />
        </button>
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <span className="text-xs font-medium text-mist-200 tabular-nums bg-pine-900/80 rounded-md px-2.5 py-1.5">
            {idx} / {SLIDE_COUNT}
          </span>
          <button
            type="button"
            onClick={() => setGrid(true)}
            aria-label="Slide grid (G)"
            className="focus-ring grid place-items-center w-9 h-9 rounded-md bg-pine-900/80 text-paper hover:bg-pine-800 transition-colors"
          >
            <Icon name="grid" size={17} />
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="Fullscreen (F)"
            className="focus-ring grid place-items-center w-9 h-9 rounded-md bg-pine-900/80 text-paper hover:bg-pine-800 transition-colors"
          >
            <Icon name="expand" size={17} />
          </button>
        </div>
      </div>
      <div ref={railRef} className="rail shrink-0 flex gap-2 overflow-x-auto px-3 py-2.5 bg-pine-950 border-t border-pine-800">
        {Array.from({ length: SLIDE_COUNT }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            type="button"
            data-thumb={n}
            onClick={() => setIdx(n)}
            aria-label={`Slide ${n}`}
            aria-current={n === idx}
            className={`focus-ring shrink-0 rounded-md overflow-hidden border-2 transition-all ${
              n === idx ? 'border-gold opacity-100' : 'border-transparent opacity-55 hover:opacity-90'
            }`}
          >
            <img src={thumbSrc(n)} alt="" loading="lazy" className="h-12 w-auto block" />
          </button>
        ))}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Doc reader — renders the MVT Final document (verbatim markdown) with an
// outline sidebar and plain-text search.
// ---------------------------------------------------------------------------
function inline(text, key) {
  const parts = []
  let rest = text
  let i = 0
  while (rest.length) {
    const m = rest.match(/\*\*(.+?)\*\*|\*(.+?)\*/)
    if (!m) {
      parts.push(rest)
      break
    }
    if (m.index > 0) parts.push(rest.slice(0, m.index))
    if (m[1] !== undefined) parts.push(<strong key={`${key}-${i++}`}>{m[1]}</strong>)
    else parts.push(<em key={`${key}-${i++}`}>{m[2]}</em>)
    rest = rest.slice(m.index + m[0].length)
  }
  return parts
}

function parseDoc(raw) {
  const lines = raw.split('\n')
  const blocks = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) {
      i++
      continue
    }
    if (/^#{1,6}\s/.test(line)) {
      const level = line.match(/^#+/)[0].length
      blocks.push({ type: 'h', level, text: line.replace(/^#+\s*/, '').replace(/[*_]/g, '') })
      i++
    } else if (line.trim().startsWith('|')) {
      const rows = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        const cells = lines[i]
          .trim()
          .replace(/^\||\|$/g, '')
          .split('|')
          .map((c) => c.trim())
        if (!cells.every((c) => /^[-: ]+$/.test(c))) rows.push(cells)
        i++
      }
      blocks.push({ type: 'table', rows })
    } else if (/^[*+-]\s/.test(line.trim())) {
      const items = []
      while (i < lines.length && (/^\s*[*+-]\s/.test(lines[i]) || (lines[i].trim() && /^\s{2,}/.test(lines[i]) && !lines[i].trim().startsWith('|')))) {
        if (/^\s*[*+-]\s/.test(lines[i])) items.push(lines[i].replace(/^\s*[*+-]\s*/, ''))
        else if (items.length) items[items.length - 1] += ' ' + lines[i].trim()
        i++
      }
      blocks.push({ type: 'ul', items })
    } else {
      blocks.push({ type: 'p', text: line.trim() })
      i++
    }
  }
  return blocks
}

function DocReader() {
  const blocks = useMemo(() => parseDoc(mvtRaw), [])
  const [query, setQuery] = useState('')
  const bodyRef = useRef(null)

  // Outline: bold-only paragraphs that look like numbered section titles, plus headings.
  const outline = useMemo(() => {
    const out = []
    blocks.forEach((b, i) => {
      const t = b.type === 'h' ? b.text : b.type === 'p' && /^\*\*\d\.\s.+\*\*$/.test(b.text) ? b.text.replace(/\*\*/g, '') : null
      if (t && b.type === 'p') out.push({ i, text: t })
      else if (b.type === 'h' && b.level <= 1) out.push({ i, text: b.text })
    })
    return out
  }, [blocks])

  const q = query.trim().toLowerCase()
  const matches = useMemo(() => {
    if (!q) return new Set()
    const s = new Set()
    blocks.forEach((b, i) => {
      const text = b.type === 'table' ? b.rows.flat().join(' ') : b.type === 'ul' ? b.items.join(' ') : b.text || ''
      if (text.toLowerCase().includes(q)) s.add(i)
    })
    return s
  }, [q, blocks])

  function jump(i) {
    bodyRef.current?.querySelector(`[data-block="${i}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="h-full flex min-h-0">
      <aside className="hidden md:flex flex-col w-64 shrink-0 border-r border-line bg-surface">
        <div className="p-3 border-b border-line">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the document…"
            aria-label="Search the document"
            className="focus-ring w-full text-sm rounded-md border border-line bg-paper px-3 py-2 placeholder:text-muted"
          />
          {q && (
            <p className="text-[11px] text-muted mt-1.5">
              {matches.size} matching block{matches.size === 1 ? '' : 's'} highlighted
            </p>
          )}
        </div>
        <nav className="rail overflow-y-auto p-2" aria-label="Document outline">
          {outline.map((o) => (
            <button
              key={o.i}
              type="button"
              onClick={() => jump(o.i)}
              className="focus-ring block w-full text-left text-[13px] leading-snug text-ink hover:bg-mist-100 rounded-md px-2.5 py-2 transition-colors"
            >
              {o.text}
            </button>
          ))}
        </nav>
      </aside>
      <div ref={bodyRef} className="rail flex-1 min-w-0 overflow-y-auto bg-paper">
        <article className="max-w-2xl mx-auto px-5 sm:px-8 py-8 sm:py-10">
          <p className="kicker text-pine-600 mb-6">MVT FINAL · WORKING DOCUMENT · VERBATIM</p>
          {blocks.map((b, i) => {
            const hit = matches.has(i)
            const hl = hit ? 'bg-gold-tint outline outline-1 outline-gold-soft rounded-sm' : ''
            if (b.type === 'h')
              return (
                <h3 key={i} data-block={i} className={`font-display font-semibold text-ink mt-8 mb-3 text-xl leading-snug ${hl}`}>
                  {b.text}
                </h3>
              )
            if (b.type === 'table')
              return (
                <div key={i} data-block={i} className={`my-5 overflow-x-auto rounded-lg border border-line ${hl}`}>
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-surface text-left">
                        {b.rows[0]?.map((c, ci) => (
                          <th key={ci} className="px-3 py-2.5 font-semibold text-pine-950 border-b border-line whitespace-nowrap">
                            {c.replace(/\*\*/g, '')}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.rows.slice(1).map((r, ri) => (
                        <tr key={ri} className="border-b border-line last:border-0">
                          {r.map((c, ci) => (
                            <td key={ci} className="px-3 py-2.5 align-top text-ink">
                              {inline(c, `${i}-${ri}-${ci}`)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            if (b.type === 'ul')
              return (
                <ul key={i} data-block={i} className={`list-disc pl-5 my-3 space-y-1.5 text-[15px] leading-relaxed text-ink ${hl}`}>
                  {b.items.map((it, ii) => (
                    <li key={ii}>{inline(it, `${i}-${ii}`)}</li>
                  ))}
                </ul>
              )
            const isTitle = /^\*\*\d\.\s.+\*\*$/.test(b.text)
            if (isTitle)
              return (
                <h2
                  key={i}
                  data-block={i}
                  className={`font-display font-semibold text-pine-950 mt-12 first:mt-0 mb-4 text-2xl leading-snug ${hl}`}
                >
                  {b.text.replace(/\*\*/g, '')}
                </h2>
              )
            return (
              <p key={i} data-block={i} className={`my-3 text-[15px] leading-relaxed text-ink ${hl}`}>
                {inline(b.text, i)}
              </p>
            )
          })}
        </article>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// The vault dialog itself.
// ---------------------------------------------------------------------------
export default function SourceVault({ open, onClose }) {
  const [tab, setTab] = useState('deck')
  const dialogRef = useRef(null)
  const { lite } = useLite()

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-pine-950/70 backdrop-blur-sm"
          initial={lite ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.25, ease: EASE_OUT }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Source documents"
            tabIndex={-1}
            className="absolute inset-2 sm:inset-6 lg:inset-10 bg-paper rounded-2xl overflow-hidden flex flex-col shadow-2xl focus:outline-none"
            initial={lite ? false : { opacity: 0, y: 22, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={lite ? undefined : { opacity: 0, y: 14, scale: 0.99, transition: { duration: 0.16 } }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
          >
            <div className="shrink-0 flex items-center justify-between gap-3 px-4 sm:px-6 h-14 border-b border-line bg-surface">
              <div className="flex items-center gap-2 min-w-0">
                <p className="kicker text-pine-600 hidden sm:block whitespace-nowrap">SOURCE DOCUMENTS</p>
                <div className="flex rounded-lg bg-mist-100 p-0.5 ml-0 sm:ml-3" role="tablist" aria-label="Source document">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={tab === 'deck'}
                    onClick={() => setTab('deck')}
                    className={`focus-ring px-3.5 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
                      tab === 'deck' ? 'bg-paper text-pine-950 shadow-sm' : 'text-muted hover:text-ink'
                    }`}
                  >
                    Board Deck
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={tab === 'doc'}
                    onClick={() => setTab('doc')}
                    className={`focus-ring px-3.5 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
                      tab === 'doc' ? 'bg-paper text-pine-950 shadow-sm' : 'text-muted hover:text-ink'
                    }`}
                  >
                    MVT Document
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="hidden md:block text-[11px] text-muted">← → navigate · G grid · F fullscreen · Esc close</p>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close source documents"
                  className="focus-ring grid place-items-center w-9 h-9 rounded-md text-muted hover:text-ink hover:bg-mist-100 transition-colors"
                >
                  <Icon name="close" size={18} />
                </button>
              </div>
            </div>
            <div className="flex-1 min-h-0">{tab === 'deck' ? <SlideViewer /> : <DocReader />}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
