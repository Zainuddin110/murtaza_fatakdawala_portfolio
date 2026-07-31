import { useEffect, useRef, useState } from 'react'
import BlurText from '../components/reactbits/BlurText.jsx'
import TextScramble from '../components/reactbits/TextScramble.jsx'
import { experience } from '../data/resume.js'
import section from './Section.module.css'
import styles from './Experience.module.css'

function TimelineItem({ job, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      })
    }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <li
      ref={ref}
      className={`${styles.item} ${visible ? styles.itemIn : ''}`}
      style={{ '--i': index }}
    >
      <div className={`${styles.dot} ${job.current ? styles.dotCurrent : ''}`} />
      <div className={styles.rail} aria-hidden="true" />
      <div className={styles.card}>
        <div className={styles.head}>
          <h3 className={styles.company}>
            {job.company}
            {job.current && <span className={styles.badge}>Current</span>}
          </h3>
          <span className={styles.dates}>{job.dates}</span>
        </div>
        <div className={styles.role}>{job.role}</div>
        <ul className={styles.bullets}>
          {job.bullets.map((b, k) => <li key={k}>{b}</li>)}
        </ul>
      </div>
    </li>
  )
}

export default function Experience() {
  return (
    <section id="experience" className={section.section}>
      <div>
        <div className={section.eyebrow}><TextScramble text="Where I've worked" /></div>
        <h2 className={section.title}><BlurText text="Experience" delay={50} /></h2>
      </div>

      <ol className={styles.timeline}>
        {experience.map((job, i) => (
          <TimelineItem key={i} job={job} index={i} />
        ))}
      </ol>
    </section>
  )
}
