
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";
import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa"; // Librería para íconos
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  let quantity = totalQuantity()

  return (
    <Link to="/cart" className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-count">{ quantity !== 0 && quantity  }</span>
    </Link>
  );
};

export default CartWidget;
