import React, { useState } from 'react'
import { Form } from 'react-router-dom'
 

const Signup = () => {
  const[form,setform]=useState({
  name:'',
  age:'',
  number:'',
  dob:'',
  username:'',
  email:'',
  gender:'',
  password:''
 })
 const Hendalsumbit=(e)=>{
  e.preventDefault()
  localStorage.setItem('signup',JSON.stringify(form));
  console.log(form);
   alert("data sumbit")
  //  setform({
  //   name:"",
  //   age:"",
  // number:'',
  // dob:'',
  // username:'',  
  // email:'',
  // gender:'',
  // password:''
    
  //  })
  
 }
  return (
    <div>
    <form onSubmit={Hendalsumbit}>
      <input type="text"
      placeholder='enter your name'
      value={form.name}
       onChange={(e)=> setform({...form,name:e.target.value})}
       />

<input type="number"
      placeholder='enter your age '
      value={form.age}
       onChange={(e)=> setform({...form,age:e.target.value})}
       />
       <input type="text"
      placeholder='enter your mobile number'
      value={form.number}
       onChange={(e)=> setform({...form,number:e.target.value})}
       />
       <input type="date"
      placeholder='enter your Dob'
      value={form.dob}
       onChange={(e)=> setform({...form,dob:e.target.value})}
       />
       
       <input type="text"
      placeholder='enter your username'
      value={form.username}
       onChange={(e)=> setform({...form,username:e.target.value})}
       />
       
       <input type="Email"
      placeholder='enter your email'
      value={form.email}
       onChange={(e)=> setform({...form,email:e.target.value})}
       />
        <div>
          <label>
            <input type='radio' name='gender'value={form.male}/>
            male
          </label>
          <label>
            <input type='radio' name='gender'value={form.female}/>
            female
          </label>
          <label>
            <input type='radio' name='gender' defaultChecked="other" value={form.other}/>
            
          </label>

           
        </div>
       <input type="text"
       placeholder='enter your password'
       value={form.password}
       onChange={(e)=>setform({...form,password:e.target.value})}
        />
        <button type='sumbit'>sumbit</button>
       

    </form>
    </div>
  )
}

export default Signup
