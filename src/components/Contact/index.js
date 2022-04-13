import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const ContactForm = () =>{
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleChange = e => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid!');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }

    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(formState);
    }
    return(
        <section>
            <h1 data-testid="h1tag">Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' defaultValue={name} onBlur={handleChange} name='name'/>
                </div>
                <div>
                    <label htmlFor='email'>Email Address:</label>
                    <input type='text' defaultValue={email} onBlur={handleChange} name='email'/>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;