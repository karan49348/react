import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Cart from "./Cart";
import Home from "./Home";
import Modal from "./Modal";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route
          path="/cart"
          element={
            cart.length > 0 ? (
              <Cart cart={cart} setCart={setCart} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

