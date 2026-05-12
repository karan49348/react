import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Userinfo = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center space-y-4">
        {/* Image */}
        <div className="flex justify-center">
          <LazyLoadImage
            effect="blur"
            src={data.image}
            className="h-28 w-28 rounded-full border object-cover"
          />
        </div>

        {/* Info */}
        <h2 className="text-2xl font-bold">
          {data.firstName} {data.lastName}
        </h2>

        <p className="text-gray-600">{data.maidenName}</p>
        <p className="text-gray-600">{data.email}</p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-4">
          <button
            onClick={() => navigate(`/recipes/${id}`)}
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            View Recipes
          </button>

          <button
            onClick={() => navigate(`/cart/${id}`)}
            className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            View Cart
          </button>
           <button onClick={()=>navigate(-1)}>goback</button>
        </div>
      </div>
    </div>
  );
};

export default Userinfo;
