import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resumecontainer">
      <section classNameName="sections">
        <h2
          classNameName="magnify_text"
          data-aos-duration="1000"
          data-aos="fade-up"
        >
          Resume
        </h2>
        {/* <p classNameName="info" data-aos-duration="1000" data-aos="fade-up">
          One of the best pieces of advice I ever got was from a horse master. He told me to go slow to go fast. I
          think that applies to everything in life. We live as though there aren't enough hours in the day but if we
          do each thing calmly and carefully we will get it done quicker and with much less stress.
        </p> */}
        <div className="row">
          <div className="col-12 col-md-6 mt-3 p-3">
            <h4
              className="text-bold"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              Education
            </h4>
            <div
              className="timeline mt-4"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              <h4>Btech + Mtech (IT) (5 yr)</h4>
              <p>2017 - 2022</p>
              <h5>IIPS DAVV, Indore</h5>
              <h5>GPA: 8.2</h5>
            </div>
            <div
              className="timeline "
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              <h4>Senior School Examination (XII)</h4>
              <p>2015 - 16</p>
              <h5>Percentage: 86.8</h5>
            </div>
            <div
              className="timeline "
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              <h4>Secondary School Examination (X)</h4>
              <p>2014 - 15</p>
              <h5>Percentage: 76.8</h5>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-3 p-3">
            <h4
              className="text-bold"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              Work Experience
            </h4>
            <div
              className="timeline mt-4"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              <h4>Jr. Software Engineer </h4>
              <p>Aug 2022 - Present</p>
              <h5>Cognizant</h5>
              <ul>
                <li>Development tasks on React and SpringBoot</li>
              </ul>
            </div>
            <div
              className="timeline"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              <h4>Full Stack Developer Intern</h4>
              <p>jan 2022 - july 2020</p>
              <h5>Cognizant</h5>
              <ul>
                <li>
                  Acquired proficiency in Java, HTML, CSS, JavaScript, Spring
                  Boot, MySQL, Angular, React, MongoDB and 
                  Bootstrap through
                  hands-on experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="skills1 mt-5">
        <h1>skills </h1>
        <div className="row">
          <div className="col-12">
            <main role="main" className="tags-main">
              <span className="tag tag-react tag-lg">
                <img
                  src="../../icons/icons8-react-50.png"
                  className="skill_icon lazyload"
                  alt="React"
                  srcset=""
                />
                ReactJS
              </span>
              <span className="tag tag-node tag-lg">
                <img
                  src="../../icons/icons8-nodejs-100.svg"
                  className="skill_icon lazyload"
                  alt="Nodejs"
                />
                NodeJS
              </span>
              <span className="tag tag-lg">
                <img
                  src="../../icons/docker.png"
                  className="skill_icon lazyload"
                  alt="React"
                />
                Docker
              </span>
              <span className="tag tag-vue tag-lg">
                <img
                  src="../../icons/icons8-mongodb-100.svg"
                  className="skill_icon lazyload"
                  alt="MongoDb"
                />
                MongoDB
              </span>
              <span className="tag tag-angular tag-lg">
                <img
                  src="../../icons/icons8-angularjs-100.svg"
                  className="skill_icon lazyload"
                  alt="Angular"
                />
                Angular
              </span>
              <span className="tag tag-lg tag-jenkins">
                <img
                  src="../../icons/jenkins.png"
                  className="skill_icon lazyload"
                  alt="React"
                />
                Jenkins
              </span>
              <span className="tag tag-lg tag-spring">
                <img
                  src="../../icons/icons8-spring-boot-48.png"
                  className="skill_icon lazyload"
                  alt="SpringBoot"
                />
                SpringBoot
              </span>
              <span className="tag tag-lg tag-java">
                <img
                  src="../../icons/icons8-java-logo-48.png"
                  className="skill_icon lazyload"
                  alt="Java"
                />
                Java
              </span>
              <span className="tag tag-lg ">
                <img
                  src="../../icons/icons8-html-logo-48.png"
                  className="skill_icon lazyload"
                  alt="Html"
                />
                Html
              </span>
              <span className="tag tag-lg ">
                <img
                  src="../../icons/icons8-css-logo-48.png"
                  className="skill_icon lazyload"
                  alt="Html"
                />
                CSS
              </span>

              <span className="tag tag-lg ">
                <img
                  src="../../icons/icons8-javascript-48.png"
                  className="skill_icon lazyload"
                  alt="js"
                />
                Javascript
              </span>
              <span className="tag tag-aws tag-lg">
                <img
                  src="../../icons/aws.png"
                  className="skill_icon lazyload"
                  alt="AWS"
                />
                AWS
              </span>
              <span className="tag tag-lg">
                <img
                  src="../../icons/icons8-mysql-logo-48.png"
                  className="skill_icon lazyload"
                  alt="React"
                />
                Mysql
              </span>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
