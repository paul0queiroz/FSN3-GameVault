import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
      <Link
        to="/cart"
        style={{
          position: "absolute",
          right: "30px",
          color: "#fff",
          textDecoration: "none",
          fontSize: "1.8rem",
        }}
        aria-label="Cart"
      >
        {/* Simple cart icon SVG */}
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 20c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm1.334-3.25a1 1 0 0 0 .962-.725l2.5-8A1 1 0 0 0 20 7H6.21l-.94-2.34A1 1 0 0 0 4.34 4H2a1 1 0 1 0 0 2h1.34l3.6 8.59-1.35 2.44A1 1 0 0 0 6 18h12a1 1 0 1 0 0-2H7.42l.93-1.68h8.72z" />
        </svg>
      </Link>
    </nav>
  );
}
