import React from "react";
import './KontaktPage.css';
import emailjs from '@emailjs/browser'
import { useEffect, useState } from "react";

const KontaktPage = () => {
    const [userData, setUserData] = useState({
        email: '',
        firstName: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/auth', {
                    credentials: 'include',
                });

                const data = await response.json();

                if (data.loggedIn) {
                    setUserData(data);
                } else {
                    // nic
                }
            } catch (error) {
                console.error('Wystąpił błąd podczas pobierania danych użytkownika:', error);
            }
        };

        fetchData();
    }, []);

    const [isSent, setIsSent] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_3904cx9', 'template_0w2fnhd', e.target, 'G7TxIeuYH7z3WhS9K')
        document.getElementById("kontakt-form").reset();
        
        setIsSent(true)
        setTimeout(() => {
            setIsSent(false)
          }, 5000);
    }

    return(
        <div>
            <div className="kontakt-main">
                <div className="kontakt-guziki">
                <a href="#kontakt-info-jump" className="kontakt-btn">NAPISZ DO NAS !</a>
                <a href="#kontakt-map-jump" className="kontakt-btn">TUTAJ NAS ZNAJDZIESZ !</a>
                <a href="#kontakt-footer-jump" className="kontakt-btn">ZADZWOŃ DO NAS !</a>
                </div>
            </div>

            <div id="kontakt-info-jump"></div>
            <div className="kontakt-info">
                <h1>NAPISZ DO NAS</h1>
                <form className="kontakt-form" id="kontakt-form" onSubmit={sendEmail}>
                    <input className="kontakt-input" name="name_from" required type="text" placeholder="Imię" value={userData.firstName}></input><br/>
                    <input className="kontakt-input" name="email_from"required type="email" placeholder="Twój adres E-mail" value={userData.email}></input><br/>

                    <input className="kontakt-input" name="email_title" required type="text" placeholder="Temat"></input><br/>
                    <textarea className="kontakt-textarea" name="message" required rows={5} placeholder="Wiadomość"></textarea><br/>
                    <input className="btn-kontakt" type="submit" value={"Wyślij zapytanie"}></input>
                </form>

                { isSent && <p>Wiadomość wysłana,<br></br> Dziękujemy za kontakt!</p> }
            </div>



            <div>
                <div id="kontakt-map-jump"></div>
                <div className="kontakt-mapa-info">
                    <h1>TUTAJ NAS ZNAJDZIESZ!</h1>
                    <p>
                        Przyjdź i sprawdź
                    </p>
                </div>



                <div className="kontakt-mapa">
                    <iframe
                    title="Nasza lokacja!"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.9046334296366!2d20.986074315738266!3d50.013263579419615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715f61ea23cd227%3A0xd3c04e4902a3dfc1!2sMickiewicza%208%2C%2033-100%20Tarn%C3%B3w%2C%20Poland!5e0!3m2!1sen!2sus!4v1644708407406!5m2!1sen!2sus"
                    allowFullScreen
                    />
                </div>
            </div>
            <div id="kontakt-footer-jump"></div>
        </div>
    );
};
export default KontaktPage;