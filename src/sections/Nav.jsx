import { useEffect, useState } from 'react'
import ThemeToggle from '../components/ThemeToggle.jsx'
import { CarIcon } from '../components/Icons.jsx'
import styles from './Nav.module.css'

const LINKS = [
  { href: '#about', id: 'about', label: 'About' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#education', id: 'education', label: 'Education' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = []
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id)
      if (!el) return
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(l.id)
          })
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      )
      io.observe(el)
      observers.push(io)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#top" className={styles.brand} onClick={() => setOpen(false)}>
        <span className={styles.brandCar} aria-hidden="true"><CarIcon /></span>
        Murtaza
      </a>

      <div className={styles.right}>
        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={active === l.id ? styles.active : ''}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        <button
          className={styles.toggle}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
