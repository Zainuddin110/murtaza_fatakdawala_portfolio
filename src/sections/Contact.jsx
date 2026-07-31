import ScrollReveal from '../components/reactbits/ScrollReveal.jsx'
import BlurText from '../components/reactbits/BlurText.jsx'
import TextScramble from '../components/reactbits/TextScramble.jsx'
import Magnet from '../components/reactbits/Magnet.jsx'
import { profile, offTheClock } from '../data/resume.js'
import { CarIcon } from '../components/Icons.jsx'
import section from './Section.module.css'
import styles from './Contact.module.css'
import { MailIcon, GithubIcon, LinkedinIcon, PhoneIcon, ArrowIcon } from '../components/Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className={`${section.section} ${styles.wrap}`}>
      <ScrollReveal>
        <div className={section.eyebrow}><TextScramble text="Get in touch" /></div>
        <h2 className={section.title}><BlurText text="Let's talk." delay={60} /></h2>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <p className={styles.lede}>
          Looking for a builder who's happy prototyping a CNN on Monday and shipping a React screen on Friday? That's me. Bonus points if the conversation involves cars.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={250}>
        <Magnet strength={0.15} radius={200}>
          <a className={styles.email} href={`mailto:${profile.email}`}>
            <span>{profile.email}</span>
            <ArrowIcon />
          </a>
        </Magnet>
      </ScrollReveal>

      <ScrollReveal delay={350}>
        <ul className={styles.links}>
          <li><Magnet><a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon /> {profile.githubHandle}</a></Magnet></li>
          <li><Magnet><a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> {profile.linkedinHandle}</a></Magnet></li>
          <li><Magnet><a href={profile.phoneHref}><PhoneIcon /> {profile.phone}</a></Magnet></li>
          <li><Magnet><a href={`mailto:${profile.email}`}><MailIcon /> Email</a></Magnet></li>
        </ul>
      </ScrollReveal>

      <ScrollReveal delay={450}>
        <div className={styles.offTheClock}>
          <div className={styles.offLabel}>Off the clock</div>
          <ul className={styles.offList}>
            {offTheClock.map((item) => (
              <li key={item} className={styles.offChip}>
                {item === 'Cars' && <CarIcon />}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Murtaza Fatakdawala
      </footer>
    </section>
  )
}
