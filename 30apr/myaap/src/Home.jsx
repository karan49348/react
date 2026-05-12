import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const Home = ({ user }) => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [viewDetail, setViewDetail] = useState(null);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");
  const [loading, setLoading] = useState(true);
  const [table, setTable] = useState(false);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const result = await res.json();
    setData(result.users);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("currentUser");
    navigate("/Login");
  };

  const filterData = [...data]
    .filter(
      (item) =>
        item.firstName.toLowerCase().includes(search.toLowerCase()) ||
        item.lastName.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.username.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      if (sorting === "high") return b.age - a.age;
      if (sorting === "low") return a.age - b.age;
      return 0;
    });

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-6">
      <div className="sticky top-4 z-50 max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-3xl shadow-lg px-6 py-5 border border-gray-100 flex flex-wrap gap-4 justify-between items-center">
          <div className="flex flex-wrap gap-3 items-center">
            <select
              onChange={(e) => setSorting(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 outline-none"
            >
              <option value="">Sort Age</option>
              <option value="high">High to Low</option>
              <option value="low">Low to High</option>
            </select>

            <input
              type="search"
              placeholder="Search user..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 outline-none w-64"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setTable(!table)}
              className="bg-indigo-600 text-white px-5 py-2 rounded-xl"
            >
              {table ? "Card View" : "Table View"}
            </button>

            <button
              onClick={handleLogOut}
              className="bg-red-500 text-white px-5 py-2 rounded-xl"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="h-[70vh] flex items-center justify-center text-3xl font-semibold">
          Loading...
        </div>
      ) : table ? (
        <div className="max-w-7xl mx-auto overflow-x-auto bg-white rounded-3xl shadow-lg border border-gray-100">
          <table className="min-w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left px-5 py-4">ID</th>
                <th className="text-left px-5 py-4">Name</th>
                <th className="text-left px-5 py-4">Email</th>
                <th className="text-left px-5 py-4">Age</th>
                <th className="text-left px-5 py-4">Gender</th>
                <th className="text-left px-5 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {filterData.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-slate-50 transition"
                >
                  <td className="px-5 py-4">{item.id}</td>
                  <td className="px-5 py-4">
                    {item.firstName} {item.lastName}
                  </td>
                  <td className="px-5 py-4">{item.email}</td>
                  <td className="px-5 py-4">{item.age}</td>
                  <td className="px-5 py-4 capitalize">{item.gender}</td>
                  <td className="px-5 py-4 flex gap-2">
                    <button
                      onClick={() => navigate(`/recipes/${item.id}`)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg"
                    >
                      Recipes
                    </button>
                    <button
                      onClick={() => navigate(`/carts/${item.id}`)}
                      className="bg-rose-500 text-white px-3 py-1 rounded-lg"
                    >
                      Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filterData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="bg-slate-100 flex justify-center items-center h-52">
                <LazyLoadImage
                  alt="user"
                  effect="blur"
                  src={user.find((u) => u.id === item.id)?.image}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">
                  {item.firstName} {item.lastName}
                </h3>

                <p className="text-sm text-gray-500">{item.email}</p>

                <div className="flex justify-between text-sm mt-2">
                  <span>Age: {item.age}</span>
                  <span className="capitalize">{item.gender}</span>
                </div>

                <button
                  onClick={() =>
                    setViewDetail(viewDetail === item.id ? null : item.id)
                  }
                  className="w-full mt-3 bg-emerald-500 text-white py-2 rounded-xl"
                >
                  {viewDetail === item.id ? "Hide Details" : "View Details"}
                </button>

                {viewDetail === item.id && (
                  <div className="mt-4 border-t pt-4 text-sm text-gray-700 space-y-2">
                    <p>Phone: {item.phone}</p>
                    <p>Username: {item.username}</p>
                    <p>Blood Group: {item.bloodGroup}</p>
                    <p>Country: {item.address?.country}</p>
                    <p>
                      Address: {item.address?.address}, {item.address?.city},{" "}
                      {item.address?.state}
                    </p>
                    <p>Company: {item.company?.name}</p>
                    <p>Department: {item.company?.department}</p>
                    <p>University: {item.university}</p>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => navigate(`/recipes/${item.id}`)}
                        className="flex-1 bg-blue-500 text-white py-2 rounded-xl"
                      >
                        Recipes
                      </button>

                      <button
                        onClick={() => navigate(`/carts/${item.id}`)}
                        className="flex-1 bg-rose-500 text-white py-2 rounded-xl"
                      >
                        Cart
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          

        </div>
      )}
    </div>
  );
};

export default Home;
