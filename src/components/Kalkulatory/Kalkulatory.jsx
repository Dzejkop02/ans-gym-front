import React from "react";
import './Kalkulatory.css';

const Kalkulatory = () => {
    return(
        <div className="k-main">
            <div className="k-left">
                <h1 className="L-word">LET'S</h1>
            </div>
            <div className="k-right">
                <h1 className="R-word">DO IT</h1>
            </div>
            <div className="k-descriptions">
                <div className="kalk-item">
                    <img src="/zdj/measuring-tape.png" alt="kalkulator-1" className="k-img"></img>
                    <div className="k-textpart">
                        <h2>LOREM IPSUM IS SIMPLY</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                </div>

                <div className="kalk-item">
                <img src="/zdj/gym.png" alt="kalkulator-2" className="k-img"></img>
                    <div className="k-textpart">
                        <h2>LOREM IPSUM IS SIMPLY</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                </div>

                <div className="kalk-item">
                <img src="/zdj/drink.png" alt="kalkulator-3" className="k-img"></img>
                    <div className="k-textpart">
                        <h2>LOREM IPSUM IS SIMPLY</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                </div>

                <div className="kalk-item">
                <img src="/zdj/body.png" alt="kalkulator-4" className="k-img"></img>
                    <div className="k-textpart">
                        <h2>LOREM IPSUM IS SIMPLY</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                </div>
            </div> 
           <div className="clear"></div>
        </div>
    );
};

export default Kalkulatory;