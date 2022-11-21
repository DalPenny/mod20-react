import React from 'react';
import '../styles/NavTabs.css';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// destructering

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div class="grid-container flex-row">
      <div class="item1">
        <p class="p">Charitha Alwis</p></div>
      <nav>
        <div class="item1">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                href="#aboutme"
                onClick={() => handlePageChange('AboutMe')}
                // ternary operator is our current tab active
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                // setting page name, classes will be updated, state is updated
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavTabs;
