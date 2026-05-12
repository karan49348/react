import { Navigate } from 'react-router-dom'

function Middleware({ children }) {

  const islogin = localStorage.getItem('token')

  return islogin ? children : <Navigate to="/Signup" />
}

export default Middleware