import React from "react";
import "./Project.css";

const Project = ({ projects = [] }) => {
  return (
    <div className="project-container">
      <h1 className="title">My Projects</h1>
      <div className="project-box">
        {projects.map((project, idx) => (
          <p key={idx}>{project}</p>
        ))}
      </div>
    </div>
  );
};

export default Project;