import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineBars3, HiXMark, HiOutlineGlobeAlt, HiChevronUp, HiChevronDown } from 'react-icons/hi2'
import './Header.css'

const navLinks = [
  {
    label: 'Company',
    href: '#about',
    children: [
      { label: 'About MEDITECH', href: '#about' },
      { label: 'Vision', href: '#about' },
      { label: 'History', href: '#about' },
      { label: 'Partner Institutions', href: '#about' },
    ],
  },
  {
    label: 'Business',
    href: '#business',
    children: [
      { label: 'Overview', href: '#business' },
      { label: 'Psychiatry & Neurology', href: '#business' },
      { label: 'Physiology', href: '#business' },
      { label: 'Aesthetics', href: '#business' },
      { label: 'Urology', href: '#business' },
      { label: 'Veterinary', href: '#business' },
    ],
  },
  {
    label: 'IR',
    href: '#products',
    children: [
      { label: 'Announcement & Disclosure', href: '#products' },
    ],
  },
  {
    label: 'Contact Us',
    href: '#contact',
    children: [
      { label: 'Contact Us', href: '#contact' },
    ],
  },
]

const languages = [
  { label: 'ENG', href: '#' },
  { label: 'KOR', href: '#' },
  { label: 'ENG(EU)', href: '#' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__inner">
          <h1 className="header__logo">
            <Link to="/" title="Go to main">
              <span className="text-hidden">MEDITECH</span>
            </Link>
          </h1>

          <nav className="header__nav">
            <ul className="header__menu">
              {navLinks.map(link => (
                <li key={link.label} className="header__item">
                  <a href={link.href} className="header__link">{link.label}</a>
                  {link.children && (
                    <ul className="header__dropdown">
                      {link.children.map(child => (
                        <li key={child.label}>
                          <a href={child.href} className="header__dropdown-link">{child.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__right">
            <div className="header__lang" onMouseLeave={() => setLangOpen(false)}>
              <button
                className="header__lang-btn"
                onClick={() => setLangOpen(!langOpen)}
              >
                <HiOutlineGlobeAlt size={16} />
                <span>ENG</span>
                {langOpen ? <HiChevronUp size={14} /> : <HiChevronDown size={14} />}
              </button>
              {langOpen && (
                <ul className="header__lang-dropdown">
                  {languages.map(lang => (
                    <li key={lang.label}>
                      <a href={lang.href} className="header__lang-link">{lang.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              type="button"
              className="header__menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              title="Site Map"
            >
              <span className="text-hidden">Site Map</span>
              {menuOpen ? <HiXMark size={24} /> : <HiOutlineBars3 size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <nav className="mobile-menu__nav">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="mobile-menu__link"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
