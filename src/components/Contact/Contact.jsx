import { useState } from 'react'
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope } from 'react-icons/hi2'
import ScrollReveal from '../UI/ScrollReveal'
import Button from '../UI/Button'
import './Contact.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">
            Contact <span>Us</span>
          </h2>
        </ScrollReveal>

        <div className="contact__grid">
          <ScrollReveal direction="left">
            <div className="contact__info">
              <h3 className="contact__info-title">Get in Touch</h3>
              <p className="contact__info-desc">
                Have questions about our products or services? We'd love to hear from you.
                Reach out and our team will get back to you promptly.
              </p>

              <div className="contact__details">
                <div className="contact__detail">
                  <HiOutlineMapPin size={20} className="contact__detail-icon" />
                  <span>21-7, Innovation Street, Tech District, Republic of Korea</span>
                </div>
                <div className="contact__detail">
                  <HiOutlinePhone size={20} className="contact__detail-icon" />
                  <span>+82-1588-7395</span>
                </div>
                <div className="contact__detail">
                  <HiOutlineEnvelope size={20} className="contact__detail-icon" />
                  <span>contact@meditech.com</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="contact__field">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="contact__field">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <Button variant="filled" className="contact__submit">
                {submitted ? 'Message Sent!' : 'Send Message'}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
