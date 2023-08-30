import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../public/logo.png";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Company Logo" width="70" height="70" />
      <ul className="ul-list">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/lawyers" activeClassName="active">
            Our Lawyers
          </NavLink>
        </li>
        <li>
          <NavLink to="/AreasofFocus" activeClassName="active">
            Areas of Focus
          </NavLink>
        </li>
        <li>
          <NavLink to="/OurResults" activeClassName="active">
            Our Results
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contactus" activeClassName="active">
            Contact us
          </NavLink>
        </li>
      </ul>
      <ul className="address right-corner">
        <text className="addressfont">
          (844)-SAM JUSTICE
          <br />
          30 Wall Street, 8th Floor,
          <br />
          NewYork, NY 10005
        </text>
      </ul>
    </div>
  );
}

export default Navbar;
