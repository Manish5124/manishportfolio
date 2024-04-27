import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";

function Header() {
  return (
      <div className="navbar">
        <div className="title"> 
          <h2>Manish chouhan</h2>
        </div>
        <nav>
        <div><ul className="navItem">     
          <li>
            <NavLink to="/" >
            Home
            </NavLink>
            </li>
          <li>
            <NavLink to="/about" >
            About
            </NavLink>
            </li>
          {/* inside about me skills and interest */}
          <li>
            <NavLink to="resume" >
               Resume
            </NavLink>
           </li>
          {/*inside Resume we have to give download option of resume*/}
          <li>
            <NavLink to="contact" >
            Contact
            </NavLink>
            </li>
        </ul></div>
        </nav>
      </div>
  );
}

export default Header;
