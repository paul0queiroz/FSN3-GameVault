import React, { useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import productsData from "../data/products";
import "../styles/Products.css";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
    "Todos",
    "Corrida",
    "RPG",
    "Ação",
    "Survival Horror",
    "FPS",
    "Plataforma",
    "Luta",
    "Aventura",
    "Combate Veicular",
    "Estratégia",
    "Simulação",
    "Ação-Aventura",
    "RPG Tático",
    "Card Game",
    "Ação-RPG",
    "Mech Combat",
    "Tiro",
    "RPG de Ação",
    "RPG de Sobrevivência",
    "Beat 'em up",
    "Simulador de Voo de Combate",
    "Shoot 'em up",
  ];

  const filteredProducts =
    selectedCategory === "Todos"
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  return (
    <div className="products-page-container">
      <div className="container">
        <aside className="sidebar-content">
          <h2>Clássicos Retrô em Evidência</h2>
          <p>
            Mergulhe na nostalgia dos videogames com jogos lançados até o ano de 2010.
          </p>
          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
                aria-label={category}
              >
                {category}
              </button>
            ))}
          </div>
        </aside>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
