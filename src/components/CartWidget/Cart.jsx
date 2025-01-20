import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext);

  // Mostrar un mensaje si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>¡Oops! El carrito está vacío</h2>
        <p>Parece que no has agregado ningún producto todavía.</p>
        <Link to="/" className="back-to-shop">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      <ul className="cart-list">
        {cart.map((productCart) => (
          <li key={productCart.id} className="cart-item">
            <img
              src={productCart.image}
              alt={productCart.name}
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <p className="cart-item-name">{productCart.name}</p>
              <p className="cart-item-quantity">Cantidad: {productCart.quantity}</p>
              <p className="cart-item-price">Precio c/u: {productCart.price}</p>
            </div>
            <button
              className="delete-product-btn"
              onClick={() => deleteProductById(productCart.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h3>Precio Total: ${totalPrice()}</h3>
        <button onClick={deleteCart}>Vaciar Carrito</button>
      </div>
    </div>
  );
};

export default Cart;