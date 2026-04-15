import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Products from '../components/Products/Products'
import Business from '../components/Business/Business'
import Contact from '../components/Contact/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Business />
      <Contact />
    </main>
  )
}
