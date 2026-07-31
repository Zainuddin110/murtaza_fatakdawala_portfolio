import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from './Icons.jsx'
import styles from './ThemeToggle.module.css'

const KEY = 'mf-theme'

function getInitial() {
  if (typeof window === 'undefined') return 'light'
  const saved = localStorage.getItem(KEY)
  if (saved === 'light' || saved === 'dark') return saved
  return 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitial)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(KEY, theme)
  }, [theme])

  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      className={styles.toggle}
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      <span className={`${styles.icon} ${theme === 'dark' ? styles.iconIn : styles.iconOut}`}>
        <SunIcon />
      </span>
      <span className={`${styles.icon} ${theme === 'light' ? styles.iconIn : styles.iconOut}`}>
        <MoonIcon />
      </span>
    </button>
  )
}
