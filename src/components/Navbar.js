import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
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
            <a
              className='navbar-social-icon-link'
              href='https://www.linkedin.com/in/kathrynlam/'
            >
              <AiFillLinkedin />
            </a>
            <a
              className='navbar-social-icon-link'
              href='https://github.com/katwingki'
            >
              <AiFillGithub />
            </a>
            <a
              className='navbar-social-icon-link'
              href='mailto: katwingki@gmail.com'
            >
              <AiFillMail />
            </a>
            <a
              className='navbar-social-icon-link'
              href='https://medium.com/swlh/expo-firebase-authentication-cloud-firestore-using-async-await-react-hooks-700920ad4b2b'
            >
              <AiFillMediumSquare />
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
                href='#main-container-projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className='fas fa-tasks' />
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
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
