import React from "react";
import { Link } from "react-router-dom";
import "../styles/HotAccessoryMenu.css";

const HotAccMenu = () => {
  return (
    <div className="hotmenu">
      <Link className="hotLink" to="/music">
        Music
      </Link>
      <Link className="hotLink" to="/smartDevices">
        Smart Devices
      </Link>
      <Link className="hotLink" to="/home">
        Home
      </Link>
      <Link className="hotLink" to="/lifestyles">
        Lifestyles
      </Link>
      <Link className="hotLink" to="/mobileAccessories">
        Mobile Accessories
      </Link>
    </div>
  );
};

export default HotAccMenu;
