import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  const closeToggleMenu = () => {
    setShowMenu(false);
  }

  return (
    <div className="navbar">
    <div className="header-content">
      <div className={`title ${showMenu ? "hide" : ""}`}>
        <h2>Manish chouhan</h2>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${showMenu ? "cross1" : ""}`}></div>
        <div className={`bar ${showMenu ? "cross2" : ""}`}></div>
        <div className={`bar ${showMenu ? "cross3" : ""}`}></div>
      </div>
    </div>
    <nav className={showMenu ? "show" : ""}>
      <div>
        <ul className="navItem">
          <li>
            <NavLink to="/" onClick={closeToggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeToggleMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="resume" onClick={closeToggleMenu}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" onClick={closeToggleMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);
}

export default Header;
