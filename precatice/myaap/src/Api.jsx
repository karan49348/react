import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useNavigate } from 'react-router-dom'
import CartModal from './CartModal'
import AddToCartButton from './AddToCartButton'
 import wishlist from './Wishlist'

const Api = () => {
  const navigate = useNavigate()

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  const [modal, setModal] = useState(false)
  const [sortType, setSortType] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products')
      setData(res.data.products)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  // ❤️ Wishlist add/remove
  const handleWishlist = (item) => {
    setWishlist((prev) => {
      const exist = prev.some((p) => p.id === item.id)
      return exist ? prev : [...prev, item]
    })
  }

  // 🛒 total cart items count
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  // 🔍 filter + sort
  const filterData = useMemo(() => {
    let filtered = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )

    switch (sortType) {
      case 'priceLow':
        return [...filtered].sort((a, b) => a.price - b.price)
      case 'priceHigh':
        return [...filtered].sort((a, b) => b.price - a.price)
      case 'ratingLow':
        return [...filtered].sort((a, b) => a.rating - b.rating)
      case 'ratingHigh':
        return [...filtered].sort((a, b) => b.rating - a.rating)
      default:
        return filtered
    }
  }, [data, search, sortType])

  return (
    <div className="p-4">

      {/* 🔝 Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Products</h1>

        {/* 🛒 Cart Button */}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setModal(true)}
        >
          Cart ({totalItems})
        </button>
      </div>

      {/* 🔍 Search + Sort */}
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Sort</option>
          <option value="priceLow">Price Low → High</option>
          <option value="priceHigh">Price High → Low</option>
          <option value="ratingLow">Rating Low → High</option>
          <option value="ratingHigh">Rating High → Low</option>
        </select>
      </div>

      {/* 🛍 Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {loading ? (
          <h1>Loading...</h1>
        ) : (
          filterData.map((item) => (
            <div key={item.id} className="border p-3 rounded">

              <LazyLoadImage
                src={item.thumbnail}
                className="h-32 w-full object-cover"
              />

              <h2 className="font-bold">{item.title}</h2>
              <p>₹ {item.price}</p>

              <div className="flex gap-2 mt-2">

                <button
                  className="bg-blue-500 text-white px-2"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  View
                </button>

                {/* 🛒 Add to Cart */}
                <AddToCartButton
                  item={item}
                  setCart={setCart}
                  setModal={setModal}
                />

                {/* ❤️ Wishlist */}
                <button
                  className="bg-pink-500 text-white px-2"
                  onClick={() => handleWishlist(item)}
                >
                  Wish
                </button>

              </div>
            </div>
          ))
        )}

      </div>

      {/* ❤️ Wishlist UI */}
      <div className="mt-6 border p-4 rounded">
        <h2 className="text-xl font-bold mb-2">
          Wishlist ({wishlist.length})
        </h2>

        {wishlist.length === 0 ? (
          <p>No wishlist items</p>
        ) : (
          wishlist.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-2 mb-2"
            >
              <p>{item.title}</p>

              <button
                className="bg-red-500 text-white px-2"
                onClick={() =>
                  setWishlist((prev) =>
                    prev.filter((x) => x.id !== item.id)
                  )
                }
              >
                X
              </button>
            </div>
          ))
        )}
      </div>

      {/* 🛒 Cart Modal */}
      {modal && (
        <CartModal
          cart={cart}
          setCart={setCart}
          setModal={setModal}
        />
      )}

    </div>
  )
}

export default Api