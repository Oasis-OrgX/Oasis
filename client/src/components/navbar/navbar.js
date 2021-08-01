import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="navbar">
          <div className="nav-content">
            <div className="nav-logo">
              <h1>OASIS</h1>
            </div>
            <div className="nav-menu">
              <ul>
                <li>
                  <a href="#"> Log In </a>
                </li>
                <li>
                  <a href="#"> Sign Up </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content">
          <h1>
            The simple and smart way <br /> to manage your college
          </h1>
          <p>
            Prioritize and plan with ease in a beautifully <br /> designed
            workspace
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
