import { HiOutlineBeaker, HiOutlineCog6Tooth, HiOutlineGlobeAlt } from 'react-icons/hi2'
import ScrollReveal from '../UI/ScrollReveal'
import './Business.css'

const features = [
  {
    icon: <HiOutlineBeaker size={48} />,
    title: 'R&D',
    description: 'Cutting-edge research powered by a dedicated team of scientists and engineers, delivering breakthrough medical device innovations backed by rigorous clinical studies.',
  },
  {
    icon: <HiOutlineCog6Tooth size={48} />,
    title: 'Manufacturing',
    description: 'Precision engineering and state-of-the-art manufacturing facilities ensuring the highest quality standards with ISO 13485 certification and GMP compliance.',
  },
  {
    icon: <HiOutlineGlobeAlt size={48} />,
    title: 'Global Distribution',
    description: 'A worldwide distribution network spanning 30+ countries, with dedicated local partners ensuring seamless delivery and after-sales support globally.',
  },
]

export default function Business() {
  return (
    <section className="business" id="business">
      <div className="business__glow" />
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">
            Our <span>Business</span>
          </h2>
        </ScrollReveal>

        <div className="business__grid">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.15}>
              <div className="business__card">
                <div className="business__icon">{feature.icon}</div>
                <h3 className="business__card-title">{feature.title}</h3>
                <p className="business__card-desc">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
