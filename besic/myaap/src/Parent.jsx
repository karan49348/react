 import Child from './Child'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Perent = () => {
  const navigate = useNavigate();
 
   const[producat,setproducat]=useState([]);
 const [cart, setcart] = useState([]);



   const hendlbuton=(data)=>{
     setproducat(data)


   }
   console.log(producat);
    const addtocart=(x)=>{
      const esxit=cart.find((c)=>c.id===x.id)
      if(esxit){
     alert("already in cart")
        return
      }

     const updatecart=[...cart,x]
     setcart(updatecart)
      localStorage.setItem("cart", JSON.stringify(updatecart))
      navigate("/Cart");
    }
   
  return (
    <div>
      {producat.map((x)=>{
        return (
          <div key={x.id}>
            <h2>{x.title}</h2>
            <p>{x.description}</p>
            <img src={x.thumbnail} alt={x.title} />
            <button onClick={()=>addtocart(x)}>add to cart</button>
          </div>
        );
      })} 
      <h2>Cart</h2>
      {cart.map((x)=>{
        return (
          <div key={x.id}>
            <h2>{x.title}</h2>
            <p>{x.description}</p>
            <img src={x.thumbnail} alt={x.title} />
          </div>
        );
      })}
      <Child sentdata={hendlbuton} />
    </div>
  );
}

export default Perent
