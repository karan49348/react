import React from "react";
import { useSelector } from "react-redux";

const Police = () => {
  const userpolice = useSelector((state) => state.Signup.products);
  console.log(userpolice);
  return (
    <div>
      {userpolice.map((item) => (
        <div key={item.id}>
          <p>{item.warrantyInformation}</p>
          <p>{item.shippingInformation}</p>
          <p>{item.availabilityStatus}</p>
        </div>
      ))}
    </div>
  );
};

export default Police;
