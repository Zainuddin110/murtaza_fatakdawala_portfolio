import { Fragment, useEffect, useRef, useState } from 'react'
import styles from './SplitText.module.css'

export default function SplitText({
  text,
  as: Tag = 'span',
  className = '',
  delay = 30,
  duration = 600,
  startDelay = 0,
  triggerOnce = true,
}) {
  const ref = useRef(null)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setPlay(true)
            if (triggerOnce) io.disconnect()
          } else if (!triggerOnce) {
            setPlay(false)
          }
        })
      },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [triggerOnce])

  const chars = [...String(text)]
  let charIndex = 0

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {chars.map((ch, i) => {
        if (ch === ' ') return <Fragment key={i}> </Fragment>
        const idx = charIndex++
        return (
          <span
            key={i}
            className={`${styles.char} ${play ? styles.in : ''}`}
            style={{
              transitionDelay: `${startDelay + idx * delay}ms`,
              transitionDuration: `${duration}ms`,
            }}
            aria-hidden="true"
          >
            {ch}
          </span>
        )
      })}
    </Tag>
  )
}
