import { useEffect } from 'react'
import { About } from './components/About'
import { Architecture } from './components/Architecture'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { warnIfPlaceholders } from './data/profile'

export default function App() {
  useEffect(() => {
    warnIfPlaceholders()
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Architecture />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
