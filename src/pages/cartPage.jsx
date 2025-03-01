import React from 'react'
import { useProductsContext } from '../contexts/productsContextProvider'
const CartPage = () => {
    const {cart} = useProductsContext()
  return (
    <div className='container'>
        <div className='d-flex row my-3 gap-3'>{cart.length > 0 ? cart.map((prod,i) => (
            <div key={i} className="card" style={{"width": "18rem", "padding": "0"}}>
              <img src={prod.cartId.productImageUrl} className="card-img-top" alt="ProductImage" style={{"height": "18rem"}}/>
              <div className="card-body">
                <h5 className="card-title">{prod.cartId.name}</h5>
                <p className="card-text">
                  Price: {prod.cartId.price}
                </p>
              </div>
            </div>
          )) : <p>Cart is Empty</p>}</div>
    </div>
  )
}

export default CartPage