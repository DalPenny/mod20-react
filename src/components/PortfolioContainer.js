import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  //renders a page based on the if statement compared to our state
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      {/* passing the current page and the handle page change */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}  />
   
      {/* running the renderpage function/rendering the page */}

      {renderPage()}
      <Footer/>
    </div>
  );
}
