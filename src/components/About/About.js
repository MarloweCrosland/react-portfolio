import React from "react";
import myphoto from "./myphoto.jpg";
import "./About.css";
import StringsList from "./Tiles";

function About() {
  return (
    <div className="container">
      <div className="about">
        <div className="about-text">
          <h1 className="heading font-1">About Me</h1>
          <p className="about font-1">
test test
          </p>
        </div>
        <div id="photo-container">
          <img
            src={myphoto}
            id="myphoto"
            className="rounded mx-auto d-block portrait"
            style={{ width: "100%" }}
            alt="cover"
          />
        </div>
        </div>

        <div className="technical-skills">
          <h3 className="heading font-1">TECHNICAL SKILLS </h3>
          <div id="tiles-div" className="tiles font-2">
            <StringsList />
          </div>
        </div>
    </div>
  );
}

export default About;
