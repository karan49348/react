import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Skill from "./Skill";
import Project from "./Project";
import Intro from "./Intro";  
import Hedar from "./Hedar";
import Hobbie from "./Hobbie";
import Education from "./Education";
import Exprince from "./Exprince";
import Contact from "./Contact"; 
import About from "./About";
import Gole from "./Gole";


const App = () => {
   const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"];

 const projects = [
    "WhatsApp Chat Application JavaScript",
    "Counter App JavaScript",
    "Follow Page UI HTML, CSS, Tailwind",
    "Zomato Frontend Clone HTML, CSS, Tailwind"
    
  ];
 const educationData = [
    "10th Passed - 2019",
    "12th Passed - 2021",
    "Graduation (B.A.) - 2024"
  ];

  const experienceData = [
    "I have 6 months of experience working in a bank.",
    "I enjoy problem solving.",
    "I like frontend design.",
    "In my free time, I enjoy playing football."
  ];
    const hobbiesData = [
    "Problem Solving",
    "Traveling",
    "Playing Football",
    "Frontend Development"
  ];
  const aboutData = {
    name: "Karan Singh",
    location: "Jhunjhunu, Rajasthan"
  };
   const contactData = {
    email: "karan@example.com",
    phone: " 1234567890",
    address: "India"
  };
  return (
    <BrowserRouter>
      <Hedar />

      <Routes>
        <Route path="/" element={<Intro  />} />
    
        <Route path="/project" element={<Project projects={projects} />} />
        <Route path="/skill" element={<Skill skills={skills} />} />
<Route path="/education" element={<Education educationData={educationData} />} />
        <Route path="/exprince" element={<Exprince experienceData={experienceData } />} />
        <Route path="/hobbie" element={<Hobbie  hobbiesData={hobbiesData}/>} />
        <Route path="/about" element={<About  aboutData={aboutData}/>} />
        <Route path="/Contact" element={<Contact contactData ={contactData }/>} />
        <Route path="/gole" element={<Gole />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;