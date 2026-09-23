import './Contact.css'
import contactImg from '../../assets/contact.jpg'

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">

      <div className="contact__hero">
        <div className="contact__hero-img-wrap">
          <img
            src={contactImg}
            alt="Saara Photography Contact Banner"
            loading="lazy"
            className="contact__hero-img"
          />
        </div>

        <div className="contact__hero-overlay" aria-hidden="true" />

        <div className="contact__hero-content">
          <h2 className="contact__heading" id="contact-heading">
            Let's Connect
          </h2>

          <p className="contact__subtext">
            Every beautiful story deserves to be captured. Let's create
            timeless memories together.
          </p>

          <a
            href="#"
            className="btn btn-light"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}