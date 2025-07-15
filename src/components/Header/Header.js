import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import Logo from "../../assets/GameVault.png";
import "../../styles/Header.css";

export default function Header() {
  const { itemCount } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="GameVault Logo" />
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/promo">Promoções</Link>
          </li>
          <li>
            <Link to="/produtos">Jogos</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <div className="navbar-cart">
            <Link to="/cart" className="cart-link">
              <ShoppingCart className="cart-icon" />
              <span className="cart-count">{itemCount}</span>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
}
