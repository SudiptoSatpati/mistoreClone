import React from "react";
import "../styles/PreNavbar.css";
import { FaAngleDown } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

const PreNavbar = () => {
  return (
    <div className="pre-navbar">
      <div>
        <a href="#">Mi India </a>
        <span>|</span>
        <a href="#">Get App </a>
        <span>|</span>
        <a href="#">Online Help </a>
        <span>|</span>
        <a href="#">
          Retail Store <FaAngleDown />{" "}
        </a>
      </div>
      <div>
        <a href="#">Sign in </a>
        <span>|</span>
        <a href="#">Sign Up </a>
        <span>|</span>
        <a href="#">
          <IoCartOutline /> Cart (0){" "}
        </a>
      </div>
    </div>
  );
};

export default PreNavbar;
