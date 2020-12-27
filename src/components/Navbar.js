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
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            <i class='fas fa-home' />
            Home
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a
                href='/aboutme'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className='far fa-id-badge' />
                About me
              </a>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className='fas fa-tasks' />
                Projects
              </Link>
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
