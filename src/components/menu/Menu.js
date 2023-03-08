import { Fragment } from 'react'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile';

// анимация на логотипе - движение за курсором
// https://ru.stackoverflow.com/questions/1413185/react-%D0%94%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-svg-%D0%B7%D0%B0-%D0%BA%D1%83%D1%80%D1%81%D0%BE%D1%80%D0%BE%D0%BC
// https://atuin.ru/blog/parallaks-effekt-pri-dvizhenii-myshi/

// Разделяем Меню на 2 и добав. сюда состояние!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function Menu() {
  return (
    <Fragment>
      <MenuDesktop />
      <MenuMobile />
    </Fragment>
  )
}

export default Menu
