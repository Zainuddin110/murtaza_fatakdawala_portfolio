import { useEffect, useRef } from 'react'
import styles from './ScrollProgress.module.css'

export default function ScrollProgress() {
  const barRef = useRef(null)
  const carRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    const car = carRef.current
    if (!bar || !car) return
    let raf = 0

    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const p = max > 0 ? window.scrollY / max : 0
      bar.style.transform = `scaleX(${p})`
      car.style.left = `${p * 100}%`
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div ref={barRef} className={styles.bar} />
      <div ref={carRef} className={styles.car}>
        <svg viewBox="0 0 44 20" width="44" height="20">
          <path
            d="M2 14 L2 12 Q2 10 4 10 L10 10 L14 5 Q15 4 17 4 L29 4 Q31 4 32 5 L36 10 L40 10 Q42 10 42 12 L42 14 L38 14 Q37 16 35 16 Q33 16 32 14 L12 14 Q11 16 9 16 Q7 16 6 14 L2 14 Z"
            fill="var(--accent)"
          />
          <path d="M15 10 L18 6 L28 6 L31 10 Z" fill="var(--accent-2)" opacity="0.7" />
          <circle cx="9" cy="15" r="2" fill="#0a0a0f" />
          <circle cx="35" cy="15" r="2" fill="#0a0a0f" />
          <circle cx="41" cy="12" r="0.8" fill="#fff8cc" />
        </svg>
      </div>
    </div>
  )
}
