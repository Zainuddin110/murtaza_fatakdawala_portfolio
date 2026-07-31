import { useEffect, useRef } from 'react'

export default function ClickSpark({
  children,
  color = '#7c9cff',
  count = 10,
  radius = 40,
  duration = 500,
}) {
  const layerRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    if (reduced || coarse) return

    const onClick = (e) => {
      const layer = layerRef.current
      if (!layer) return
      const rect = layer.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2
        const dx = Math.cos(angle) * radius
        const dy = Math.sin(angle) * radius
        const s = document.createElement('span')
        s.style.cssText = `
          position:absolute;left:${x}px;top:${y}px;width:6px;height:6px;
          border-radius:50%;background:${color};pointer-events:none;
          transform:translate(-50%,-50%);opacity:1;
          transition:transform ${duration}ms cubic-bezier(0.22,1,0.36,1), opacity ${duration}ms ease-out;
          will-change:transform,opacity;box-shadow:0 0 8px ${color};
        `
        layer.appendChild(s)
        requestAnimationFrame(() => {
          s.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0.3)`
          s.style.opacity = '0'
        })
        setTimeout(() => s.remove(), duration + 50)
      }
    }

    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [color, count, radius, duration])

  return (
    <>
      {children}
      <div
        ref={layerRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          overflow: 'hidden',
        }}
      />
    </>
  )
}
