import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Abc from "./Abc";
import Child from "./Child";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/Abc" element={<Abc />} />
        <Route path="/Child" element={<Child />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
