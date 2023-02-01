import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import Menu from './components/menu/Menu'
import Home from './components/home/Home';
import About from './components/about/About';

ReactDOM.render(
  <StrictMode>
    <Menu />
    <main>
      <Home />
      <About />
    </main>
  </StrictMode>,
  document.getElementById('root')
)
