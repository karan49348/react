import React from "react";
import { useSelector } from "react-redux";

const Retting = () => {
  const userretting = useSelector((state) => state.Signup.products);
  console.log(userretting);
  return (
    <div>
      {userretting.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>{item.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Retting;
