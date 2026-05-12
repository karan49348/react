import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [login, setlogin] = useState({
    name: "",
    password: "",
  });

  const hendlesumbit = (e) => {
    e.preventDefault();

    console.log(login);

    localStorage.setItem("login", JSON.stringify(login));

    navigate("/Singup");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <form
        onSubmit={hendlesumbit}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Login
        </h1>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Enter your name"
            value={login.name}
            onChange={(e) =>
              setlogin({
                ...login,
                name: e.target.value,
              })
            }
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Enter your password"
            value={login.password}
            onChange={(e) =>
              setlogin({
                ...login,
                password: e.target.value,
              })
            }
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
