import styles from './FloatingOrbs.module.css'

export default function FloatingOrbs({ count = 6 }) {
  return (
    <div className={styles.wrap} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={styles.orb}
          style={{
            '--x': `${(i * 137) % 100}%`,
            '--y': `${(i * 53) % 100}%`,
            '--d': `${8 + (i % 5) * 3}s`,
            '--s': `${6 + (i * 7) % 16}px`,
            '--i': i,
          }}
        />
      ))}
    </div>
  )
}
