// Feature component
import React from "react";
import "./feature.css";
import data from "./feature-data";
import Button from "./../button/button";
import {
  deadline,
  resource,
  timetable,
  updates,
} from "./../../assets/images/guestPage/";

const Feature = () => {
  const {
    feature_info_tt: ttInfo,
    feature_info_quick_updates: updatesInfo,
    feature_info_deadlines: deadlinesInfo,
    feature_info_resources: resourcesInfo,
  } = data[0];
  console.log(data[0].feature_info_tt);
  return (
    <>
      <section className="features-section">
        <h1 className="features-heading">features</h1>

        {/* Timetable */}
        <article className="features-container">
          <div className="features-info">
            <div className="feature-title">
              <img className="icon" src={timetable} alt=""></img>
              <h2 className="title-heading">time-table</h2>
            </div>
            <p>{ttInfo}</p>
            <Button>try out</Button>
          </div>
          <div className="features-img">
            <img src="" alt=""></img>
          </div>
        </article>

        {/* updates */}
        <article className="features-container">
          <div className="features-img">
            <img src="" alt=""></img>
          </div>
          <div className="features-info">
            <div className="feature-title">
              <img className="icon" src={updates} alt=""></img>
              <h2 className="title-heading">quick updates</h2>
            </div>
            <p>{updatesInfo}</p>
            <Button>try out</Button>
          </div>
        </article>

        {/* deadlines */}
        <article className="features-container">
          <div className="features-info">
            <div className="feature-title">
              <img className="icon" src={deadline} alt=""></img>
              <h2 className="title-heading">deadlines</h2>
            </div>
            <p>{deadlinesInfo}</p>
            <Button>try out</Button>
          </div>
          <div className="features-img">
            <img src="" alt=""></img>
          </div>
        </article>

        {/* resources */}
        <article className="features-container">
          <div className="features-img">
            <img src="" alt=""></img>
          </div>
          <div className="features-info">
            <div className="feature-title">
              <img className="icon" src={resource} alt=""></img>
              <h2 className="title-heading">resources</h2>
            </div>
            <p>{resourcesInfo}</p>
            <Button>try out</Button>
          </div>
        </article>
      </section>
    </>
  );
};

export default Feature;
