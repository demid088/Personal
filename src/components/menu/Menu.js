import "./Menu.css"

import logo from './img/freelancer.jpg'

function Menu() {
  return (
    <nav className='menu'>
      <a href='#home' className='menu__logo'>
        {/* <h2 className='logo__title'>Demidov Dmitriy</h2> */}
        <div className='logo__img'>
          <img src={logo} alt="freelancer" />
        </div>
        {/* <span className='logo__subtitle'>React Developer</span> */}
      </a>
      <ul className='menu__list'>
        <li className='menu__item'>
          <a href='#home' className='menu__link _flex'>
            <span className='material-icons menu__icon'>home</span>
            <span className='menu__text'>Home</span>
          </a>
        </li>
        <li className='menu__item'>
          <a href='#about' className='menu__link _flex'>
            <span className='material-icons menu__icon'>person</span>
            <span className='menu__text'>About</span>
          </a>
        </li>
        <li className='menu__item'>
          <a href='#projects' className='menu__link _flex'>
            <span className='material-icons menu__icon'>space_dashboard</span>
            <span className='menu__text'>Projects</span>
          </a>
        </li>
        <li className='menu__item'>
          <a href='#skills' className='menu__link _flex'>
            <span className='material-icons menu__icon'>bar_chart</span>
            <span className='menu__text'>Skills</span>
          </a>
        </li>
        <li className='menu__item'>
          <a href='#testimonials' className='menu__link _flex'>
            <span className='material-icons menu__icon'>interpreter_mode</span>
            <span className='menu__text'>Testimonials</span>
          </a>
        </li>
        <li className='menu__item'>
          <a href='#blog' className='menu__link _flex'>
            <span className='material-icons menu__icon'>edit</span>
            <span className='menu__text'>Blog</span>
          </a>
        </li>
        <li className='menu__item'>
          <a href='#contact' className='menu__link _flex'>
            <span className='material-icons menu__icon'>email</span>
            <span className='menu__text'>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
