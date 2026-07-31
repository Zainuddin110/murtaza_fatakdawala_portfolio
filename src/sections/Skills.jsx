import ScrollReveal from '../components/reactbits/ScrollReveal.jsx'
import BlurText from '../components/reactbits/BlurText.jsx'
import TextScramble from '../components/reactbits/TextScramble.jsx'
import Marquee from '../components/reactbits/Marquee.jsx'
import { skills } from '../data/resume.js'
import section from './Section.module.css'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className={section.section}>
      <ScrollReveal>
        <div className={section.eyebrow}><TextScramble text="Toolbelt" /></div>
        <h2 className={section.title}><BlurText text="Skills" delay={50} /></h2>
        <p className={section.subtitle}>Languages I reach for and technologies I've shipped with.</p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Languages</h3>
          <ul className={styles.chips}>
            {skills.Languages.map((item, i) => (
              <li key={item} className={styles.chip} style={{ '--i': i }}>{item}</li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Technologies</h3>
          <Marquee items={skills.Technologies} speed={30} />
        </div>
        <div className={styles.group} style={{ marginTop: 12 }}>
          <Marquee items={[...skills.Technologies].reverse()} speed={38} reverse />
        </div>
      </ScrollReveal>
    </section>
  )
}
