import React from 'react'
import { BrowserRouter } from 'react-router-dom'
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
      <BrowserRouter>
        <Nav />

        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
