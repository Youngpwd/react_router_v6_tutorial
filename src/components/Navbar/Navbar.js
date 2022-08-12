import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png";

const Navbar = ({ menuOn, handleMenu }) => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
        </div>
        <ul
          onClick={() => (menuOn ? handleMenu() : null)}
          className={menuOn ? "nav-menu active" : "nav-menu"}
        >
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pricing" className="nav-link">
              Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/faq" className="nav-link">
              FAQ
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="hamburger" onClick={handleMenu}>
          {menuOn ? (
            <FaTimes style={{ color: "#fff", cursor: "pointer" }} size={20} />
          ) : (
            <FaBars style={{ color: "#fff", cursor: "pointer" }} size={20} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
