import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import ScrollReveal from '../components/UI/ScrollReveal'
import './ProductA.css'

const features = [
  { title: 'Non-Thermal Energy', desc: 'Delivers shockwave energy to the skin without thermal damage.' },
  { title: 'Cell and organ stimulation', desc: 'Forms hundreds of microbubbles within skin tissue.' },
  { title: 'Promotion of regenerative hormones', desc: 'Increases regenerative cells like collagen and elastin.' },
]

const results = [
  { icon: '✦', text: 'Improved skin firmness' },
  { icon: '◇', text: 'Enhanced facial contour' },
  { icon: '☀', text: 'Brighter, more even skin tone' },
  { icon: '≋', text: 'Reduction in fine lines' },
  { icon: '⬡', text: 'Improved facial symmetry' },
  { icon: '⊕', text: 'Boosted results when combined with other aesthetic treatments' },
]

const clinicalData = [
  { title: 'Improvement of neck wrinkles', unit: 'Neck wrinkles (mm)', labels: ['0.160', '0.120', '0.080', '0.040'], before: { value: '0.1278', height: 82 }, after: { value: '0.1157', height: 65 } },
  { title: 'Improvement of skin density', unit: 'Skin density (%)', labels: ['52', '44', '36', '28'], before: { value: '37.55', height: 60 }, after: { value: '49.21', height: 94 } },
  { title: 'Improvement of skin lifting', unit: 'Lifting (°)', labels: ['45', '40', '35', '30'], before: { value: '32.82', height: 40 }, after: { value: '36.18', height: 66 } },
]

const faqs = [
  { q: 'Is the procedure painful?', a: 'REFTONE induces regeneration without thermal damage or irritation, making it safe and comfortable without pain.' },
  { q: 'Is anesthesia necessary?', a: 'Most patients can undergo the procedure comfortably without anesthesia, even on sensitive areas.' },
  { q: 'Is there swelling or downtime after treatment?', a: 'Since there is no skin damage, patients can return to daily life immediately with no downtime.' },
  { q: 'How long do the lifting effects last?', a: 'Duration varies by individual response, but the effects strengthen gradually due to tissue regeneration and last longer than conventional devices.' },
  { q: 'Can the stimulation depth be adjusted?', a: 'Yes, various cubic depths from 0 mm to 20 mm allow for optimal customized stimulation per skin type and area.' },
  { q: 'Can it be combined with other treatments?', a: 'Yes. REFTONE is designed to synergize effectively with other lifting or laser treatments.' },
]

export default function ProductA() {
  const [currentSection, setCurrentSection] = useState(0)
  const totalSections = 9
  const isScrolling = useRef(false)

  const scrollTo = useCallback((index) => {
    if (index < 0 || index >= totalSections) return
    isScrolling.current = true
    setCurrentSection(index)
    setTimeout(() => { isScrolling.current = false }, 900)
  }, [])

  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault()
      if (isScrolling.current) return
      if (e.deltaY > 0) scrollTo(currentSection + 1)
      else if (e.deltaY < 0) scrollTo(currentSection - 1)
    }

    let touchStartY = 0
    const onTouchStart = (e) => { touchStartY = e.touches[0].clientY }
    const onTouchEnd = (e) => {
      if (isScrolling.current) return
      const diff = touchStartY - e.changedTouches[0].clientY
      if (Math.abs(diff) > 50) {
        if (diff > 0) scrollTo(currentSection + 1)
        else scrollTo(currentSection - 1)
      }
    }

    const onKeyDown = (e) => {
      if (isScrolling.current) return
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); scrollTo(currentSection + 1) }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); scrollTo(currentSection - 1) }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [currentSection, scrollTo])

  return (
    <div className="reftone">

      {/* Quick action buttons */}
      <div className="reftone__quick">
        <a href="#" className="reftone__quick-btn"><span>Find a Clinic</span><i>📍</i></a>
        <a href="#" className="reftone__quick-btn"><span>Contact</span><i>💬</i></a>
        <a href="#" className="reftone__quick-btn"><span>Instagram</span><i>📷</i></a>
        <a href="#" className="reftone__quick-btn"><span>Youtube</span><i>▶</i></a>
      </div>

      {/* Section dots navigation */}
      <div className="reftone__dots">
        {Array.from({ length: totalSections }).map((_, i) => (
          <button
            key={i}
            className={`reftone__dot ${currentSection === i ? 'reftone__dot--active' : ''}`}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>

      <div
        className="reftone__sections"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >

        {/* ===== 1. Hero ===== */}
        <section className="reftone__hero reftone__slide">
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

        {/* ===== 2. We Defy Time ===== */}
        <section className="reftone__defy reftone__slide">
          <div className="reftone__inner">
            <div className="reftone__defy-grid">
              <ScrollReveal direction="right">
                <h2 className="reftone__big-title">WE DEFY<br />TIME</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <img src="/reftone-device.png" alt="REFTONE Device" className="reftone__device-img" />
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.2}>
                <div className="reftone__defy-text">
                  <p className="reftone__text-highlight">Low-intensity, repeated shockwave stimulation awakens the skin's natural regenerative energy.</p>
                  <p className="reftone__text-body">Heat-based lifting treatments can push the skin's regenerative capacity to its limit when repeated thermal stimulation accumulates over time -leading to reduced recovery efficiency.</p>
                  <p className="reftone__text-body">It's time for an approach that maximizes results without relying on intentional thermal damage, preserving the skin instead of stressing it.</p>
                  <p className="reftone__text-body">With zero risk of heat damage, REFTONE completes the regeneration process safely and effectively -awakening the skin at its core. This is the future of lifting -non-thermal regenerative power.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== 3. Technology ===== */}
        <section className="reftone__tech reftone__slide">
          <div className="reftone__inner">
            <ScrollReveal>
              <p className="reftone__text-bold reftone__text-center">A new standard for lifting<br />REFTONE Non-Thermal Regenerative Lifting</p>
              <p className="reftone__tech-logo">REFTONE</p>
              <p className="reftone__text-body reftone__text-center">As a completely non-thermal system, REFTONE delivers 3D shockwave energy precisely to the targeted skin layer set for each individual skin type. Through the cavitation effect, it stimulates collagen, elastin, and other structural proteins -restoring the skin's fundamental resilience from within.</p>
            </ScrollReveal>
            <div className="reftone__features">
              {features.map((f, i) => (
                <ScrollReveal key={f.title} direction="left" delay={0.1 + i * 0.1}>
                  <div className="reftone__feature-card">
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 4. Target Setting ===== */}
        <section className="reftone__target reftone__slide">
          <div className="reftone__inner">
            <ScrollReveal>
              <h2 className="reftone__text-bold">REFTONE's Exclusive Target-Setting System<br />Precision depth customization using cubic-modulated control.</h2>
              <p className="reftone__text-body" style={{ marginTop: 20 }}>Cubic modulation tailors the depth precisely to each individual's skin condition, ensuring energy reaches the most effective layer.</p>
              <ul className="reftone__note-list">
                <li>※ Equipped with 5 depth-specific cubic options</li>
                <li>※ Includes specialized cubic for body treatments as well</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="reftone__target-visual">
                <div className="reftone__target-placeholder">
                  <span>Depth Diagram</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== 5. Experience / Comparison ===== */}
        <section className="reftone__compare reftone__slide">
          <div className="reftone__inner">
            <ScrollReveal>
              <p className="reftone__text-center reftone__text-highlight">The Birth of a New Regenerative Energy<br /><strong>Experience the non-thermal lifting power of REFTONE.</strong></p>
            </ScrollReveal>
            <div className="reftone__compare-grid">
              <ScrollReveal direction="right">
                <div className="reftone__compare-card reftone__compare-card--old">
                  <h3>Traditional Pain-Therapy Shockwave</h3>
                  <p className="reftone__text-body">Energy optimized for musculoskeletal treatment, not for delicate facial skin</p>
                  <ol>
                    <li>1 shot = 1 point with limited coverage</li>
                    <li>Excessively strong stimulation that penetrates to the bone</li>
                    <li>No ability to target specific skin layers</li>
                  </ol>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="left">
                <div className="reftone__compare-card reftone__compare-card--new">
                  <h3>REFTONE</h3>
                  <p className="reftone__text-body">Non-thermal lifting that stimulates regeneration without thermal damage.</p>
                  <ol>
                    <li>1 shot = 14 dots forming a 3D energy field</li>
                    <li>Up to 22x wider coverage and faster treatment</li>
                    <li>Compatible with other treatments for enhanced synergy effects</li>
                  </ol>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== 6. Results at a Glance ===== */}
        <section className="reftone__results reftone__slide">
          <div className="reftone__inner">
            <ScrollReveal>
              <h2 className="reftone__text-bold reftone__text-center">REFTONE Results at a Glance</h2>
              <p className="reftone__text-body reftone__text-center">Discover the regenerative impact of REFTONE's non-thermal energy.</p>
            </ScrollReveal>
            <div className="reftone__results-grid">
              {results.map((r, i) => (
                <ScrollReveal key={r.text} delay={i * 0.1}>
                  <div className="reftone__result-item">
                    <div className="reftone__result-icon">{r.icon}</div>
                    <p>{r.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 7. Clinical Results ===== */}
        <section className="reftone__clinical reftone__slide">
          <div className="reftone__inner">
            <ScrollReveal>
              <p className="reftone__text-center reftone__text-highlight">Technology that defies time<br /><strong>check out REFTONE clinical results</strong></p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="reftone__swiper"
              >
                {clinicalData.map(d => (
                  <SwiperSlide key={d.title}>
                    <div className="reftone__graph-card">
                      <h3>{d.title}<span>Mean ± SD, P &lt; 0.05</span></h3>
                      <div className="reftone__graph-bars">
                        <div className="reftone__bar">
                          <div className="reftone__bar-fill" style={{ height: `${d.before.height}%` }} />
                          <p className="reftone__bar-value">{d.before.value}</p>
                          <p className="reftone__bar-label">Before</p>
                        </div>
                        <div className="reftone__bar">
                          <div className="reftone__bar-fill reftone__bar-fill--accent" style={{ height: `${d.after.height}%` }} />
                          <p className="reftone__bar-value">{d.after.value}</p>
                          <p className="reftone__bar-label">After</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== 8. FAQs ===== */}
        <section className="reftone__faq reftone__slide">
          <div className="reftone__inner">
            <ScrollReveal>
              <h2 className="reftone__text-bold reftone__text-center">FAQs</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="reftone__swiper"
              >
                {faqs.map(faq => (
                  <SwiperSlide key={faq.q}>
                    <div className="reftone__faq-card">
                      <h3>{faq.q}</h3>
                      <p>{faq.a}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== 9. Contact Form ===== */}
        <section className="reftone__contact reftone__slide">
          <div className="reftone__inner">
            <ScrollReveal>
              <h2 className="reftone__text-bold reftone__text-center">REFTONE Product Inquiry</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <form className="reftone__form" onSubmit={e => { e.preventDefault(); alert('Inquiry submitted!') }}>
                <div className="reftone__form-grid">
                  <div className="reftone__field">
                    <label>Company name <i>*</i></label>
                    <input type="text" placeholder="Enter your company name" required />
                  </div>
                  <div className="reftone__field">
                    <label>Person in charge <i>*</i></label>
                    <input type="text" placeholder="Enter the name of the person in charge" required />
                  </div>
                  <div className="reftone__field">
                    <label>Contact number <i>*</i></label>
                    <input type="text" placeholder="Enter your contact number" required />
                  </div>
                  <div className="reftone__field">
                    <label>Email <i>*</i></label>
                    <input type="email" placeholder="Enter your email address" required />
                  </div>
                </div>
                <div className="reftone__field reftone__field--full">
                  <label>Inquiry <i>*</i></label>
                  <textarea placeholder="Enter your inquiry" rows="4" required />
                </div>
                <div className="reftone__checkbox">
                  <input type="checkbox" id="reftone-agree" required />
                  <label htmlFor="reftone-agree">I agree to the collection and use of personal information.</label>
                </div>
                <button type="submit" className="btn btn--filled reftone__submit">Submit inquiry</button>
              </form>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </div>
  )
}
