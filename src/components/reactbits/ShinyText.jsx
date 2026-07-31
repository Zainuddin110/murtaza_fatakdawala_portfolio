import styles from './ShinyText.module.css'

export default function ShinyText({
  text,
  as: Tag = 'span',
  className = '',
  speed = 4,
}) {
  return (
    <Tag
      className={`${styles.shiny} ${className}`}
      style={{ '--shine-speed': `${speed}s` }}
    >
      {text}
    </Tag>
  )
}
