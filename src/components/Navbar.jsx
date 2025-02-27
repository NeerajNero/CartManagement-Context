import React from 'react'
import { useProductsContext } from '../contexts/productsContextProvider'

const Navbar = () => {
    const {cart} = useProductsContext()
  return (
    <div className='bg-light py-3'>
        <div className='container d-flex justify-content-between'>
        <h2>Context</h2>
        <div className='d-flex align-items-center'>
        <p className='mx-3'>Products Page</p>
        <p>Cart ({cart.length})</p>
        </div>
        </div>
    </div>
  )
}

export default Navbar