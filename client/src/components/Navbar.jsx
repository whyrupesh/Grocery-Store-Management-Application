import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <aside className="bg-black text-white h-full w-64 flex flex-col fixed border-2 border-black border-r-indigo-500 ">
      <header className=" w-full pb-8 border-2 border-black border-b-indigo-500">
        <h1 className="text-xl font-bold pt-6 pl-8 ">Store Name</h1>
      </header>

      <nav className="pt-8 pl-8">
        <ul className="space-y-12 ">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="text-yellow-500"
              className="hover:text-yellow-500"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order"
              activeClassName="text-yellow-500"
              className="hover:text-yellow-500"
            >
              Order
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              activeClassName="text-yellow-500"
              className="hover:text-yellow-500"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth"
              activeClassName="text-yellow-500"
              className="hover:text-yellow-500"
            >
              Login/Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
