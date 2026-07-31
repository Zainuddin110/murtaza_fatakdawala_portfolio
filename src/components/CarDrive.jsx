import styles from './CarDrive.module.css'

export default function CarDrive() {
  return (
    <div className={styles.road} aria-hidden="true">
      <div className={styles.laneLine} />
      <div className={styles.car}>
        <svg viewBox="0 0 96 40" width="96" height="40">
          <defs>
            <linearGradient id="carBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#a8b8ff" />
              <stop offset="1" stopColor="#7c9cff" />
            </linearGradient>
            <linearGradient id="carGlass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#c8d4ff" stopOpacity="0.9" />
              <stop offset="1" stopColor="#7c9cff" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {/* headlight beam */}
          <path
            d="M84 22 L96 14 L96 30 L84 24 Z"
            fill="rgba(255, 240, 180, 0.35)"
            className={styles.beam}
          />
          {/* body */}
          <path
            d="M6 30 L6 26 Q6 22 10 22 L22 22 L30 12 Q32 10 36 10 L62 10 Q66 10 68 12 L78 22 L86 22 Q90 22 90 26 L90 30 L82 30 Q80 34 76 34 Q72 34 70 30 L26 30 Q24 34 20 34 Q16 34 14 30 L6 30 Z"
            fill="url(#carBody)"
            stroke="rgba(0, 0, 0, 0.15)"
            strokeWidth="0.8"
          />
          {/* windshield */}
          <path
            d="M32 22 L38 14 L60 14 L66 22 Z"
            fill="url(#carGlass)"
          />
          {/* windshield split */}
          <path d="M49 14 L49 22" stroke="rgba(0, 0, 0, 0.25)" strokeWidth="0.8" />
          {/* headlight */}
          <circle cx="84" cy="24" r="1.8" fill="#fff8cc" />
          {/* wheels */}
          <g>
            <circle cx="20" cy="32" r="5" fill="#0a0a0f" />
            <circle cx="20" cy="32" r="2.2" fill="#3a3a4a" className={styles.wheel} />
          </g>
          <g>
            <circle cx="76" cy="32" r="5" fill="#0a0a0f" />
            <circle cx="76" cy="32" r="2.2" fill="#3a3a4a" className={styles.wheel} />
          </g>
        </svg>
      </div>
    </div>
  )
}
