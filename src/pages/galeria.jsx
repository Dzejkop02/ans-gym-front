import React from "react";
import Slider from '../components/Slider/Slider';

import Footer from '../components/Footer/Footer';

import Gallery from "../components/Galeria/galeria";

const Galeria = () => {
    return (
        <div>
           <div className="slider-box">
                <Slider />
            </div>
            <div className="stopka">
                <Gallery />
            </div>
            <div className="stopka">
                <Footer />
            </div>
        </div>

    );
}

export default Galeria;