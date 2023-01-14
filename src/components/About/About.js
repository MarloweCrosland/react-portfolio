import React from "react";
import myphoto from "./myphoto.jpg";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-text">
        <h1 className="heading font-1">About Me</h1>
        <p className="about font-1">
          Thank you for viewing my portfolio! I'm Marlowe, a passionate and
          driven tech new-comer, highly motivated to never stop learning. I have
          a knack for communicating effectively and thoughtfully with others.

            Curently, I am part of the instructional staff at edX's U of W full stack 
            bootcamp, where I help students with assignments and learning the MERN stack. My
          career goals include helping a team to build something awesome while
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
    </div>
  );
}

export default About;
