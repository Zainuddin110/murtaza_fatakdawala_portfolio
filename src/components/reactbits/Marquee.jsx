import styles from './Marquee.module.css'

export default function Marquee({ items, speed = 40, reverse = false, className = '' }) {
  const loop = [...items, ...items]
  return (
    <div className={`${styles.wrap} ${className}`}>
      <div
        className={`${styles.track} ${reverse ? styles.reverse : ''}`}
        style={{ '--duration': `${speed}s` }}
      >
        {loop.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  )
}
