import { Link } from 'react-scroll'

import './Home.css'
import './animationBg.css'
import './animationArrow.css'

function Home() {
  return (
    <section className='home' id='home'>
      <div className='home__bg home__bg_animation'>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
      </div>
      <div className='home__text'>
        <h1 className='home__title'>Demidov Dmitriy</h1>
        <p className='home__subtitle'>Web Developer</p>
        <Link
          className='btn btn_outline home__btn'
          to='contact'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact Me
        </Link>
      </div>
      <div className='home__arrow home__arrow_animation'>
        <Link
          className='material-icons home__icon'
          to='projects'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          expand_more
        </Link>
      </div>
    </section>
  )
}

export default Home
