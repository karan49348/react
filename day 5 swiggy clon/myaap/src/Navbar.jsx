// Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-orange-600">Swiggy</h1>

      <button className="sm:hidden text-xl">&#9776;</button>

      <div className="space-x-6 hidden sm:block">
        <a href="#" className="hover:text-orange-600">Home</a>
        <a href="#" className="hover:text-orange-600">Offers</a>
        <a href="#" className="hover:text-orange-600">Help</a>
        <a href="#" className="hover:text-orange-600">Sign In</a>
      </div>
    </nav>
  );
}

export default Navbar;