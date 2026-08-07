import { useEffect, useRef, useState } from 'react'
import {
  geoOrthographicRaw,
  geoNaturalEarth1Raw,
  geoProjectionMutator,
  geoPath,
  geoGraticule10,
  geoInterpolate,
} from 'd3-geo'
import { feature } from 'topojson-client'
import { useLite } from '../lib/motion.jsx'
import { geo } from '../data/content.js'

// 3D globe that flattens into a 2D map as the section scrolls, with
// great-circle flight arcs: Entebbe -> (Addis Ababa | Doha | Dubai) -> Hyderabad,
// plus the Entebbe–Mumbai direct alternate.
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

function interpolatedProjection(raw0, raw1) {
  const mutate = geoProjectionMutator((t) => (x, y) => {
    const [x0, y0] = raw0(x, y)
    const [x1, y1] = raw1(x, y)
    return [x0 + t * (x1 - x0), y0 + t * (y1 - y0)]
  })
  let t = 0
  const projection = mutate(t)
  projection.alpha = (_) => (_ === undefined ? t : mutate((t = +_)))
  return projection
}

const CSS = () => getComputedStyle(document.documentElement)

export default function GlobeMorph({ progress, className }) {
  // progress: framer MotionValue 0..1 (0 = globe, 1 = flat map)
  const canvasRef = useRef(null)
  const [land, setLand] = useState(null)
  const { lite } = useLite()

  useEffect(() => {
    let on = true
    loadLand().then((l) => on && setLand(l))
    return () => {
      on = false
    }
  }, [])

  useEffect(() => {
    if (!land) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const css = CSS()
    const col = {
      pine950: css.getPropertyValue('--pine-950').trim(),
      pine800: css.getPropertyValue('--pine-800').trim(),
      pine700: css.getPropertyValue('--pine-700').trim(),
      pine600: css.getPropertyValue('--pine-600').trim(),
      mist300: css.getPropertyValue('--mist-300').trim(),
      mist200: css.getPropertyValue('--mist-200').trim(),
      gold: css.getPropertyValue('--gold').trim(),
      paper: css.getPropertyValue('--paper').trim(),
    }
    const projection = interpolatedProjection(geoOrthographicRaw, geoNaturalEarth1Raw)
    const graticule = geoGraticule10()

    const routes = []
    for (const hub of geo.hubs) {
      routes.push([geo.entebbe.coords, hub.coords])
      routes.push([hub.coords, geo.hyderabad.coords])
    }
    routes.push([geo.entebbe.coords, geo.mumbai.coords])

    const cities = [
      { ...geo.entebbe, kind: 'origin' },
      ...geo.hubs.map((h) => ({ ...h, kind: 'hub' })),
      { ...geo.mumbai, kind: 'hub' },
      { ...geo.hyderabad, kind: 'dest' },
    ]

    let raf = 0
    let dashOffset = 0

    function draw(t) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      if (canvas.width !== w * dpr) {
        canvas.width = w * dpr
        canvas.height = h * dpr
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)

      // Center the view between East Africa and India; ease rotation with t.
      projection.alpha(t)
      projection
        .rotate([-55 - 10 * t, -8 * (1 - t), 0])
        .fitExtent(
          [
            [w * 0.04, h * 0.06],
            [w * 0.96, h * 0.94],
          ],
          t > 0.5 ? { type: 'Sphere' } : { type: 'Sphere' }
        )
      const path = geoPath(projection, ctx)

      // Sphere ground
      ctx.beginPath()
      path({ type: 'Sphere' })
      ctx.fillStyle = col.pine950
      ctx.fill()

      // Graticule
      ctx.beginPath()
      path(graticule)
      ctx.strokeStyle = col.pine800
      ctx.globalAlpha = 0.45
      ctx.lineWidth = 0.5
      ctx.stroke()
      ctx.globalAlpha = 1

      // Land
      ctx.beginPath()
      path(land)
      ctx.fillStyle = col.pine700
      ctx.globalAlpha = 0.9
      ctx.fill()
      ctx.globalAlpha = 1

      // Sphere outline
      ctx.beginPath()
      path({ type: 'Sphere' })
      ctx.strokeStyle = col.pine600
      ctx.lineWidth = 1
      ctx.stroke()

      // Flight arcs (sampled great circles so they follow the morphing projection)
      for (const [a, b] of routes) {
        const interp = geoInterpolate(a, b)
        ctx.beginPath()
        path({ type: 'LineString', coordinates: Array.from({ length: 41 }, (_, i) => interp(i / 40)) })
        ctx.strokeStyle = col.gold
        ctx.lineWidth = 1.4
        ctx.setLineDash([5, 5])
        ctx.lineDashOffset = -dashOffset
        ctx.globalAlpha = 0.95
        ctx.stroke()
        ctx.setLineDash([])
        ctx.globalAlpha = 1
      }

      // City markers + labels
      for (const c of cities) {
        const p = projection(c.coords)
        if (!p) continue
        // On the globe side, hide markers on the far hemisphere
        if (t < 0.5) {
          const r = projection.rotate()
          const cosc =
            Math.sin((-r[1] * Math.PI) / 180) * Math.sin((c.coords[1] * Math.PI) / 180) +
            Math.cos((-r[1] * Math.PI) / 180) *
              Math.cos((c.coords[1] * Math.PI) / 180) *
              Math.cos(((c.coords[0] + r[0]) * Math.PI) / 180)
          if (cosc < 0) continue
        }
        const isMain = c.kind !== 'hub'
        ctx.beginPath()
        ctx.arc(p[0], p[1], isMain ? 5 : 3, 0, Math.PI * 2)
        ctx.fillStyle = c.kind === 'dest' ? col.gold : c.kind === 'origin' ? col.mist200 : col.mist300
        ctx.fill()
        if (c.kind === 'dest') {
          ctx.beginPath()
          ctx.arc(p[0], p[1], 9, 0, Math.PI * 2)
          ctx.strokeStyle = col.gold
          ctx.globalAlpha = 0.5
          ctx.stroke()
          ctx.globalAlpha = 1
        }
        ctx.font = `${isMain ? '600 ' : ''}${isMain ? 13 : 11}px Inter, system-ui, sans-serif`
        ctx.fillStyle = isMain ? col.paper : col.mist300
        // Per-city label placement so nearby hubs (Doha/Dubai, Mumbai/Hyderabad) don't collide
        const place = {
          Doha: { align: 'right', dx: -8, dy: -4 },
          Dubai: { align: 'left', dx: 8, dy: 10 },
          Mumbai: { align: 'right', dx: -8, dy: 4 },
          'Addis Ababa': { align: 'left', dx: 7, dy: 12 },
        }[c.name] || { align: 'left', dx: isMain ? 11 : 7, dy: 4 }
        ctx.textAlign = place.align
        ctx.fillText(c.name, p[0] + place.dx, p[1] + place.dy)
      }
    }

    function tick() {
      dashOffset += 0.25
      draw(progress.get())
      raf = requestAnimationFrame(tick)
    }

    if (lite) {
      // Static final frame — no continuous animation
      draw(1)
      const unsub = progress.on('change', () => draw(1))
      return () => unsub()
    }
    raf = requestAnimationFrame(tick)
    const onResize = () => draw(progress.get())
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [land, progress, lite])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      role="img"
      aria-label="Map showing flight routes from Entebbe, Uganda to Hyderabad, India — one-stop via Addis Ababa, Doha, or Dubai, plus the Entebbe–Mumbai direct alternate."
    />
  )
}
