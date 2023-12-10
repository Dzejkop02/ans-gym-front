import React, {useState} from "react";
import Exercise from "./Exercise/Exercise";
import './CwiczeniaList.css';

const CwiczeniaList = () => {
    const exercise = 'barki';

    return <div className="cwiczenia-list-wrapper">
        <section className="cwiczenia-list">
            <nav className="cwiczenia-list__nav">
                <ul className="cwiczenia-list__ul">
                    <li className="cwiczenia-list__li cwiczenia-list__li--active">
                        <p>Ćwiczenia</p>
                        <p>na barki</p>
                    </li>
                    <li className="cwiczenia-list__li">
                        <p>Ćwiczenia</p>
                        <p>na barki</p>
                    </li>
                    <li className="cwiczenia-list__li">
                        <p>Ćwiczenia</p>
                        <p>na barki</p>
                    </li>
                    <li className="cwiczenia-list__li">
                        <p>Ćwiczenia</p>
                        <p>na barki</p>
                    </li>
                </ul>
            </nav>
            <main className="cwiczenia-list__content">
                <h2 className="cwiczenia-list__heading">Ćwiczenia <span>na {exercise}</span></h2>

                <Exercise name="Wyciskanie sztangi na ławce płaskiej"
                          equipment="Sztanga"
                          primaryMuscle="Klatka piersiowa"
                          supportedMuscles={['triceps', 'mięśnie przednie barku']}
                          url="https://www.youtube.com/embed/4Y2ZdHCOXok?si=TB1fXOKx_oy2TZXM"
                />
                <Exercise name="Wyciskanie sztangi na ławce płaskiej"
                          equipment="sztanga"
                          primaryMuscle="Klatka piersiowa"
                          supportedMuscles={[]}
                          url="https://www.youtube.com/embed/4Y2ZdHCOXok?si=TB1fXOKx_oy2TZXM"
                />
            </main>
        </section>
    </div>;
}

export default CwiczeniaList;