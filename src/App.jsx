import React from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <div className="App bg-black  min-h-screen ">
      <Nav/>
      <HeroSection/>
      <Services/>
      <Projects/>
      <Footer/>
    </div>
    </>
  )
}

export default App