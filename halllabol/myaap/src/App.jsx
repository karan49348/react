import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Singup from "./Singup";
import Api from "./Api";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Middleware from "./Middleware";

function App() {
  return (
    <Suspense
      fallback={
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      }
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Singup" element={<Singup />} />
          <Route
            path="/Api"
            element={
              <Middleware>
                <Api />
              </Middleware>
            }
          />
          <Route
            path="/Api/:id"
            element={
              <Middleware>
                <Api />
              </Middleware>
            }
          />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
