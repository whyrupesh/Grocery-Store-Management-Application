import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Auth from "./pages/Auth";
import Home from "./pages/Home.jsx";
import Order from "./pages/Order";
import Products from "./pages/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
    <Navbar/>
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/order" element={<Order />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
