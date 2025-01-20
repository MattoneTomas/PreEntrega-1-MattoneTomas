import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";
import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
    const { addProduct } = useContex(CartContext) 

    const AddProductInCart = (count) => {
        const productCart = { ...product, quantity: count}

        addProduct(productCart)
    }



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