import React from "react";
import { Link } from "react-router-dom";
import './Kontakt.css';


const Kontakt = () => {
    return(
      <div className="kontakt">
        <div className="kontakt-calosc">
          <div className="kontakt-lewo">
              <h2>POTRZEBUJESZ KARNET NA DŁUŻSZY CZAS     ?</h2>
              <p>Skontaktuj się z nami!</p>
          </div>
          <div className="kontakt-prawo">
            <Link to="/kontakt">
              NAPISZ DO NAS
            </Link>
          </div>
        </div>
      </div>
      
    );
};

export default Kontakt;