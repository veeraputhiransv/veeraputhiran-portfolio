import { useCallback, useEffect, useState } from 'react'
import { About } from './components/About'
import { Architecture } from './components/Architecture'
import { Capabilities } from './components/Capabilities'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ProfessionalProducts } from './components/ProfessionalProducts'
import { Projects } from './components/Projects'
import { RecruiterAssistant } from './components/RecruiterAssistant'
import { Snapshot } from './components/Snapshot'
import { warnIfPlaceholders } from './data/profile'

export default function App() {
  const [assistantOpen, setAssistantOpen] = useState(false)
  const openAssistant = useCallback(() => setAssistantOpen(true), [])

  useEffect(() => {
    warnIfPlaceholders()
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar onAskVeera={openAssistant} />
      <main id="main">
        <Hero onAskVeera={openAssistant} />
        <Snapshot />
        <Projects onAskVeera={openAssistant} />
        <ProfessionalProducts />
        <Capabilities />
        <Architecture />
        <Experience />
        <About />
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
