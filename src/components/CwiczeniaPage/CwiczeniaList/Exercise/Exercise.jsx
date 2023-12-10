import React from "react";
import './Exercise.css';

const Exercise = ({name, equipment, primaryMuscle, supportedMuscles, url}) => {

    return <div className="exercise-wrapper">
        <div className="exercise">
            <p className="exercise__name">{name}</p>
            <div className="exercise__details-box">
                <iframe className="exercise__video"  src={url}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen/>
                <div className="exercise__details">
                    <p className="exercise__details-text exercise__details-text--red">Ekwipunek:</p>
                    <p className="exercise__details-text exercise__details-text--white">{equipment}</p>

                    <p className="exercise__details-text exercise__details-text--red">Główna grupa mięśniowa:</p>
                    <p className="exercise__details-text exercise__details-text--white">{primaryMuscle}</p>

                    {supportedMuscles.length !== 0 && <>
                        <p className="exercise__details-text exercise__details-text--red">Dodatkowa grupa mięśniowa:</p>
                        <p className="exercise__details-text exercise__details-text--white">{supportedMuscles.join(', ')}</p>
                    </>}
                </div>
            </div>
        </div>
    </div>;
}

export default Exercise;