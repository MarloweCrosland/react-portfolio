import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cvtspvh", "template_jckkgga", e.target, "zlbDqG-c6BaJqhqsb")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form id="form" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input placeholder="Your Name" type="text" name="user_name" />
      <label>Email</label>
      <input placeholder="Your Email" type="email" name="user_email" />
      <label>Message</label>
      <textarea placeholder="Your Message" name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Contact;
