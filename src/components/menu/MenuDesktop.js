import { Link, animateScroll as scroll } from 'react-scroll'

import './MenuDesktop.css'

// import logo from './img/freelancer.jpg'
import mail from './img/mail-black.svg'
import github from './img/github-logo.svg'

import menuList from './menuList'

const scrollToTop = () => {
  scroll.scrollToTop()
}

function MenuDesktop() {
  return (
    <nav className='menu'>
      <div className='menu__logo'>
        {/* <h2 className='logo__title'>Demidov Dmitriy</h2> */}
        {/* <div className='logo__img'>
          <img src={logo} alt='freelancer' />
        </div> */}
        <div className='logo' onClick={scrollToTop}>
          <div className='logo'>
            <div className='logo'>
              <div className='logo'>
                <div className='logo'></div>
              </div>
            </div>
          </div>
        </div>
        {/* <span className='logo__subtitle'>React Developer</span> */}
      </div>
      <ul className='menu__list'>
        {menuList.map((item) => {
          return (
            <li className='menu__item' key={item.name}>
              <Link
                className='menu__link _flex'
                activeClass='active'
                to={item.to}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <span className='material-icons menu__icon'>{item.icon}</span>
                <span className='menu__text'>{item.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
      <div className='menu__contacts'>
        <div className='menu__contact'>
          <a
            className='contacts__link'
            href='mailto:demid088web@gmail.com'
            title='Send message...'
          >
            <img src={mail} alt='mail' />
          </a>
        </div>
        <div className='menu__contact'>
          <a
            className='contacts__link'
            href='https://github.com/demid088'
            title='GitHub portfolio'
            target='_blank'
            rel='external noopener noreferrer'
          >
            <img src={github} alt='github' />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default MenuDesktop
