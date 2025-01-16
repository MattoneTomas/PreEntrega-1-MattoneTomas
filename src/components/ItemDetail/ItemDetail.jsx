import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
    return (
        <div className="product-card">
            <img
                src={product.image}
                alt={product.name}
                className="product-image"
            />
            <div className="product-info">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h3>Precio: {product.price}</h3>
                <a href="/" className="back-to-catalog">
                    Volver al catálogo
                </a>
            </div>
        </div>
    );
};

export default ItemDetail;