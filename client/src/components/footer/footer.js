import React, { useState } from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Feedback from "./feedback";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="quick-links">
          <a href="#">Home</a>
          <a href="#">about us</a>
          <a href="#">contact us</a>
        </div>
        <Feedback></Feedback>
        <div className="social-links">
          <a href="#">
            <FaFacebook></FaFacebook>
          </a>
          <a href="#">
            <FaGithub></FaGithub>
          </a>
          <a href="#">
            <FaInstagram></FaInstagram>
          </a>
        </div>
        <div>
          <span>copyright &copy; Oasis</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
