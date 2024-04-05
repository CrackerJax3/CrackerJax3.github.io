import React from 'react';
// import './Header.css'; // Import your CSS file for styling
import './App.css'; // You can create this file for styling
import Slideshow from './Slideshow';
import logo from './msxbigwhitetransparent.png'; // Import your logo image file
// import './Footer.css';
import Sidebar from './Sidebar'; // Import the Sidebar component
import Navbar from './Navbar.js';
import { Helmet } from 'react-helmet';
import AnimatedNumbers from "react-animated-numbers";

import image1 from './images/5.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import mission from './images/mission.jpeg';
import community from './images/community.png';
import campaign from './images/consulting.png'
import hosting from './images/hosting.png'


function App() {
  const [num1, setNum1] = React.useState(331231);
  const [num2, setNum2] = React.useState(331231);
  const [num3, setNum3] = React.useState(331231);
  return (

    <div className="App">
      <Helmet>
        <title>MSX</title>
        <link rel="canonical" href="http://msxbocachica.org" />
        <meta name="description" content="21st Century Skill-Stacks for Everyone" />
        <link rel="icon" type="image/png" href="/favicon.ico" sizes="16x16" />
      </Helmet>

      <header className="header">

        <div className="LogoContainer">
          <img src={logo} alt="Logo" className="Logo" />
        </div>
        <Navbar />
      </header>
      <body>
        <div className="Section1">
          <img src={mission} />
          <div class="content">
            <h1>MAKER SPACE EXPLORATION</h1>
            <p>21st Century Skill-Stacks for Everyone</p>
          </div>
        </div>
        <div className="Section5">
          <h1>OUR SERVICES</h1>
          <section class="services">
            <div class="card">
              <div class="content">
                <div class="icon"><i class="fa fa-code"></i></div>
                <div class="title">INITIATIVES</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <div class="icon"><i class="fa fa-mobile"></i></div>
                <div class="title">CONSULTING</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <div class="icon"><i class="fa fa-paint-brush"></i></div>
                <div class="title">COMMUNITY</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
              </div>
            </div>
          </section>
          <section class="services">
            <div class="card">
              <div class="content">
                <div class="icon"><i class="fa fa-laptop"></i></div>
                <div class="title">HOSTING</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <div class="icon"><i class="fa fa-line-chart"></i></div>
                <div class="title">CAMPAIGNS </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <div class="icon"><i class="fa fa-wordpress"></i></div>
                <div class="title">PRODUCTS</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
              </div>
            </div>
          </section>
        </div>
        <div className="Section2">
          <img src={community} />
          <div class="content">
            <h1>COMMUNITY EVENTS</h1>
            <p>Purpose driven community engagements at scale.</p>
          </div>
        </div>
        <div className="Section3">
          <img src={campaign} />
          <div class="content">
            <h1>CAMPAIGNS</h1>
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
        <div className="Section6">
          <div class="content">
            <h1>NUMBERS</h1>
            <section class="services">
              <div class="card">
                <div class="content">
                  <div class="icon"><i class="fa fa-code"></i></div>
                  <div class="title">INITIATIVES</div>
                  <AnimatedNumbers
                    includeComma
                    className="services"
                    transitions={(index) => ({
                      type: "spring",
                      duration: index + 0.3,
                    })}
                    animateToNumber={num1}
                    fontStyle={{
                      fontSize: 40,
                      color: "red",
                      fontWeight: "bold", // Set font weight to bold
                      textAlign: "center", // Center align the numbers
                    }}
                  />
                </div>
              </div>
              <div class="card">
                <div class="content">
                  <div class="icon"><i class="fa fa-mobile"></i></div>
                  <div class="title">CONSULTING</div>
                  <AnimatedNumbers
                    includeComma
                    className="services"
                    transitions={(index) => ({
                      type: "spring",
                      duration: index + 0.3,
                    })}
                    animateToNumber={num2}
                    fontStyle={{
                      fontSize: 40,
                      color: "red",
                      fontWeight: "bold", // Set font weight to bold
                      textAlign: "center", // Center align the numbers
                    }}
                  />
                </div>
              </div>
              <div class="card">
                <div class="content">
                  <div class="icon"><i class="fa fa-paint-brush"></i></div>
                  <div class="title">LOCATIONS</div>
                  <AnimatedNumbers
                    includeComma
                    className="services"
                    transitions={(index) => ({
                      type: "spring",
                      duration: index + 0.3,
                      
                    })}
                    animateToNumber={num3}
                    fontStyle={{
                      fontSize: 40,
                      color: "red",
                      fontWeight: "bold", // Set font weight to bold
                      textAlign: "center", // Center align the numbers
                    }}
                  />
                </div>
              </div>
            </section>
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
