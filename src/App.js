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

function App() {
  return (
    
    <div className="App">
      <Helmet>
        <title>MSX</title>
        <link rel="canonical" href="http://msxbocachica.org" />
        <meta name="description" content="My app description" />
        <link rel="icon" type="image/png" href="/favicon.ico" sizes="16x16"/>
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

      <Slideshow />
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
