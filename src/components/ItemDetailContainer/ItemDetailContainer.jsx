import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ItemDetailContainer.css";

import airMaxImage from "../../assets/images/air-max.jpg";
import nikeProImage from "../../assets/images/nike-pro.jpeg";
import drifitshorts from "../../assets/images/dri-fit-shorts.webp";

function ItemDetailContainer() {
  const { id, category } = useParams();

  // Simulación de productos
  const allProducts = [
    {
      id: "1",
      category: "zapatillas",
      name: "Zapatillas Nike Air Max",
      description: "Comodidad y estilo con la última tecnología Air Max.",
      price: "$175000",
      image: airMaxImage,
    },
    {
      id: "2",
      category: "camisetas",
      name: "Camiseta Nike Pro",
      description: "Ligera y transpirable, perfecta para entrenamientos intensos.",
      price: "$70000",
      image: nikeProImage,
    },
    {
      id: "3",
      category: "shorts",
      name: "Shorts Nike Dri-FIT",
      description: "Mantente fresco con este short de alto rendimiento.",
      price: "$50000",
      image: drifitshorts,
    },
  ];

  // Buscar el producto por ID y categoría
  const product = allProducts.find(
    (prod) => prod.id === id
  );

  // Mostrar un mensaje si el producto no existe
  if (!product) {
    return (
      <div className="item-detail-container">
        <p>Producto no encontrado. <Link to="/">Volver al catálogo</Link></p>
      </div>
    );
  }

  return (
    <div className="item-detail-container">
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h3>{product.price}</h3>
          <Link to="/" className="back-to-catalog">Volver al catálogo</Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;