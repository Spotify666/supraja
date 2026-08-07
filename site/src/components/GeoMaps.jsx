import { useEffect, useState, useRef } from 'react'
import { geoNaturalEarth1, geoPath, geoInterpolate } from 'd3-geo'
import { feature } from 'topojson-client'
import { motion, useInView } from 'framer-motion'
import { EASE_OUT, useLite } from '../lib/motion.jsx'
import { geo } from '../data/content.js'

let landPromise = null
function loadLand() {
  if (!landPromise) {
    landPromise = import('world-atlas/land-110m.json').then((m) => {
      const topo = m.default || m
      return feature(topo, topo.objects.land)
    })
  }
  return landPromise
}

function useLand() {
  const [land, setLand] = useState(null)
  useEffect(() => {
    let on = true
    loadLand().then((l) => on && setLand(l))
    return () => {
      on = false
    }
  }, [])
  return land
}

// World map with the five destination-country markers (SVG, light tone).
export function DestinationsMap({ markers }) {
  const land = useLand()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const { lite } = useLite()
  const W = 960
  const H = 430
  if (!land)
    return <div ref={ref} className="aspect-[960/430] rounded-2xl bg-mist-100 animate-pulse" aria-hidden="true" />
  const projection = geoNaturalEarth1().fitExtent(
    [
      [8, -40],
      [W - 8, H + 6],
    ],
    { type: 'Sphere' }
  )
  const path = geoPath(projection)
  const shown = lite || inView
  return (
    <div ref={ref}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="World map marking the five leading medical tourism destinations: Turkey, Thailand, India, Mexico, South Korea."
      >
        <path d={path(land)} fill="var(--mist-200)" stroke="var(--paper)" strokeWidth="0.6" />
        {markers.map((m, i) => {
          const [x, y] = projection(m.coords)
          return (
            <motion.g
              key={m.name}
              initial={lite ? { opacity: 1 } : { opacity: 0, scale: 0.6 }}
              animate={shown ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.1, ease: EASE_OUT }}
              style={{ transformOrigin: `${x}px ${y}px` }}
            >
              {m.home && <circle cx={x} cy={y} r="17" fill="var(--gold)" opacity="0.22" />}
              <circle cx={x} cy={y} r={m.home ? 8 : 6} fill={m.home ? 'var(--gold)' : 'var(--pine-800)'} stroke="var(--paper)" strokeWidth="2" />
              <text
                x={x}
                y={y - (m.home ? 15 : 12)}
                textAnchor="middle"
                fontSize="15"
                fontWeight={m.home ? 700 : 600}
                fill={m.home ? 'var(--gold-ink)' : 'var(--pine-950)'}
              >
                {m.name}
              </text>
            </motion.g>
          )
        })}
      </svg>
    </div>
  )
}

// Africa + Middle East expansion map: Uganda first (gold), then the adjacent
// markets, with corridor arcs back to Hyderabad.
export function ExpansionMap() {
  const land = useLand()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })
  const { lite } = useLite()
  const W = 900
  const H = 620
  if (!land)
    return <div ref={ref} className="aspect-[900/620] rounded-2xl bg-pine-900 animate-pulse" aria-hidden="true" />
  // Frame Africa + India
  const projection = geoNaturalEarth1().rotate([-55, 0]).fitExtent(
    [
      [-560, -290],
      [W + 320, H + 260],
    ],
    { type: 'Sphere' }
  )
  const path = geoPath(projection)
  const hyd = projection(geo.hyderabad.coords)
  const shown = lite || inView
  return (
    <div ref={ref}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Map of Africa and the Middle East showing Uganda as the first corridor to Hyderabad, with Kenya, Tanzania, Rwanda, Burundi, South Sudan, Ethiopia, Zambia, Zimbabwe, Nigeria and the Middle East as adjacent markets."
      >
        <rect width={W} height={H} fill="var(--pine-950)" rx="18" />
        <g>
          <path d={path(land)} fill="var(--pine-700)" opacity="0.85" stroke="var(--pine-950)" strokeWidth="0.5" />
        </g>
        {geo.expansionMarkets.map((m, i) => {
          const p = projection(m.coords)
          if (!p) return null
          const interp = geoInterpolate(m.coords, geo.hyderabad.coords)
          const lineD = path({
            type: 'LineString',
            coordinates: Array.from({ length: 33 }, (_, k) => interp(k / 32)),
          })
          return (
            <g key={m.name}>
              <motion.path
                d={lineD}
                fill="none"
                stroke={m.first ? 'var(--gold)' : 'var(--mist-300)'}
                strokeWidth={m.first ? 2.2 : 0.9}
                strokeDasharray={m.first ? 'none' : '3 5'}
                opacity={m.first ? 1 : 0.45}
                initial={lite ? { pathLength: 1 } : { pathLength: 0 }}
                animate={shown ? { pathLength: 1 } : {}}
                transition={{ duration: m.first ? 1.1 : 0.9, delay: m.first ? 0.2 : 0.7 + i * 0.06, ease: EASE_OUT }}
              />
              <motion.g
                initial={lite ? { opacity: 1 } : { opacity: 0 }}
                animate={shown ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: m.first ? 0.1 : 0.6 + i * 0.06 }}
              >
                {m.first && <circle cx={p[0]} cy={p[1]} r="15" fill="var(--gold)" opacity="0.25" />}
                <circle cx={p[0]} cy={p[1]} r={m.first ? 7 : 4.5} fill={m.first ? 'var(--gold)' : 'var(--mist-200)'} />
                <text
                  x={p[0]}
                  y={p[1] + (m.name === 'Kenya' || m.name === 'Ethiopia' || m.name === 'South Sudan' ? -12 : 22)}
                  textAnchor="middle"
                  fontSize={m.first ? 17 : 13}
                  fontWeight={m.first ? 700 : 500}
                  fill={m.first ? 'var(--gold)' : 'var(--mist-200)'}
                >
                  {m.name}
                </text>
              </motion.g>
            </g>
          )
        })}
        {hyd && (
          <g>
            <circle cx={hyd[0]} cy={hyd[1]} r="8" fill="var(--gold)" stroke="var(--pine-950)" strokeWidth="2" />
            <text x={hyd[0] + 14} y={hyd[1] + 5} fontSize="17" fontWeight="700" fill="var(--paper)">
              Hyderabad
            </text>
          </g>
        )}
      </svg>
    </div>
  )
}
