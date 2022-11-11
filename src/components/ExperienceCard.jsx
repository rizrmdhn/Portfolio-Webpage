import React from "react";
import ExperienceItemList from "./ExperienceItemList";

function ExperienceCard ({experiences, title, desc, year, month, onScroll }) {

    return (
        <div className="Experience-card">
            <ExperienceItemList experiences={experiences} title={title} desc={desc} year={year} month={month} />
        </div>
    )
}

export default ExperienceCard;