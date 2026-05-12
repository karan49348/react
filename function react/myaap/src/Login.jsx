import React, { useState } from 'react'


const Login = () => {
   const [form, setform]=useState({
    name:'',
    age:'',
    number:'',

   })
    const hendalsubmit=(e)=>{
      e.preventDefault()
       console.log(form);
       
    }
  return (
   <form onSubmit={hendalsubmit}>
    <input type="text" 
    placeholder='enter your name'
    value={form.name}
     onChange={(e)=>setform({...form,name:e.target.value})}
     />
     <input type="number" 
    placeholder='enter your number'
    value={form.number}
     onChange={(e)=>setform({...form,number:e.target.value})}
     />
     <input type="text" 
    placeholder='enter your name'
    value={form.age}
     onChange={(e)=>setform({...form,age:e.target.value})}
     />
     <button type='Submit'>Submit</button>

   </form>
  )
}

export default Login
