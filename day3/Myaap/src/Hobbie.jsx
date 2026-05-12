import React from "react";
import "./Hobbie.css";

const Hobbie = ({array}) => {
  return (
    <div className="hobbie-container">
      <h1 className="title">My Hobbies</h1>

      {array.map((x,index)=>(<p key={index}>{x}</p>))}
    </div>
  );
};

export default Hobbie;