import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  const googleDocPdf =
    'https://docs.google.com/document/d/1Q1K278U0x2qmM7ih0CQtP2ei15n_GmlHhU6RbfI6A7w/export?format=pdf&embedded=true';

  const googleDoc =
    'https://docs.google.com/document/d/1Q1K278U0x2qmM7ih0CQtP2ei15n_GmlHhU6RbfI6A7w/edit?usp=sharing';

  return (
    <div id='resume-section'>
      <div className='resume-top-button'>
        <a href={googleDocPdf}>
          <button className='resume-button'> Download Resume</button>
        </a>
      </div>

      <iframe
        src='https://docs.google.com/document/d/1Q1K278U0x2qmM7ih0CQtP2ei15n_GmlHhU6RbfI6A7w/edit?usp=sharing&embedded=true'
        className='resume-iframe'
      ></iframe>
    </div>
  );
};

export default Resume;

{
  /* <a href={googleDoc} target='_blank' onClick={window.open(googleDoc)}>
          Click
        </a> */
}
