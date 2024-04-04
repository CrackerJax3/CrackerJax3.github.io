import React from 'react';
import './Header.css'; // Import your CSS file for styling
import './App.css'; // You can create this file for styling
import Slideshow from './Slideshow';
import logo from './msxbigwhitetransparent.png'; // Import your logo image file
import './Footer.css';
import Sidebar from './Sidebar'; // Import the Sidebar component
// add this in the right place
//       <Sidebar /> {/* Include the Sidebar component */}
import { Helmet } from 'react-helmet';

import image1 from './images/5.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import mission from './images/mission.jpeg';
import community from './images/community.png';
import consulting from './images/consulting.png'
import hosting from './images/hosting.png'


function App() {
  return (

    <div className="App">
      <Helmet>
        <title>MSX</title>
        <link rel="canonical" href="http://msxbocachica.org" />
        <meta name="description" content="21st Century Skill-Stacks for Everyone" />
        <link rel="icon" type="image/png" href="/favicon.ico" sizes="16x16" />
      </Helmet>
      
      <header className="Header">

        <div className="LogoContainer">
          <img src={logo} alt="Logo" className="Logo" />
        </div>
        <div className="header-left">
          <button className="header-button">Home</button>
          <button className="header-button">Products</button>
          <button className="header-button">Locations</button>
          <button className="header-button">About Us</button>
        </div>
      </header>
      <body>
        <div className="Section1">
          <img src={mission} />
          <div class="content">
            <h1>MAKER SPACE EXPLORATION</h1>
            <p>21st Century Skill-stacks for Everyone</p>
          </div>
        </div>
        <div className="Section2">
          <img src={community} />
          <div class="content">
            <h1>COMMUNITY EVENTS</h1>
            <p>Purpose driven community engagements at scale.</p>
          </div>
        </div>
        <div className="Section3">
          <img src={consulting} />
          <div class="content">
            <h1>CONSULTING</h1>
            <p>Purpose driven community engagements at scale.</p>
          </div>
        </div>
        <div className="Section4">
          <img src={hosting} />
          <div class="content">
            <h1>HOSTING TO INSPIRE</h1>
            <p>Purpose driven community engagements at scale.</p>
          </div>
        </div>
        <div className="Section5">
          <img src={image2} />
          <div class="content">
            <h1>SERVICES</h1>
            <p>Purpose driven community engagements at scale.</p>
          </div>
        </div>
        <div className="Section6">
          <img src={image2} />
          <div class="content">
            <h1>LOCATIONS</h1>
            <p>Purpose driven community engagements at scale.</p>
          </div>
        </div>
        <div className="Section7">
          <img src={image2} />
          <div class="content">
            <h1>PRODUCTS</h1>
            <p>Purpose driven community engagements at scale.</p>
          </div>
        </div>
        <div className="Section8">
          <img src={image2} />
          <div class="content">
            <h1>PARTNERS</h1>
            <p>Purpose driven community engagements at scale.</p>
          </div>
        </div>
      </body>
      {/* Add the rest of your website content here */}
      <footer className="Footer">
        <div className="copyright">
          &copy; 2024 Maker Space Exploration
        </div>
        <div className="social-media">
          {/* Add your social media links here */}
          <a href="https://www.facebook.com/search/top/?q=msx%20boca%20chica">Facebook</a>
          <a href="https://twitter.com/MSXBocaChica">X</a>
          <a href="https://www.youtube.com/@subasio/">Youtube</a>
        </div>

        {/* Add other footer content here */}
      </footer>
    </div>
  );
}

export default App;
