import React, { useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import productsData from "../data/products";
import "../styles/Products.css";
import { useParams, Navigate, useNavigate } from "react-router-dom";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const currentCategory = useParams().category;
  const navigate = useNavigate();

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

  // Verificar a categoria selecionada na URL
  if (currentCategory !== undefined) {
    if (selectedCategory != currentCategory) {
      // Procura a categoria na lista
      const category = categories.find(
        (categoria) =>
          categoria.toLowerCase() === currentCategory.toLocaleLowerCase()
      );

      // Verifica se a URL tem uma categoria válida
      if (category !== undefined) {
        setSelectedCategory(currentCategory);
      } else return <Navigate to="/produtos" />;
    }
  } else if (selectedCategory != "Todos") setSelectedCategory("Todos");

  const filteredProducts =
    selectedCategory === "Todos"
      ? productsData
      : productsData.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="products-page-container">
      <div className="container">
        <aside className="sidebar-content">
          <h2>Clássicos Retrô em Evidência</h2>
          <p>
            Mergulhe na nostalgia dos videogames com jogos lançados até o ano de
            2010.
          </p>
          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  selectedCategory.toLowerCase() === category.toLowerCase()
                    ? "active"
                    : ""
                }
                onClick={() =>
                  navigate(
                    category == "Todos" ? "/produtos" : `/produtos/${category}`
                  )
                }
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
