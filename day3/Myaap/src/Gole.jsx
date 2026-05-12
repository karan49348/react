import React from "react";
import "./Gole.css";

const Gole = (props) => {
  return (
    <div className="goal-container">
      <h1 className="title">My Goal  {props.user.class}</h1>

      <div className="goal-box">
        <p>
          My goal is to become a skilled Full Stack Developer and work in a
          good company where I can improve my skills, gain experience, and
          contribute to real-world projects.
        </p>
      </div>
    </div>
  );
};

export default Gole;