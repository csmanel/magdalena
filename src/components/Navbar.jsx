import React from "react";
import { NavLink } from "react-router-dom";

// import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";

///alternative styling to CSS
const navLinkStyles = ({ isActive }) => {
  return {
    fontweight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "none",
  };
};

export const Navbar = () => {
  return (
    <nav className="primary-nav">
      {/* <Link to="#" className="menu-bars">
        <FaIcons.FaBars />
      </Link> */}

      <NavLink style={navLinkStyles} to="/">
        home
      </NavLink>

      <NavLink style={navLinkStyles} to="/about">
        about
      </NavLink>

      <NavLink style={navLinkStyles} to="/contact">
        contact
      </NavLink>

      <NavLink style={navLinkStyles} to="/media">
        media
      </NavLink>

      <NavLink style={navLinkStyles} to="/upcoming">
        upcoming
      </NavLink>

      <NavLink style={navLinkStyles} to="/support">
        support
      </NavLink>
    </nav>
  );
};
