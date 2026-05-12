// App.jsx
import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import RestaurantList from "./RestaurantList";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <SearchBar />
      <RestaurantList />
    </div>
  );
}

export default App;