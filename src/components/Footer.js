import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AiFillMail,
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillGithub,
} from 'react-icons/ai';
import './Footer.css';
const Footer = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <div className='footer-container'>
        <div className='footer-wrap'>
          <div className='footer-pagelinks-items'>
            <Link to='/' className='footer-links'>
              Home
            </Link>
            <Link to='/aboutme' className='footer-links'>
              About Me
            </Link>
            <Link to='/projects' className='footer-links'>
              Projects
            </Link>
          </div>

          <small className='website-rights'>
            © 2020 Kathryn Lam. All rights reserved.
          </small>

          <div className='footer-social-icon-wrap'>
            <a
              className='social-icon-link'
              href='https://www.linkedin.com/in/kathrynlam/'
            >
              <AiFillLinkedin />
            </a>
            <a className='social-icon-link' href='https://github.com/katwingki'>
              <AiFillGithub />
            </a>
            <a className='social-icon-link' href='mailto: katwingki@gmail.com'>
              <AiFillMail />
            </a>
            <a
              className='social-icon-link'
              href='https://medium.com/swlh/expo-firebase-authentication-cloud-firestore-using-async-await-react-hooks-700920ad4b2b'
            >
              <AiFillMediumSquare />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
