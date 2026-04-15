import { useInView } from 'react-intersection-observer'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'
import ScrollReveal from '../UI/ScrollReveal'
import './About.css'

function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, v => Math.round(v))
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (inView) {
      animate(count, target, { duration, ease: 'easeOut' })
    }
  }, [inView, target, count, duration])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

const stats = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 50, suffix: '+', label: 'Products' },
  { value: 30, suffix: '+', label: 'Countries' },
  { value: 500, suffix: '+', label: 'Partners' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          <ScrollReveal direction="left">
            <div className="about__text">
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                About <span>MEDITECH</span>
              </h2>
              <p className="about__desc">
                With over 15 years of dedicated research and development in medical device technology,
                we are a global leader in therapeutic and aesthetic solutions. Our commitment to innovation
                drives us to create cutting-edge devices that improve lives worldwide.
              </p>
              <p className="about__desc">
                From brain therapy and pain management to aesthetic treatments, our comprehensive
                product lineup represents the convergence of medical science and advanced engineering.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="about__visual">
              <div className="about__visual-glow" />
              <div className="about__visual-shape">
                <div className="about__visual-inner">
                  <span>EST.</span>
                  <span className="about__visual-year">2010</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="about__stats">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="about__stat">
                <div className="about__stat-value">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="about__stat-label">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
