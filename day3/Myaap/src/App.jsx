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
  const name='sherrrrrr'
  const data={
    age:5000,
    class:'2th',
    city:"jaipur"
  }
   const array=["html","css","ract","javascript"]
   const arrobj=[
    {
      name:"karan",
      class:"react",
      age:555,
    },
     {
      name:"himanshu",
      class:"react",
      age:556,
    },
     {
      name:"ravindra",
      class:"react",
      age:557,
    },
     {
      name:"manish",
      class:"paython",
      age:569,
    }
   ]
   
  return (
    <BrowserRouter>
      <Hedar />
      <Routes>
      
        <Route path="/" element={<Intro name={name} />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/skill" element={<Skill name={name}/>} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Exprince" element={<Exprince />} />
        <Route path="/Hobbie" element={<Hobbie array={array}/>} />
        <Route path="/about" element={<About student={arrobj}/>} />
        <Route path="/Contact" element={<Contact user={data}  name={name} />} />
        <Route path="/Gole" element={<Gole />} />
        

      </Routes>
    </BrowserRouter>
  );
};

export default App;