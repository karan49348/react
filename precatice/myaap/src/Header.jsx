import React from 'react'
 import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <Link to={'/'}>Header</Link>
      <Link to={'Login'}>Login</Link>
      <Link to="/Signup">Signup</Link>
      <Link to="/Test">Test</Link>
      <Link to="/R13">R13</Link>
      <Link to="/Api">Api</Link>
      
      <Link to="/Producatdetial">Producatdetial</Link>
      
    </div>
  )
}

export default Header
