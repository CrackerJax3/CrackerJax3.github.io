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
import sub from './images/Subotix.png'
import misk from './images/misk.png'
import turki from './images/alturki.png'
import brightup from './images/brightup.png'
import aramco from './images/aramco.png'
import sipchem from './images/sipchem.png'
import ithra from './images/ithra.png'
import sabic from './images/sabic.png'
import mcit from './images/mcit.png'
import makerfaire from './images/makerfaire.png'
import numou from './images/numou.png'
import rcu from './images/rcu.png'
import BISDCTE from './images/BISDCTEcombo.png'
import brownsville from './images/BrownsvilleCity.png'
import city_assisi from './images/Città_Assisi_Logo.png'
import ctewletter from './images/ctewletter.png'
import firstlego from './images/fll-logo-horizontal.png'
import italianrailway from './images/italianrailway.png'
import modon from './images/ModonLogo.png'
import umbria from './images/regione-umbria.png'
import sharqiya from './images/Sharqiyah.png'
import techshop from './images/techshop.png'
import spacex from './images/SpaceX.png'

function App() {
  const [num1, setNum1] = React.useState(27000);
  const [num2, setNum2] = React.useState(4000);
  const [num3, setNum3] = React.useState(220);
  return (
    <div className="App">
      <Helmet>
        <title>MSX</title>
        <link rel="canonical" href="http://msxbocachica.org" />
        <meta name="MSX Boca Chica or MakerSpace X" content="21st Century Skill-Stacks for Everyone. We are a 501(c)(3) non-profit organization in Brownsville, TX." />
        <link rel="icon" type="image/png" href="/favicon.ico" sizes="16x16" />
      </Helmet>
      <Navbar />
      <body>
        <div id="home" className="Section1">
          <img src={mission} />
          <div class="content">
            <h1>MAKER SPACE EXPLORATION</h1>
            <p>21st Century Skill-Stacks for Everyone</p>
          </div>
        </div>
        <div id="services" className="Section5">
          <h1>OUR SERVICES</h1>
          <section class="services">
            <div class="card">
              <div class="content">
                <div class="title">INITIATIVES</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <div class="title">CONSULTING</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <div class="title">COMMUNITY</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
              </div>
            </div>
          </section>
          <section class="services">
            <div class="card">
              <div class="content">
                <div class="title">HOSTING</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <div class="title">CAMPAIGNS </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <div class="title">PRODUCTS</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
              </div>
            </div>
          </section>
        </div>
        <div id="community events" className="Section2">
          <img src={community} />
          <div class="content">
            <h1>COMMUNITY EVENTS</h1>
            <p>Purpose driven community engagements at scale.</p>
          </div>
        </div>
        <div id="campaigns" className="Section3">
          <img src={campaign} />
          <div class="content">
            <h1>CAMPAIGNS</h1>
            <p>Purpose driven community engagements at scale.</p>
          </div>
        </div>
        <div id="hosting to inspire" className="Section4">
          <img src={hosting} />
          <div class="content">
            <h1>HOSTING TO INSPIRE</h1>
            <p>Hosting students, educators, and individual STEM enthusiast from around the world to inspire and prepare them for the future, through exposure to Maker Culture.</p>
          </div>
        </div>
        <div id="" className="Section6">
          <div class="content">
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
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  />
                </div>
              </div>
              <div class="card">
                <div class="content">
                  <div class="icon"><i class="fa fa-mobile"></i></div>
                  <div class="title">EVENTS</div>
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
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
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
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
        <div id="products" className="Section7">
          <img src={image3} />
          <div class="content">
            <h1>PRODUCTS</h1>
            <p>Purpose driven community engagements at scale.</p>
          </div>
        </div>
        <div id="collaborations" className="Section8">
          <div class="content">
            <h1>COLLABORATIONS & PARTNERS</h1>
            <div class="partners-container">
              <div className="partner">
                <img src={mcit} alt="mcit" />
                <div className="tooltip">
                  <img src={mcit} alt="mcit" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
              <div className="partner">
                <img src={rcu} alt="rcu" />
                <div className="tooltip">
                <img src={rcu} alt="rcu" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
              <div className="partner">
                <img src={aramco} alt="aramco" />
                <div className="tooltip">
                <img src={aramco} alt="aramco" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
              <div className="partner">
                <img src={misk} alt="misk" />
                <div className="tooltip">
                <img src={misk} alt="misk" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
              <div className="partner">
                <img src={numou} alt="numou" />
                <div className="tooltip">
                <img src={numou} alt="numou" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
              <div className="partner">
                <img src={sabic} alt="sabic" />
                <div className="tooltip">
                <img src={sabic} alt="sabic" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
            </div>
            <div class="partners-container">
              <div className="partner">
                <img src={brightup} alt="brightup" />
                <div className="tooltip">
                <img src={brightup} alt="brightup" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
              <div className="partner">
                <img src={ithra} alt="ithra" />
                <div className="tooltip">
                <img src={ithra} alt="ithra" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
              <div className="partner">
                <img src={turki} alt="turki" />
                <div className="tooltip">
                <img src={turki} alt="turki" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
              <div className="partner">
                <img src={makerfaire} alt="MakerFaire" />
                <div className="tooltip">
                <img src={makerfaire} alt="MakerFaire" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
              <div className="partner">
                <img src={sipchem} alt="sipchem" />
                <div className="tooltip">
                <img src={sipchem} alt="sipchem" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
              <div className="partner">
                <img src={sub} alt="Subotix" />
                <div className="tooltip">
                <img src={sub} alt="Subotix" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
            </div>
            <div class="partners-container">
              <div className="partner">
                <img src={BISDCTE} alt="BISDCTE" />
                <div className="tooltip">
                <img src={BISDCTE} alt="BISDCTE" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
              <div className="partner">
                <img src={brownsville} alt="brownsville" />
                <div className="tooltip">
                <img src={brownsville} alt="brownsville" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
              <div className="partner">
                <img src={city_assisi} alt="city_assisi" />
                <div className="tooltip">
                <img src={city_assisi} alt="city_assisi" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
              <div className="partner">
                <img src={ctewletter} alt="ctewletter" />
                <div className="tooltip">
                <img src={ctewletter} alt="ctewletter" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
              <div className="partner">
                <img src={firstlego} alt="firstlego" />
                <div className="tooltip">
                <img src={firstlego} alt="firstlego" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
              <div className="partner">
                <img src={italianrailway} alt="italianrailway" />
                <div className="tooltip">
                <img src={italianrailway} alt="italianrailway" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
            </div>
            <div class="partners-container2">
              <div className="partner">
                <img src={sharqiya} alt="sharqiya" />
                <div className="tooltip">
                <img src={sharqiya} alt="sharqiya" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
              <div className="partner">
                <img src={umbria} alt="umbria" />
                <div className="tooltip">
                <img src={umbria} alt="umbria" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
              <div className="partner">
                <img src={modon} alt="modon" />
                <div className="tooltip">
                <img src={modon} alt="modon" />
                  <p>MCIT - Ministry of Communications and Information Technology</p>
                </div>
              </div>
            </div>
          </div>
          <img src={image3} />
          <div class="content2">
            <h1>LOCATIONS</h1>
            <p>United States, Italy, Mexico, Saudi Arabia</p>
          </div>
        </div>
        <div id="contact" className='Contact'>
          <div className='content'>
            <h1>CONTACT US</h1>
            <div className='services'>
              <div className='card'>
              <div class="title">Email</div>
              <p>msxbocachica@info.org</p>
              </div>
              <div className='card'>
              <div class="title">Phone</div>
              <p>msxbocachica@info.org</p>
              </div>
              <div className='card'>
              <div class="title">X</div>
              <p>msxbocachica@info.org</p>
              </div>
              <div className='card'>
              <div class="title">Facebook</div>
              <p>msxbocachica@info.org</p>
              </div>
            </div>
          </div>

        </div>
      </body>
      <footer className="Footer">
        <div className="copyright">
          &copy; 2024 Maker Space Exploration
        </div>
        <div className="social-media">

          <a href="https://www.facebook.com/search/top/?q=msx%20boca%20chica">Facebook</a>
          <a href="https://twitter.com/MSXBocaChica">X</a>
          <a href="https://www.youtube.com/@subasio/">Youtube</a>
          <a href="mailto:msx.bocachica@gmail.com">msx.bocachica@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
