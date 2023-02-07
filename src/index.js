import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import Menu from './components/menu/Menu'
import Home from './components/home/Home';
// import About from './components/about/About';
import Projects from './components/projects/Projects';

ReactDOM.render(
  <StrictMode>
    <Menu />
    <main>
      <Home />
      {/* <About /> */}
      <Projects />
    </main>
  </StrictMode>,
  document.getElementById('root')
)
