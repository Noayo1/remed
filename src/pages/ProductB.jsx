import { Link } from 'react-router-dom'
import ScrollReveal from '../components/UI/ScrollReveal'
import './ProductA.css'

const features = [
  { title: 'Precision Laser Optics', desc: 'Medical-grade laser module with adjustable wavelength for targeted dermatological and surgical treatments.' },
  { title: 'Intelligent Cooling System', desc: 'Integrated skin cooling technology protects the epidermis while delivering energy to deeper tissue layers.' },
  { title: 'Ergonomic Handpiece', desc: 'Lightweight, balanced handpiece design reduces operator fatigue during extended treatment sessions.' },
  { title: 'Protocol Library', desc: 'Pre-loaded treatment protocols for over 30 clinical indications with customizable parameter settings.' },
]

const specs = [
  { label: 'Wavelength', value: '808nm / 1064nm' },
  { label: 'Output Power', value: '0 – 500W peak' },
  { label: 'Pulse Duration', value: '5 – 300 ms' },
  { label: 'Spot Size', value: '2 – 18 mm' },
  { label: 'Certifications', value: 'CE, FDA, KFDA' },
  { label: 'Weight', value: '45 kg' },
]

export default function ProductB() {
  return (
    <div className="product-page">
      {/* Hero banner */}
      <section className="product-page__hero">
        <div className="product-page__hero-glow" />
        <div className="product-page__hero-content">
          <ScrollReveal>
            <p className="product-page__category">Aesthetic Device</p>
            <h1 className="product-page__title">Laser Module <span>Pro</span></h1>
            <p className="product-page__desc">
              High-performance medical laser system designed for precision surgical
              and therapeutic applications with intelligent energy management.
            </p>
          </ScrollReveal>
        </div>
        <div className="product-page__hero-image">
          <div className="product-page__image-placeholder">🔬</div>
        </div>
      </section>

      {/* Features */}
      <section className="product-page__features">
        <div className="product-page__container">
          <ScrollReveal>
            <h2 className="product-page__section-title">Key <span>Features</span></h2>
          </ScrollReveal>
          <div className="product-page__features-grid">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <div className="product-page__feature-card">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="product-page__specs">
        <div className="product-page__container">
          <ScrollReveal>
            <h2 className="product-page__section-title">Technical <span>Specifications</span></h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="product-page__specs-table">
              {specs.map(s => (
                <div key={s.label} className="product-page__spec-row">
                  <span className="product-page__spec-label">{s.label}</span>
                  <span className="product-page__spec-value">{s.value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="product-page__cta">
        <div className="product-page__container">
          <ScrollReveal>
            <h2 className="product-page__section-title">Interested in this <span>product</span>?</h2>
            <div className="product-page__cta-buttons">
              <Link to="/#contact" className="btn btn--filled">Contact Us</Link>
              <Link to="/" className="btn btn--outlined">Back to Home</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
