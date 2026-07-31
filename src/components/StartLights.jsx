import { useEffect, useState } from 'react'
import styles from './StartLights.module.css'

const KEY = 'mf-intro-seen'

export default function StartLights() {
  const [phase, setPhase] = useState('checking')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const skipParam = new URLSearchParams(window.location.search).has('nointro')
    const seen = sessionStorage.getItem(KEY) === '1'

    if (reduced || skipParam || seen) {
      setPhase('done')
      return
    }

    sessionStorage.setItem(KEY, '1')
    setPhase('lighting')

    document.body.style.overflow = 'hidden'

    const t1 = setTimeout(() => setPhase('go'), 1500)
    const t2 = setTimeout(() => setPhase('fading'), 1900)
    const t3 = setTimeout(() => {
      setPhase('done')
      document.body.style.overflow = ''
    }, 2400)

    const skip = () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3)
      setPhase('done')
      document.body.style.overflow = ''
    }
    window.addEventListener('keydown', skip, { once: true })
    window.addEventListener('click', skip, { once: true })

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3)
      window.removeEventListener('keydown', skip)
      window.removeEventListener('click', skip)
      document.body.style.overflow = ''
    }
  }, [])

  if (phase === 'done' || phase === 'checking') return null

  const off = phase === 'go' || phase === 'fading'

  return (
    <div className={`${styles.overlay} ${phase === 'fading' ? styles.fadeOut : ''}`}>
      <div className={styles.gantry}>
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className={styles.column}>
            <div
              className={`${styles.light} ${off ? styles.off : styles.lightOn}`}
              style={{ animationDelay: `${i * 250}ms` }}
            />
            <div
              className={`${styles.light} ${off ? styles.off : styles.lightOn}`}
              style={{ animationDelay: `${i * 250}ms` }}
            />
          </div>
        ))}
      </div>
      <div className={styles.hint}>Click or press any key to skip</div>
    </div>
  )
}
