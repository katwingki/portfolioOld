import React from 'react';
import './Home.css';
import AboutMe from './AboutMe';

function Home() {
  return (
    <>
      <div className='main-container'>
        <h2>This is my home page</h2>
      </div>
      <AboutMe />
    </>
  );
}

export default Home;
