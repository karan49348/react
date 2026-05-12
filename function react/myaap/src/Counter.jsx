import React, { useState } from 'react'


const Counter = () => {
   const [count ,setcount]=useState(10);
   function incarement(){
    if(count+2>=50){
      alert("50 se upr nhi janne dunga sir")
      setcount(10);
      
    }else{
      setcount(count+2)
    }
   }
    function decarement(){
      if(count-2<0){
        setcount(10)
        alert("dec nhi hogi ")
      }else{
       setcount(count-2)
      }
    }
  return (
    <div>
      <h1>count:{count}
      </h1>
      <button onClick={incarement}>+</button>
      <button onClick={decarement}>-</button>
    </div>
  )
}

export default Counter
