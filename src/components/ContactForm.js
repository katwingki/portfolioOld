import React from 'react';
import './ContactForm.css';
function ContactForm() {
  return (
    <>
      <div id='form-section'>
        <h3>Send me a message: </h3>
        <div id='main-container-form'>
          <form className='contactform'>
            <label>
              Name: <br />
              <input type='text' name='name' placeholder='Enter your name' />
            </label>
            <br />
            <label>
              Email: <br />
              <input type='text' name='email' placeholder='Enter your email' />
            </label>
            <br />
            <label>
              Message:
              <br />{' '}
              <textarea rows={5} cols={25} placeholder='Enter your message' />
            </label>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
