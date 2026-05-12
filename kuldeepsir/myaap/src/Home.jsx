import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Home = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  const toggleCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Products</h1>

        <Link
          to="/cart"
          className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Go to Cart ({cart.length})
        </Link>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-lg capitalize transition 
              ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white border hover:bg-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product) => {
          const inCart = cart.find((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={product.image}
                className="w-full h-52 object-contain rounded mb-4"
                alt={product.title}
              />

              <h3 className="font-semibold text-lg mb-2">
                {product.title.slice(0, 50)}
              </h3>

              <p className="text-green-600 text-xl font-bold mb-4">
                ₹ {product.price}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => setModalData(product)}
                  className="flex-1 bg-gray-200 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  View
                </button>

                <button
                  onClick={() => toggleCart(product)}
                  className={`flex-1 py-2 rounded-lg text-white transition
                    ${
                      inCart
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-blue-500 hover:bg-blue-600"
                    }`}
                >
                  {inCart ? "Remove" : "Add"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {modalData && <Modal data={modalData} close={() => setModalData(null)} />}
    </div>
  );
};

export default Home;
