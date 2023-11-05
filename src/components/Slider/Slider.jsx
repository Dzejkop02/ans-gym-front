import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const items = [
    '/zdj/slider1.jpg',
    '/zdj/slider2.jpg',
    '/zdj/slider3.jpg',
    '/zdj/slider4.jpg',
    '/zdj/slider5.jpg',
    '/zdj/slider6.jpg',
  ];

  const [active, setActive] = useState(0);

  const nextslide = () => {
    setActive((active + 1) % items.length);
  };

  const prevslide = () => {
    setActive((active - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const refreshSlider = setInterval(nextslide, 6000);

    return () => clearInterval(refreshSlider);
  }, [active]);

  const reloadSlider = () => {
    const list = document.querySelector('.slider .list');
    const dots = document.querySelectorAll('.slider .dots li');

    list.style.left = -active * 100 + '%';

    const lastActiveDot = document.querySelector('.slider .dots li.active');
    if (lastActiveDot) {
      lastActiveDot.classList.remove('active');
    }

    dots[active].classList.add('active');
  };

  useEffect(() => {
    reloadSlider();
  }, [active]);

  return (
    <div className="tlo">
    <div className="slider">
      <div className="list">
        {items.map((item, index) => (
          <div key={index} className={`item ${index === active ? 'active' : ''}`}>
            <img src={item} alt={`Slider ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id='prev' onClick={prevslide}>&lt;</button>
        <button id='next' onClick={nextslide}>&gt;</button>
      </div>
      <ul className="dots">
        {items.map((_, index) => (
          <li key={index} className={index === active ? 'active' : ''}></li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Slider;