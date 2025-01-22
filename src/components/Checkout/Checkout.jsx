import React from 'react'
import { useState } from 'react'
import FormCheckout from './FormCheckout'
import { CartContext } from '../CartWidget/CartContext'

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })
    const { cart, totalPrice } = useContext(CartContext)

    const handleChangeInput = (event) => {

        setDataForm( { ...dataForm, [event.target.name] : event.target.value } )

    }

    const handleSubmitForm = (event) =>{
        event.preventDefault()
        const orden = {
            buyer: { ...dataForm  },
            products: [ ...carts ],
            total: totalPrice()

        }
    }


  return (
    <div>
      <FormCheckout
        dataForm={dataForm}
        handleChangeInput={handleChangeInput}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  )
}

export default Checkout
