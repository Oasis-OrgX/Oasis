import React from "react";
import "./guestpage.css";
// Importing all the required components known as of now.
import Navbar from "../components/navbar/navbar";
import Button from "../components/button/button";
import Feature from "../components/features/feature";
import Video from "../components/video/video";
import Footer from "../components/footer/footer";

// Guest page code goes here
const GuestPage = () => {
  return (
    <>
<<<<<<< Updated upstream
      <Navbar></Navbar>
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
      <Button
        onClick={() => {
          console.log("Get started button");
        }}
        type="button"
        buttonStyle="btn--green-solid"
        buttonSize="btn--try-it-out-size"
      >
        Try it out
      </Button>
      <Button
        onClick={() => {
          console.log("Try it out button");
        }}
        type="button"
        buttonStyle="btn--green-outline"
        buttonSize="btn--sign-up-size"
      >
        Login
      </Button>
      <Feature></Feature>
      <Video></Video>
      <Footer></Footer>
=======
      <body style={{ backGround: "#043345" }}>
        <Navbar></Navbar>
        <Button></Button>
        <Feature></Feature>
        <Video></Video>
        <Footer></Footer>
      </body>
>>>>>>> Stashed changes
    </>
  );
};

export default GuestPage;
