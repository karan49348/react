import React from "react";
import "./Education.css";

const Education = ({ educationData = [] }) => {
  return (
    <div className="edu-container">
      <h1 className="title">My Education</h1>
      <div className="edu-box">
        {educationData.map((edu, idx) => (
          <p key={idx}>{edu}</p>
        ))}
      </div>
    </div>
  );
};

export default Education;