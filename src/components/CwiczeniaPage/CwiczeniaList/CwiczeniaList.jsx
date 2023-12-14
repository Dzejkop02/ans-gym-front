import React, {useEffect, useState} from "react";
import Exercise from "./Exercise/Exercise";
import './CwiczeniaList.css';

const CwiczeniaList = () => {
    const [selected, setSelected] = useState(null);
    const [muscles, setMuscles] = useState(null);
    const [exercises, setExercises] = useState('barki');

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/');
            const data = await res.json();

            setMuscles(data.musclesList)
            setExercises(data.exercisesList)
        })();
    }, []);

    useEffect(() => {
        (async () => {
            setExercises(null);

            const res = selected
                ? await fetch(`http://localhost:3001/exercise?muscleId=${selected.id}`)
                : await fetch(`http://localhost:3001/exercise`);
            const data = await res.json();

            setExercises(data.exercisesList);
        })();
    }, [selected]);

    const selectMuscleGroup = obj => {
        if (selected?.id === obj.id) {
            setSelected(null);
        } else {
            setSelected(obj)
        }

        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        })
    }

    if (!muscles || !exercises) {
        return <div className="cwiczenia-list-wrapper"/>
    }

    return <div className="cwiczenia-list-wrapper">
        <section className="cwiczenia-list">
            <nav className="cwiczenia-list__nav">
                <ul className="cwiczenia-list__ul">
                    {
                        muscles.map(muscle => (
                            <li key={muscle.id}
                                className={muscle.id === selected?.id ? "cwiczenia-list__li cwiczenia-list__li--active" : "cwiczenia-list__li"}
                                onClick={() => selectMuscleGroup(muscle)}>
                                <p>Ćwiczenia</p>
                                <p>na {muscle.name}</p>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <main className="cwiczenia-list__content">
                {
                    selected
                        ? <h2 className="cwiczenia-list__heading">Ćwiczenia <span>na {selected.name}</span></h2>
                        : <h2 className="cwiczenia-list__heading"><span>Wszystkie</span> Ćwiczenia</h2>
                }

                {
                    exercises.map(exercise => (
                        <Exercise key={exercise.id}
                                  name={exercise.name}
                                  equipment={exercise.equipment}
                                  primaryMuscle={exercise.primaryMuscle}
                                  supportedMuscles={exercise.supportedMuscles}
                                  url={exercise.ytUrl}
                        />
                    ))
                }
            </main>
        </section>
    </div>;
}

export default CwiczeniaList;