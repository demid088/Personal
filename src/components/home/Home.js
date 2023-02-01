import "./Home.css"

function Home() {
  return (
    <section className='home' id='home'>
      <div className='home__text'>
        <h1 className='home__title'>Demidov Dmitriy</h1>
        <p className='home__subtitle'>Web Developer</p>
        <button className='btn home__btn'>Contact Me</button>
      </div>
      <div className='home__arrow'>
        <span className='material-icons home__icon'>expand_more</span>
      </div>
    </section>
  )
}

export default Home
