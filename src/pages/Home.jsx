import React from "react";
import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <div className="slider-box">
                <Slider />
            </div>
            <div className="kontakt">
                POTRZEBUJESZ KARNET NA DŁUŻSZY CZAS?
                Skontaktuj się z nami!
            </div>
            <div className="porady">
                porady?
            </div>
            <div className="mapa">
                mapa
            </div>
            <div className="stopka">
                <Footer />
            </div>
        </div>

    );
}

export default Home;