import React from "react";
import "../styles/Nav.css";
import { logo } from "../data/data.json";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <a href="/">
          <img id="logoImage" src={logo} alt="logo" />
        </a>
      </div>

      <a className="navLinks" href="/miphones">
        Mi Phones
      </a>
      <a className="navLinks" href="/redmiphones">
        Redmi Phones
      </a>
      <a className="navLinks" href="/tv">
        TV
      </a>
      <a className="navLinks" href="/laptop">
        Laptops
      </a>
      <a className="navLinks" href="/lifestyle">
        Fitness & Lifestyle
      </a>
      <a className="navLinks" href="/home">
        Home
      </a>
      <a className="navLinks" href="/audio">
        Radio
      </a>
      <a className="navLinks" href="/accessories">
        Accessories
      </a>

      <div className="searchbox">
        <input type="text" name="search" placeholder="search" />
        <CiSearch />
      </div>
    </div>
  );
};

export default Navbar;
