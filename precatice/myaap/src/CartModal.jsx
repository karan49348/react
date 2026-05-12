import React from 'react'

const CartModal = ({ cart, setCart, setModal }) => {

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id)
    setCart(updated)
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">

      <div className="bg-white p-5 w-1/2 mx-auto mt-20 rounded">

        <h2 className="text-xl mb-3">Cart Items</h2>

        {cart.length === 0 ? (
          <p>No Items</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">

              <span>{item.title}</span>

              <button
                className="bg-red-500 text-white px-2"
                onClick={() => removeItem(item.id)}
              >
                remove
              </button>

            </div>
          ))
        )}

        <button
          className="bg-black text-white px-3 py-1 mt-3"
          onClick={() => setModal(false)}
        >
          close
        </button>

      </div>

    </div>
  )
}

export default CartModal