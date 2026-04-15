import { motion } from 'framer-motion'
import ScrollReveal from '../components/UI/ScrollReveal'
import './ProductA.css'

export default function ProductA() {
  return (
    <div className="reftone">

      {/* Quick action buttons — fixed right side */}
      <div className="reftone__quick">
        <a href="#contact" className="reftone__quick-btn">
          <span>Find a Clinic</span>
          <i>📍</i>
        </a>
        <a href="#contact" className="reftone__quick-btn">
          <span>Contact</span>
          <i>💬</i>
        </a>
        <a href="#" className="reftone__quick-btn">
          <span>Instagram</span>
          <i>📷</i>
        </a>
        <a href="#" className="reftone__quick-btn">
          <span>Youtube</span>
          <i>▶</i>
        </a>
      </div>

      {/* ===== SECTION 1: Hero ===== */}
      <section className="reftone__hero">
        <div className="reftone__video-box">
          <iframe
            src="https://www.youtube.com/embed/HxdZ_BBjEUg?autoplay=1&mute=1&loop=1&playlist=HxdZ_BBjEUg&controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1"
            allow="autoplay"
            frameBorder="0"
            allowFullScreen
            title="REFTONE video"
          />
        </div>
        <div className="reftone__hero-overlay" />
        <div className="reftone__hero-inner">
          <motion.h1
            className="reftone__hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            REFTONE
          </motion.h1>
        </div>
      </section>

      {/* ===== SECTION 2: We Defy Time ===== */}
      <section className="reftone__defy">
        <div className="reftone__defy-inner">
          <ScrollReveal direction="left">
            <h2 className="reftone__defy-title">WE DEFY<br />TIME</h2>
          </ScrollReveal>

          <div className="reftone__defy-product">
            <ScrollReveal delay={0.3}>
              <div className="reftone__device-box">
                <span className="reftone__device-label">REFTONE</span>
                <div className="reftone__device-body" />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="reftone__defy-text">
              <p className="reftone__defy-subtitle">
                <em>Low-intensity, repeated shockwave stimulation awakens the skin's natural regenerative energy.</em>
              </p>
              <p className="reftone__defy-body">
                Heat-based lifting treatments can push the skin's regenerative capacity to its limit when repeated thermal stimulation accumulates over time — leading to reduced recovery efficiency.
              </p>
              <p className="reftone__defy-body">
                It's time for an approach that maximizes results without relying on intentional thermal damage, preserving the skin instead of stressing it.
              </p>
              <p className="reftone__defy-body">
                With zero risk of heat damage, REFTONE completes the regeneration process safely and effectively — awakening the skin at its core. This is the future of lifting — non-thermal regenerative power.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
