import React from "react";
import "./Skill.css";

const Skill = ({name}) => {
  return (
    <div className="skill-container">
      <h1 className="title">My Skills{name}</h1>

      <div className="skill-box">
        <p> HTML{name}</p>
        <p> CSS</p>
        <p> Tailwind CSS</p>
        <p> JavaScript{name}</p>
        <p> React (Learning)</p>
        <p> C</p>
        <p> C++</p>
      </div>
    </div>
  );
};

export default Skill;