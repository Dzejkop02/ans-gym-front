import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-left">
                <h1>MASZ PYTANIE ?</h1>
                    <p className="footerp">Nasza recepcja czeka na twój telefon</p>
                    <p className="footerp">888234342</p>
                    <p className="footerp">Siłownia ANS Mickiewicza 8</p>
                    <p className="footerp">33-100 Tarnów</p>
                <h1 className="footer-znajdz">ZNAJDŹ NAS NA: </h1>
                <div className="footer-zdj">
                    <img src="zdj/facebook.png" alt="fb"/>
                    <img src="zdj/instagram.png" alt="ig"/>
                    <img src="zdj/youtube.png" alt="yt"/>
                    <img src="zdj/linkedin.png" alt="il"/>
                </div>
            </div>
            <div className="footer-right">
                <h1 className="footer-right-h1">GODZINY OTWARCIA</h1>
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
                <div className="footer-zdjr">
                    <a href="https://www.youtube.com/watch?v=rrKSc6lHeC4" target="_blank" rel="noopener noreferrer">
                        <img src="zdj/dumbbell.png" alt="db"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;