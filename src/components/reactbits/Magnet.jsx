import { useRef } from 'react'
import styles from './Magnet.module.css'

export default function Magnet({ children, className = '', strength = 0.35, radius = 120 }) {
  const wrapRef = useRef(null)
  const targetRef = useRef(null)

  const onMove = (e) => {
    const wrap = wrapRef.current
    const target = targetRef.current
    if (!wrap || !target) return
    const r = wrap.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.hypot(dx, dy)
    if (dist > radius) {
      target.style.transform = 'translate3d(0, 0, 0)'
      return
    }
    target.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`
  }

  const onLeave = () => {
    const target = targetRef.current
    if (target) target.style.transform = 'translate3d(0, 0, 0)'
  }

  return (
    <span
      ref={wrapRef}
      className={`${styles.wrap} ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span ref={targetRef} className={styles.target}>{children}</span>
    </span>
  )
}
