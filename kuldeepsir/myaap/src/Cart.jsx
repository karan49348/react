import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart
    .reduce((sum, item) => sum + item.price, 0)
    .toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-5">
        <h1 className="text-4xl font-bold text-red-500">
          Cart Khali Hai 😢
        </h1>

        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Lelo Re Saman
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-center mb-10">
        Shopping Cart
      </h1>

      <div className="grid gap-6">
        {cart.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-xl shadow-md flex items-center gap-5"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-28 h-28 object-contain"
            />

            <div className="flex-1">
              <h3 className="text-xl font-semibold">
                {product.title}
              </h3>

              <p className="text-green-600 text-lg font-bold mt-2">
                ₹ {product.price}
              </p>
            </div>

            <button
              onClick={() => removeFromCart(product.id)}
              className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white p-5 rounded-xl shadow-md flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Total Price: ₹ {total}
        </h2>

        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Products
        </Link>
      </div>
    </div>
  );
};

export default Cart;