// import { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {

  // const [user, setUser] = useState(false)
  return (
    <BrowserRouter>
      <nav class="navbar navbar-expand bg-dark">
        <ul class="navbar-nav">
        <li class="nav-item">
            <Link to="/" style={{marginLeft:"500px" , fontSize:"25px" , color:"wheat"}}>Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/register" style={{marginLeft:"70px" , fontSize:"25px" , color:"wheat"}}>Register</Link>
          </li>
          <li class="nav-item">
            <Link to="/login" style={{marginLeft:"60px" , fontSize:"25px" , color:"wheat"}}>Login</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
