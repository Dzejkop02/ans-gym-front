import { useState } from 'react';
import './WaterCalculatorContent.css';

const MaxCalculatorContent = () => {
    const [weight, setWeight] = useState(0);
    const [result, setResult] = useState(0);

    const handleFormSubmit = e => {
        e.preventDefault();
        setResult(weight*35);
    }

    return(
        <div className='woda-main'>
            <div className='woda-main-1'>
                <div className='woda-kalk'>
                    <div className='woda-kalk-desc'>
                        <h1>OBLICZ SWOJE ZAPOTRZEBOWANIE NA PŁYNY</h1>
                        <p>Chcesz dowiedzie się, ile wody dziennie potrzebujesz, by Twój organizm prawidłowo funkcjonował? skorzystaj z naszego kalkulatora wody online - to wygodne narzędzie, które pozwoli Ci szybko i dokładnie określi iloś wody na kg masy. Kalkluator picia wody online bierze pod uwagę masę ciała, a wynik uwzględnia zawartoś wody w produktach spożywczych.</p>
                        <form className='woda-form' onSubmit={handleFormSubmit}>
                            <input className='input' type='number' placeholder='Waga' required value={weight || ''} onChange={e => setWeight(+e.target.value)}></input><br></br>
                            <button type="submit" className="btn">Oblicz</button>                     
                        </form>
                        <p className='woda-wynik'>Twoje dzienne zapotrzebowanie na wodę wynosi: <span className='woda-wynik'>{result}</span> ml</p>
                        <p className='woda-desc-cont'>Otrzymany wynik uwzględnia również wodę zawartą w pokarmach stałych. Stanowi ona 20% dziennego zapotrzebowania na płyny.</p>
                    </div>
                </div>
            </div>
            <div className='woda-main-2'>
                <div className='woda-info'>
                    <h1>Ile wynosi średnie zapotrzebowanie na wodę?</h1>
                    <p>Woda jest głównym składnikiem organizmu człowieka i stanowi około 45-75% masy ciała. U dorosłego człowieka o prawidłowej masie ciała udział wody sięga zwykle około 60%. Więcej wody znajduje się w organizmach mężczyzn niż kobiet - wynika to z faktu, że w organizmie kobiety znajduje się więcej tkanki tłuszczowej. Woda zaliczana jest do niezbędnych składników pokarmowych, ponieważ organizm nie jest w stanie jej sam wytwarzać. Kalkulator wody wylicza zapotrzebowanie na weodę na podstawie masy ciała, jednak zależy ono również od takich czynników, jak:</p>
                    <ul>
                        <li>wiek,</li>
                        <li>płeć,</li>
                        <li>stan fizjologiczny,</li>
                        <li>aktywność fizyczna,</li>
                        <li>warunki klimatyczne,</li>
                        <li>stan zdrowia,</li>
                        <li>wartość kaloryczna diety (im wyższa, tym większe zapotrzebowanie na wodę),</li>
                        <li>skład diety.</li>
                    </ul>
                    <p>Niektóre leki, alkohol i kofeina mogą zwiększać diurezę (wydalanie moczu) i tym samym wpływać na większe zapotrzebowanie organizmu na wodę. Wysokie spożycie białka, błonnika czy sodu, również wymaga zwiększenia ilości wody w diecie. Według norm żywienia ustalonych przez Instytut Żywności i Żywienia wystarczające spożycie wody (AI- adequate intake) pochodzącej z napojów i produktów spożywczych, dla dorosłych osób wynosi:</p>
                    <ul>
                        <li>dla mężczyzn - 2500 ml na dobę,</li>
                        <li>dla kobiet - 2000 ml na dobę,</li>
                        <li>dla kobiet w ciąży - 2300 ml,</li>
                        <li>dla kobiet podczas laktacji - 2700 ml.</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default MaxCalculatorContent;