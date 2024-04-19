import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// https://saurabhgupta.netlify.app/
// https://smithgajjar.dev/
function Home() {
  return (
    <div>
       <div className="navbar" >
            <ul className="navItem">
              <li>Home</li>
              <li>About me</li>
              {/* inside about me skills and interest */}
              <li>Resume</li>
              {/*inside Resume we have to give download option of resume*/}
              <li>Contact</li>
            </ul>
        </div>
      <div className="homeContent">
        <div className='container'>
         <h1 className='user'>Manish Chouhan</h1>
         <h2>I'm a passionate <span><i>web developer.</i></span></h2>
         <div className="social-links" >
        <a href="https://twitter.com/" target="_blank" class="twitter"><i class="ri-twitter-x-line"></i></a>
        <a href="https://www.facebook.com/profile.php?" target="_blank" class="facebook"><i class="ri-facebook-fill"></i></a>
        <a href="https://instagram.com/" target="_blank" class="instagram"><i class="ri-instagram-line"></i></a>
        <a href="https://www.linkedin.com/in/" target="_blank" class="linkedin"><i class="ri-linkedin-box-fill"></i></a>
         </div>
        </div>
       
        <div className='Right'>
           <img src="../../m1.jpg" alt="lion image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
