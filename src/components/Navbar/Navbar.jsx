import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    const [span1, setSpan1] = useState(null);
    const [span2, setSpan2] = useState(null);
    const [activeSection, setActiveSection] = useState('home');

    const [bgBlack, setBgBlack] = useState(false);
    window.addEventListener('scroll', () => setBgBlack(window.scrollY >= 200));

    useEffect(() => {
        const pathname = location.pathname.slice(1);

        // Zmiana aktywnego linku navbara
        setActiveSection(pathname);

        // Zmiana zawartości navbara
        /**
         W case wpisywać ścieżkę podstrony, na której navbar ma mieć dedykowany tekst.

         Templatka:
         case 'pathname':
            setSpan1('white text');
            setSpan2('red text');
            break;
         */
        switch (pathname) {
            case 'kalkulator-maksow':
                setSpan1('Kalkulator ciężaru');
                setSpan2('maksymalnego');
                break;
            case 'kalkulator-bmi':
                setSpan1('Kalkulator');
                setSpan2('BMI');
                break;
            default:
                setSpan1(null);
                setSpan2(null);
        }
    }, [location]);

    return (
        <div className="nav" style={bgBlack ? {backgroundColor: 'black'} : {}}>
            <div className="nav__container">
                <Link className="nav__logo-box" to="/"><img src="/zdj/strong.png" alt="logo" className="logo"></img></Link>
                {
                    span1 && span2
                        ?
                        <div className="nav__spans">
                            <span className="nav__span nav__white-text">{span1}</span>
                            <span className="nav__span nav__red-text">{span2}</span>
                        </div>
                        :
                        <ul>
                            <li>
                                <Link to="/" className={activeSection === '' ? 'active nav__a' : 'nav__a'}>HOME</Link>
                            </li>
                            <li>
                                <Link className={activeSection === 'galeria' ? 'active nav__a' : 'nav__a'} to="/galeria">GALERIA</Link>
                            </li>
                            <li>
                                <Link className={activeSection === 'onas' ? 'active nav__a' : 'nav__a'} to="/onas">O NAS</Link>
                            </li>
                            <li>
                                <Link className={activeSection === 'kontakt' ? 'active nav__a' : 'nav__a'} to="/kontakt">KONTAKT</Link>
                            </li>
                        </ul>
                }
            </div>
        </div>
    );
};

export default Navbar;