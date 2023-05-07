import Modal from './../modal/Modal';
import GetProject from './GetProject';

import './ModalProject.css'

function ModalProject({ open, id, setOpen }) {
  const project = GetProject(id)

  return (
    <Modal open={open} setOpen={setOpen}>
      <img
        className='mp__img'
        src={require('./img/' + project.img)}
        alt={project.title}
      />
      <div className='mp__title'>{project.title}</div>
      <a
        href={project.link}
        target='_blank'
        rel='noopener noreferrer'
        className='btn btn_outline mp__link'
      >
        view site
      </a>
    </Modal>
  )
}

export default ModalProject
