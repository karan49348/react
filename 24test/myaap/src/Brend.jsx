import { useSelector } from "react-redux";
import React from "react";

const Brend = () => {
  const answer = useSelector((state) => state.karan.products);

  console.log(">>>>>answer", answer);

  return (
    <div>
      {answer.map((item) => (
        <div key={item.id}>
          <p>{item.brand}</p>
          <p>{item.sku}</p>
          <p>{item.weight}</p>
        </div>
      ))}
    </div>
  );
};

export default Brend;
