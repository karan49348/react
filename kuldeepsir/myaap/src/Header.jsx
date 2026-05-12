import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-3xl font-bold tracking-wide">
          myStore
        </Link>

        <div className="flex items-center gap-6 text-lg font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>

          <Link
            to="/cart"
            className="relative hover:text-yellow-300 transition"
          >
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
