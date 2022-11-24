import React from 'react';
import '../../styles/Portfolio.css';
import PRJ1 from '../../assets/images/prj1.jpg';
import PRJ2 from '../../assets/images/portfolio.png';
import PRJ3 from '../../assets/images/pwdgen.png';
import PRJ4 from '../../assets/images/quiz.jpg';
import PRJ5 from '../../assets/images/ws1.jpg';
import PRJ6 from '../../assets/images/weather.png';
import PRJ7 from '../../assets/images/fetch.png';
import PRJ8 from '../../assets/images/fetchpet.png';

export default function Portfolio() {
  
  const cardStyle = {
    width: '10rem',
  };

  // export default function Portfolio(props){
  return (

    <div>
      <h1>Portfolio</h1>

      {/* <section class="row justify-content-center"> */}
      <div class="portfolio flex">

        <section className="display">
          <div className="card" style={cardStyle}>
            <div className="projects-grid">
              <a href="https://dalpenny.github.io/Horiseon-Accessibility-Code-Refactor/"
                className="project prj1">
                <img
                  className="card-img-top"
                  src={PRJ1}
                  alt="a project 1" />
                <div className="card-body">
                  <h5>Code Refactor</h5>
                </div>
              </a>
            </div>
          </div>
          <br></br>
        </section>


        <section id="portfolio" className="display">
          <div className="card" style={cardStyle}>
            <div className="projects-grid">
              <a href="https://dalpenny.github.io/professional-portfolio/"
                className="project prj2">
                <img
                  className="card-img-top"
                  src={PRJ2}
                  alt="a project 2" />
                <div className="card-body">
                  <h5>Professional portfolio in HTML and CSS</h5>
                </div>
              </a>
            </div>
          </div>
          <br></br>
        </section >

        <section id="portfolio" className="display">
          <div className="card" style={cardStyle}>
            <div className="projects-grid">
              <a href="https://dalpenny.github.io/pwdgen/"
                className="project prj3">
                <img
                  className="card-img-top"
                  src={PRJ3}
                  alt="a project 3" />
                <div className="card-body">
                  <h5>Password Generator</h5>
                </div>
              </a>
            </div>
          </div>
          <br></br>
        </section >

        <section id="portfolio" className="display">
          <div className="card" style={cardStyle}>
            <div className="projects-grid">
              <a href="https://dalpenny.github.io/codequiz/"
                className="project prj4">
                <img
                  className="card-img-top"
                  src={PRJ4}
                  alt="a project 4" />
                <div className="card-body">
                  <h5>Code Quiz</h5>
                </div>
              </a>
            </div>
          </div>
          <br></br>
        </section >

            <section id="portfolio" className="display">
          <div className="card" style={cardStyle}>
            <div className="projects-grid">
              <a href="https://dalpenny.github.io/workdayscheduler/"
                className="project prj5">
                <img
                  className="card-img-top"
                  src={PRJ5}
                  alt="a project 5" />
                <div className="card-body">
                  <h5>Workday Scheduler</h5>
                </div>
              </a>
            </div>
          </div>
          <br></br>
        </section >

            <section id="portfolio" className="display">
          <div className="card" style={cardStyle}>
            <div className="projects-grid">
              <a href="https://dalpenny.github.io/weather/"
                className="project prj6">
                <img
                  className="card-img-top"
                  src={PRJ6}
                  alt="a project 6" />
                <div className="card-body">
                  <h5>Weather Dashboard</h5>
                </div>
              </a>
            </div>
          </div>
          <br></br>
        </section >  

        <section id="portfolio" className="display">
          <div className="card" style={cardStyle}>
            <div className="projects-grid">
              <a href="https://cooper2016.github.io/Fetch/"
                className="project prj7">
                <img
                  className="card-img-top"
                  src={PRJ7}
                  alt="a project 7" />
                <div className="card-body">
                  <h5>Fetch! - Dog Parks</h5>
                </div>
              </a>
            </div>
          </div>
          <br></br>
        </section >

        <section id="portfolio" className="display">
          <div className="card" style={cardStyle}>
            <div className="projects-grid">
              <a href="https://juicy-fetch-a-pet.herokuapp.com/"
                className="project prj8">
                <img
                  className="card-img-top"
                  src={PRJ8}
                  alt="a project 8" />
                <div className="card-body">
                  <h5>Fetch-a-Pet - Find your new best friend!</h5>
                </div>
              </a>
            </div>
          </div>
          <br></br>
        </section >  

      {/* </section> */}

      </div >
    </div >

  );
}
