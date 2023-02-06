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
        <button className='btn btn_outline home__btn'>Contact Me</button>
      </div>
      <div className='home__arrow home__arrow_animation'>
        <a href='#about' className='material-icons home__icon'>
          expand_more
        </a>
      </div>
    </section>
  )
}

export default Home
