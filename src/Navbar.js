import React from "react";
import "../src/Navbar.css";

import logo from "../src/Untitled-1.png";
import profile from "../src/IMG_0588.JPG";
function Navbar() {
  return (
    <div className="nav">
      <img className="nav_logo" src={logo} alt="netflix logo" />
      <img className="nav_profile" src={profile} />
    </div>
  );
}

export default Navbar;
