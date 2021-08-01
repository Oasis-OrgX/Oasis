import React from 'react';
import './navbar.css'

const Navbar = ()=>{
    return (
      <>
        <div className="navbar">
          <div className="nav-content">
            <div className="nav-logo">
              <h1>LOGO</h1>
            </div>
            <div className="nav-menu">
              <ul>
                <li>Login</li>
                <li>Signup</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}

export default Navbar;