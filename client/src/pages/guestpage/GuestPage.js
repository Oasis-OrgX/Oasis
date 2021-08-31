import React from "react";
import "./GuestPage.css";
// Importing all the required components known as of now.
import Navbar from "../../components/navbar/Navbar";
import Feature from "../../components/features/Feature";
import Video from "../../components/video/Video";
import Footer from "../../components/footer/Footer";
// Importing Data
import featuresData from "../../components/features/feature-data";

console.log(featuresData);

// Guest page code goes here
const GuestPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="feature-wrapper">
        <div className="feature-heading">
          <h1>About Oasis</h1>
        </div>
        <div className="feature-components">
          {featuresData.map((feature, index) => {
            return <Feature key={index} {...feature}></Feature>;
          })}s
        </div>
      </div>
      {/* <Video></Video>
        <Footer></Footer> */}
    </>
  );
};

export default GuestPage;