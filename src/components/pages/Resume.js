import React from 'react';
import '../../styles/Resume.css';


export default function Resume() {
  return (
    <div>
    <section className="resume-head">
      <div>
        <h1>Charitha Alwis</h1>
        <a href="mailto:sathruvani@gmail.com">email me</a>
      </div>
    </section>

    <section className="resume-body">
      <hr></hr>
      <div>
        <div>
          <h5 className="resume-h5">EDUCATION:</h5>
          <p className='resume-p'> University of Minnesota, Minneapolis, MN</p>
          <p>Bachelor of Science in Animal Science - May 2019</p>
          <p>Coding Bootcamp - June-December 2022</p>

          <h5 className="resume-h5">Self study:</h5>
          <p>February 2020: Programming Languages: Swift, Dart</p>

          <h5 className="resume-h5">AWARDS:</h5>
            <p>May 2018, 2015, 2014: University of Minnesota Multicultural Award for Academic Excellence</p>

          <h5 className="resume-h5">LEADERSHIP EXPERIENCE: Co-founder Direct Tsunami Relief</h5>
          <p>January 2005-July 2012 Co-founded a non-profit to provide disaster relief after the 2004 Asian Tsunami through grassroots support. Raised funds and built a village with 78 homes, community center, and a preschool.</p>

          <h5 className="resume-h5">EXPERIENCE:</h5>
          <h5>Food and Beverage Expert- Target Corporation, Minnetonka, MN</h5>
          <p>September 2021-Present</p>
          <h5>Assistant Teacher- Radiant Montessori, Maple Grove, MN</h5>
          <p>May-December 2019</p>
          <h5>Shadow- Shady Oak Veterinary Clinic, Minnetonka, MN</h5>
          <p>February-April 2019 </p>

          <h5 className="resume-h5">CODING SKILLS:</h5>
          <p> HTML, CSS, Javascript, React, SQL, Web APIs, 3rd Party APIs, Server Side APIs, Node.js, Object Oriented Programming, Express.js, Object Relational Mapping, Model-View-Controller, REGEX, NoSQL, Progressive Web Applications, MERN
          </p>

          <h5 className="resume-h5">LANGUAGE SKILLS:</h5>
          <p>Fluent in English and Sinhalese
            Elementary proficiency in: Japanese and French</p>
          <br></br>
        </div>
        <br></br>
      </div>
    </section>
    </div>
  );
}
