import React from 'react'
import { Link } from 'react-router-dom'
import "./Heder.css"

const Heder = () => {
  return (
    <div className="navbar">

      <div className="logo">
      karan singh 
      </div>

      <div className="nav-links">
        <Link to="/help">Help</Link>
        <Link to="/about">About</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/assiment1">Assiment</Link>
        <Link to="/login">Login</Link>
        <Link to="/Emai">Emai</Link>
<Link to="/">Signup</Link>
        <Link to="/newfirst">NewFirst</Link>
        
        <Link to="/newtwo">Newtwo</Link>
        <Link to="/Pre">Pre</Link>
      </div>

    </div>
  )
}

export default Heder