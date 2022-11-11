import React from "react"; 
import ExperienceCard from "./ExperienceCard";

function ExperienceBox ({experiences}) {

    return (
        <div id="Experience-box" className="Experience-box container">
            <ExperienceCard experiences={experiences} />
        </div>
    )
}

export default ExperienceBox;