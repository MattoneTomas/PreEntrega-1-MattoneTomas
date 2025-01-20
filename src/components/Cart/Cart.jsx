import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

    //early return
    if(cart.lenght === 0){
        return(
            <div>
                <h2>Oppps... el carrito esta vacio</h2>
                <Link to="/">Volver al inicio</Link>
            </div>
        )
    }

  return (
    <div className="cart">
        <ul>
      {
        cart.map((productCart)=> (  
            <li key={productCart.id}> 
                <img src={productCart.image} alt="" />
                <p>{productCart.name}</p>
                <p>cantidad : {productCart.quantity}</p>
                <p>precio c/u : {productCart.price}</p>
                <button onClick={ ()=>  deleteProductById(productCart.id)} >eliminar</button>
            </li>
        ))
      }
      </ul>

      <h3>Precio Total : {totalPrice()}</h3>
      <button onClick={deleteCart} > Vaciar Carrito </button>
    </div>
  )
}

export default Cart
