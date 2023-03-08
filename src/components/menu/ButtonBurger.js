import './ButtonBurger.css'

function ButtonBurger(props) {
  return (
    <div
      className={'mobile-menu__burger' + (props.open ? ' active' : '')}
      onClick={props.onClick}
    ></div>
  )
}

export default ButtonBurger
