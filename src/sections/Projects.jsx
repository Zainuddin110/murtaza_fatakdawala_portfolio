import ScrollReveal from '../components/reactbits/ScrollReveal.jsx'
import BlurText from '../components/reactbits/BlurText.jsx'
import TextScramble from '../components/reactbits/TextScramble.jsx'
import TiltedCard from '../components/reactbits/TiltedCard.jsx'
import { projects } from '../data/resume.js'
import section from './Section.module.css'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={section.section}>
      <ScrollReveal>
        <div className={section.eyebrow}><TextScramble text="Selected work" /></div>
        <h2 className={section.title}><BlurText text="Projects" delay={50} /></h2>
        <p className={section.subtitle}>
          A mix of computer-vision, mobile, hardware, and full-stack builds, including a couple that involved wiring up ML models to real-world hardware.
        </p>
      </ScrollReveal>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <ScrollReveal key={p.name} delay={i * 90} className={styles.wrap}>
            <TiltedCard className={styles.tilt} max={8}>
              <article className={styles.card}>
                <div className={styles.border} aria-hidden="true" />
                <div className={styles.inner}>
                  <h3 className={styles.name}>{p.name}</h3>
                  <ul className={styles.stack}>
                    {p.stack.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                  <ul className={styles.bullets}>
                    {p.bullets.map((b, k) => <li key={k}>{b}</li>)}
                  </ul>
                </div>
              </article>
            </TiltedCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
