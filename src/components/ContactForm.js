import React, { useState, useEffect } from 'react';
import './ContactForm.css';
import Toastify from 'toastify-js';
import { db } from './firebase';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name) alert('Please enter your name');
    else if (!email) alert('Please enter your email');
    else if (!message) alert('Please enter a message');
    else {
      try {
        await db.collection('contactforms').add({
          name: name,
          email: email,
          message: message,
        });
        setName('');
        setEmail('');
        setMessage('');
        setLoading(false);
        alert('Your message has been submitted');
        // Toastify({
        //   text: 'Your message has been submitted!',
        //   duration: 3000,
        //   destination: 'https://github.com/apvarun/toastify-js',
        //   newWindow: true,
        //   close: true,
        //   gravity: 'bottom',
        //   positionLeft: false,
        //   backgroundColor: 'linear-gradient(to right, #FFA69E, #861657)',
        //   stopOnFocus: true,
        // }).showToast();
      } catch (err) {
        alert(err.message);
        setLoading(false);
      }
    }
  };
  return (
    <>
      <div id='form-section'>
        <h3>Send me a message: </h3>
        <div id='main-container-form'>
          <form className='contactform'>
            <label>
              Name: <br />
              <input
                type='text'
                value={name}
                placeholder='Enter your name'
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Email: <br />
              <input
                type='text'
                value={email}
                placeholder='Enter your email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Message:
              <br />
              <textarea
                rows={5}
                cols={25}
                value={message}
                placeholder='Enter your message'
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button
              type='submit'
              style={{ background: loading ? '#d3d3d3' : ' rgb(14, 14, 92)' }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
