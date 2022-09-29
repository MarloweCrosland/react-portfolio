import React from 'react'
import myphoto from "./myphoto.jpg";

function About() {

  return (
    <section className="my-5" >
        <div id="text-container">
            <h1 id="about">Who am I?</h1>
            <p id="about-me">
            Thank you for viewing my portfolio! I am a passionate and driven tech new-comer and I am highly motivated to never stop learning. 
            I have a knack for communicating effectively and thoughtfully with others. My career goals include helping a team to build something 
            awesome while strengthening my skills.
            </p>
        </div>
        <div id="photo-container">
        <img src={myphoto} id="myphoto" className="rounded mx-auto d-block" style={{ width: "100%" }} alt="cover" />
        </div>

    </section>
  )
}

export default About