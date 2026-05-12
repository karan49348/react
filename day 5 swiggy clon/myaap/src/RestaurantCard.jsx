// RestaurantCard.jsx
import React from "react";

function RestaurantCard({ image, name, type, ratingTime }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
      <img
        src={`/${image}`}               // public folder se image load hogi
        alt={name}
        className="rounded-t-xl w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg truncate">{name}</h2>
        <p className="text-sm text-gray-500 truncate">{type}</p>
        <p className="font-semibold mt-2 text-orange-600">{ratingTime}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;