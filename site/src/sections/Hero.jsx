import { motion } from 'framer-motion'
import { hero, meta } from '../data/content.js'
import { EASE_OUT, useLite, Stagger, StaggerItem } from '../lib/motion.jsx'

export default function Hero() {
  const { lite } = useLite()
  const enter = (delay) =>
    lite
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE_OUT },
        }
  return (
    <section id="top" className="relative bg-pine-950 text-paper overflow-hidden">
      {/* Deck's circular brand geometry */}
      <div aria-hidden="true" className="absolute -right-48 -top-56 w-[42rem] h-[42rem] rounded-full bg-pine-900 opacity-70" />
      <div aria-hidden="true" className="absolute right-[-6rem] bottom-[-16rem] w-[30rem] h-[30rem] rounded-full bg-pine-800 opacity-40" />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-16 sm:pb-24 min-h-[92svh] flex flex-col justify-center">
        <motion.h1
          className="font-display font-bold leading-[1.04] tracking-tight max-w-5xl"
          style={{ fontSize: 'var(--step-4)' }}
          {...enter(0.1)}
        >
          {hero.title}
        </motion.h1>

        <Stagger className="mt-12 sm:mt-16 grid sm:grid-cols-3 gap-8 sm:gap-6 max-w-5xl" gap={0.1}>
          {hero.parts.map((p) => (
            <StaggerItem key={p.n}>
              <p className="font-display text-gold font-semibold text-2xl">{p.n}</p>
              <h2 className="font-semibold text-paper mt-2" style={{ fontSize: 'var(--step-1)' }}>
                {p.title}
              </h2>
              <p className="text-mist-200 text-sm leading-relaxed mt-2">{p.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <motion.p className="mt-14 sm:mt-20 text-mist-300 text-sm tracking-wide" {...enter(0.5)}>
          {meta.dateline}
        </motion.p>
      </div>
    </section>
  )
}
