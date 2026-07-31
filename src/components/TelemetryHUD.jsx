import { useEffect, useRef, useState } from 'react'
import styles from './TelemetryHUD.module.css'

const SECTIONS = [
  { id: 'top', gear: 'N' },
  { id: 'about', gear: '1' },
  { id: 'skills', gear: '2' },
  { id: 'experience', gear: '3' },
  { id: 'projects', gear: '4' },
  { id: 'education', gear: '5' },
  { id: 'contact', gear: '6' },
]

const MAX_SPEED = 220
const MAX_RPM = 9000

const fmt = (ms) => {
  const total = Math.floor(ms / 1000)
  const m = Math.floor(total / 60)
  const s = total % 60
  const cs = Math.floor((ms % 1000) / 10)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`
}

export default function TelemetryHUD() {
  const [gear, setGear] = useState('N')
  const [speed, setSpeed] = useState(0)
  const [rpm, setRpm] = useState(0)
  const [lap, setLap] = useState('00:00.00')
  const [collapsed, setCollapsed] = useState(false)
  const [visible, setVisible] = useState(false)

  const lastYRef = useRef(0)
  const lastTRef = useRef(0)
  const smoothSpeedRef = useRef(0)
  const startRef = useRef(0)
  const rafRef = useRef(0)
  const gearRef = useRef('N')

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    setVisible(true)
    startRef.current = performance.now()
    lastYRef.current = window.scrollY
    lastTRef.current = performance.now()

    const observers = []
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (!el) return
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              gearRef.current = s.gear
              setGear(s.gear)
            }
          })
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      )
      io.observe(el)
      observers.push(io)
    })

    const tick = () => {
      const now = performance.now()
      const dt = Math.max(16, now - lastTRef.current)
      const y = window.scrollY
      const dy = Math.abs(y - lastYRef.current)
      const instant = Math.min(MAX_SPEED, (dy / dt) * 1500)

      smoothSpeedRef.current = smoothSpeedRef.current * 0.82 + instant * 0.18
      smoothSpeedRef.current = smoothSpeedRef.current * 0.95

      const displaySpeed = Math.round(smoothSpeedRef.current)
      setSpeed(displaySpeed)

      const gearBoost = { N: 0.15, '1': 0.35, '2': 0.5, '3': 0.62, '4': 0.72, '5': 0.82, '6': 0.9 }[gearRef.current] || 0.3
      const rpmFromSpeed = (displaySpeed / MAX_SPEED) * MAX_RPM * 0.6
      const rpmFloor = gearBoost * MAX_RPM * 0.5
      setRpm(Math.round(Math.min(MAX_RPM, rpmFromSpeed + rpmFloor)))

      setLap(fmt(now - startRef.current))

      lastYRef.current = y
      lastTRef.current = now
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(rafRef.current)
      else {
        lastTRef.current = performance.now()
        rafRef.current = requestAnimationFrame(tick)
      }
    }
    document.addEventListener('visibilitychange', onVis)

    return () => {
      cancelAnimationFrame(rafRef.current)
      document.removeEventListener('visibilitychange', onVis)
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  if (!visible) return null

  const rpmPct = Math.min(100, (rpm / MAX_RPM) * 100)
  const redline = rpm > MAX_RPM * 0.88

  return (
    <div className={`${styles.hud} ${collapsed ? styles.collapsed : ''}`} aria-hidden="true">
      <button
        className={styles.toggle}
        onClick={() => setCollapsed((v) => !v)}
        aria-label={collapsed ? 'Show telemetry' : 'Hide telemetry'}
      >
        {collapsed ? '◂' : '▸'}
      </button>

      <div className={styles.full}>
        <div className={styles.rpmBar}>
          {Array.from({ length: 12 }).map((_, i) => {
            const on = (i + 1) / 12 <= rpmPct / 100
            const isRed = i >= 9
            return (
              <span
                key={i}
                className={`${styles.rpmSeg} ${on ? styles.rpmOn : ''} ${isRed ? styles.rpmRed : ''}`}
              />
            )
          })}
        </div>

        <div className={styles.grid}>
          <div className={styles.cell}>
            <div className={styles.label}>GEAR</div>
            <div className={`${styles.gearValue} ${redline ? styles.redline : ''}`}>{gear}</div>
          </div>
          <div className={styles.cell}>
            <div className={styles.label}>MPH</div>
            <div className={styles.value}>{String(speed).padStart(3, '0')}</div>
          </div>
          <div className={styles.cell}>
            <div className={styles.label}>RPM</div>
            <div className={styles.value}>{String(rpm).padStart(4, '0')}</div>
          </div>
          <div className={styles.cellWide}>
            <div className={styles.label}>LAP</div>
            <div className={styles.valueMono}>{lap}</div>
          </div>
        </div>
      </div>

      <div className={styles.mini}>
        <span className={styles.collapsedGear}>{gear}</span>
        <span className={styles.collapsedSpeed}>{speed} mph</span>
      </div>
    </div>
  )
}
