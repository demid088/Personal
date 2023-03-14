import "./Contact.css"

function Contact() {
  return (
    <section className='contact' id='contact'>
      <header className='contact__header'>
        <h2 className='contact__title subtitle'>contact</h2>
      </header>
      <div className='contact__content container'>
        <div className='contact__info'>
          <h4 className='info__title'>Demidov Dmitriy</h4>
          <span className='info__subtitle'>Web Developer</span>
          <div className='info__mail'>
            <span className='material-icons contact__icon'>mail</span>
            <span className='info__text'>E-mail:</span>
            <a
              className='info__link'
              href='mailto:demid088web@gmail.com'
              title='Send message...'
            >
              demid088web@gmail.com
            </a>
          </div>
          <div className='info__github'>
            <span className='material-icons contact__icon'>code</span>
            <span className='info__text'>GitHub:</span>
            <a
              className='info__link'
              href='https://github.com/demid088'
              title='GitHub portfolio'
              target='_blank'
              rel='external noopener noreferrer'
            >
              https://github.com/demid088
            </a>
          </div>
          {/* ADD buttons social */}
          {/* <div className='info__social'></div> */}
        </div>
        {/* ADD form */}
        {/* <div className='contact__form'></div> */}
      </div>
    </section>
  )
}

export default Contact
