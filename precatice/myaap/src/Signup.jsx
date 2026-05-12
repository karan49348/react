import React, { useState } from 'react'
 import {useNavigate} from 'react-router-dom'
const Signup = () => {
  const navigate= useNavigate();
  const [form, setform] = useState({
    name: '',
    password: '',
    age: '',
  })

  const hendalsumbit = (e) => {
    e.preventDefault()

    localStorage.setItem('userdata', JSON.stringify(form))
    console.log(form)

    alert("data saved")
    navigate('/Login')

    setform({
      name: '',
      age: '',
      password: '',
    })
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      
      <form 
        onSubmit={hendalsumbit} 
        className="bg-white p-6 rounded-2xl shadow-md w-80 flex flex-col gap-4"
      >

        <h2 className="text-xl font-semibold text-center">Signup</h2>

        <input
          type="text"
          placeholder="enter your name"
          value={form.name}
          onChange={(e) => setform({ ...form, name: e.target.value })}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          placeholder="enter your age"
          value={form.age}
          onChange={(e) => setform({ ...form, age: e.target.value })}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="plase enter your password"
          value={form.password}
          onChange={(e) => setform({ ...form, password: e.target.value })}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          submit
        </button>

      </form>

    </div>
  )
}

export default Signup