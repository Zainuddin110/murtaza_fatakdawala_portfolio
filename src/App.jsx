import ClickSpark from './components/reactbits/ClickSpark.jsx'
import CursorGlow from './components/reactbits/CursorGlow.jsx'
import ScrollProgress from './components/reactbits/ScrollProgress.jsx'
import Nav from './sections/Nav.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Stats from './sections/Stats.jsx'
import Skills from './sections/Skills.jsx'
import Experience from './sections/Experience.jsx'
import Projects from './sections/Projects.jsx'
import Education from './sections/Education.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <ClickSpark>
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </ClickSpark>
  )
}
