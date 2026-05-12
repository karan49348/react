// RestaurantList.jsx
import React from "react";
import RestaurantCard from "./RestaurantCard";

// Restaurants array with your images
const restaurants = [
  { image: "burgr.png.png", name: "Burger King", type: "Burgers, Fast Food", ratingTime: "⭐ 4.1 • 30-35 mins" },
  { image: "cake.png.jpg", name: "Cake Shop", type: "Desserts, Bakery", ratingTime: "⭐ 4.5 • 15-20 mins" },
  { image: "chaval.jpg", name: "Chaval Biryani", type: "Biryani, Indian", ratingTime: "⭐ 4.3 • 30-35 mins" },
  { image: "coffi3.webp", name: "Coffee Corner", type: "Coffee, Beverages", ratingTime: "⭐ 4.4 • 20-25 mins" },
  { image: "dallbati.webp", name: "Daal Bati", type: "Rajasthani, Indian", ratingTime: "⭐ 4.2 • 25-30 mins" },
  { image: "paratha.jpg", name: "Paratha House", type: "North Indian, Street Food", ratingTime: "⭐ 4.3 • 20-25 mins" },
  { image: "pizza.webp", name: "Pizza Hub", type: "Pizza, Fast Food", ratingTime: "⭐ 4.1 • 30-35 mins" },
  { image: "poha.jpg", name: "Poha Cafe", type: "Breakfast, Snacks", ratingTime: "⭐ 4.0 • 15-20 mins" },
  { image: "roll.png", name: "Roll Express", type: "Street Food, Rolls", ratingTime: "⭐ 4.2 • 20-25 mins" },
  { image: "samosa.png", name: "Samosa Point", type: "Snacks, Street Food", ratingTime: "⭐ 4.3 • 20-25 mins" },
];

function RestaurantList() {
  return (
    <div className="max-w-6xl mx-auto mt-10 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {restaurants.map((rest, index) => (
        <RestaurantCard
          key={index}
          image={rest.image}
          name={rest.name}
          type={rest.type}
          ratingTime={rest.ratingTime}
        />
      ))}
    </div>
  );
}

export default RestaurantList;