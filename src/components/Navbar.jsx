import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false);

  return (
    <nav
      className='navbar is-danger'
      role='navigation'
      aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          Arwin Mavaji
        </Link>

        <button
          onClick={() => {
            setisActive(!isActive);
          }}
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarRight'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </button>
      </div>

      <div
        id='navbarRight'
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-start'></div>
        <div className='navbar-end'>
          <Link className='navbar-item' to='/about'>
            About
          </Link>
          <Link className='navbar-item' to='/projects'>
            Projects
          </Link>
          <Link className='navbar-item' to='/contact'>
            Contact
          </Link>
          <Link className='navbar-item' to='/resume'>
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
