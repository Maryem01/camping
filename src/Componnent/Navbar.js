
import React from "react";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navcontainer">
      <h1> Tunisie Go </h1>
      <ul>
        
      <li><Link to="/"> Discover</Link> </li>
        
          <li><Link to="/myList">Activities </Link> </li>
  
      
          <li><Link to="/">Community </Link> </li>
   
   
          <li><Link to="/add">Add new place </Link> </li>
      
      </ul>

      <ul>
      <li><Link to="/">  <p>Login</p> </Link> </li>
        <li className="btn">Register</li>

        
          
        
      </ul>
</div>
    </div>
  );
};

export default Navbar;
