import { useState } from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'

import Signup from './Signup'
import Header from './Header'
import Login from './Login'
import Test from './Test'
import R13 from './R13'
import Api from './Api'
 import { useNavigate } from 'react-router-dom' 
 import Middleware from './Middleware'
 import Producatdetial from './Producatdetial'


function App() {
 

  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/'element={<Header/>}/>
 <Route path='/Login'element={<Login/>}/>
 
    <Route path='/Test' element={<Test />}/>
     
     <Route path='/r13' element={<R13  />}/>
     {/* <Route path='/Api'element={<Api/>}></Route> */}
     <Route path='/Signup' element={<Signup/>}/>
     <Route path='/Api' element={<Api />} />
<Route path='/product/:id' element={<Producatdetial />} />
 

      {/* <Route
  path='/Api'
  element={
    <Middleware>
      <Api />
    </Middleware>
  }
/> */}

    {/* <Route
  path='/Test'
  element={
    <Middleware>
      <Test />
    </Middleware>
  }
/> */}

   </Routes>
   </BrowserRouter>
  )
}

export default App
