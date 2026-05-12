// SearchBar.jsx
import React from "react";

function SearchBar() {
  return (
    <div className="max-w-2xl mx-auto mt-6 px-3">
      <input
        type="text"
        placeholder="Search for restaurants or food…"
        className="w-full p-3 rounded-lg shadow border outline-orange-500"
      />
    </div>
  );
}

export default SearchBar;