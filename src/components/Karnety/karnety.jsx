import React, {useState} from "react";
import './karnety.css';


const Karnety = () => {
    const [animate, setAnimate] = useState(false);

    const addTicket = async (ticketName) => {
        const response = await fetch('http://localhost:3001/ticket', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ticketName}),
        });

        const data = await response.json();

        if (data.ok) {
            setAnimate(true);

            setTimeout(() => {
                setAnimate(false);
            }, 1600);
        }
    }

    return (
        <div className="Karnety">
            <div className="Karnety-Inline">
                <div className="Silver">
                    <div className="karnet_type">
                        <h2>KARNET SILVER</h2>
                        <p>Płatny co miesiąc</p>
                        <h1>159zł</h1>
                    </div>
                    <ul>
                        <li className="silverli">dostęp do wszystkich stref treningowych</li>
                        <li className="silverli">jednorazowa godzinna konsultacja trenerska</li>
                        <li className="silverli">zajęcia fitness w cenie karnetu</li>
                        <li className="silverli">dostęp do aplikacji mobilnej</li>
                        <li className="silverli">dostęp do treningów online</li>
                        <li className="silverli">możliwość dokonania rezerwacji zajęć grupowych z 7-dniowym wyprzedzeniem</li>
                        <li className="silverli">ważny w klubie, w którym został zakupiony</li>
                        <li className="silverli">możliwość odpłatnego zamrożenia członkostwa</li>
                        <li className="silverli">możliwość dokonania rezerwacji maksymalnie na 2 zajęcia fitness dziennie</li>
                    </ul>
                    <div className="wybiera">
                        <h2 onClick={addTicket.bind(this, 'Silver')}>KUP TERAZ</h2>
                    </div>
                </div>
                <div className="Gold">
                    <div className="karnet_type">
                        <h2>KARNET GOLD</h2>
                        <p>Płatny co miesiąc</p>
                        <h1>169zł</h1>
                    </div>
                    <ul>
                        <li className="silverli">dostęp do wszystkich stref treningowych</li>
                        <li className="silverli">jednorazowa godzinna konsultacja trenerska</li>
                        <li className="silverli">zajęcia fitness w cenie karnetu</li>
                        <li className="silverli">dostęp do aplikacji mobilnej</li>
                        <li className="silverli">dostęp do treningów online</li>
                        <li className="silverli">możliwość dokonania rezerwacji zajęć grupowych z 7-dniowym wyprzedzeniem</li>
                        <li className="silverli">ważny w klubie, w którym został zakupiony</li>
                        <li className="goldli">zamrożenie karnetu 2 x w okresie 12 miesięcy za darmo</li>
                        <li className="goldli">możliwość dokonania rezerwacji maksymalnie na 3 zajęcia fitness dziennie</li>
                        <li className="goldli">wejście na trening ze znajomym 3x w miesiącu</li>
                        <li className="goldli">15% rabatu na zakupy w recepcji</li>
                        <li className="goldli">1 godzina treningu personalnego co 6 miesięcy</li>
                    </ul>
                    <div className="wybiera">
                        <h2 onClick={addTicket.bind(this, 'Gold')}>KUP TERAZ</h2>
                    </div>
                </div>
                <div className="Platinum">
                    <div className="karnet_type">
                        <h2>KARNET PLATINUM</h2>
                        <p>Płatny co miesiąc</p>
                        <h1>189zł</h1>
                    </div>
                    <ul>
                        <li className="silverli">dostęp do wszystkich stref treningowych</li>
                        <li className="silverli">jednorazowa godzinna konsultacja trenerska</li>
                        <li className="silverli">zajęcia fitness w cenie karnetu</li>
                        <li className="silverli">dostęp do aplikacji mobilnej</li>
                        <li className="silverli">dostęp do treningów online</li>
                        <li className="platinumli">możliwość dokonania rezerwacji zajęć grupowych z 14-dniowym wyprzedzeniem</li>
                        <li className="platinumli">ważny we wszystkich klubach Xtreme Fitness Gyms</li>
                        <li className="platinumli">zamrożenie karnetu 3 x w okresie 12 miesięcy za darmo</li>
                        <li className="platinumli">możliwość dokonania rezerwacji maksymalnie na 3 zajęcia fitness dziennie</li>
                        <li className="platinumli">wejście na trening ze znajomym aż 5x w miesiącu</li>
                        <li className="platinumli">aż 25% rabatu na zakupy w recepcji</li>
                        <li className="platinumli">1 godzina treningu personalnego co 3 miesiące</li>
                        <li className="platinumli">możliwość rezygnacji z zajęć fitness do 15 minut przed rozpoczęciem</li>
                    </ul>
                    <div className="wybiera">
                        <h2 onClick={addTicket.bind(this, 'Platinum')}>KUP TERAZ</h2>
                    </div>
                </div>
            </div>
            <div className="success-box">
                <img src="zdj/success-confetti.png" className={`success-img ${animate? 'animate' : ''}`}/>
            </div>
        </div>
        
    
         
  );
};
export default Karnety;