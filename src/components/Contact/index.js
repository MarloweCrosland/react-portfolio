import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


export default function Contact() {

//manage error messaging
const [errorMessage, setErrorMessage] = useState('');

//manage form data
const [formState, setFormState] = useState({ name: '', email: '', message: '' });

//using the setformstate function to update formstate value for name property
//Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.
function handleChange(e) {

    //if the <input> is email, then validate the value of that input field with the validateEmail function
    if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);
        // if email not valid, set error, else set empty
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }
    }  else {
        // if target is blank, set error, else empty
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
        }
        // if no error message, update the formState
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }

}

//prevent default action then log the formstate on click
//FUTURE- MAKE SURE TO CONNECT TO BACK END AND RECIEVE EMAILS
function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

console.log(formState);
  return (
 <section id="contact-section">
    <h1 className="heading">Contact Me  </h1>
    <form id ="contact-form">
        <div class="form-group">
            <label htmlFor="name-input">Name:</label>
            <input type="text" onChange={handleChange} class="form-control" name="name" defaultValue={formState.name} placeholder="Enter Name"></input>
        </div>

        <div class="form-group">
            <label htmlFor="email-input">Email:</label>
            <input type="email" onChange={handleChange} class="form-control" name="email"  defaultValue={formState.email} placeholder="example@email.com"></input>
        </div>

        <div class="form-group">
            <label htmlFor="message-input">Message:</label>
            <textarea onChange={handleChange} class="form-control" name="message"  defaultValue={formState.message} rows="3"></textarea>
        </div>

        {/* if error message, display error here */}
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        )}

        <button type="submit" onSubmit={handleSubmit} class="btn btn-dark">Submit</button>
    </form>
 </section>
    )
}
