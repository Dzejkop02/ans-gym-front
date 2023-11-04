import React from "react";
import { Link } from "react-router-dom";
import './Kontakt.css';

const Kontakt = () => {
    return(
      <div className="kontakt">
        <div className="lewo">
            <h2>POTRZEBUJESZ KARNET NA DŁUŻSZY CZAS     ?</h2>
            <h3>Skontaktuj się z nami!</h3>
        </div>
        <Link to="/kontakt">
        <div className="prawo">
            <h2>NAPISZ DO NAS</h2>
        </div>
        </Link>
        
      </div>
    );
};

export default Kontakt;