import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './footer.jsx'
import HeroSection from './hero.jsx'
import Services from './services.jsx'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <HeroSection />
      <Footer />
    </>
  )
}

export default App
