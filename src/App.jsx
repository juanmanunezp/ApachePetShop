import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'


function App() {

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"¡BIENVENIDO A APACHE PETSHOP!"} />} />
            <Route path="/category/:idCategory" element={<ItemListContainer greeting={"APACHE PETSHOP"} />} />
            <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
