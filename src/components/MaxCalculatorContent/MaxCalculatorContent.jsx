import React, {useState} from "react";
import './MaxCalculatorContent.css';

const MaxCalculatorContent = () => {
    const [weight, setWeight] = useState(0);
    const [reps, setReps] = useState(0);
    const [result, setResult] = useState(0);

    const handleFormSubmit = e => {
        e.preventDefault();
        setResult(Math.round(weight/((1.0278)-(0.0278*reps))));
    }

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

                <form className="max-calc__form" onSubmit={handleFormSubmit}>
                    <input className="input" type="number" placeholder="Cięzar" value={weight || ''} onChange={e => setWeight(+e.target.value)}/>
                    <input className="input" type="number" placeholder="Ilość powtórzeń" value={reps || ''} onChange={e => setReps(+e.target.value)}/>
                    <button type="submit" className="btn">Oblicz</button>
                </form>

                {result ? <p className="max-calc__result">Przewidywany ciężar maksymalny to: <span
                    className="max-calc__max">{result}</span></p> : null}
            </main>
        </div>

    );
}

export default MaxCalculatorContent;