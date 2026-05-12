import React, { useEffect, useState } from "react";
import { fachapi } from "./slice/fakestore";
import { useDispatch, useSelector } from "react-redux";

const Abc = () => {
  const [search, setsearch] = useState("");
  const [sort, setsort] = useState("");

  const dispach = useDispatch();

  const data = useSelector((state) => state.fakestore.producat);

  useEffect(() => {
    dispach(fachapi());
  }, [dispach]);

  const filter = data
    .filter((x) => {
      return x.title.toLowerCase().includes(search.toLowerCase());
    })
    .sort((a, b) => {
      if (sort === "h") return b.price - a.price;
      if (sort === "l") return a.price - b.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Search + Sort */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="search"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          onChange={(e) => setsort(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Sorting</option>
          <option value="h">High Price</option>
          <option value="l">Low Price</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filter.map((x) => (
          <div
            key={x.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300"
          >
            <img
              src={x.image}
              alt={x.title}
              className="h-48 w-full object-contain mb-4"
            />

            <h2 className="font-semibold text-lg mb-2 line-clamp-2">
              {x.title}
            </h2>

            <p className="text-green-600 font-bold text-xl">₹ {x.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abc;
