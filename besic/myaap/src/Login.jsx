import React, { useState } from 'react'

const Login = () => { 

  const [data, setdata] = useState({
    email: '',
    password: '',
  })

  const [loin, setlogin] = useState(false)
  const [user, setuser] = useState(null)

  const HendalLogin = (e) => {
    e.preventDefault()

    const result = JSON.parse(localStorage.getItem('signup'))
    console.log(result)

    if (!result) {
      alert("Signup karo pehle ")
      return
    }

    if (data.email === result.email && data.password === result.password) {
      setlogin(true)
      setuser(result)
      alert("Login Successful ")
    } 
    else if (data.email !== result.email && data.password !== result.password) {
      alert("Dono galat hai ")
    } 
    else if (data.email !== result.email) {
      alert("Email galat hai ")
    } 
    else if (data.password !== result.password) {
      alert("Password galat hai ")
    }

    setdata({
      email: "",
      password: ''
    })
  }

  return (
    <div>

      <form onSubmit={HendalLogin}>
        <input
          type="email"
          placeholder='enter your email'
          value={data.email}
          onChange={(e) => setdata({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          placeholder='enter your password'
          value={data.password}
          onChange={(e) => setdata({ ...data, password: e.target.value })}
        />

        <button type='submit'>Login</button>
      </form>

      {loin && user && (
        <div>
          <h3>User Details</h3>
          <div>Name: {user.name}</div>
          <div>Username: {user.username}</div>
          <div>Age: {user.age}</div>
          <div>Number: {user.number}</div>
          <div>Email: {user.email}</div>
          <div>Gender: {user.gender}</div>
        </div>
      )}

    </div>
  )
}

export default Login