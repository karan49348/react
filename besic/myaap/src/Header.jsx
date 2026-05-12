import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to={"/"}> Header</Link>
      <Link to={"/Login"}> Login</Link>
      <Link to={"/Signup"}> Signup</Link>
      <Link to={"/Child"}> Child</Link>
      <Link to={"/Parent"}> Parent</Link>
    </div>
  );
}

export default Header
