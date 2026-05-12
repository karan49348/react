import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userdata } from "./slice/producat";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [sarch, setsarch] = useState("");
  const [sort, setsort] = useState("");

  const producat = useSelector((state) => state.allusr.userdata);

  const dispach = useDispatch();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        dispach(userdata(res.data.products));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispach]);

  const filterdata = producat
    ?.filter((x) => x.title.toLowerCase().includes(sarch.toLowerCase()))
    .sort((a, b) => {
      if (sort === "h") return b.price - a.price;
      if (sort === "l") return a.price - b.price;
      return 0;
    });

  const hendalcart = (item) => {
    dispach(userdata(item));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Search + Sort */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="search"
          placeholder="Searching Bar"
          value={sarch}
          onChange={(e) => setsarch(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-2 w-full md:w-80 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          onChange={(e) => setsort(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort</option>
          <option value="h">High-Low</option>
          <option value="l">Low-High</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterdata?.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            <h2 className="text-lg font-semibold mb-2 line-clamp-2">
              {item.title}
            </h2>

            <p className="text-green-600 font-bold text-xl mb-4">
              ₹ {item.price}
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => navigate(`/User/${item.id}`)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition duration-300"
              >
                User
              </button>

              {/* Cart Button */}
              <button
                onClick={() => hendalcart(item)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition duration-300"
              >
                Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
