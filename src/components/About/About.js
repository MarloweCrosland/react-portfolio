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
          <p className="about font-1">Hi, I'm Marlowe. I'm a NASM certified personal trainer. I'm a dog mom, an outdoor enthusiast, and a puzzle lover. Fitness is more than just a career for me. 
          Being active and practicing setting and achieving goals through fitness completely transformed my life and gave me the mental strength and confidence I need to accomplish ANYTHING. I believe that keeping the promise to yourself to get and stay fit is an essential step in your health journey. 
          I am never judgemental. I want to meet you where you're at and to help set a roadmap to your goals. I'm SO excited to be there with you every step of the way!
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
          <h3 className="heading font-1">What My Programs Include:</h3>
          <div id="tiles-div" className="tiles font-2">
            <StringsList />
          </div>
        </div>
    </div>
  );
}

export default About;
