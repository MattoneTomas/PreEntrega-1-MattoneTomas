import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa"; // Librería para íconos

const CartWidget = () => {
  const cartCount = 5; // Número hardcodeado

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};

export default CartWidget;
