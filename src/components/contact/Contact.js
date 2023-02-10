import "./Contact.css"

function Contact() {
  return (
    <section className='contact' id='contact'>
      <header className='contact__header'>
        <h2 className='contact__title'>contact</h2>
      </header>
      <div className='contact__content container'>
        <div className='contact__info'>
          <h4 className='info__title'>Demidov Dmitriy</h4>
          <span className='info__subtitle'>Web Developer</span>
          <div className='info__mail'>
            <span className='material-icons contact__icon'>mail</span>
            E-mail:
            <a href='mailto:demid088web@gmail.com' title='Send message...'>
              demid088web@gmail.com
            </a>
          </div>
          <div className='info__github'>
            <span className='material-icons contact__icon'>code</span>
            GitHub:
            <a href='https://github.com/demid088' title='GitHub portfolio'>
              https://github.com/demid088
            </a>
          </div>
          {/* ADD buttons social */}
          <div className='info__social'></div>
        </div>
        {/* ADD form */}
        <div className='contact__form'></div>
      </div>
    </section>
  )
}

export default Contact
