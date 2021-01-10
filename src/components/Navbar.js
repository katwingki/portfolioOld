import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoGif from '../assets/logo2.gif';
import connectGif from '../assets/connect2.gif';
import {
  AiFillMail,
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillGithub,
} from 'react-icons/ai';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-social-icon-wrap'>
            <img src={logoGif} className='navbar-logo' />
            <img src={connectGif} className='navbar-logo' />

            <a
              className='navbar-social-icon-link'
              href='https://www.linkedin.com/in/kathrynlam/'
            >
              <AiFillLinkedin />
            </a>
            <a
              className='navbar-social-icon-link'
              href='mailto: katwingki@gmail.com'
            >
              <AiFillMail />
            </a>
          </div>

          {/* <Link to='/' className='navbar-logo'>
            <i className='fas fa-home' />
            Home
          </Link> */}

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a
                href='#main-container-about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className='far fa-id-badge' />
                About me
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#project-section'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className='fas fa-tasks' />
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className='far fa-address-book' />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
