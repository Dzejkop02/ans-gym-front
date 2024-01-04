import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const MenuIcon = (props) =>(
    <svg xmlns="zdj/facebook.svg" fill={props.fill} className={props.class}></svg>
)


const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-left">
                <h1>MASZ PYTANIE ?</h1>
                <p className="footerp">Nasza recepcja czeka na twój telefon</p>
                <p className="footerp">888234342</p>
                <p className="footerp">Siłownia ANS Mickiewicza 8</p>
                <p className="footerp">33-100 Tarnów</p>
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
                
            </div>
            <div className="footer-left-down">
                <h1 className="footer-znajdz">ZNAJDŹ NAS NA: </h1>
                <div className="footer-zdj">
                    {/* <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <MenuIcon fill="black"/>
                    </a> */}
                     <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                     <img src="zdj/facebook.svg" alt="ig" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src="zdj/instagram.svg" alt="ig" />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <img src="zdj/youtube.svg" alt="yt"/>
                    </a>
                    <a href="https://pl.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <img src="zdj/linkedin.svg" alt="il"/>
                    </a>
                </div>
            </div>
            <img className="imgr" src="zdj/dumbbell.png" alt="db"/>
        </div>
    );
};

export default Footer;