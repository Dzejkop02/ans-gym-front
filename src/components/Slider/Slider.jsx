import React from "react";
import './Slider.css';

const Slider = () => {
    return(
        
        <div className="slider">
            <div className="slide">
                <img src="zdj/zdjecie.jpg" alt="slider-zdjecie" className="zdj"/>
            </div>
            <div className="slide">
                <img src="zdj/zdjecie.jpg" alt="slider-zdjecie" className="zdj"/>
            </div>
            <div className="slide">
                <img src="zdj/zdjecie.jpg" alt="slider-zdjecie" className="zdj"/>
            </div>
        </div>
    );
};

export default Slider;