import './ButtonBurger.css'

function ButtonBurger({ toggle, isOpen }) {
  return (
    <div
      className={'mobile-menu__burger' + (isOpen ? ' active' : '')}
      onClick={toggle}
    ></div>
  )
}

export default ButtonBurger
