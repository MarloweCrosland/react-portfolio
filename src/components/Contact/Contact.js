import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
function Contact() {

  return (

      <div className="container">
      <h2 id="resume-link" className="resume">
        <iframe title="pug" className="animation" src="https://giphy.com/embed/he8ng6mnnlXcETGopJ" width="471" height="480" frameBorder="0" ></iframe>
            <a href="mailto:marlowe.pt@gmail.com"className='font-1' >Click here to email me</a>
      </h2>
      </div>
    )
}

export default Contact;
