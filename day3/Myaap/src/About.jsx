import React from 'react'
import "./About.css"

const About = ({student}) => {
  console.log(`>>>>>arrayobj vala aya hai ya nhi`,student);
  
  return (
    <div className="about-container">
     <h1>users list</h1>
     {student.map((x)=> (<p key={x.id}>{x.name}-{x.age}-{x.class}</p>))}
    </div>
  )
}

export default About