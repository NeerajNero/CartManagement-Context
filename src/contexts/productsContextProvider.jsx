import { useState, useContext} from "react"
import productsContext from "./useContext"
export const ProductsProvider = ({children}) => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    return <productsContext.Provider value={{products, setProducts, cart, setCart}}>
        {children}
    </productsContext.Provider>
}


export const useProductsContext = () => {
    return useContext(productsContext)
}