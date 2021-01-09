import React, { useEffect, useState } from 'react';
import './Navbar.css';
import user from '../../utils/assets/img/user.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// *::: GLOBAL VAR :::

// const SEARCH_API =
//   'https://api.themoviedb.org/3/search/movie?api_key=8474014efb37e489ad1a5299e6ae7a88&query=';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // 70 -> navbar height
      window.pageYOffset > 70 ? setShowNav(true) : setShowNav(false);
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  // const handleExpand = () => {
  //   const searchEl = document.querySelector('.search');
  //   const searchInput = document.querySelector('.input');
  //   searchEl.classList.toggle('active');
  //   searchInput.focus();
  // };

  // const [input, setInput] = useState('');
  // const handleChange = (e) => {
  //   e.preventDefault();

  //   setInput(e.target.value);
  // };

  return (
    <nav className={`fixed-nav ${showNav && 'nav-bg'}`}>
      <div className='container d-flex just-between align-center'>
        <img
          className='nav-logo'
          src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
          alt='netflix logo'
        />

        {/* <div className='search'>
          <input
            type='text'
            className='input'
            placeholder='Search...'
            onChange={handleChange}
            value={input}
          />
          <button className='search-btn' onClick={handleExpand}>
            <FontAwesomeIcon icon='search' />
          </button>
        </div> */}

        <img className='user-pic' src={user} alt='' />
      </div>
    </nav>
  );
};

export default Navbar;
