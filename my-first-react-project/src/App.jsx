import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './footer.jsx'
import HeroSection from './hero.jsx'
import Services from './services.jsx'
import Projects from './projects.jsx'
import Contact from './contact.jsx'
import Interests from './interests.jsx'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <Interests />
      {/* <Services /> */}
      <Projects />
      {/* <HeroSection /> */}
      <Contact />

      <Footer />
    </>
  )
}

export default App
