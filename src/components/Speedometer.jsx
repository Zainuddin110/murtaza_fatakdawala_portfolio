import { useEffect, useRef, useState } from 'react'
import styles from './Speedometer.module.css'

/**
 * Semicircular gauge with an animated needle. `progress` is 0..1.
 * Sweeps in on scroll into view.
 */
export default function Speedometer({ progress = 0.7, children }) {
  const ref = useRef(null)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) { setPlay(true); return }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setPlay(true)
          io.disconnect()
        }
      })
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const angle = -90 + Math.min(1, Math.max(0, progress)) * 180

  return (
    <div ref={ref} className={styles.gauge}>
      <svg viewBox="0 0 100 60" className={styles.svg} aria-hidden="true">
        <defs>
          <linearGradient id={`gauge-track-${progress}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--accent)" />
            <stop offset="1" stopColor="var(--accent-2)" />
          </linearGradient>
        </defs>

        <path
          d="M 8 52 A 42 42 0 0 1 92 52"
          fill="none"
          stroke="var(--divider)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M 8 52 A 42 42 0 0 1 92 52"
          fill="none"
          stroke={`url(#gauge-track-${progress})`}
          strokeWidth="4"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset={play ? (100 - progress * 100) : 100}
          className={styles.track}
        />

        {[0, 0.25, 0.5, 0.75, 1].map((t) => {
          const a = (-180 + t * 180) * (Math.PI / 180)
          const x1 = 50 + Math.cos(a) * 36
          const y1 = 52 + Math.sin(a) * 36
          const x2 = 50 + Math.cos(a) * 42
          const y2 = 52 + Math.sin(a) * 42
          return (
            <line
              key={t}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="var(--muted)"
              strokeWidth="1"
              opacity="0.5"
            />
          )
        })}

        <g style={{ transform: `rotate(${play ? angle : -90}deg)`, transformOrigin: '50px 52px' }} className={styles.needleGroup}>
          <line
            x1="50" y1="52" x2="50" y2="16"
            stroke="var(--text)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="50" cy="52" r="4" fill="var(--accent)" />
          <circle cx="50" cy="52" r="1.5" fill="var(--bg)" />
        </g>
      </svg>
      <div className={styles.readout}>{children}</div>
    </div>
  )
}
