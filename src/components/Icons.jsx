const s = { width: '1em', height: '1em', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const MailIcon = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 7 9-7" />
  </svg>
)

export const GithubIcon = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.1.63-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" fill="currentColor" stroke="none" />
  </svg>
)

export const LinkedinIcon = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 13v4" />
  </svg>
)

export const PhoneIcon = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
)

export const DownloadIcon = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
    <path d="M5 21h14" />
  </svg>
)

export const ArrowIcon = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const CarIcon = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <path d="M4 14h16v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z" />
    <path d="M5.5 14 7 8.5A2 2 0 0 1 8.9 7h6.2A2 2 0 0 1 17 8.5L18.5 14" />
    <circle cx="7.5" cy="16.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="16.5" cy="16.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const SunIcon = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
  </svg>
)

export const MoonIcon = (p) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <path d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10Z" />
  </svg>
)
