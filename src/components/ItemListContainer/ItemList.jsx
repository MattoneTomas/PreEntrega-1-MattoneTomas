import React from "react";
import { Link } from "react-router-dom";
import "./ItemList.css";

const ItemList = ({ products }) => {
    return (
        <div className="products-grid">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-imagen"
                    />
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-price">{product.price}</p>
                    <Link to={`/item/${product.id}`} className="detail-link">
                        Ver Producto
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ItemList;