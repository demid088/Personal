import { Link, animateScroll as scroll } from 'react-scroll'

import './Menu.css'

// import logo from './img/freelancer.jpg'

import menuList from './menuList'

// анимация на логотипе - движение за курсором
// https://ru.stackoverflow.com/questions/1413185/react-%D0%94%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-svg-%D0%B7%D0%B0-%D0%BA%D1%83%D1%80%D1%81%D0%BE%D1%80%D0%BE%D0%BC
// https://atuin.ru/blog/parallaks-effekt-pri-dvizhenii-myshi/

const scrollToTop = () => {
  scroll.scrollToTop()
}

function Menu() {
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
        {
          menuList.map(item => {
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
          })
        }
      </ul>
    </nav>
  )
}

export default Menu
