import React, { use } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const fetchProductsPromise = axios
  .get("https://dummyjson.com/products")
  .then((res) => res.data.products)
  .catch((err) => {
    console.error("Error fetching data:", err);
    return [];
  });

const Api = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const products = use(fetchProductsPromise);

  const [data, setData] = useState(products);

  const [cart, setcart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  const [wishlist, setwishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || [],
  );

  const [sarch, setsarch] = useState("");

  const [orignaldat, setorignaldat] = useState(products);

  const [sortPrice, setSortPrice] = useState("");

  const [sortRating, setSortRating] = useState("");

  const [filterCategory, setFilterCategory] = useState("");

  const categories = [...new Set(products.map((p) => p.category))];

  if (id) {
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
      return <p className="text-center text-2xl mt-10">Product not found</p>;
    }

    return (
      <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />

          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>

          <p className="text-gray-600 mb-4">{product.description}</p>

          <p className="font-semibold text-blue-600">
            Category: {product.category}
          </p>

          <p className="text-green-600 text-3xl font-bold mt-3">
            ₹ {product.price}
          </p>

          <p className="text-yellow-500 font-semibold mt-2">
            ⭐ {product.rating}
          </p>

          <button
            onClick={() => navigate("/Api")}
            className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  const hendlecart = (product) => {
    const exit = cart.find((x) => x.id === product.id);

    if (!exit) {
      const updatecart = [...cart, product];

      setcart(updatecart);

      localStorage.setItem("cart", JSON.stringify(updatecart));

      alert("Product Added ✅");

      navigate("/Cart");
    } else {
      alert("Pahle Se Add Hai");
    }
  };

  const hendalwishlist = (product) => {
    const exist = wishlist.find((z) => z.id === product.id);

    if (!exist) {
      const updatewishlist = [...wishlist, product];

      setwishlist(updatewishlist);

      localStorage.setItem("wishlist", JSON.stringify(updatewishlist));

      alert("Wishlist Added ❤️");

      navigate("/Wishlist");
    } else {
      alert("Pahle Se Add Hai");
    }
  };

  const hendlesarch = () => {
    const query = sarch.toLowerCase().trim();

    if (query === "") {
      applySortAndFilter(orignaldat);
      return;
    }

    const filtered = orignaldat.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.category && item.category.toLowerCase().includes(query)),
    );

    applySortAndFilter(filtered);
  };

  const applySortAndFilter = (items) => {
    let result = [...items];

    if (filterCategory) {
      result = result.filter((item) => item.category === filterCategory);
    }

    if (sortPrice === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortPrice === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortRating === "low") {
      result.sort((a, b) => a.rating - b.rating);
    }

    setData(result);
  };

  const handleSortPrice = (e) => {
    const val = e.target.value;

    setSortPrice(val);

    applySortAndFilter(orignaldat);
  };

  const handleSortRating = (e) => {
    const val = e.target.value;

    setSortRating(val);

    applySortAndFilter(orignaldat);
  };

  const handleFilterCategory = (e) => {
    const val = e.target.value;

    setFilterCategory(val);

    applySortAndFilter(orignaldat);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Products
      </h1>

      <div className="flex flex-wrap gap-4 mb-8">
        <input
          type="text"
          placeholder="Search Products..."
          value={sarch}
          onChange={(e) => setsarch(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg flex-1 min-w-[220px]"
        />

        <button
          onClick={hendlesarch}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>

        <select
          value={sortPrice}
          onChange={handleSortPrice}
          className="border border-gray-300 p-3 rounded-lg"
        >
          <option value="">Price Sort</option>

          <option value="low">Low to High</option>

          <option value="high">High to Low</option>
        </select>

        <select
          value={sortRating}
          onChange={handleSortRating}
          className="border border-gray-300 p-3 rounded-lg"
        >
          <option value="">Rating Sort</option>

          <option value="low">Low to High</option>
        </select>

        <select
          value={filterCategory}
          onChange={handleFilterCategory}
          className="border border-gray-300 p-3 rounded-lg"
        >
          <option value="">All Categories</option>

          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {data.length === 0 && (
        <p className="text-center text-2xl font-semibold">No Products Found</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((s) => {
          return (
            <div
              key={s.id}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={s.thumbnail}
                alt={s.title}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />

              <h2 className="text-xl font-bold mb-2">{s.title}</h2>

              <p className="text-gray-600 mb-3 line-clamp-3">{s.description}</p>

              <p className="font-semibold text-blue-600">
                Category: {s.category}
              </p>

              <p className="text-green-600 text-2xl font-bold mt-2">
                ₹ {s.price}
              </p>

              <p className="text-yellow-500 font-semibold mb-4">
                ⭐ {s.rating}
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => hendlecart(s)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Add Cart
                </button>

                <button
                  onClick={() => hendalwishlist(s)}
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
                >
                  Wishlist
                </button>

                <button
                  onClick={() => navigate(`/Api/${s.id}`)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Api;
