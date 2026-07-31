import styles from './Aurora.module.css'

export default function Aurora({ className = '' }) {
  return (
    <div className={`${styles.aurora} ${className}`} aria-hidden="true">
      <div className={styles.blob} style={{ '--i': 0 }} />
      <div className={styles.blob} style={{ '--i': 1 }} />
      <div className={styles.blob} style={{ '--i': 2 }} />
      <div className={styles.grain} />
    </div>
  )
}
