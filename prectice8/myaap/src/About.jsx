import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const producat = useSelector((state) => state.allusr.userdata);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Product Discounts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {producat.map((s) => {
          return (
            <div
              key={s.id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300"
            >
              <img
                src={s.thumbnail}
                alt={s.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                {s.title}
              </h2>

              <p className="text-gray-600 mb-2">
                Price:
                <span className="font-bold text-green-600 ml-2">
                  ₹ {s.price}
                </span>
              </p>

              <p className="text-red-500 font-semibold">
                Discount: {s.discountPercentage}%
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
