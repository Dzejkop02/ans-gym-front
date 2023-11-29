import React from "react";
import './MaxCalculatorContent.css';

const MaxCalculatorContent = () => {
    return (
        <div className="max-calc">
            <main className="max-calc__main gradient">
                <h2 className="max-calc__heading">Kalkulator ciężaru maksymalnego</h2>
                <p className="max-calc__p">Trening siłowy nie jest najłatwiejszym technicznie rodzajem sportu, jednak
                    jest niezwykle skuteczny, zwłaszcza jeśli przeprowadzony prawidłowo. Może być to także rewelacyjne
                    wsparcie w trakcie rehabilitacji czy rekonwalescencji. Doświadczeni trenerzy MIND YOUR BODY często
                    zalecają ten rodzaj aktywności swoim podopiecznym. Trzeba znać jednak swoje ograniczenia. Kalkulator
                    obciążenia to świetne narzędzie, dzięki któremu w prosty sposób można oszacować maksymalny ciężar na
                    jedno powtórzenie w wyciskaniu sztangi leżąc. Kalkulator siły to także doskonała pomoc w ustaleniu i
                    określeniu założonego poziomu postępu w wyciskaniu, czyli tzw. treningowej progresji. W kalkulatorze
                    wystarczy, że wpiszesz wartość podniesionego ciężaru i ilość powtórzeń, a po chwili otrzymasz wynik,
                    oznaczający Twój ciężar maksymalny.</p>

                <p className="max-calc__heading">Maksymalny ciężar:</p>

                <div className="max-calc__form">
                    <input className="input" type="number" placeholder="Cięzar"/>
                    <input className="input" type="number" placeholder="Ilość powtórzeń"/>
                    <button className="btn">Oblicz</button>
                </div>

                <p className="max-calc__result">Przewidywany ciężar maksymalny to: <span
                    className="max-calc__max">150</span></p>
            </main>
        </div>

    );
}

export default MaxCalculatorContent;