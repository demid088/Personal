import { Fragment, useState } from 'react'
import ModalProject from './ModalProject'

import './Projects.css'

import projectsList from './projectsList'

function Projects() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className='projects' id='projects'>
      <header className='projects__header'>
        <h2 className='projects__title subtitle'>PROJECTS</h2>
      </header>
      <div className='projects__content container'>
        <ul className='projects__cards'>
          {projectsList.map((project) => {
            return (
              <Fragment>
                <li className='projects__card' key={project.title}>
                  <div className='card__bg'>
                    <img
                      src={require('./img/' + project.img)}
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
                <ModalProject
                  open={modalOpen}
                  setOpen={setModalOpen}
                  project={project}
                >
                </ModalProject>
              </Fragment>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Projects
