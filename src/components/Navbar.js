import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-logo-section'>
          <Link to='/' className='navbar-logo'>
            <i className='fas fa-home' />
            Home
          </Link>
        </div>

        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a
                href='/portfolio/#main-container-about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className='far fa-id-badge' />
                About me
              </a>
            </li>
            <li className='nav-item'>
              <a
                href={'/portfolio/#project-section'}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className='fas fa-tasks' />
                Projects
              </a>
            </li>
            <li className='nav-item'>
              {/* <a
                href={'/portfolio/resume'}
                className='nav-links'
                onClick={closeMobileMenu}
              > */}
              <Link
                to='/resume'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class='fas fa-file-invoice' />
                Resume
              </Link>

              {/* </a> */}
            </li>
            <li className='nav-item'>
              <a
                href='/portfolio#contact-block'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className='far fa-address-book' />
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
