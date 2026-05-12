import React from "react";
import "./Hobbie.css";

const Hobbie = ({ hobbiesData = [] }) => {
  return (
    <div className="hobbie-container">
      <h1 className="title">My Hobbies</h1>
      <div className="hobbie-box">
        {hobbiesData.map((hobby, idx) => (
          <p key={idx}>{hobby}</p>
        ))}
      </div>
    </div>
  );
};

export default Hobbie;