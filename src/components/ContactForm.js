import React, { useState, useEffect } from 'react';
import './ContactForm.css';
import Confetti from 'react-confetti';
import { ToastContainer, toast } from 'react-toastify';
import { db } from './firebase';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const width = window.innerWidth;
  const height = window.innerHeight;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      db.collection('contactforms').add({
        name: name,
        email: email,
        message: message,
      });
      setName('');
      setEmail('');
      setMessage('');
      alert('Your message has been submitted! ');
    } catch (err) {
      alert(err.message);
      setLoading(false);
    }
  };
  return (
    <>
      <div id='form-section'>
        <Confetti width={width} height={height} recycle={false} />
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
              style={{ background: loading ? '#CCCCD9' : ' rgb(2, 2, 110)' }}
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
