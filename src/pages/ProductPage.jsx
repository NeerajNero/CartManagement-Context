import React, { useEffect } from "react";
import { useFetch } from "../useFetch";
import { useProductsContext } from "../contexts/productsContextProvider";
import axios from 'axios'

const ProductPage = () => {
  const { products, setProducts, setCart } = useProductsContext();
  const { data, loading, error } = useFetch(
    "https://cart-management-backend-one.vercel.app/product/products","GET"
  );
  useEffect(() => {
    if (data?.products) {
      setProducts(data?.products);
    }
  },[data?.products])

  const handleAddToCart = async(e,prod) => {
    e.preventDefault()
    const response = await axios.post("https://cart-management-backend-one.vercel.app/cart/addToCart",{productId: prod._id})
    console.log(response.data.cart)
    setCart((prevData) => [...prevData, response.data.cart]);
  }
  return (
    <div className="container my-3">
      {loading && products.length === 0 && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="d-flex gap-5">
        {products.length > 0 &&
          products.map((prod) => (
            <div key={prod._id} className="card" style={{"width": "18rem"}}>
              <img src={prod.productImageUrl} className="card-img-top" alt="ProductImage" style={{"height": "18rem"}}/>
              <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">
                  <strong>Price:</strong> {prod.price}
                </p>
                <button onClick={(e) => handleAddToCart(e,prod)} className="btn btn-primary">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
