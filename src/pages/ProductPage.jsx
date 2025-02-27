import React from "react";
import { useFetch } from "../useFetch";
import { useProductsContext } from "../contexts/productsContextProvider";

const ProductPage = () => {
  const { products, setProducts, cart, setCart } = useProductsContext();
  const { data, loading, error } = useFetch(
    "http://localhost:5000/product/products","GET"
  );
  console.log(data);
  if (data?.products) {
    setProducts(data?.products);
  }
  console.log(products);

  const handleAddToCart = (e,prod) => {
    e.preventDefault()
    
  }
  return (
    <div className="container my-3">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="d-flex gap-5">
        {products.length > 0 &&
          products.map((prod) => (
            <div className="card" style={{"width": "18rem"}}>
              <img src={prod.productImageUrl} className="card-img-top" alt="ProductImage" style={{"height": "18rem"}}/>
              <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">
                  Price: {prod.price}
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
