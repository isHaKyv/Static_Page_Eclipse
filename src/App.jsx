import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Juntador from "./Components/Templates/Juntador";
import ProductList from "./Components/Organismos/ProductList";
import ProductDetail from "./Components/Pages/ProductDetail";
import Login from "./Components/Organismos/Login";
import Register from "./Components/Organismos/Register";
import PokemonProductList from "./Components/Pages/PokemonList";
import YugiOhProductList from "./Components/Pages/YugiOhList";
import VariadosProductList from "./Components/Pages/VariadosList";
import Checkout from "./Components/Pages/Checkout";
import ShippingForm from "./Components/Organismos/ShippingForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/PokemonList" element ={<PokemonProductList/>} />
          <Route path="/YugiohList" element={<YugiOhProductList/>} />
          <Route path="/VariList" element={<VariadosProductList/>} />
          <Route path="/SHPForm" component={<ShippingForm/>} />
          <Route path="/checkout" element={<Checkout/>} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/products/:name" element={<ProductDetail />} />
          <Route path="/" element={<Juntador />} />
        </Routes>
      </div>  
    </Router>
  );
}

export default App;
