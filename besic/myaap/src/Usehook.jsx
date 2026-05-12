import React, { use } from 'react'
 import axios from 'axios'
    const producat = axios.get("https://dummyjson.com/products")
    .then((res)=> res.data.producat)
    
 

const Usehook = () => {
   const data=use(producat)
   console.log(data);
   
  return (
    <div>
    {data.map((s)=>{
      return (
        <div key={s.id}>
          <img src={s.thumbnail} alt={s.price} />
        </div>
      );
    })}
      
    </div>
  )
}

export default Usehook
