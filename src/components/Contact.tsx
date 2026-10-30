import { useState, type FormEvent } from 'react'

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="page-card" aria-labelledby="contact-title">
      <span className="eyebrow">Будьмо на зв’язку</span>
      <h1 id="contact-title">Це контактна сторінка</h1>
      <p>
        Маєте запитання? Напишіть нам на{' '}
        <a href="mailto:hello@example.com">hello@example.com</a>.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="form-field">
          <span>Ваша електронна пошта</span>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            autoComplete="email"
            required
            onChange={() => setIsSubmitted(false)}
          />
        </label>
        <label className="form-field">
          <span>Повідомлення</span>
          <textarea
            name="message"
            placeholder="Розкажіть, чим можемо допомогти…"
            rows={3}
            required
            onChange={() => setIsSubmitted(false)}
          />
        </label>
        <div className="form-actions">
          <button className="action-button" type="submit">
            Надіслати демо-запит <span aria-hidden="true">↗</span>
          </button>
          {isSubmitted && (
            <p className="form-feedback" role="status">
              Дякуємо! Це демо — повідомлення не надсилалося на сервер.
            </p>
          )}
        </div>
      </form>
    </section>
  )
}

export default Contact
