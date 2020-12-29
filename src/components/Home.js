import React from 'react';
import './Home.css';
import AboutMe from './AboutMe';
import Projects from './Projects';
import { aboutMe } from '../Data/data';
import Lottie from 'react-lottie';
import animatedBigBlueCircles from '../lotties/bigBlueCircles.json';
import { motion } from 'framer-motion';

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animatedBigBlueCircles,
    rendererSettings: {
      preserveAspectRaiot: 'xMidYMid slice',
    },
  };

  return (
    <>
      <div id='main-container'>
        <div className='intro-wrapper'>
          <motion.h2
            animate={{ scale: [1, 2, 2, 1, 1], rotate: [0, 180, 180, 0] }}
            transition={{ ease: 'easeIn', duration: 0.6 }}
          >
            Hi there! I'm Kathryn, a full-stack developer.
          </motion.h2>
          <div className='intro-text'>
            <p>{aboutMe.about}</p>
          </div>
          <Lottie options={defaultOptions} height={150} width={150} />
        </div>
      </div>
      <AboutMe {...aboutMe} />
      <Projects />
    </>
  );
}

export default Home;
