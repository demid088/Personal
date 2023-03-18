import Modal from './../modal/Modal';

import './ModalProject.css'

function ModalProject({ open, setOpen, project }) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <img
        className='mp__img'
        src={require('./img/' + project.img)}
        alt={project.title}
      />
      <div className='mp__title'>{project.title}</div>
      <a href={project.link} className='mp__link btn btn_outline'>
        view site
      </a>
    </Modal>
  )
}

export default ModalProject
