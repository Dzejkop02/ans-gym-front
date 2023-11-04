import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const slides = ['/zdj/slider1.jpg', '/zdj/slider2.jpg', '/zdj/slider3.jpg', '/zdj/slider4.jpg', '/zdj/slider5.jpg', '/zdj/slider6.jpg',];
  const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 6000);
  
      return () => {
        clearInterval(interval);
      };
    }, [slides.length]);
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };
  
    const previousSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

  return (
    <div className="slider">
      <button className='poprzedni' onClick={previousSlide}>Poprzedni</button>
      <div className="slider-content">
        <img className='zdj' src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
      <button className='nastepny' onClick={nextSlide}>Następny</button>
    </div>
  );
};


export default Slider;