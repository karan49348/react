import React, { useEffect } from "react";
import axios from "axios";

const Child = ({ senddata }) => {
  const fatchapi = async () => {
    const result = await axios.get("https://dummyjson.com/products");

    senddata(result.data.products);
  };

  useEffect(() => {
    fatchapi();
  }, []);

  return (
    <div className="flex justify-center items-center h-40 bg-gray-100 rounded-2xl shadow-md m-4">
      <p className="text-2xl font-bold text-blue-600">Child Page</p>
    </div>
  );
};

export default Child;
