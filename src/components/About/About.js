import React from "react";
import myphoto from "./myphoto.jpg";
import "./About.css";

function About() {
  return (
    <div className="container">
      <div className="about">
        <div className="about-text">
          <h1 className="heading font-1">About Me</h1>
          <p className="about font-1">
          I
            have a knack for communicating effectively and thoughtfully with
            others. Curently, I am part of the instructional staff at edx. My
            career goals include helping a team to build a groundbreaking product while
            strengthening my skills and mastering new technologies.
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

        <div className="technical-skills font-2">
          <span>TECHNICAL SKILLS </span>
          <br></br>
          JavaScript ES6+, CSS, HTML, SQL, NoSQL, Git, GitHub,
          MongoDB, MySQL, Express, React, Node, NPM, Handlebars, jQuery,
          Bootstrap, Firebase, Heroku
        </div>
      </div>
    </div>
  );
}

export default About;
