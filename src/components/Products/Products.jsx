import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ScrollReveal from '../UI/ScrollReveal'
import ProductCard from './ProductCard'
import './Products.css'

const products = [
  {
    name: 'RF Therapy System',
    description: 'Advanced radiofrequency technology for non-invasive therapeutic treatments with precision control.',
    color: '#1a0040',
    icon: '📡',
  },
  {
    name: 'Laser Module Pro',
    description: 'High-performance medical laser system designed for precision surgical and therapeutic applications.',
    color: '#0d1a33',
    icon: '🔬',
  },
  {
    name: 'Cryotherapy Unit',
    description: 'State-of-the-art cryogenic therapy device for targeted tissue treatment and pain management.',
    color: '#0a1a2a',
    icon: '❄️',
  },
  {
    name: 'Ultrasound Device',
    description: 'Next-generation diagnostic and therapeutic ultrasound system with AI-enhanced imaging.',
    color: '#1a0033',
    icon: '🔊',
  },
  {
    name: 'LED Panel System',
    description: 'Multi-wavelength LED phototherapy system for dermatological and aesthetic treatments.',
    color: '#1a0d33',
    icon: '💡',
  },
  {
    name: 'Microcurrent Applicator',
    description: 'Precision microcurrent delivery system for neurostimulation and tissue regeneration.',
    color: '#0d0033',
    icon: '⚡',
  },
]

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">
            Our <span>Products</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="products__swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.name}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ScrollReveal>
      </div>
    </section>
  )
}
