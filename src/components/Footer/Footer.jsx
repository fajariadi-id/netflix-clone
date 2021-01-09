import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container'>
        <ul className='sosmed d-flex'>
          <li>
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </li>
          <li>
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </li>
          <li>
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </li>
          <li>
            <FontAwesomeIcon icon={['fab', 'youtube']} />
          </li>
        </ul>

        <div className='footer-links d-flex just-between'>
          <ul>
            <li>
              <a href='#footer'>Audio and Subtitle</a>
            </li>
            <li>
              <a href='#footer'>Media Center</a>
            </li>
            <li>
              <a href='#footer'>Privacy</a>
            </li>
            <li>
              <a href='#footer'>Contact Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#footer'>Audio Description</a>
            </li>
            <li>
              <a href='#footer'>Investor Relation</a>
            </li>
            <li>
              <a href='#footer'>Legal Notices</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#footer'>Help Center</a>
            </li>
            <li>
              <a href='#footer'>Jobs</a>
            </li>
            <li>
              <a href='#footer'>Cookie Preferences</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#footer'>Gift Cards</a>
            </li>
            <li>
              <a href='#footer'>Terms of Use</a>
            </li>
            <li>
              <a href='#footer'>Corporate Information</a>
            </li>
          </ul>
        </div>

        <a href='#footer' className='btn footer-btn'>
          Service Code
        </a>

        <p className='copyright'>&copy; 2020. Netflix-Clone</p>
      </div>
    </footer>
  );
};

export default Footer;
