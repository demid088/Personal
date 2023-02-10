import "./Skills.css"

// import logo from './img/freelancer.jpg'

// импорт этого дела
// const skills = [
//   {
//     title: 'frontend',
//     list: [
//       {
//         img: 'html.svg',
//         caption: 'HTML 5',
//       },
//     ]
//   },
// ]

function Skills() {
  return (
    <section className='skills' id='skills'>
      <header className='skills__header'>
        <h2 className='skills__title'>SKILLS</h2>
      </header>
      <div className='skills__content container'>
        {/* Frontend */}
        <div className='skills__box'>
          <h3 className='box__title'>Frontend</h3>
          <ul className='box__list'>
            <li className='box__item'>
              <div className='skill__ico'>
                <img src='./img/skills/html.svg' alt='' />
              </div>
              <span className='skill__caption'>HTML 5</span>
            </li>
            <li className='box__item'>
              <div className='skill__ico'>
                <img src='./img/skills/css.svg' alt='' />
              </div>
              <span className='skill__caption'>CSS 3</span>
            </li>
            <li className='box__item'>
              <div className='skill__ico'>
                <img src='./img/skills/sass.svg' alt='' />
              </div>
              <span className='skill__caption'>SASS</span>
            </li>
            <li className='box__item'>
              <div className='skill__ico'>
                <img src='./img/skills/bootstrap.svg' alt='' />
              </div>
              <span className='skill__caption'>Bootstrap</span>
            </li>
            <li className='box__item'>
              <div className='skill__ico'>
                <img src='./img/skills/materialize.svg' alt='' />
              </div>
              <span className='skill__caption'>Materialize</span>
            </li>
            <li className='box__item'>
              <div className='skill__ico'>
                <img src='./img/skills/javascript.svg' alt='' />
              </div>
              <span className='skill__caption'>JavaScript</span>
            </li>
            <li className='box__item'>
              <div className='skill__ico'>
                <img src='./img/skills/react.svg' alt='' />
              </div>
              <span className='skill__caption'>React</span>
            </li>
            {/* <li className='box__item'>
              <div className='skill__ico'>
                <img src='./img/skills/jquery.svg' alt='' />
              </div>
              <span className='skill__caption'>jQuery</span>
            </li> */}
          </ul>
        </div>
        {/* BACKEND */}
        <div className='skills__box'>
          <h3 className='box__title'>BACKEND</h3>
          <ul className='box__list'>
            <li className='box__item'>
              <div className='skill__ico'>
                <img src='./img/skills/node.svg' alt='' />
              </div>
              <span className='skill__caption'>Node js</span>
            </li>
            <li className='box__item'>
              <div className='skill__ico'>
                <img src='./img/skills/express.svg' alt='' />
              </div>
              <span className='skill__caption'>Express</span>
            </li>
            <li className='box__item'>
              <div className='skill__ico'>
                <img src='./img/skills/mongodb.svg' alt='' />
              </div>
              <span className='skill__caption'>MongoDB</span>
            </li>
            <li className='box__item'>
              <div className='skill__ico'>
                <img src='./img/skills/mysql.svg' alt='' />
              </div>
              <span className='skill__caption'>MySQL</span>
            </li>
          </ul>
        </div>
        {/* OTHER */}
        <div className='skills__box'>
          <h3 className='box__title'>OTHER</h3>
          <ul className='box__list'>
            <li className='box__item'>
              <div className='skill__ico'>
                <img src='./img/skills/webpack.svg' alt='' />
              </div>
              <span className='skill__caption'>Webpack</span>
            </li>
            <li className='box__item'>
              <div className='skill__ico'>
                <img src='./img/skills/gulp.svg' alt='' />
              </div>
              <span className='skill__caption'>Gulp</span>
            </li>
            <li className='box__item'>
              <div className='skill__ico'>
                <img src='./img/skills/git.svg' alt='' />
              </div>
              <span className='skill__caption'>Git / GitHub / GitLab</span>
            </li>
            <li className='box__item'>
              <div className='skill__ico'>
                <img src='./img/skills/linux.svg' alt='' />
              </div>
              <span className='skill__caption'>Linux</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
