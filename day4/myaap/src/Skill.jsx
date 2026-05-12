import React from "react";
import "./Skill.css";

const Skill = ({ skills = [] }) => {
  return (
    <div className="skill-container">
      <h1 className="title">My Skills</h1>
      <div className="skill-box">
        {skills.map((skill, idx) => (
          <p key={idx}>{skill}</p>
        ))}
      </div>
    </div>
  );
};

export default Skill;