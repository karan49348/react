import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const User = () => {
  const { id } = useParams();

  // Safe redux data
  const producat = useSelector((state) => state.allusr?.userdata || []);

  // Find product by id
  const user = producat.find((x) => String(x.id) === String(id));

  console.log("URL ID:", id);
  console.log("PRODUCTS:", producat);
  console.log("MATCHED USER:", user);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      {user ? (
        <div className="bg-white shadow-xl rounded-3xl p-8 max-w-md w-full">
          {/* Image */}
          <img
            src={user.thumbnail}
            alt={user.title}
            className="w-full h-64 object-cover rounded-2xl mb-6"
          />

          {/* Title */}
          <h2 className="text-3xl font-bold mb-4 text-center">{user.title}</h2>

          {/* Details */}
          <div className="space-y-3 text-lg">
            <p>
              <span className="font-semibold">Brand:</span> {user.brand}
            </p>

            <p>
              <span className="font-semibold">Category:</span> {user.category}
            </p>

            <p>
              <span className="font-semibold">Price:</span>{" "}
              <span className="text-green-600 font-bold">₹ {user.price}</span>
            </p>

            <p>
              <span className="font-semibold">Discount:</span>{" "}
              <span className="text-red-500 font-bold">
                {user.discountPercentage}%
              </span>
            </p>

            <p>
              <span className="font-semibold">Rating:</span> ⭐ {user.rating}
            </p>

            <p>
              <span className="font-semibold">Stock:</span> {user.stock}
            </p>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Description</h3>

            <p className="text-gray-600">{user.description}</p>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-2xl font-semibold text-red-500">
            Loading or No Data Found...
          </p>
        </div>
      )}
    </div>
  );
};

export default User;
