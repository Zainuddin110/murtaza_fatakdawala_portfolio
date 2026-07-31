import { useEffect, useRef, useState } from 'react'
import styles from './ScrollReveal.module.css'

export default function ScrollReveal({
  children,
  as: Tag = 'div',
  delay = 0,
  y = 24,
  className = '',
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
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${play ? styles.in : ''} ${className}`}
      style={{ '--y': `${y}px`, '--delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
