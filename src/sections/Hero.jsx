import Aurora from '../components/reactbits/Aurora.jsx'
import BlurText from '../components/reactbits/BlurText.jsx'
import Magnet from '../components/reactbits/Magnet.jsx'
import FloatingOrbs from '../components/reactbits/FloatingOrbs.jsx'
import CarDrive from '../components/CarDrive.jsx'
import { profile } from '../data/resume.js'
import { MailIcon, GithubIcon, LinkedinIcon, PhoneIcon, DownloadIcon, CarIcon } from '../components/Icons.jsx'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <header id="top" className={styles.hero}>
      <Aurora />
      <FloatingOrbs count={10} />

      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for opportunities
          </div>

          <h1 className={styles.name}>
            <span className={styles.namePart} data-text="Murtaza">Murtaza</span>
            <span className={styles.namePart} data-text="Fatakdawala">Fatakdawala</span>
          </h1>

          <BlurText
            as="p"
            text={profile.tagline}
            className={styles.tag}
            delay={40}
            startDelay={400}
          />

          <div className={styles.actions}>
            <Magnet>
              <a className={styles.btn} href={profile.resumeHref} download>
                <span className={styles.btnCar} aria-hidden="true"><CarIcon /></span>
                <span>Download Resume</span>
                <DownloadIcon />
              </a>
            </Magnet>

            <ul className={styles.socials} aria-label="Contact links">
              <li><Magnet><a aria-label="Email" href={`mailto:${profile.email}`}><MailIcon /></a></Magnet></li>
              <li><Magnet><a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer"><GithubIcon /></a></Magnet></li>
              <li><Magnet><a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /></a></Magnet></li>
              <li><Magnet><a aria-label="Phone" href={profile.phoneHref}><PhoneIcon /></a></Magnet></li>
            </ul>
          </div>
        </div>

        <div className={styles.photo}>
          <div className={styles.photoInner}>
            <img
              src="/profile.jpg"
              alt={profile.name}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.parentElement?.classList.add(styles.empty)
              }}
            />
            <div className={styles.photoFallback} aria-hidden="true">
              <span>MF</span>
            </div>
            <div className={styles.photoRing} aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>

      <CarDrive />
    </header>
  )
}
