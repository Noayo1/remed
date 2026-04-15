import './Products.css'

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card__image" style={{ backgroundColor: product.color }}>
        <span className="product-card__image-text">{product.icon}</span>
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>
        <a href="#contact" className="product-card__link">
          Learn More <span>&rarr;</span>
        </a>
      </div>
    </div>
  )
}
