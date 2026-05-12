import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-600 text-white shadow-lg px-6 py-4">
      <div className="flex flex-wrap gap-6 justify-center text-lg font-semibold">
        <Link
          to="/About"
          className="hover:text-yellow-300 transition duration-300"
        >
          About
        </Link>

        <Link to="/" className="hover:text-yellow-300 transition duration-300">
          Home
        </Link>

        <Link
          to="/Abc"
          className="hover:text-yellow-300 transition duration-300"
        >
          Abc
        </Link>

        <Link
          to="/Child"
          className="hover:text-yellow-300 transition duration-300"
        >
          Child
        </Link>

        <Link
          to="/Perent"
          className="hover:text-yellow-300 transition duration-300"
        >
          Perent
        </Link>

        <Link
          to="/Props30"
          className="hover:text-yellow-300 transition duration-300"
        >
          Props30
        </Link>
      </div>
    </div>
  );
};

export default Header;
