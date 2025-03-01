import { ProductsProvider } from "./contexts/productsContextProvider"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductPage from "./pages/ProductPage"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"
import CartPage from "./pages/cartPage"
function App() {

  return (
    <>
     <ProductsProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/productsPage" element={<ProductPage />}/>
        </Routes>
      </Router>
     </ProductsProvider>
    </>
  )
}

export default App
