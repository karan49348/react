import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const userabout = useSelector((state) => state.Signup.products);
  console.log(userabout);

  return (
    <div>
      {userabout.map((item) => (
        <div key={item.id}>
          <p>{item.date}</p>
          <p>{item.reviewerName}</p>
          <p>{item.reviewerEmail}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
