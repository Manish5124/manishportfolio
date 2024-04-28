import React, { useEffect, useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// https://saurabhgupta.netlify.app/
// https://smithgajjar.dev/
function Home() {
  const [role, setRole] = useState('');
  const roles = ['web developer', 'photographer'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRole(roles[index]);
    }, 500); // Delay before showing the next role

    return () => clearTimeout(timeout);
  }, [index, roles]);

  return (
      <div className="homeContent" id="home">
        <div className='Right'>   
        
           {/* <img src="../../m1.jpg" alt="lion image" /> */}
           {/* <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis sint, nostrum ipsa distinctio ea dicta, eveniet cupiditate nisi exercitationem quae eaque corporis recusandae, labore deleniti delectus et beatae eum dolorum!</h1> */}
        </div>
         <div className='maincontainer'>
          <span><img className="wave" src="../../wave.png" alt="waving hand"/></span>
         <h1 className="start-animate"> Hi, I'm <span className="section-title">Manish<span className="accent-line accent-primary" ></span></span></h1>
         <h2>I'm a passionate <span><b><i>{role}</i></b></span></h2>
         <div className="social-links" >
        <a href="https://twitter.com/" target="_blank" class="twitter"><i class="ri-twitter-x-line"></i></a>
        <a href="https://www.facebook.com/profile.php?" target="_blank" class="facebook"><i class="ri-facebook-fill"></i></a>
        <a href="https://instagram.com/" target="_blank" class="instagram"><i class="ri-instagram-line"></i></a>
        <a href="https://www.linkedin.com/in/" target="_blank" class="linkedin"><i class="ri-linkedin-box-fill"></i></a>
         </div>
         </div>
      </div>
  );
}

export default Home;
