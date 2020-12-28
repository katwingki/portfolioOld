import React from 'react';
import './Home.css';
import AboutMe from './AboutMe';
import Projects from './Projects';

function Home() {
  return (
    <>
      <div id='main-container'>
        <h2>This is my home page</h2>
      </div>
      <AboutMe />
      <Projects />
    </>
  );
}

export default Home;
