import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';


function Contact() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid, sorry!');
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="content-section" id="contact">
            <h1 data-testid="h1tag">Contact</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div id="input_name">
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange}  name="name"/>
                </div>
                <div id="input_email">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div id="input_message">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div id="submit-contain">
                    <button type="submit" data-testid="submit-button">Submit</button>
                </div>
            </form>
        </section>
    );
}

export default Contact;