import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
      <div className="navbar">
        <div className="title"> 
          <h2>Manish chouhan</h2>
        </div>
        <div><ul className="navItem">
          <li>
            <Link to="/">
            Home
            </Link>
            </li>
          <li>
            <Link to="/about">
            About
            </Link>
            </li>
          {/* inside about me skills and interest */}
          <li>
            <Link to="resume">
               Resume
            </Link>
           </li>
          {/*inside Resume we have to give download option of resume*/}
          <li>
            <Link to="contant">
            Contact
            </Link>
            </li>
        </ul></div>
      </div>
  );
}

export default Header;
