import { useEffect } from 'react'
import './Modal.css'

function Modal({ open, setOpen, children }) {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        setOpen(false)
        break
      default:
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler)
    return () => document.removeEventListener('keydown', keydownHandler)
  })

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
