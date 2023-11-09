import React from "react";
import './Kalkulatory.css';

const Kalkulatory = () => {
    return(
        <div className="main">
            <div className="kleft">
                <h1 className="L-word">LET'S</h1>
                <div className="k-images">
                    <img src="/zdj/measuring-tape.png" alt="kalkulator-1" className="k-img"></img>
                    <img src="/zdj/gym.png" alt="kalkulator-2" className="k-img"></img>
                    <img src="/zdj/drink.png" alt="kalkulator-3" className="k-img"></img>
                    <img src="/zdj/body.png" alt="kalkulator-4" className="k-img"></img>
                </div>
            </div>
            <div className="kright">
                <h1 className="R-word">DO IT</h1>
                <div className="k-descriptions">
                <div className="kalk-desc">
                    <h2 className="k-title">LOREM IPSUM IS SIMPLY</h2>
                    <p className="k-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                </div>
                <div className="kalk-desc">
                    <h2 className="k-title">LOREM IPSUM IS SIMPLY</h2>
                    <p className="k-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                </div>
                <div className="kalk-desc">
                    <h2 className="k-title">LOREM IPSUM IS SIMPLY</h2>
                    <p className="k-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                </div>
                <div className="kalk-desc">
                    <h2 className="k-title">LOREM IPSUM IS SIMPLY</h2>
                    <p className="k-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                </div>
                </div> 
            </div>
           <div className="clear"></div>
        </div>
    );
};

export default Kalkulatory;