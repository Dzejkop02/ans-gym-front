import React from "react";
import { Link } from "react-router-dom";
import './Atuty.css';

const Atuty = () => {
    return(
        <div className="atuty">
            <div className="divonasimg">
                <img className="onasimg" src="zdj/victor-freitas-nlZTjUZX2qo-unsplash.jpg" alt="vf"/>
            </div>
            <div className="acontent">
                <div className="doswiadczenie">
                    <img className="doswiadczenie" src="zdj/calendar-2.png" alt="cl"/>
                    <h1 className="h1atuty">Doświadczenie</h1>
                    <p className="p1atuty">Istniejemy od 2012 roku. Inwestujemy w ciągły rozwój naszej marki i wzmacnianie jej pozycji na rynku w branży fitness</p>
                </div>
                <div className="ekspansja">
                    <img className="ekspansja" src="zdj/chart.png" alt="ch"/>
                    <h1 className="h1ekspansja">Ekspansja</h1>
                    <p className="p1atuty">Istniejemy od 2012 roku. Inwestujemy w ciągły rozwój naszej marki i wzmacnianie jej pozycji na rynku w branży fitness</p>
                </div>
                <div className="definicja">
                    <img className="definicja" src="zdj/deal.png" alt="dl"/>
                    <h1 className="h1atuty">Definicja biznesowa</h1>
                    <p className="p1atuty">Tworzymy miejsca aktywnego spędzania czasu, budujące więzi społeczne w oparciu o kulturę sportową, by umożliwić rozwój ciała i wiele innych</p>
                </div>
                <div className="nowoczesnosc">
                    <img className="nowoczesnosc" src="zdj/technology.png" alt="th"/>
                    <h1 className="h1atuty">Nowoczesność</h1>
                    <p className="p1atuty">Posiadamy autorskie narzędzia dedykowane naszym klubowiczom</p>
                </div>
            </div>
        </div>
    );
};

export default Atuty;