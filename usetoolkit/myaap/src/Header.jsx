import React from 'react'
 import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <Link to={"/"}>home</Link>
      <Link to={"/Login"}>login</Link>
      <Link to={"/Signup"}>signup</Link>
    </div>
  );
}

export default Header
