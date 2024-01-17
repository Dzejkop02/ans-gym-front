import React from "react";
import './Profile.css';

const Profile = () => {
    return(
        <div className="map">
           <div className="mleft">
                <h1>LOREM IPSUM IS SIMPLY</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp</p>
           </div>
            <div className="mright">
              <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.9046334296366!2d20.986074315738266!3d50.013263579419615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715f61ea23cd227%3A0xd3c04e4902a3dfc1!2sMickiewicza%208%2C%2033-100%20Tarn%C3%B3w%2C%20Poland!5e0!3m2!1sen!2sus!4v1644708407406!5m2!1sen!2sus"
                  allowFullScreen
              ></iframe>
            </div>
        </div>
    );
};

export default Profile;