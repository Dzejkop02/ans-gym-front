import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return(
        <div className="nav">
            <img src="zdj/strong.png" alt="tu ma być logo" className="logo"></img>
            <ul>
                <li>
                    <Link to="/home">HOME</Link>
                </li>
                <li>
                    <Link to="/galeria">GALERIA</Link>
                </li>
                <li>
                    <Link to="/onas">O NAS</Link>
                </li>
                <li>
                    <Link to="/kontakt">KONTAKT</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;