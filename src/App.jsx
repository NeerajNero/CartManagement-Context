import { ProductsProvider } from "./contexts/productsContextProvider"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductPage from "./pages/ProductPage"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"
function App() {

  return (
    <>
     <ProductsProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/productsPage" element={<ProductPage />}/>
        </Routes>
      </Router>
     </ProductsProvider>
    </>
  )
}

export default App
