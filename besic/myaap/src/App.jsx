import { Suspense, useState } from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Header from './Header'
import Signup from './Signup'
import Child from './Child'
import Parent from './Parent'
import Cart from './Cart'
import Usehook from './Usehook'
function App() {

  return (
    <Suspense fallback={<div>lodding...</div>}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Header />} />

          <Route path="/Signup" element={<Signup />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/Parent" element={<Parent />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App
