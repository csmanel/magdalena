import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="primary-nav">
      <NavLink to="/" >
        home
      </NavLink>

      <NavLink to="/about" >
        about
      </NavLink>

      <NavLink to="/contact" >
        contact
      </NavLink>

      <NavLink to="/support" >
        support
      </NavLink>
    </nav>
  );
};
