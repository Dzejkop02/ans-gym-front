import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Navbar.css';
import Login from '../Login/Login';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [span1, setSpan1] = useState(null);
    const [span2, setSpan2] = useState(null);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const [bgBlack, setBgBlack] = useState(false);
    window.addEventListener('scroll', () => setBgBlack(window.scrollY >= 200));
    
    const [isLoginComponentVisible, setLoginComponentVisible] = useState(false);

    useEffect( () => {
        (async() => {
            const response = await fetch('http://localhost:3001/auth', {
                credentials: 'include',
            });

            const data = await response.json();

            setLoggedIn(data.loggedIn);
        })();
    }, [location]);

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
            case 'kalkulator-wody':
                setSpan1('Kalkulator');
                setSpan2('WODY');
                break;
            case 'cwiczenia':
                setSpan1('Atlas');
                setSpan2('Ćwiczeń');
                break;
            default:
                setSpan1(null);
                setSpan2(null);
        }
    }, [location]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prevState => !prevState);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };


    const toggleLoginComponent = () => {
        setLoginComponentVisible((prevState) => !prevState);
      
        // Aktualizuj kolor ikony
        setPersonIconColor((prevState) => (prevState === 'white' ? 'red' : 'white'));
      };


    const [personIconColor, setPersonIconColor] = useState('white');

    const styles = {
        fill: 'red'
    };

    return (
        <div className="nav" style={bgBlack ? { backgroundColor: 'black' } : {}}>
            <div className="nav__container">
                <Link className="nav__logo-box" to="/">
                    <img src="/zdj/strong.png" alt="logo" className="logo" />
                </Link>
                <div className="nav__menu">
                    {span1 && span2 ? (
                        <div className="nav__spans">
                            <span className="nav__span nav__white-text">{span1}</span>
                            <span className="nav__span nav__red-text">{span2}</span>
                        </div>
                    ) : (
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
                            <li>
                                <Link
                                    className="nav__a_person"
                                    onClick={loggedIn ? null : toggleLoginComponent}
                                    to={loggedIn ? "/profil" : null}
                                >
                                    <svg
                                        className="personIcon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        id="person"
                                        fill={personIconColor}
                                        style={isLoginComponentVisible ? styles : null}
                                    >
                                        <path
                                            className="personIconPath"
                                            d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm0 8a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"
                                        />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
                <div className={`nav__burger-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                    <div className="burger-icon">
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="nav__mobile-menu">
                    <div className="nav__mobile_menu_content">
                        <ul>
                            <li>
                                <Link to="/" onClick={closeMobileMenu} className={activeSection === '' ? 'active nav__a' : 'nav__a'}>HOME</Link>
                            </li>
                            <li>
                                <Link to="/galeria" onClick={closeMobileMenu} className={activeSection === 'galeria' ? 'active nav__a' : 'nav__a'}>GALERIA</Link>
                            </li>
                            <li>
                                <Link to="/onas" onClick={closeMobileMenu} className={activeSection === 'onas' ? 'active nav__a' : 'nav__a'}>O NAS</Link>
                            </li>
                            <li>
                                <Link to="/kontakt" onClick={closeMobileMenu} className={activeSection === 'kontakt' ? 'active nav__a' : 'nav__a'}>KONTAKT</Link>
                            </li>
                            <li>
                                <Link
                                    onClick={loggedIn ? closeMobileMenu : () => {
                                        toggleLoginComponent();
                                        closeMobileMenu();
                                    }}
                                    to={loggedIn ? "/profil" : null}
                                >
                                    LOGOWANIE
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            {isLoginComponentVisible && <Login setLoginComponentVisible={setLoginComponentVisible}/>}
        </div>
    );
};

export default Navbar;

