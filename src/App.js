import React from 'react'
import {
  Nav,
  Home,
  Skills,
  Projects,
  About,
  Contact,
  Footer,
} from './components/index'
import './App.scss'

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
