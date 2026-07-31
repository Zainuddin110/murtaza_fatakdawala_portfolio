import { Fragment, useEffect, useRef, useState } from 'react'
import styles from './BlurText.module.css'

export default function BlurText({
  text,
  as: Tag = 'span',
  className = '',
  delay = 60,
  startDelay = 0,
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
            io.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const words = String(text).split(' ')

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span
            className={`${styles.word} ${play ? styles.in : ''}`}
            style={{ transitionDelay: `${startDelay + i * delay}ms` }}
            aria-hidden="true"
          >
            {w}
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </Tag>
  )
}
