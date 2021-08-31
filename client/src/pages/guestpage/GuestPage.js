import React from "react";
import "./GuestPage.css";
// Importing all the required components known as of now.
import Navbar from "../../components/navbar/navbar";
import Feature from "../../components/features/feature";
import Video from "../../components/video/video";
import Footer from "../../components/footer/footer";
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