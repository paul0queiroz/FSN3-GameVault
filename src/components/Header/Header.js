import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export default function Header() {
  const { itemCount } = useCart();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60px",
        background: "#222",
        position: "relative",
      }}
    >
      <span
        style={{
          color: "#fff",
          fontSize: "2rem",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        GameVault
      </span>
      <Link to="/cart">
        Carrinho {itemCount > 0 && <span>({itemCount})</span>}
      </Link>
      <Link to="/">Home</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  );
}
