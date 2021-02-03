import React, { useState } from 'react';
import './ContactForm.css';
import { db } from './firebase';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({ offset: -160, scrollDuration: 200 });

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
      } catch (err) {
        alert(err.message);
        setLoading(false);
      }
    }
  };
  return (
    <ScrollableAnchor id={'contact-block'}>
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
              style={{
                background: loading ? '#d3d3d3' : ' rgb(25, 25, 128)',
              }}
              onClick={handleSubmit}
            >
              Submit
            </button>
            <p className='website-rights'>Powered by Firebase</p>
          </form>
        </div>
      </div>
    </ScrollableAnchor>
  );
};

export default ContactForm;
