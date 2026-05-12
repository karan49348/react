import React, { useState } from "react";
import Child from "./Child";
import { useDispatch, useSelector } from "react-redux";
import { userpost } from "./slice/Post";

const Perent = () => {
  const dispatch = useDispatch();

  const [post, setpost] = useState([]);

  const hendaldata = (data) => {
    setpost(data);

    dispatch(userpost(data));
  };

  const redexdata = useSelector((state) => state.allpost.userpost);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Child Component */}
      <Child senddata={hendaldata} />

      <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {post.map((x) => {
          return (
            <div
              key={x.id}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300"
            >
              <img
                src={x.thumbnail}
                alt={x.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                {x.title}
              </h2>

              <p className="text-green-600 font-bold text-xl">₹ {x.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Perent;
