import React from 'react'

const AddToCartButton = ({ item, cart, setCart, setModal }) => {

  const handleCart = () => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((p) => p.id === item.id)

      if (itemExists) {
        return prevCart.map((p) =>
          p.id === item.id
            ? { ...p, quantity: (p.quantity || 1) + 1 }
            : p
        )
      } else {
        return [...prevCart, { ...item, quantity: 1 }]
      }
    })

    setModal(true)
  }

  return (
    <button
      className="bg-black text-white px-2 py-1 rounded"
      onClick={handleCart}
    >
      Add to cart
    </button>
  )
}

export default AddToCartButton