import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import your CSS file for styling
import image1 from './images/5.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';

function Slideshow() {
  const [index, setIndex] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow">
      {images.map((image, idx) => (
        <img
          key={idx}
          src={image}
          alt={`Slide ${idx + 1}`}
          className={idx === index ? 'active' : ''}
        />
      ))}
    </div>
  );
}

export default Slideshow;
