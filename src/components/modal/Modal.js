import './Modal.css'

function Modal({open, setOpen, children}) {
  return (
    <div className={'modal-wrapper hidden' + (open ? ' show' : '')}>
      <div className={'modal' + (open ? ' show' : '')}>
        <span
          onClick={() => setOpen(false)}
          className='material-icons modal__close btn btn_outline'
        >
          close
        </span>
        {children}
      </div>
      <div onClick={() => setOpen(false)} className='overlay'></div>
    </div>
  )
}

export default Modal
