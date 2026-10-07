import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Skills from './components/Skills.jsx'

function App() {
  return (
    <div>
      <Navigation/>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App