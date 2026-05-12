import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-3xl font-bold text-white">My App</h1>

        <div className="flex items-center gap-6">
          <Link
            to="/Login"
            className="text-white text-lg font-medium hover:text-yellow-300 transition"
          >
            Login
          </Link>

          <Link
            to="/Singup"
            className="text-white text-lg font-medium hover:text-yellow-300 transition"
          >
            Signup
          </Link>

          <Link
            to="/Api"
            className="text-white text-lg font-medium hover:text-yellow-300 transition"
          >
            Api
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
