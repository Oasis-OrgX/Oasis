import React from "react";
import "./Navbar.css";
import Button from '../button/Button'
import logoImg from './logo1.png'
import laptopImg from './laptop.png'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-content">
          <div className="nav-logo">
            <img src={logoImg} alt="" />
            <h1>OASIS</h1>
          </div>
          <div className="nav-menu">
            <ul>
              <li>
                <Button
                  onClick={() => {
                    console.log("Signup button");
                  }}
                  type="button"
                  buttonStyle="btn--green-solid"
                  buttonSize="btn--sign-up-size"
                >
                  Signup
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => {
                    console.log("Login button");
                  }}
                  type="button"
                  buttonStyle="btn--white-solid"
                  buttonSize="btn--sign-up-size"
                >
                  Login
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header">
        {/* <div className="navbar">
          <div className="nav-content">
            <div className="nav-logo">
              <img src={logoImg} alt="" />
              <h1>OASIS</h1>
            </div>
            <div className="nav-menu">
              <ul>
                <li>
                  <Button
                    onClick={() => {
                      console.log("Signup button");
                    }}
                    type="button"
                    buttonStyle="btn--green-solid"
                    buttonSize="btn--sign-up-size"
                  >
                    Signup
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => {
                      console.log("Login button");
                    }}
                    type="button"
                    buttonStyle="btn--white-solid"
                    buttonSize="btn--sign-up-size"
                  >
                    Login
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="content">
          <div className="content-heading">
            <h1>
              The simple and smart way to manage <br /> your college work.
            </h1>
          </div>
          <div className="content-para">
            <p>
              Prioritize and plan with ease in a beautifully <br /> designed
              workspace
            </p>
          </div>
          <div className="content-button">
            <Button
              onClick={() => {
                console.log("Get started button");
              }}
              type="button"
              buttonStyle="btn--green-solid"
              buttonSize="btn--get-started-size"
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="content-laptop">
          <img src={laptopImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
