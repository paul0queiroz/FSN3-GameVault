import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { ShoppingCart, Menu } from "lucide-react";
import Logo from "../../assets/GameVaultLogo.png";
import "../../styles/Header.css";

export default function Header() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={Logo} alt="GameVault Logo" />
        </Link>

        <button
          className="header__menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        <ul className={`header__nav ${menuOpen ? "is-open" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Jogos</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li className="header__cart">
            <Link to="/cart" className="cart-link">
              <ShoppingCart className="cart-icon" />
              <span className="cart-count">{itemCount}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
