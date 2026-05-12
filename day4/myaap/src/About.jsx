import React from "react";
import "./About.css";

const About = ({ aboutData = {} }) => {
  return (
    <div className="about-container">
      <h1 className="title">My Name is {aboutData.name}</h1>
      <p className="info">I am from {aboutData.location}</p>
    </div>
  );
};

export default About;