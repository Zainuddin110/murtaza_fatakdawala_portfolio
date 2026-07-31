# Murtaza Fatakdawala — Portfolio

Personal portfolio site for Murtaza Fatakdawala, a software engineer with an AI/ML focus (MSc Queen Mary, currently contracting at Mercor and CoSwipe).

Built with **React + Vite**. Animations are a set of React Bits-style components (Aurora, SplitText, BlurText, TiltedCard, Magnet, CountUp, ScrollReveal, ClickSpark, CursorGlow, ScrollProgress, Marquee, FloatingOrbs, TextScramble, ShinyText) that live in `src/components/reactbits/` and can be tweaked freely. Ships light + dark themes with a persisted toggle in the nav.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Structure

- `src/data/resume.js` — single source of truth for all resume content (edit copy here)
- `src/sections/` — one component per page section (Hero, About, Stats, Skills, Experience, Projects, Education, Contact, Nav)
- `src/components/reactbits/` — reusable animation primitives
- `public/profile.jpg` — profile photo shown in the hero
- `public/Murtaza_Fatakdawala_resume.pdf` — the resume file linked from the Download Resume button
