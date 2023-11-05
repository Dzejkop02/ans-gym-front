import React from "react";
import Slider from '../components/Slider/Slider';
import Kontakt from "../components/Kontakt/Kontakt";
import Footer from '../components/Footer/Footer';
import Map from '../components/Map/Map';

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
                <Map />
            </div>
            <div className="stopka">
                <Footer />
            </div>
        </div>

    );
}

export default Home;