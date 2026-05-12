import React, { useState } from 'react'

function Assiment1() {
     const[Count,setcount]=useState(0);
      function inc(){
        if(Count+1>50){
          setcount(0);
          alert("50 se upper nhi janne dunnga");

        }else{
          setcount(Count+1)
        }
      }
       function dec(){

        if(Count-1<0){
          setcount(0)
           alert("0 se niche nhi jayega bhai")

        }else{
           setcount(Count-1)
        }
       }

  return (
    <div>
      <h1>value:{Count}</h1>
     <button onClick={inc}>+</button>
     <button onClick={dec}>-</button>
    </div>
  )
}

export default Assiment1
