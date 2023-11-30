import React from "react";
import './KontaktPage.css';

const KontaktPage = () => {
    return(
        <div>
            <div className="kontakt-main">
                <div className="kontakt-guziki">
                <button className="kontakt-btn">NAPISZ DO NAS !</button><br/>
                <button className="kontakt-btn">ZADZWOŃ DO NAS !</button><br/>
                <button className="kontakt-btn">TUTAJ NAS ZNAJDZIESZ !</button><br/>
                </div>
            </div>
            <div className="kontakt-info">
                <h1>LOREM IPSUM IS SIMPLY</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.</p>
            </div>
            <div>
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
        </div>
    );
};
export default KontaktPage;