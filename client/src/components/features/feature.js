// Feature component
import React, { useEffect, useState } from "react";
import "./feature.css";
import Button from "../button/button";
import deadlinesIcon from "./features-img/deadlines-icon.png";

const URL = "https://source.unsplash.com/random/500x300";

// const Feature = (imgSrc,style1,style2,defaultPattern)
const Feature = (props) => {
  const { style, imgSrc, text, featureIcon, featureTextIconName, btnOnClick } =
    props;

  return (
    <div className={style}>
      <div className="featureImg">
        {/* <img src={imgSrc} alt="" /> */}
        <img src={imgSrc} alt="" />
      </div>
      {/* <div className="featureText">{text}</div> */}
      <div className="featureTextParent">
        <div className="featureText">
          <div className="featureTextIcon">
            <h1>{featureTextIconName}</h1>
            <img src={featureIcon} alt="" />
          </div>
          <div className="featureTextContent">{text}</div>
          <div className="featureTextButton">
            <Button onClick={btnOnClick} buttonSize="btn--try-it-out-size">
              Try it out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
