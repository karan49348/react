import React, { useState } from "react";

const Child = ({ sendData }) => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    rating: "",
    stock: "",
  });

  const [error, setError] = useState({});

  // Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {};

    if (form.title === "") {
      obj.title = "Enter Title";
    }

    if (form.price === "") {
      obj.price = "Enter Price";
    }

    if (form.description === "") {
      obj.description = "Enter Description";
    }

    if (form.category === "") {
      obj.category = "Enter Category";
    }

    if (form.rating === "") {
      obj.rating = "Enter Rating";
    }

    if (form.stock === "") {
      obj.stock = "Enter Stock";
    }

    setError(obj);

    // agar error nahi hai
    if (Object.keys(obj).length === 0) {
      const newProduct = {
        ...form,
        id: Date.now(),
      };

      console.log("Form Submit", newProduct);

      // Parent me data bhejo
      sendData(newProduct);

      alert("Product Added Successfully");

      // form reset
      setForm({
        title: "",
        price: "",
        description: "",
        category: "",
        rating: "",
        stock: "",
      });
    } else {
      alert("Form Not Submit");
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-lg w-full max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Add Product</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Enter Title"
            value={form.title}
            name="title"
            onChange={handleChange}
            className="border w-full p-3 rounded-lg outline-none"
          />

          {error.title && <p className="text-red-500 text-sm">{error.title}</p>}
        </div>

        {/* Price */}
        <div>
          <input
            type="number"
            placeholder="Enter Price"
            value={form.price}
            name="price"
            onChange={handleChange}
            className="border w-full p-3 rounded-lg outline-none"
          />

          {error.price && <p className="text-red-500 text-sm">{error.price}</p>}
        </div>

        {/* Description */}
        <div>
          <input
            type="text"
            placeholder="Enter Description"
            value={form.description}
            name="description"
            onChange={handleChange}
            className="border w-full p-3 rounded-lg outline-none"
          />

          {error.description && (
            <p className="text-red-500 text-sm">{error.description}</p>
          )}
        </div>

        {/* Rating */}
        <div>
          <input
            type="number"
            placeholder="Enter Rating"
            value={form.rating}
            name="rating"
            onChange={handleChange}
            className="border w-full p-3 rounded-lg outline-none"
          />

          {error.rating && (
            <p className="text-red-500 text-sm">{error.rating}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <input
            type="text"
            placeholder="Enter Category"
            value={form.category}
            name="category"
            onChange={handleChange}
            className="border w-full p-3 rounded-lg outline-none"
          />

          {error.category && (
            <p className="text-red-500 text-sm">{error.category}</p>
          )}
        </div>

        {/* Stock */}
        <div>
          <input
            type="number"
            placeholder="Enter Stock"
            value={form.stock}
            name="stock"
            onChange={handleChange}
            className="border w-full p-3 rounded-lg outline-none"
          />

          {error.stock && <p className="text-red-500 text-sm">{error.stock}</p>}
        </div>

        {/* Button */}
        <button className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Child;
