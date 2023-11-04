import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="left">
                <h1>MASZ PYTANIE ?</h1>
                    <p>Nasza recepcja czeka na twój telefon</p>
                    <p>888234342</p>
                    <p>Siłownia ANS Mickiewicza 8</p>
                    <p>33-100 Tarnów</p>
                <h1 className="znajdz">ZNAJDŹ NAS NA: </h1>
                <div className="zdj">
                    <img src="zdj/facebook.png" alt="fb"/>
                    <img src="zdj/instagram.png" alt="ig"/>
                    <img src="zdj/youtube.png" alt="yt"/>
                    <img src="zdj/linkedin.png" alt="il"/>
                </div>
            </div>
            <div className="right">
                <h1>GODZINY OTWARCIA</h1>
                <table>
                    <tr>
                        <td>Pon.-Pt.</td>
                        <td>6:00-23:00</td>
                    </tr>
                    <tr>
                        <td>Sobota</td>
                        <td>8:00-21:00</td>
                    </tr>
                    <tr>
                        <td>Niedziela</td>
                        <td>8:00-21:00</td>
                    </tr>
                </table>
                <div className="zdjr">
                    <img src="zdj/dumbbell.png" alt="db"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;