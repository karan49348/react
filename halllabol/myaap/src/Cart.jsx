import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const [cart, setcart] = useState([]);

  useEffect(() => {
    setcart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const removeitem = (id) => {
    const updatecart = cart.filter((c) => c.id !== id);

    alert("Remove Item");

    setcart(updatecart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatecart)
    );

    navigate("/Api");
  };

  const totalammount = cart.reduce((total, curr) => {
    return total + curr.price;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="max-w-6xl mx-auto">
        
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">
            Shopping Cart
          </h1>

          <p className="text-2xl font-semibold text-green-600">
            Total: ₹ {totalammount.toFixed(2)}
          </p>
        </div>

        
        {cart.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow-md text-center">
            <h1 className="text-3xl font-bold text-red-500 mb-5">
              Cart Khali Hai Mere Bhai 😢
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cart.map((c) => {
                return (
                  <div
                    key={c.id}
                    className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition"
                  >
                    
                    <img
                      src={c.thumbnail}
                      alt={c.title}
                      className="w-full h-52 object-cover rounded-lg mb-4"
                    />

                    
                    <h2 className="text-xl font-bold mb-2">
                      {c.title}
                    </h2>

                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {c.description}
                    </p>

                    
                    <p className="text-green-600 text-2xl font-bold mb-4">
                      ₹ {c.price}
                    </p>

                    
                    <button
                      onClick={() => removeitem(c.id)}
                      className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
                    >
                      Remove Item
                    </button>
                  </div>
                );
              })}
            </div>

            
            <div className="mt-10 text-center">
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

export default Cart;