import React from 'react'
import { useProductsContext } from '../contexts/productsContextProvider'
import { useFetch } from '../useFetch'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const Navbar = () => {
    const {cart,setCart} = useProductsContext()
    const {data,loading,error} = useFetch("https://cart-management-backend-one.vercel.app/cart/cart","GET")
    console.log(data)
    useEffect(() => {
      if (data?.cart) {
        setCart(data.cart);
      }
    }, [data?.cart, setCart]);
  return (
    <div className='bg-light py-3'>
        <div className='container d-flex justify-content-between'>
        <h2>Context</h2>
        <div className='d-flex align-items-center'>
        <Link to='/productsPage' className='mx-3'>Products Page</Link>
        <Link to='/cart'>Cart ({cart.length || 0})</Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar