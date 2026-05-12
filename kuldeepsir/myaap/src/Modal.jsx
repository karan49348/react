import React from "react";

const Modal = ({ data, close }) => {
  if (!data) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={close}
    >
      <div
        className="bg-white max-w-2xl w-full rounded-2xl shadow-xl p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 bg-red-500 text-white w-8 h-8 rounded-full hover:bg-red-600 transition"
        >
          ✕
        </button>

        <img
          src={data.image}
          alt={data.title}
          className="w-full h-72 object-contain mb-6"
        />

        <h2 className="text-2xl font-bold mb-3">{data.title}</h2>

        <p className="text-green-600 text-2xl font-bold mb-2">₹ {data.price}</p>

        <p className="text-yellow-500 font-semibold mb-4">
          ⭐ Rating: {data.rating?.rate}
        </p>

        <p className="text-gray-700 leading-relaxed">{data.description}</p>
      </div>
    </div>
  );
};

export default Modal;
