import { useEffect, useState } from "react";
import Headar from "./Headar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Api from "./Api";
import Brend from "./Brend";
import Police from "./Police";
import Retting from "./Retting";
import About from "./About";
function App() {
  
  return (
    <BrowserRouter>
      <Headar />
      <Routes>
        <Route path="/Api" element={<Api />} />
        <Route path="/Brend" element={<Brend />} />
        <Route path="/Police" element={<Police />} />
        <Route path="/Retting" element={<Retting />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
