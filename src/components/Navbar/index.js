import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="bigText" style= {{textAlign: "center"}}>
      <Link className="navbar-brand bigText" to="/">
       Employee Directory
      
      </Link>
      <div>
      <p className="smallText">Click on Name to sort in order, or use the filter to narrow your results</p>
      </div>
    </nav>
  );
}

export default Navbar;
