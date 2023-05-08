import { useState } from 'react';
import { Link } from 'react-scroll'
import ButtonBurger from './ButtonBurger';

import './MenuMobile.css'

// import logo from './img/freelancer.jpg'

import menuList from './menuList'

function MenuMobile() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='mobile-menu'>
      <ButtonBurger toggle={toggleMenu} isOpen={isMenuOpen} />
      <div className={'mobile-menu__content' + (isMenuOpen ? ' active' : '')}>
        <ul
          className={'mobile-menu__list' + (isMenuOpen ? ' active' : '')}
          id='menu__list'
        >
          {menuList.map((item) => {
            return (
              <li className='mobile-menu__item' key={item.name}>
                <Link
                  className='mobile-menu__link _flex'
                  onClick={toggleMenu}
                  activeClass='active'
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <span className='material-icons mobile-menu__icon'>
                    {item.icon}
                  </span>
                  <span className='mobile-menu__text'>{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        <div
          className={'mobile-menu__shadow' + (isMenuOpen ? ' active' : '')}
          onClick={toggleMenu}
        ></div>
      </div>
    </nav>
  )
}

export default MenuMobile
