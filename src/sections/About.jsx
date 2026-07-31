import ScrollReveal from '../components/reactbits/ScrollReveal.jsx'
import BlurText from '../components/reactbits/BlurText.jsx'
import TextScramble from '../components/reactbits/TextScramble.jsx'
import { profile } from '../data/resume.js'
import section from './Section.module.css'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={section.section}>
      <ScrollReveal>
        <div className={section.eyebrow}>
          <TextScramble text="About" />
        </div>
        <h2 className={section.title}>
          <BlurText text="Building things that ship." delay={45} />
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <p className={styles.body}>
          <BlurText text={profile.bio} delay={12} startDelay={100} />
        </p>
      </ScrollReveal>
    </section>
  )
}
