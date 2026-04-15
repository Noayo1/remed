import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import ProductA from './pages/ProductA'
import ProductB from './pages/ProductB'
import ScrollToTop from './components/UI/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-a" element={<ProductA />} />
        <Route path="/product-b" element={<ProductB />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
