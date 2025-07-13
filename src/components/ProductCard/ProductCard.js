import React from "react";
import { Link } from "react-router-dom"; // Importar Link
import "./ProductCard.css";
import { useCart } from "../../contexts/CartContext";
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-star w-4 h-4 ${
            i <= product.rating ? "star-filled" : "star-empty"
          }`}
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="product-card">
      <div className="product-category-tag">{product.category}</div>
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          {renderStars()} {product.rating} ({product.reviews})
        </div>
        <p className="product-price">${product.price}</p>
        <div className="product-actions">
          <Link to={`/produto/${product.id}`} className="btn-card">
            Ver Detalhes
          </Link>
          <button
            className="btn-card-transparant"
            onClick={() => addToCart(product, 1)}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
