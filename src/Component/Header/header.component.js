import "../../App.css";

import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="header__nav">
        <Link to={"/"}>
          <h1 className="header__title">Compass.Education</h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;
