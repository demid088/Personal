import './Modal.css'

function Modal({ open, setOpen, children }) {
  return (
    <div className={'modal-wrapper' + (open ? ' show' : '')}>
      <div className={'modal' + (open ? ' show' : '')}>
        {children}
      </div>
      <div onClick={() => setOpen(false)} className='overlay'></div>
    </div>
  )
}

export default Modal
