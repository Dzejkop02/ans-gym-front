import React from "react";
import Slider from '../components/Slider/Slider';
import Kontakt from "../components/Kontakt/Kontakt";
import Footer from '../components/Footer/Footer';
import Map from '../components/Map/Map';
import Atuty from "../components/Atuty/Atuty";
import Onasopis from "../components/Onas-opis/onas-opis";

const Onas = () => {
    return (
        <div>
            <div className="atuty">
                <Atuty />
            </div>
            <div className="onas-opis">
                <Onasopis />
            </div>
            <div className="kontakt">
                <Kontakt/>
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

export default Onas;