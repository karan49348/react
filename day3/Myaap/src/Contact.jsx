import React from "react";
import "./Contact.css"

const Contact = ({user,name}) => {
  console.log(user)
  return (
    <div className="page-container">
      <h1 className="title">Contact Me</h1>

      <div className="box">
        <h1>fdllf{name}</h1>
        <h1> age:{user.age}</h1>
        <h1>city:{user.city}</h1>
        <h1>class:{user.class}</h1>

      </div>
    </div>
  );
};

export default Contact;