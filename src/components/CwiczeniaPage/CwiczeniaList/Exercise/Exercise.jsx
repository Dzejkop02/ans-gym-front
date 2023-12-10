import React from "react";

const Exercise = ({id, name, equipment, primaryMuscle, supportedMuscles, url}) => {

    return <div id={id} className="exercise">
        <p className="exercise__name">{name}</p>
        <div className="exercise__details-box">
            <iframe className="exercise__video" width="400" height="300" src={url}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen/>
            <div className="exercise__details">
                <p className="exercise__details-text exercise__details-text--red">Ekwipunek:</p>
                <p className="exercise__details-text exercise__details-text--white">{equipment}</p>

                <p className="exercise__details-text exercise__details-text--red">Główna grupa mięśniowa::</p>
                <p className="exercise__details-text exercise__details-text--white">{primaryMuscle}</p>

                {supportedMuscles && <>
                    <p className="exercise__details-text exercise__details-text--red">Dodatkowa grupa mięśniowa:</p>
                    <p className="exercise__details-text exercise__details-text--white">{supportedMuscles.join(', ')}</p>
                </>}
            </div>
        </div>
    </div>;
}

export default Exercise;