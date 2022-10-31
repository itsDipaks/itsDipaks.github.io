import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../img/Other/11.png"
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="logo">
          <img style={{width:"50px"}} src={logo} alt="" />
        </div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
        
            <li>
              <Link  to="Intro" spy={true} smooth={true}>
              Home
              </Link>
            </li>

            <li>
              <Link to="services" spy={true} smooth={true}>
                About
              </Link>
            </li>

            <li>
              <Link to="experience" spy={true} smooth={true}>
                Techstack
              </Link>
            </li>

            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
         
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
