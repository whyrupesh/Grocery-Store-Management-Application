import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex space-x-5 h-10 bg-black text-white	">
        <Link to="/">Home</Link>
        <Link to="/order">Order</Link>
        <Link to="/products">Products</Link>
        <Link to="/auth">Login/Register</Link>
      </div>
    </>
  );
}
