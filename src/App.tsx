import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Architecture } from './components/Architecture'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { RecruiterAssistant } from './components/RecruiterAssistant'
import { Skills } from './components/Skills'
import { warnIfPlaceholders } from './data/profile'

export default function App() {
  const [assistantOpen, setAssistantOpen] = useState(false)

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
        <Hero onAskVeera={() => setAssistantOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Architecture />
        <Contact />
      </main>
      <Footer />
      <RecruiterAssistant
        open={assistantOpen}
        onClose={() => setAssistantOpen(false)}
      />
    </>
  )
}
