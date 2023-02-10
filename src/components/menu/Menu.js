import { Link, animateScroll as scroll } from 'react-scroll'

import './Menu.css'

import logo from './img/freelancer.jpg'

// const menu = []

const scrollToTop = () => {
  scroll.scrollToTop()
}

function Menu() {
  return (
    <nav className='menu'>
      <div onClick={scrollToTop} className='menu__logo'>
        {/* <h2 className='logo__title'>Demidov Dmitriy</h2> */}
        <div className='logo__img'>
          <img src={logo} alt='freelancer' />
        </div>
        {/* <span className='logo__subtitle'>React Developer</span> */}
      </div>
      <ul className='menu__list'>
        <li className='menu__item'>
          <Link
            className='menu__link _flex'
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <span className='material-icons menu__icon'>home</span>
            <span className='menu__text'>Home</span>
          </Link>
        </li>
        {/* <li className='menu__item'>
          <Link
            className='menu__link _flex'
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <span className='material-icons menu__icon'>person</span>
            <span className='menu__text'>About</span>
          </Link>
        </li> */}
        <li className='menu__item'>
          <Link
            className='menu__link _flex'
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <span className='material-icons menu__icon'>space_dashboard</span>
            <span className='menu__text'>Projects</span>
          </Link>
        </li>
        <li className='menu__item'>
          <Link
            className='menu__link _flex'
            activeClass='active'
            to='skills'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <span className='material-icons menu__icon'>bar_chart</span>
            <span className='menu__text'>Skills</span>
          </Link>
        </li>
        {/* <li className='menu__item'>
          <a href='#testimonials' className='menu__link _flex'>
            <span className='material-icons menu__icon'>interpreter_mode</span>
            <span className='menu__text'>Testimonials</span>
          </a>
        </li> */}
        {/* <li className='menu__item'>
          <a href='#blog' className='menu__link _flex'>
            <span className='material-icons menu__icon'>edit</span>
            <span className='menu__text'>Blog</span>
          </a>
        </li> */}
        <li className='menu__item'>
          <Link
            className='menu__link _flex'
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <span className='material-icons menu__icon'>email</span>
            <span className='menu__text'>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
