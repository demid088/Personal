import "./Projects.css"

// const projects = []

function Projects() {
  return (
    <section className='projects' id='projects'>
      <header className='projects__header'>
        <h2 className='projects__title'>PROJECTS</h2>
      </header>
      <div className='projects__content container'>
        <ul className='projects__cards'>
          <li className='projects__card'>
            <div className='card__bg'>
              <img
                src='http://static.buqara.kz/uploads/images/normal/c5c69629cc87fc55064cefcebc5ff2fc.jpg'
                alt=''
              />
            </div>
            <div className="card__hover">
              <div className='card__text'>
                <h4 className='card__title'>Title project</h4>
                <span className='card__desc'>React / Node</span>
              </div>
              <div className='card__btn'>
                <a href='/' className='btn btn_outline card__link'>
                  LEARN MORE
                </a>
              </div>
            </div>
          </li>
          <li className='projects__card'>
            <div className='card__bg'>
              <img
                src='http://static.buqara.kz/uploads/images/normal/c5c69629cc87fc55064cefcebc5ff2fc.jpg'
                alt=''
              />
            </div>
            <div className="card__hover">
              <div className='card__text'>
                <h4 className='card__title'>Title project</h4>
                <span className='card__desc'>React / Node</span>
              </div>
              <div className='card__btn'>
                <a href='/' className='btn btn_outline card__link'>
                  LEARN MORE
                </a>
              </div>
            </div>
          </li>
          <li className='projects__card'>
            <div className='card__bg'>
              <img
                src='http://static.buqara.kz/uploads/images/normal/c5c69629cc87fc55064cefcebc5ff2fc.jpg'
                alt=''
              />
            </div>
            <div className="card__hover">
              <div className='card__text'>
                <h4 className='card__title'>Title project</h4>
                <span className='card__desc'>React / Node</span>
              </div>
              <div className='card__btn'>
                <a href='/' className='btn btn_outline card__link'>
                  LEARN MORE
                </a>
              </div>
            </div>
          </li>
          <li className='projects__card'>
            <div className='card__bg'>
              <img
                src='http://static.buqara.kz/uploads/images/normal/c5c69629cc87fc55064cefcebc5ff2fc.jpg'
                alt=''
              />
            </div>
            <div className="card__hover">
              <div className='card__text'>
                <h4 className='card__title'>Title project</h4>
                <span className='card__desc'>React / Node</span>
              </div>
              <div className='card__btn'>
                <a href='/' className='btn btn_outline card__link'>
                  LEARN MORE
                </a>
              </div>
            </div>
          </li>
          <li className='projects__card'>
            <div className='card__bg'>
              <img
                src='http://static.buqara.kz/uploads/images/normal/c5c69629cc87fc55064cefcebc5ff2fc.jpg'
                alt=''
              />
            </div>
            <div className="card__hover">
              <div className='card__text'>
                <h4 className='card__title'>Title project</h4>
                <span className='card__desc'>React / Node</span>
              </div>
              <div className='card__btn'>
                <a href='/' className='btn btn_outline card__link'>
                  LEARN MORE
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Projects
