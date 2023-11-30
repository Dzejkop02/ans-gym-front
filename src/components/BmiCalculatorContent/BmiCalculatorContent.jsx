import React, {useState} from "react";
import './MaxCalculatorContent.css';

const BmiCalculatorContent = () => {
    const [male, setMale] = useState(true);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [result, setResult] = useState(0);

    const handleFormSubmit = e => {
        e.preventDefault();
        // setResult(Math.round(weight/((1.0278)-(0.0278*reps))));
    }

    return (
        <div className="bmi-calc">
            <div className="bmi-calc__main">
                <div className="bmi-calc__calculator gradient">
                    <div className="bmi-calc__calculator-top">
                        <h3 className="bmi-calc__h3">Oblicz wskaźnik <span>BMI</span></h3>
                        <form className="bmi-calc__form" onSubmit={handleFormSubmit}>
                            <div className="bmi-calc__grid">
                                <label className="bmi-calc__label bmi-calc__label--red">Płeć:</label>
                                <div className="bmi-calc__group">
                                    <label htmlFor="k" className="bmi-calc__label">K</label>
                                    <input className="input-radio" type="radio" id="k" name="sex" value="k" checked={!male} onChange={() => setMale(!male)}/>
                                    <label htmlFor="m" className="bmi-calc__label">M</label>
                                    <input className="input-radio" type="radio" id="m" name="sex" value="m" checked={male} onChange={() => setMale(!male)}/>
                                </div>

                                <label htmlFor="weight" className="bmi-calc__label">Waga:</label>
                                <input className="input input--bmi" id="weight" type="number" placeholder="kg" value={weight || ''}
                                       onChange={e => setWeight(+e.target.value)}/>

                                <label htmlFor="height" className="bmi-calc__label">Wzrost:</label>
                                <input className="input input--bmi" id="height" type="number" placeholder="cm" value={height || ''}
                                       onChange={e => setHeight(+e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn--bmi">Oblicz</button>
                        </form>

                        {result ? <p className="bmi-calc__result">{result}</p> : <p className="bmi-calc__result">&nbsp;</p>}
                    </div>
                    <div className="bmi-calc__calculator-bottom">
                        <h4 className="bmi-calc__h4 bmi-calc__h4--calculator">Zakresy wartości <span>BMI</span></h4>
                        <ul className="bmi-calc__list">
                            <li>mniej niż 16 - wygłodzenie</li>
                            <li>16 - 16.99 - wychudzenie</li>
                            <li>17-18.49 - niedowaga</li>
                            <li>18.5 - 24.99 - wartość prawidłowa</li>
                            <li>25 - 29.99 - nadwaga</li>
                            <li>30 - 34.99 - I stopień otyłości</li>
                            <li>35 - 39.99 - II stopień otyłości</li>
                            <li>powyżej 40 - otyłość skrajna</li>
                        </ul>
                    </div>
                </div>
                <div className="bmi-calc__description gradient">
                    <div className="bmi-calc__description-top">
                        <h2 className="bmi-calc__heading">Kalkulator BMI</h2>
                        <p className="bmi-calc__p">Kalkulator BMI (Body Mass Index) daje każdemu możliwość szybkiego i
                            wygodnego obliczenia własnego wskaźnika masy ciała. BMI obliczamy dzieląc masę ciała (w
                            kilogramach) przez wzrost do kwadratu (w metrach). Wskaźnik ten wykorzystywany jest przede
                            wszystkim do oceny ryzyka pojawienia się groźnych chorób: miażdżycy, choroby niedokrwiennej
                            serca, udaru mózgu, czy nawet nowotworów. Większość tych chorób jest związana z otyłością i
                            dlatego kalkulator BMI to tak przydatne narzędzie.</p>
                    </div>
                    <div className="bmi-calc__description-bottom">
                        <h4 className="bmi-calc__h4">Pamiętaj!</h4>
                        <p className="bmi-calc__p--small">Kalkulator BMI obrazuje przybliżoną zawartość tłuszczu w
                            organizmie. W przypadku niektórych osób wskaźnik BMI może sugerować błędne wnioski. Osoby
                            aktywne fizycznie, uprawiający sport, mogą posiadać zawyżoną wagę związaną z tkanką
                            mięśniową a
                            nie z ilością tłuszczu w organizmie. Ponadto nie zaleca się stosowania wskaźnika BMI do
                            oznaczania wagi ciała dla dzieci do ok. 14 roku życia oraz dla kobiet w ciąży.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BmiCalculatorContent;