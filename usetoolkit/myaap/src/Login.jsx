import React, { useState } from "react";
import { useSelector } from "react-redux";
const Login = () => {
  const userdata = useSelector((state) => state.Signup.user);
  console.log(">.>>>.>>>", userdata);

  const [login, setLogin] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("login", JSON.stringify(login));
    console.log("data save ho gya hai", login);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={login.name}
          onChange={(e) => setLogin({ ...login, name: e.target.value })}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
