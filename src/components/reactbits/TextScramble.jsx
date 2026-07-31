import { useEffect, useRef, useState } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#________'

export default function TextScramble({
  text,
  as: Tag = 'span',
  className = '',
  speed = 40,
}) {
  const ref = useRef(null)
  const [out, setOut] = useState(text)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) { setOut(text); return }

    let played = false
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !played) {
          played = true
          scramble()
          io.disconnect()
        }
      })
    }, { threshold: 0.3 })
    io.observe(el)

    let raf = 0
    let queue = []
    let frame = 0

    const rand = (n) => Math.floor(Math.random() * n)

    const scramble = () => {
      const target = text
      queue = []
      for (let i = 0; i < target.length; i++) {
        const from = out[i] || ''
        const to = target[i]
        const start = rand(20)
        const end = start + rand(30) + 10
        queue.push({ from, to, start, end, char: '' })
      }
      frame = 0
      cancelAnimationFrame(raf)
      update()
    }

    const update = () => {
      let complete = 0
      let s = ''
      for (let i = 0; i < queue.length; i++) {
        const q = queue[i]
        if (frame >= q.end) {
          complete++
          s += q.to
        } else if (frame >= q.start) {
          if (!q.char || Math.random() < 0.28) {
            q.char = CHARS[rand(CHARS.length)]
          }
          s += q.char
        } else {
          s += q.from
        }
      }
      setOut(s)
      if (complete === queue.length) return
      frame++
      raf = requestAnimationFrame(update)
    }

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [text])

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{out}</span>
    </Tag>
  )
}
