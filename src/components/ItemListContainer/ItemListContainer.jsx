import React from "react";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";

import airMaxImage from "../../assets/images/air-max.jpg";
import nikeProImage from "../../assets/images/nike-pro.jpeg";
import drifitshorts from "../../assets/images/dri-fit-shorts.webp";

const ItemListContainer = ({ greeting, category }) => {
  // Simulación de productos
  const allProducts = [
    {
      id: "1",
      name: "Zapatillas Nike Air Max",
      price: "$150",
      image: airMaxImage,
      category: "zapatillas"
    },
    {
      id: "2",
      name: "Camiseta Nike Pro",
      price: "$35",
      image: nikeProImage,
      category: "camisetas"
    },
    {
      id: "3",
      name: "Shorts Nike Dri-FIT",
      price: "$45",
      image: drifitshorts,
      category: "shorts"
    },
  ];

  // Filtrar productos por categoría si está definida
  const products = category
    ? allProducts.filter(product => product.category === category)
    : allProducts;

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            {/* Link a la página de detalles del producto */}
            <Link to={`/detalle/${product.id}/${product.category}`} className="detail-link">
              Ver Detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
