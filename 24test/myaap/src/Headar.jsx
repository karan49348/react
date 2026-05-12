import React from "react";
import { Link } from "react-router-dom";

const Headar = () => {
  return (
    <div>
      <Link to="/Api"> Api</Link>
      <Link to="/Brend"> brend</Link>

      <Link to="/Police"> police</Link>
      <Link to="/Retting"> retting</Link>
    </div>
  );
};

export default Headar;
