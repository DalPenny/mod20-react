import React from 'react';
import '../styles/Footer.css';
import GitIMG from '../assets/images/github-logo.png';
import EmailIMG from '../assets/images/email.png';
import LinkedInIMG from '../assets/images/linkedin-logo.png';

function Footer() {

  const imgStyle = {
    width: '3rem',
    
  };
  const imgStyle2 = {
    width: '2rem',
    
  };


  return (
    <footer className="footer grid-container">
       <div className="flex-row navfooter">
        <li>Contact Me</li>
          <li> <a className="logo-img" href="mailto:sathruvani@gmail.com">
          <img
                  src={EmailIMG} style={imgStyle2}
                  alt="a email logo" />
          </a></li>

          <li> <a className="logo-img" href="https://github.com/dalpenny" target="_blank" rel="noreferrer">
          <img
                  src={GitIMG} style={imgStyle}
                  alt="a git logo" />
                  </a></li>

          <li> <a className="logo-img" href="https://www.linkedin.com/in/charitha-alwis-101045a1/" target="_blank" rel="noreferrer">
          <img
                  src={LinkedInIMG} style={imgStyle2}
                  alt="a linkedin logo" />
                  </a></li>
        <li>(123) 123-1234</li>
        </div>
    </footer>
  );
}

export default Footer;
