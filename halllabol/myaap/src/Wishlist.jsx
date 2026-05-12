import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();

  const [wishlist, setwishlist] = useState([]);

  useEffect(() => {
    setwishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
  }, []);

  const removeitem = (id) => {
    const updatewishlist = wishlist.filter((w) => w.id !== id);

    alert("Remove Item");

    setwishlist(updatewishlist);

    localStorage.setItem("wishlist", JSON.stringify(updatewishlist));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-pink-600">
          Wishlist ❤️
        </h1>

        {wishlist.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow-md text-center">
            <h1 className="text-3xl font-bold text-red-500 mb-5">
              Wishlist Khali Hai Mere Bhai 😢
            </h1>

            <button
              onClick={() => navigate("/Api")}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Back to Products
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlist.map((w) => {
                return (
                  <div
                    key={w.id}
                    className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition"
                  >
                    <img
                      src={w.thumbnail}
                      alt={w.title}
                      className="w-full h-52 object-cover rounded-lg mb-4"
                    />

                    <h2 className="text-xl font-bold mb-2">{w.title}</h2>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {w.description}
                    </p>

                    <p className="text-green-600 text-2xl font-bold mb-2">
                      ₹ {w.price}
                    </p>

                    <p className="text-orange-500 font-semibold mb-4">
                      Left Stock: {w.stock}
                    </p>

                    <button
                      onClick={() => removeitem(w.id)}
                      className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
                    >
                      Remove Item
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-10">
              <button
                onClick={() => navigate("/Api")}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
