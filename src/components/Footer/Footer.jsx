import { useState, useEffect } from 'react'
import { HiArrowUp } from 'react-icons/hi2'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import './Footer.css'

const quickLinks = [
  { label: 'Company', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Business', href: '#business' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3 className="footer__logo">MEDITECH</h3>
            <p className="footer__brand-desc">
              Global leader in innovative medical device technology, committed to improving lives through advanced therapeutic and aesthetic solutions.
            </p>
          </div>

          <div className="footer__links">
            <h4 className="footer__heading">Quick Links</h4>
            <ul>
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__contact">
            <h4 className="footer__heading">Contact Info</h4>
            <ul>
              <li className="footer__contact-item">21-7, Innovation Street</li>
              <li className="footer__contact-item">Tech District, Republic of Korea</li>
              <li className="footer__contact-item">Tel. +82-1588-7395</li>
              <li className="footer__contact-item">Fax. +82-31-606-5757</li>
            </ul>
          </div>

          <div className="footer__social">
            <h4 className="footer__heading">Follow Us</h4>
            <div className="footer__social-icons">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} MEDITECH. All Rights Reserved.</p>
        </div>
      </div>

      <button
        className={`back-to-top ${showTop ? 'back-to-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <HiArrowUp size={20} />
      </button>
    </footer>
  )
}
