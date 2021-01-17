import React from 'react';
import './Home.css';

import Projects from './Projects';
import { aboutMe } from '../Data/data';
import Lottie from 'react-lottie';
import linesPurpleBlue from '../lotties/lines_purple_blue.json';
import { motion } from 'framer-motion';
import {
  GiFamilyHouse,
  GiCampCookingPot,
  GiShoppingCart,
} from 'react-icons/gi';
import ContactForm from './ContactForm';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';

function Home() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: linesPurpleBlue,
    rendererSettings: {
      preserveAspectRaiot: 'xMidYMid slice',
      className: 'lottie-animation',
    },
  };

  const handleClick = () => {
    return (
      <iframe
        src='https://docs.google.com/document/d/1ODAmBf55PmVSlXAJr8kEnxrHAtQOEGZiV0-Fk8OUmeA/export?format=pdf&embedded=true'
        width='100%'
        height='250px'
      ></iframe>
    );
  };
  return (
    <>
      <div id='main-container'>
        <Confetti width={width} height={height} recycle={false} />

        <div className='intro-wrapper'>
          <motion.h2
            // animate={{ scale: [1, 4, 3, 2, 1], rotate: [0, 180, 180, 0] }}
            animate={{ scale: [1, 4, 3, 2, 1], rotate: 360 }}
            transition={{ ease: 'easeIn', duration: 0.6 }}
            className='title'
          >
            Hi there! I'm Kathryn, a full-stack developer.
          </motion.h2>

          <div className='intro-text'>
            <p>{aboutMe.aboutOne}</p>
          </div>
          <div className='intro-text'>
            <p>{aboutMe.aboutTwo}</p>
          </div>
          <div className='intro-text'>
            <p>{aboutMe.aboutThree}</p>
          </div>
          <div className='intro-text'>
            <p>{aboutMe.keyValue}</p>
          </div>
          <div className='resume-section'>
            <a href='https://docs.google.com/document/d/1ODAmBf55PmVSlXAJr8kEnxrHAtQOEGZiV0-Fk8OUmeA/export?format=pdf&embedded=true'>
              <button className='resume-button'> Download Resume</button>
            </a>
          </div>

          <div className='lottie-wrapper'>
            <Lottie options={defaultOptions} />
          </div>
          <div className='center-wrapper'>
            <motion.h3
              animate={{ scale: [1, 2, 2, 2, 1] }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className='subtitle'
            >
              When I am not coding...
            </motion.h3>
            <div className='center-wrapper-div'>
              <div>
                <GiFamilyHouse size={50} />
                <p>House Browsing</p>
              </div>
              <div>
                <GiCampCookingPot size={50} />
                <p>Cook Meals</p>
              </div>
              <div>
                <GiShoppingCart size={50} />
                <p>Lookup Deals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Projects />
      <ContactForm />
    </>
  );
}

export default Home;
