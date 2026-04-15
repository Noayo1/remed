import { motion } from 'framer-motion'
import Button from '../UI/Button'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__visual" id="mVisu">
        {/* video_box with ::before for purple glow */}
        <div className="hero__video-box">
          <iframe
            src="https://www.youtube.com/embed/dQU4nUbuK-k?autoplay=1&mute=1&loop=1&playlist=dQU4nUbuK-k&controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1"
            allow="autoplay"
            frameBorder="0"
            allowFullScreen
            title="Background video"
          />
        </div>

        {/* img_box — model image + white circle with purple glow */}
        <div className="hero__img-box">
          <div className="hero__img-glow" />
          <motion.img
            src="/model.png"
            alt=""
            className="hero__model-img"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <div className="hero__img-mask" />
        </div>

        {/* txt_box — text content */}
        <div className="hero__txt-box">
          <motion.p
            className="hero__logo-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="/hero-logo.svg" alt="Remed Aesthetics" className="hero__logo-img" />
          </motion.p>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Remed's 23 years of medical expertise<br />
            <strong>evolves into Remed Aesthetics' skin science.</strong>
          </motion.p>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button variant="outlined" href="#products">PRODUCT A</Button>
            <Button variant="outlined" href="#products">PRODUCT B</Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hero__scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  )
}
