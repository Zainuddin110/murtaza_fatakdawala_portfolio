import ScrollReveal from '../components/reactbits/ScrollReveal.jsx'
import CountUp from '../components/reactbits/CountUp.jsx'
import { stats } from '../data/resume.js'
import styles from './Stats.module.css'

export default function Stats() {
  return (
    <section className={styles.wrap} aria-label="Key numbers">
      <div className={styles.grid}>
        {stats.map((s, i) => (
          <ScrollReveal key={i} delay={i * 100} className={styles.item}>
            <div className={styles.value}>
              <CountUp end={s.value} suffix={s.suffix} duration={1800} />
            </div>
            <div className={styles.label}>{s.label}</div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
