import "./Skills.css"

import skillsList from './skillsList'

function Skills() {
  return (
    <section className='skills' id='skills'>
      <header className='skills__header'>
        <h2 className='skills__title'>SKILLS</h2>
      </header>
      <div className='skills__content container'>
        {
          skillsList.map((box, idx) => {
            return (
              <div className='skills__box' key={idx}>
                <h3 className='box__title'>{box.title}</h3>
                <ul className='box__list'>
                {
                  box.list.map((info, idx) => {
                    return (
                      <li className='box__item' key={idx}>
                        <div className='skill__ico'>
                          <img src={require('./img/' + info.img)} alt={info.caption}
                          />
                        </div>
                        <span className='skill__caption'>{info.caption}</span>
                      </li>
                    )
                  })
                }
                </ul>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Skills

