import { Fragment, useState } from 'react'
import ModalProject from './ModalProject'

import './Projects.css'

import projectsList from './projectsList'

function Projects() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalId, setModalId] = useState(1)

  return (
    <section className='projects' id='projects'>
      <header className='projects__header'>
        <h2 className='projects__title subtitle'>PROJECTS</h2>
      </header>
      <div className='projects__content container'>
        <ModalProject open={modalOpen} id={modalId} setOpen={setModalOpen} />
        <ul className='projects__cards'>
          {projectsList.map((project, idx) => {
            return (
              <Fragment key={project.title}>
                <li className='projects__card'>
                  <div
                    className={
                      'card__bg' + (idx % 2 === 0 ? ' card__bg_even' : '')
                    }
                  >
                    <img
                      src={require('./img/sm/' + project.img)}
                      alt={project.title}
                    />
                  </div>
                  <div className='card__hover'>
                    <div className='card__text'>
                      <h4 className='card__title'>{project.title}</h4>
                      <span className='card__desc'>
                        {project.stack.join(' / ')}
                      </span>
                    </div>
                    <div className='card__btn'>
                      <button
                        onClick={() => {
                          setModalId(project.id)
                          setModalOpen(true)
                          return false
                        }}
                        className='btn btn_outline card__link'
                      >
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                </li>
              </Fragment>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Projects
