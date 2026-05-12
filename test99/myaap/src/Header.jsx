import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black text-white flex gap-6 p-4 shadow-lg">
      <Link
        to="/Abc"
        className="hover:text-yellow-400 duration-300 text-lg font-semibold"
      >
        products
      </Link>

      <Link
        to="/Child"
        className="hover:text-yellow-400 duration-300 text-lg font-semibold"
      >
        Form
      </Link>
    </div>
  );
};

export default Header;
