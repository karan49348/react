import React, { useEffect, useState } from "react";
import { fachapi } from "./slice/slice";
import { useDispatch, useSelector } from "react-redux";
import Child from "./Child";

const Abc = () => {
  const [search, setsearch] = useState("");
  const [sort, setsort] = useState("");

  // New Products Store
  const [allProducts, setAllProducts] = useState([]);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.fakestore.producat);

  // API Call
  useEffect(() => {
    dispatch(fachapi());
  }, [dispatch]);

  // Redux data -> local state
  useEffect(() => {
    setAllProducts(data);
  }, [data]);

  // Child se new product receive
  const sendData = (newProduct) => {
    setAllProducts([...allProducts, newProduct]);
  };

  // Search + Sort
  const filter = allProducts
    .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "high") return b.price - a.price;
      if (sort === "low") return a.price - b.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Form */}
      <Child sendData={sendData} />

      {/* Total Products */}
      <h1 className="text-2xl font-bold my-6">
        Total Products : {filter.length}
      </h1>

      {/* Search + Sort */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2 outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={sort}
          onChange={(e) => setsort(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-52 outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Sorting</option>
          <option value="high">High to Low</option>
          <option value="low">Low to High</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filter.map((x) => (
          <div
            key={x.id}
            className="bg-white rounded-2xl shadow-lg p-5 hover:scale-105 duration-300"
          >
            {/* Image */}
            <img
              src={x.thumbnail}
              alt={x.title}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-3">{x.title}</h2>

            {/* Price */}
            <p className="text-green-600 font-semibold text-lg mb-2">
              ₹ {x.price}
            </p>

            {/* Description */}
            <p className="text-gray-600 mb-2 line-clamp-3">{x.description}</p>

            {/* Category */}
            <p className="text-sm text-purple-500 mb-1">
              Category : {x.category}
            </p>

            {/* Rating */}
            <p className="text-sm text-yellow-500 mb-1">Rating : {x.rating}</p>

            {/* Stock */}
            <p className="text-sm text-red-500 mb-1">Stock : {x.stock}</p>

            {/* Discount */}
            <p className="text-sm text-blue-500">
              Discount : {x.discountPercentage || 0}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abc;
