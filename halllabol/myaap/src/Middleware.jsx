import React from 'react'
 import { Navigate } from 'react-router-dom';

const Middleware = ({children}) => {

   const islogin=localStorage.getItem("login");
    return  islogin ? children :<Navigate to="/Singup"/>;

 
}

export default Middleware

