import React from "react";
import "./Exprince.css";

const Exprince = ({ experienceData = [] }) => {
  return (
    <div className="exp-container">
      <h1 className="title">My Experience</h1>
      <div className="exp-box">
        {experienceData.map((exp, idx) => (
          <p key={idx}>{exp}</p>
        ))}
      </div>
    </div>
  );
};

export default Exprince;