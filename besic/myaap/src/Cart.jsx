import React, { useEffect, useState } from 'react'

const Cart = () => {
   const[cart,setcart]=useState([])
     useEffect(()=>{
      const data=JSON.parse(localStorage.getItem("cart"))||[]
      setcart(data)
     })
  return (
    <div>
      
    </div>
  )
}

export default Cart
