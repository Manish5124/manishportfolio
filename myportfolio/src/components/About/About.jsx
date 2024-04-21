import React from 'react';
import './About.css';

function About() {
  return (
    <div className='about'>
      <h1 className='text-center mt-5'><b>About Me</b><span className='blueline'></span></h1>
      <p className="text-secondary story-content data">
        {`I'm Manish Chouhan, a 24-year-old `}
        <span className="position-relative">
          Full Stack developer
        </span>
        {`, Solutions Architect and Mentor. I like to improve user experience, create smart user interfaces, developing rich web applications and managing & optimizing backend infrastructure including deployment, scalability, performance, and efficiency. Fond of `}
        {` UI/UX. Currently working as a Senior Software Engineer at Codecademy. Primarily interested in JavaScript frontend and backend spectrum, Although learning GoLang 🔥. Working on interesting projects with positive people.`}
      </p>
    <div className='button'><button type="button" class="btn">VIEW RESUME</button></div>

    </div>
  )
}

export default About;