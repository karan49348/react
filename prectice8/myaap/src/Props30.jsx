import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fachapi } from "./slice/fakestore";
import Child from "./Child";

const Props30 = ({ data }) => {
  let newdata = data?.products || [];

  const [full, setfull] = useState([]);
  const [child, setChild] = useState([]);

  const dispatch = useDispatch();

  const slicedata = useSelector((state) => state.fakestore?.producat || []);

  console.log("Redux data:", slicedata);

  useEffect(() => {
    dispatch(fachapi());
  }, [dispatch]);

  const handleData = (data) => {
    setChild(data);
  };

  useEffect(() => {
    setfull([...slicedata, ...newdata, ...child]);
  }, [slicedata, newdata, child]);

  console.log(">>>>>>fullData", full);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Child Component */}
      <Child senddata={handleData} />

      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {full.map((x, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300"
            >
              <img
                src={x.thumbnail || x.image}
                alt={x.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                {x.title}
              </h2>

              <p className="text-green-600 font-bold text-xl mb-2">
                ₹ {x.price}
              </p>

              <p className="text-gray-500 text-sm">Category: {x.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Props30;
