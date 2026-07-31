import ScrollReveal from '../components/reactbits/ScrollReveal.jsx'
import BlurText from '../components/reactbits/BlurText.jsx'
import TextScramble from '../components/reactbits/TextScramble.jsx'
import { education } from '../data/resume.js'
import section from './Section.module.css'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education" className={section.section}>
      <ScrollReveal>
        <div className={section.eyebrow}><TextScramble text="Studies" /></div>
        <h2 className={section.title}><BlurText text="Education" delay={50} /></h2>
      </ScrollReveal>

      <div className={styles.grid}>
        {education.map((e, i) => (
          <ScrollReveal key={i} delay={i * 120}>
            <article className={styles.card}>
              <div className={styles.date}>{e.date}</div>
              <h3 className={styles.school}>{e.school}</h3>
              <div className={styles.degree}>{e.degree}</div>
              <div className={styles.detail}>{e.detail}</div>
              {e.coursework && (
                <div className={styles.coursework}>
                  <div className={styles.courseLabel}>Relevant Coursework</div>
                  <div>{e.coursework}</div>
                </div>
              )}
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
