import React from "react";
import { Play, Star, Zap } from "lucide-react";
import "../styles/Home.css";
import zeldaCover from "../assets/zelda-wallpaper.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Círculos animados no fundo */}
      <div className="hero-bg">
        <div className="hero-circle-1"></div>
        <div className="hero-circle-2"></div>
        <div className="hero-circle-3"></div>
      </div>

      {/* Container principal */}
      <div className="hero-container">
        <div className="hero-grid">
          {/* Coluna Esquerda */}
          <div className="hero-left">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="gradient">Reviva</span>
                <br />
                <span>os Clássicos</span>
              </h1>
              <p className="hero-subtitle">
                Descubra a maior coleção de jogos retrô dos anos 2000-2010.
                Nostalgia em pixels!
              </p>
            </div>

            {/* Botões */}
            <div
              className="hero-buttons"
              style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
            >
              <Link to={"/produtos"} className="button-primary">
                <Play className="icon" />
                Explorar Jogos
              </Link>

              <Link to={"/ofertas"} className="button-secondary">
                Ver Ofertas
              </Link>
            </div>

            {/* Estatísticas */}
            <div className="stats">
              <div className="stat">
                <div className="value" style={{ color: "#60a5fa" }}>
                  500+
                </div>
                <div className="label">Jogos</div>
              </div>
              <div className="stat">
                <div className="value" style={{ color: "#a78bfa" }}>
                  7
                </div>
                <div className="label">Consoles</div>
              </div>
              <div className="stat">
                <div className="value" style={{ color: "#ec4899" }}>
                  50K+
                </div>
                <div className="label">Gamers</div>
              </div>
            </div>
          </div>

          {/* Coluna Direita */}
          <div className="hero-right">
            <div className="featured-card">
              <div className="featured-badge">
                <Star className="icon" />
                Destaque
              </div>

              <div className="featured-preview">
                <img
                  src={zeldaCover}
                  alt="The Legend of Zelda - Wind Waker"
                  className="featured-image"
                />
              </div>

              <div className="featured-info">
                <div>
                  <h3>The Legend of Zelda: Skyward Sword</h3>
                  <p>Wii • 2011</p>
                </div>
                <div className="price text-right">
                  <div className="current">R$ 89,90</div>
                  <div className="old">R$ 129,90</div>
                </div>
              </div>

              <button className="button-buy">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
