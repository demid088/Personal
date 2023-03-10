import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import Menu from './components/menu/Menu'
import Home from './components/home/Home';
// import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

ReactDOM.render(
  <StrictMode>
    <Menu />
    <main>
      <Home />
      {/* <About /> */}
      <Projects />
      <Skills />
      <Contact />
    </main>
  </StrictMode>,
  document.getElementById('root')
)
