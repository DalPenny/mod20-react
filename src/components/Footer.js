import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer class="footer grid-container">
       <div class="flex-row navfooter">
        <li>Contact Me</li>
          <li> <a href="mailto:sathruvani@gmail.com">Email</a></li>

          <li> <a href="https://github.com/dalpenny" target="_blank" rel="noreferrer">GitHub</a></li>

          <li> <a href="https://www.linkedin.com/in/charitha-alwis-101045a1/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li>(123) 123-1234</li>
        </div>
    </footer>
  );
}

export default Footer;
