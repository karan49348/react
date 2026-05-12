import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adduser } from "./slice/signupslice";

const Signup = () => {
  const dispatch = useDispatch();
  const [Signup, setSignup] = useState({
    name: "",
    password: "",
  });
  const hendalsumbit = (e) => {
    e.preventDefault();
    dispatch(adduser(Signup));
    localStorage.setItem("signup", JSON.stringify(Signup));
    alert("done");
  };
  return (
    <div>
      <form onSubmit={hendalsumbit}>
        <input
          type="text"
          placeholder="enter your name"
          value={Signup.name}
          onChange={(e) => setSignup({ ...Signup, name: e.target.value })}
        />
        <input
          type="password"
          placeholder="enter your password"
          value={Signup.password}
          onChange={(e) => setSignup({ ...Signup, password: e.target.value })}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Signup;
