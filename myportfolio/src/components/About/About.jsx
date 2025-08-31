import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
        <section id="about" className="sections">
        <h2 className="magnify_text" data-aos-duration="1000" data-aos="fade-up">About Me</h2>
      <p className="text-secondary story-content data">
      <span>Hello, I'm Manish Chouhan, a dedicated full-stack web developer with a penchant for crafting robust digital solutions. With a fervent passion for coding, I immerse myself in the dynamic realms of Java for backend development and harness the power of React for front-end mastery.</span>
  
       <span className="notImp">
      Currently, I thrive as a junior software developer at Cognizant, a prominent America-based multinational corporation, where I've honed my skills over the past two years. Within this stimulating environment, I've encountered numerous challenges along my developmental journey. Yet, armed with resilience and a collaborative spirit, I've worked alongside my esteemed team to surmount obstacles and deliver exceptional value to our clientele, consistently meeting deadlines with finesse.
      </span>
  
        <span className="notImp"> Recognized by both my peers and the organization for my contributions to team synergy and project success, I find immense fulfillment in the collective achievements we've orchestrated. Beyond the lines of code, I embody the ethos of a team player, fostering an environment where innovation thrives and excellence becomes the norm.
        </span>
   
        <span>Driven by a relentless pursuit of excellence, I remain steadfast in my commitment to pushing the boundaries of technological innovation, continuously seeking opportunities to refine my craft and elevate the digital landscape. With an unwavering dedication to excellence and a fervent love for coding, I embark on each new project with enthusiasm, eager to leave an indelible mark on the digital frontier. </span>
      </p>
      <div className="button">
          <a href="../../" target="_blank" className="btn" download="Manish.pdf">VIEW RESUME</a>
        </div>     
      </section>
    </div>
  );
}

export default About;
