import React, { useState } from 'react';
import '../../styles/Contact.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either name, email, and message
    if (inputType === 'Name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    }else if (inputType === 'message') {
        setMessage(inputValue);
      }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    if (!(Message)) {
        setErrorMessage('please input a message');
        return;
    };
    alert(`Hello ${Name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
  };

  return (
    <div>
      <p>Hello {Name}</p>
      <form className="form">
      <input
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="name"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={Message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
