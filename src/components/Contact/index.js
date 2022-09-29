import React from 'react'

export default function Contact() {
  return (
 <section>
    <h1>Contact Me  </h1>
    <form id ="contact-form">
        <div class="form-group">
            <label htmlFor="name-input">Name:</label>
            <input type="text" class="form-control" name="name"placeholder="Enter Name"></input>
        </div>

        <div class="form-group">
            <label htmlFor="email-input">Email:</label>
            <input type="email" class="form-control" name="email" placeholder="example@email.com"></input>
        </div>

        <div class="form-group">
            <label htmlFor="message-input">Message:</label>
            <textarea class="form-control" name="message" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-dark">Submit</button>
    </form>
 </section>
    )
}
