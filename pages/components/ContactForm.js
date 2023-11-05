import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Can\'t be empty');
      isValid = false;
    } else {
      setNameError('');
    }

    if (email.trim() === '') {
      setEmailError('Can\'t be empty');
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please use a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (message.trim() === '') {
      setMessageError('Can\'t be empty');
      isValid = false;
    } else {
      setMessageError('');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form data here
      // You can make an API request or perform any other actions
    }
  };

  return (
    <div className="contact-form">
      <h3>Connect<br />with us</h3>

      <form onSubmit={handleSubmit}>
        <input
          className="input-small"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <div className="error-message-name">{nameError}</div>}

        <input
          className="input-small"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        {emailError && <div className="error-message-email">{emailError}</div>}

        <input
          type="text"
          className="input-large"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        
        {messageError && <div className="error-message-message">{messageError}</div>}

        <button type="submit">
          <img src="./arrow-right-line.png" alt="arrow" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
