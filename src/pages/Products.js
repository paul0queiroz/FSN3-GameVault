import React, { useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import productsData from "../data/products";
import "../styles/Products.css";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Aventura", "FPS", "RPG", "Ação", "Plataforma"];

  const filteredProducts =
    selectedCategory === "Todos"
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  return (
    <div className="container products-page-container">
      {/* <div className="products-header">
        <h1>Shop</h1>
        <div className="search-bar-header">
          <input type="text" placeholder="Search on Stuffsus" />
          <button>Search</button>
        </div>
      </div> */}

      <aside className="sidebar-content">
        <h2>Clássicos Retrô em Evidência</h2>
        <p>
          Mergulhe na nostalgia dos videogames com uma curadoria especial dos
          melhores jogos lançados até a década de 2010.
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
  );
};

export default Products;
