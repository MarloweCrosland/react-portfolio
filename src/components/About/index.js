import React from 'react'
import myphoto from "./myphoto.jpg";

function About() {

  return (
    <section>
        <div id="text-container">
            <h1 className="heading font-1">Marlowe Crosland</h1>
            <p id="about-me" className="font-1">
            Thank you for viewing my portfolio! I'm Marlowe, a passionate and driven tech new-comer, highly motivated to never stop learning. 
            I have a knack for communicating effectively and thoughtfully with others. My career goals include helping a team to build something 
            awesome while strengthening my skills and mastering new technologies.
            </p>
        </div>
        <div id="photo-container">
        <img src={myphoto} id="myphoto" className="rounded mx-auto d-block portrait" style={{ width: "100%" }} alt="cover" />
        </div>

    </section>
  )
}

export default About