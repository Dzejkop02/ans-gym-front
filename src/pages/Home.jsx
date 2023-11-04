import React from "react";
import Slider from '../components/Slider/Slider';
import Kontakt from "../components/Kontakt/Kontakt";
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <div className="slider-box">
                <Slider />
            </div>
            <div className="kontakt">
                <Kontakt/>
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