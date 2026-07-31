import { useRef } from 'react'
import styles from './TiltedCard.module.css'

export default function TiltedCard({ children, className = '', max = 10 }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const rx = (0.5 - py) * max * 2
    const ry = (px - 0.5) * max * 2
    el.style.setProperty('--rx', `${rx}deg`)
    el.style.setProperty('--ry', `${ry}deg`)
    el.style.setProperty('--gx', `${px * 100}%`)
    el.style.setProperty('--gy', `${py * 100}%`)
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={ref}
      className={`${styles.tilt} ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className={styles.inner}>
        {children}
        <div className={styles.glare} aria-hidden="true" />
      </div>
    </div>
  )
}
