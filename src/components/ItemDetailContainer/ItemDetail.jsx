import React, { useContext, useState } from "react";
import { CartContext } from "../CartWidget/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
    const { addProduct } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const fields = [
        { label: "Cantidad", value: quantity, onChange: setQuantity, type: "number", min: 1 },
    ];

    const handleAddToCart = () => {
        if (quantity > 0) {
            const productCart = { ...product, quantity };
            addProduct(productCart);
            alert(`Se añadió ${quantity} "${product.name}" al carrito.`);
        } else {
            alert("Por favor selecciona una cantidad válida.");
        }
    };

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

                {fields.map((field, index) => (
                    <div key={index} className="quantity-control">
                        <label htmlFor={`field-${index}`}>{field.label}: </label>
                        <input
                            id={`field-${index}`}
                            type={field.type}
                            value={field.value}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                            min={field.min}
                        />
                    </div>
                ))}

                <button onClick={handleAddToCart} className="add-to-cart-btn">
                    Agregar al carrito
                </button>
                <a href="/" className="back-to-catalog">
                    Volver al catálogo
                </a>
            </div>
        </div>
    );
};

export default ItemDetail;