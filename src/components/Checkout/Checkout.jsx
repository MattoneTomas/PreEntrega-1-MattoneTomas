import React from 'react'
import { useContext, useState } from "react";
import FormCheckout from './FormCheckout'
import { CartContext } from '../CartWidget/CartContext.jsx'
import { Timestamp } from 'firebase/firestore'
import db from "../../db/db"
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })
    const [orderId, setOrderId] = useState(null)
    const {cart, totalPrice } = useContext(CartContext)

    const handleChangeInput = (event) => {

        setDataForm( { ...dataForm, [event.target.name] : event.target.value } )

    }

    const handleSubmitForm = async(event) =>{
        event.preventDefault()
        const order = {
          buyer: { ...dataForm },
          products: [ ...cart ],
          total: totalPrice(),
          date: Timestamp.fromDate(new Date())
      }
      await uploadOrder(order)
    }


    const uploadOrder = async (newOrder) => {
      try {
          const ordersRef = collection(db, "orders");
          const response = await addDoc(ordersRef, newOrder);
          setOrderId(response.id);
      } catch (error) {
          console.error("Error al subir la orden:", error);
      }
  }

  return (
    <div>
        {orderId ? (
            <div>
                <h2>Orden subida correctamente! Guarde su número de seguimiento</h2>
                <h3>{orderId}</h3> {/* Nota: Cambiado a interpolación */}
            </div>
        ) : cart.length === 0 ? (
            <h2>El carrito está vacío. ¡Agrega productos antes de continuar!</h2>
        ) : (
            <FormCheckout
                dataForm={dataForm}
                handleChangeInput={handleChangeInput}
                handleSubmitForm={handleSubmitForm}
            />
        )}
    </div>
)
}

export default Checkout
