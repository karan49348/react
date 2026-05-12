import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Singup = () => {
  const navigate = useNavigate();

  const [singup, setsingup] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    age: "",
    gender: "",
    password: "",
    confirmpassword: "",
  });

  const hendalesumbit = (e) => {
    e.preventDefault();

    console.log(singup);

    const login = JSON.parse(localStorage.getItem("login"));

    if (!login) {
      navigate("/Login");
    } else if (
      login.name === singup.name &&
      login.password === singup.password
    ) {
      alert("Login Done ✅");

      navigate("/Api");
    } else if (
      login.name !== singup.name &&
      login.password !== singup.password
    ) {
      alert("Dono Galat Hai ❌");
    } else if (login.name !== singup.name) {
      alert("Name Galat Hai ❌");
    } else {
      alert("Password Galat Hai ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <form
        onSubmit={hendalesumbit}
        className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Signup
        </h1>

        <div className="space-y-5">
          <input
            type="text"
            placeholder="Enter your name"
            value={singup.name}
            onChange={(e) =>
              setsingup({
                ...singup,
                name: e.target.value,
              })
            }
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={singup.email}
            onChange={(e) =>
              setsingup({
                ...singup,
                email: e.target.value,
              })
            }
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="number"
            placeholder="Enter your phone number"
            value={singup.phone}
            onChange={(e) =>
              setsingup({
                ...singup,
                phone: e.target.value,
              })
            }
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Enter your city"
            value={singup.city}
            onChange={(e) =>
              setsingup({
                ...singup,
                city: e.target.value,
              })
            }
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="number"
            placeholder="Enter your age"
            value={singup.age}
            onChange={(e) =>
              setsingup({
                ...singup,
                age: e.target.value,
              })
            }
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            value={singup.gender}
            onChange={(e) =>
              setsingup({
                ...singup,
                gender: e.target.value,
              })
            }
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="password"
            placeholder="Enter your password"
            value={singup.password}
            onChange={(e) =>
              setsingup({
                ...singup,
                password: e.target.value,
              })
            }
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Confirm your password"
            value={singup.confirmpassword}
            onChange={(e) =>
              setsingup({
                ...singup,
                confirmpassword: e.target.value,
              })
            }
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-8 bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Singup;
