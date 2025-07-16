import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useCart } from "../../contexts/CartContext";
import { Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  {
    if (!product) return null;
  }

  return (
    <div className="product-card">
      <div className="product-category-tag">
        <Link
          to={`/produtos/${product.category}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {product.category}
        </Link>
      </div>
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">R${product.price}</p>
        <div className="product-actions">
          <Button
            as={Link}
            to={`/produto/${product.id}`}
            variant="dark"
            className="btn-card"
          >
            Ver Detalhes
          </Button>
          <Button
            className="btn-card-secondary"
            onClick={() => addToCart(product, 1)}
          >
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
