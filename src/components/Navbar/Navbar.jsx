import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobilemenu, setMobilemenu] = useState(false);
  const toggleMenu = () => {
    mobilemenu ? setMobilemenu(false) : setMobilemenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobilemenu ? "" : "hide-mobile-icon"}>
        <li>
          <Link to="heros" smooth={true} duration={500} offset={-260}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} duration={500} offset={-260}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-150}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={500} offset={-260}>
            Testimonials
          </Link>
        </li>
        <li>
          {" "}
          <Link to="campus" smooth={true} duration={500} offset={-260}>
            Campus
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="contact"
            className="btn"
            smooth={true}
            duration={500}
            offset={-260}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menu} alt="" className="menu_icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
