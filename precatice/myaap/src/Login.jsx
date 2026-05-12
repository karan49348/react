import React, { useState } from 'react'
 import {useNavigate} from 'react-router-dom'
const Login = () => {
 const navigate=useNavigate();
  const [login, setlogin] = useState({
    name: '',
    password: '',
  })

  const result = JSON.parse(localStorage.getItem('userdata'))

  const hendalsumbit = (e) => {
    e.preventDefault()

    if (!result) {
      alert("aasuvidha k likhe khed hai par pahle singup kro")
navigate('/Signup')
      return
      
    }

    if (result.password === login.password && result.name === login.name) {
      localStorage.setItem('user', JSON.stringify(result))
       localStorage.setItem('token','true')
        navigate('/Api')

      alert("<login success> Wellcome ")
    } 
    else if (result.password !== login.password && result.name !== login.name) {
      alert("dono galt")
      

    } 
    else if (result.name !== login.name) {
      alert("name incorrect")
    } 
    else if (result.password !== login.password) {
      alert("password wrong")
    }

    setlogin({
      name: '',
      password: ''
    })
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form 
        onSubmit={hendalsumbit}
        className="bg-white p-6 rounded-2xl shadow-md w-80 flex flex-col gap-4"
      >

        <h2 className="text-xl font-semibold text-center">Login</h2>

        <input
          type="text"
          placeholder="enter your name"
          value={login.name}
          onChange={(e) => setlogin({ ...login, name: e.target.value })}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="enter your pass"
          value={login.password}
          onChange={(e) => setlogin({ ...login, password: e.target.value })}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button 
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          submit
        </button>

        <div className="text-sm text-gray-600 mt-2">
          <p>age: {result?.age}</p>
          <p>password: {result?.password}</p>
          <p>name: {result?.name}</p>
        </div>

      </form>

    </div>
  )
}

export default Login