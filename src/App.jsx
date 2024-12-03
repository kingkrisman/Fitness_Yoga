import React from 'react'
import "./App.css"
import Hero from './Hero'
import Services from './Services'
import Preview from './Preview'
import TeamSection from './TeamSection'
import CtaSection from './CtaSection'
import Footer from './Footer'
const App = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <Preview/>
      <TeamSection/>
      <CtaSection/>
      <Footer/>
    </div>
  )
}

export default App
