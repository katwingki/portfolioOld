import React from 'react';
import './AboutMe.css';
function AboutMe({ motto, about, keyValue }) {
  return (
    <>
      <div id='main-container-about'>
        <h2>{keyValue}</h2>
      </div>
    </>
  );
}

export default AboutMe;
